"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { Button } from "@/commons/components/button";
import { Input } from "@/commons/components/input";

export function AuthSignin() {
  return (
    <div className={styles.container}>
      <div className={styles.loginArea}>
        <div className={styles.loginContent}>
          <div className={styles.logoArea}>
            <Image
              src="/images/logo-s.svg"
              alt="Logo"
              width={120}
              height={80}
              priority
              className={styles.logo}
            />
          </div>
          <h1 className={styles.welcomeTitle}>트립트립에 오신걸 환영합니다.</h1>
          <p className={styles.loginSubtitle}>트립트립에 로그인 하세요.</p>

          <div className={styles.formArea}>
            <div className={styles.inputGroup}>
              <Input
                status="enabled"
                size="s"
                filled="off"
                placeholder="이메일을 입력해 주세요."
                className={styles.input}
              />
            </div>
            <div className={styles.inputGroup}>
              <Input
                status="enabled"
                size="s"
                filled="off"
                placeholder="비밀번호를 입력해 주세요."
                className={styles.input}
              />
            </div>
            <Button
              hiraki="primary"
              size="m"
              position="enabled"
              className={styles.loginButton}>
              로그인
            </Button>
            <button className={styles.signupLink}>회원가입</button>
          </div>
        </div>
      </div>
      <div className={styles.imageArea}>
        <Image
          src="/images/loginimage.png"
          alt="Login Background"
          width={1520}
          height={1080}
          priority
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
}
