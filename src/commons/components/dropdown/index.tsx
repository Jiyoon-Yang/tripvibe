"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface DropdownOption {
  /** 옵션 값 */
  value: string;
  /** 옵션 레이블 */
  label: string;
}

export interface DropdownProps {
  /** filled 상태 - 값이 선택되었는지 여부 */
  filled?: "on" | "off";
  /** selected 상태 - 드롭다운이 열려있는지 여부 */
  selected?: "on" | "off";
  /** 선택 가능한 옵션 목록 */
  options: DropdownOption[];
  /** 선택된 값 */
  value?: string;
  /** placeholder 텍스트 */
  placeholder?: string;
  /** 값이 변경될 때 호출되는 콜백 */
  onChange?: (value: string) => void;
  /** 커스텀 className */
  className?: string;
  /** 비활성화 여부 */
  disabled?: boolean;
}

/**
 * Dropdown Component
 *
 * 다양한 variant를 지원하는 드롭다운 컴포넌트
 * - filled: on(값 선택됨), off(값 선택 안 됨)
 * - selected: on(드롭다운 열림), off(드롭다운 닫힘)
 */
export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      filled: controlledFilled,
      selected: controlledSelected,
      options,
      value: controlledValue,
      placeholder = "내용입력",
      onChange,
      className,
      disabled = false,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | undefined>(
      controlledValue
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    // controlled/uncontrolled 상태 관리
    const filled =
      controlledFilled !== undefined
        ? controlledFilled
        : selectedValue
        ? "on"
        : "off";
    const selected =
      controlledSelected !== undefined
        ? controlledSelected
        : isOpen
        ? "on"
        : "off";

    // 외부 클릭 감지
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);

    // value가 변경되면 selectedValue 업데이트
    useEffect(() => {
      if (controlledValue !== undefined) {
        setSelectedValue(controlledValue);
      }
    }, [controlledValue]);

    const handleToggle = () => {
      if (disabled) return;
      setIsOpen(!isOpen);
    };

    const handleOptionClick = (optionValue: string) => {
      setSelectedValue(optionValue);
      setIsOpen(false);
      onChange?.(optionValue);
    };

    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const displayText = selectedOption?.label || placeholder;

    const dropdownClassName = [
      styles.dropdown,
      styles[`filled-${filled}`],
      styles[`selected-${selected}`],
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref || dropdownRef} className={styles.dropdownContainer}>
        <div
          className={dropdownClassName}
          onClick={handleToggle}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={selected === "on"}
          aria-haspopup="listbox"
          aria-disabled={disabled}>
          <div className={styles.frame}>
            <span className={styles.text}>{displayText}</span>
            <div className={styles.icon}>
              <Image
                src={
                  selected === "on"
                    ? "/icons/up_arrow.svg"
                    : "/icons/down_arrow.svg"
                }
                alt={selected === "on" ? "접기" : "펼치기"}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={styles.dropdownList}>
            {options.map((option) => {
              const isSelected = option.value === selectedValue;
              return (
                <div
                  key={option.value}
                  className={`${styles.dropdownListElement} ${
                    isSelected ? styles.elementSelected : ""
                  }`}
                  onClick={() => handleOptionClick(option.value)}
                  role="option"
                  aria-selected={isSelected}>
                  <span className={styles.elementText}>{option.label}</span>
                  {isSelected && (
                    <div className={styles.checkIcon}>
                      <Image
                        src="/icons/check.svg"
                        alt="선택됨"
                        width={16}
                        height={16}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
