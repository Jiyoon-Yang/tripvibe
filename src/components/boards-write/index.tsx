"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/commons/components/input";
import { Button } from "@/commons/components/button";
import styles from "./styles.module.css";

const BoardsWrite: React.FC = () => {
  const [formData, setFormData] = useState({
    author: "",
    password: "",
    title: "",
    content: "",
    zipCode: "",
    address: "",
    detailAddress: "",
    youtubeLink: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleZipCodeSearch = () => {
    // 우편번호 검색 로직
    console.log("우편번호 검색");
  };

  const handleCancel = () => {
    // 취소 로직
    console.log("취소");
  };

  const handleSubmit = () => {
    // 등록 로직
    console.log("등록하기", formData);
  };

  // 모든 필수 필드가 입력되었는지 확인
  const isFormValid =
    formData.author &&
    formData.password &&
    formData.title &&
    formData.content &&
    formData.address &&
    formData.youtubeLink;

  return (
    <div className={styles.container}>
      {/* {gap}: 1280 * 40 */}

      {/* 게시물등록: 1280 * 28 */}
      <div className={styles.headerArea}>
        <h1 className={styles.headerTitle}>게시물 등록</h1>
      </div>

      {/* {gap}: 1280 * 40 */}
      <div className={styles.gap40} />

      {/* input-area: 1280 * 1352 */}
      <div className={styles.inputArea}>
        {/* 작성자 & 비밀번호 */}
        <div className={styles.rowInputs}>
          <Input
            label="작성자"
            required
            size="m"
            status="enabled"
            placeholder="작성자 명을 입력해 주세요."
            value={formData.author}
            onChange={(e) => handleInputChange("author", e.target.value)}
            className={styles.halfInput}
          />
          <Input
            label="비밀번호"
            required
            size="m"
            status="enabled"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className={styles.halfInput}
          />
        </div>

        {/* 구분선 */}
        <div className={styles.divider} />

        {/* 제목 */}
        <Input
          label="제목"
          required
          size="m"
          status="enabled"
          placeholder="제목을 입력해 주세요."
          value={formData.title}
          onChange={(e) => handleInputChange("title", e.target.value)}
          className={styles.fullInput}
        />

        {/* 구분선 */}
        <div className={styles.divider} />

        {/* 내용 */}
        <div className={styles.contentSection}>
          <div className={styles.contentLabel}>
            <span className={styles.labelText}>내용</span>
            <span className={styles.required}>*</span>
          </div>
          <textarea
            className={styles.contentTextarea}
            placeholder="내용을 입력해 주세요."
            value={formData.content}
            onChange={(e) => handleInputChange("content", e.target.value)}
          />
        </div>

        {/* 주소 */}
        <div className={styles.addressSection}>
          <div className={styles.zipCodeWrapper}>
            <div className={styles.zipCodeLabel}>
              <span className={styles.zipCodeLabelText}>주소</span>
              <span className={styles.zipCodeRequired}>*</span>
            </div>
            <div className={styles.zipCodeInputContainer}>
              <div className={styles.zipCodeInputField}>
                <input
                  className={styles.zipCodeInput}
                  placeholder="01234"
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                />
              </div>
              <Button
                hiraki="tertiary"
                size="m"
                position="enabled"
                onClick={handleZipCodeSearch}
                className={styles.zipCodeButton}>
                우편번호 검색
              </Button>
            </div>
          </div>
          <Input
            size="m"
            status="enabled"
            placeholder="주소를 입력해 주세요,"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className={styles.fullInput}
          />
          <Input
            size="m"
            status="enabled"
            placeholder="상세주소"
            value={formData.detailAddress}
            onChange={(e) => handleInputChange("detailAddress", e.target.value)}
            className={styles.fullInput}
          />
        </div>

        {/* 구분선 */}
        <div className={styles.divider} />

        {/* 유튜브 링크 */}
        <Input
          label="유튜브 링크"
          required
          size="m"
          status="enabled"
          placeholder="링크를 입력해 주세요."
          value={formData.youtubeLink}
          onChange={(e) => handleInputChange("youtubeLink", e.target.value)}
          className={styles.fullInput}
        />

        {/* 구분선 */}
        <div className={styles.divider} />

        {/* 사진 첨부 */}
        <div className={styles.photoSection}>
          <div className={styles.photoLabel}>
            <span className={styles.labelText}>사진 첨부</span>
            <span className={styles.required}>*</span>
          </div>
          <div className={styles.photoUploadArea}>
            <div className={styles.uploadBox}>
              <Image
                src="/icons/add.svg"
                alt="add"
                width={40}
                height={40}
                className={styles.addIcon}
              />
              <p className={styles.uploadText}>클릭해서 사진 업로드</p>
            </div>
            <div className={styles.uploadBox}>
              <Image
                src="/icons/add.svg"
                alt="add"
                width={40}
                height={40}
                className={styles.addIcon}
              />
              <p className={styles.uploadText}>클릭해서 사진 업로드</p>
            </div>
            <div className={styles.uploadBox}>
              <Image
                src="/icons/add.svg"
                alt="add"
                width={40}
                height={40}
                className={styles.addIcon}
              />
              <p className={styles.uploadText}>클릭해서 사진 업로드</p>
            </div>
          </div>
        </div>
      </div>

      {/* {gap}: 1280 * 40 */}
      <div className={styles.gap40} />

      {/* button: 1280 * 48 */}
      <div className={styles.actionArea}>
        <Button
          hiraki="tertiary"
          size="m"
          position="enabled"
          onClick={handleCancel}
          className={styles.cancelButton}>
          취소
        </Button>
        <Button
          hiraki="primary"
          size="m"
          position={isFormValid ? "enabled" : "disabled"}
          onClick={handleSubmit}
          className={styles.submitButton}>
          등록하기
        </Button>
      </div>
      <div className={styles.gap40} />
    </div>
  );
};

export default BoardsWrite;
