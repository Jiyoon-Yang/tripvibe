"use client";

import React from "react";
import { Button } from "../button";
import { Dropdown, DropdownOption } from "../dropdown";
import { useModal } from "../../providers/modal/modal.provider";
import styles from "./styles.module.css";

export interface ModalProps {
  /** 모달의 variant */
  variant?: "info" | "danger";
  /** 모달의 actions 타입 */
  actions?: "single" | "dual" | "cash";
  /** 모달의 테마 */
  theme?: "light" | "dark";
  /** 모달 타이틀 */
  title: string;
  /** 모달 설명 */
  description?: string;
  /** single action일 때의 버튼 텍스트 */
  singleActionLabel?: string;
  /** single action일 때의 버튼 클릭 핸들러 */
  onSingleAction?: () => void;
  /** dual/cash action일 때의 취소 버튼 텍스트 */
  cancelLabel?: string;
  /** dual/cash action일 때의 취소 버튼 클릭 핸들러 */
  onCancel?: () => void;
  /** dual action일 때의 구매/확인 버튼 텍스트 */
  confirmLabel?: string;
  /** dual action일 때의 구매/확인 버튼 클릭 핸들러 */
  onConfirm?: () => void;
  /** cash action일 때의 충전 버튼 텍스트 */
  chargeLabel?: string;
  /** cash action일 때의 충전 버튼 클릭 핸들러 */
  onCharge?: () => void;
  /** cash action일 때의 드롭다운 옵션 */
  dropdownOptions?: DropdownOption[];
  /** cash action일 때의 드롭다운 값 */
  dropdownValue?: string;
  /** cash action일 때의 드롭다운 변경 핸들러 */
  onDropdownChange?: (value: string) => void;
  /** cash action일 때의 드롭다운 placeholder */
  dropdownPlaceholder?: string;
}

/**
 * Modal Component
 *
 * 다양한 variant와 actions를 지원하는 모달 컴포넌트
 * - variant: info, danger
 * - actions: single, dual, cash
 * - theme: light, dark
 */
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      variant = "info",
      actions = "single",
      theme = "light",
      title,
      description,
      singleActionLabel = "확인",
      onSingleAction,
      cancelLabel = "취소",
      onCancel,
      confirmLabel = "구매",
      onConfirm,
      chargeLabel = "충전하기",
      onCharge,
      dropdownOptions = [],
      dropdownValue,
      onDropdownChange,
      dropdownPlaceholder = "내용입력",
    },
    ref
  ) => {
    const { closeModal } = useModal();

    const handleSingleAction = () => {
      onSingleAction?.();
      closeModal();
    };

    const handleCancel = () => {
      onCancel?.();
      closeModal();
    };

    const handleConfirm = () => {
      onConfirm?.();
      closeModal();
    };

    const handleCharge = () => {
      onCharge?.();
      closeModal();
    };

    return (
      <div
        ref={ref}
        className={[
          styles.modal,
          styles[`variant-${variant}`],
          styles[`theme-${theme}`],
        ].join(" ")}>
        {/* Content Area */}
        <div className={styles.content}>
          {/* Title */}
          <h2 className={styles.title}>{title}</h2>

          {/* Description */}
          {description && <p className={styles.description}>{description}</p>}

          {/* Dropdown (for cash action) */}
          {actions === "cash" && (
            <div className={styles.dropdownWrapper}>
              <div className={styles.dropdownInner}>
                <Dropdown
                  options={dropdownOptions}
                  value={dropdownValue}
                  onChange={onDropdownChange}
                  placeholder={dropdownPlaceholder}
                />
              </div>
            </div>
          )}
        </div>

        {/* Actions Area */}
        <div className={styles.actions}>
          {actions === "single" && (
            <Button
              hiraki="primary"
              size="s"
              className={styles.actionButton}
              onClick={handleSingleAction}>
              {singleActionLabel}
            </Button>
          )}

          {(actions === "dual" || actions === "cash") && (
            <>
              <Button
                hiraki="tertiary"
                size="s"
                className={styles.actionButton}
                onClick={handleCancel}>
                {cancelLabel}
              </Button>
              <Button
                hiraki="primary"
                size="s"
                className={styles.actionButton}
                onClick={actions === "cash" ? handleCharge : handleConfirm}>
                {actions === "cash" ? chargeLabel : confirmLabel}
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
