"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { Button } from "@/commons/components/button";
import { Input } from "@/commons/components/input";

export function AuthSignup() {
  return (
    <div className={styles.container}>
      <div className={styles.signupArea}>
        <div className={styles.signupContent}>
          <h1 className={styles.signupTitle}>회원가입</h1>
          <div className={styles.formWrapper}>
            <p className={styles.signupSubtitle}>
              회원가입을 위해 아래 빈칸을 모두 채워 주세요.
            </p>
            <div className={styles.formArea}>
              <div className={styles.inputGroup}>
                <Input
                  status="enabled"
                  size="s"
                  filled="off"
                  label="이메일"
                  required
                  placeholder="이메일을 입력해 주세요."
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <Input
                  status="enabled"
                  size="s"
                  filled="off"
                  label="이름"
                  required
                  placeholder="이름을 입력해 주세요."
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <Input
                  status="enabled"
                  size="s"
                  filled="off"
                  label="비밀번호"
                  required
                  placeholder="비밀번호를 입력해 주세요."
                  className={styles.input}
                />
              </div>
              <div className={styles.inputGroup}>
                <Input
                  status="enabled"
                  size="s"
                  filled="off"
                  label="비밀번호 확인"
                  required
                  placeholder="비밀번호를 한번 더 입력해 주세요."
                  className={styles.input}
                />
              </div>
              <Button
                hiraki="primary"
                size="m"
                position="enabled"
                className={styles.signupButton}>
                회원가입
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageArea}>
        <Image
          src="/images/loginimage.png"
          alt="Signup Background"
          width={1520}
          height={1080}
          priority
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
}
