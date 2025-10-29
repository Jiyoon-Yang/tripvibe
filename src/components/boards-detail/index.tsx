import React from "react";
import Image from "next/image";
import { Button } from "@/commons/components/button";
import styles from "./styles.module.css";

const BoardsDetail = () => {
  return (
    <div className={styles.container}>
      {/* gap */}
      <div className={styles.gap}></div>

      {/* detail-title */}
      <div className={styles.detailTitle}>
        <h1 className={styles.title}>
          살어리 살어리랏다 쳥산(靑山)애 살어리랏다멀위랑 ᄃᆞ래랑 먹고
          쳥산(靑山)애 살어리랏다얄리얄리 얄랑셩 얄라리 얄라
        </h1>
      </div>

      {/* gap */}
      <div className={styles.gap}></div>

      {/* detail-profile */}
      <div className={styles.detailProfile}>
        <div className={styles.profileTop}>
          <div className={styles.profileInfo}>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/images/profile1.png"
                alt="프로필"
                width={24}
                height={24}
                className={styles.profileImage}
              />
            </div>
            <span className={styles.profileName}>홍길동</span>
          </div>
          <div className={styles.profileRight}>
            <span className={styles.profileDate}>2024.11.11</span>
          </div>
        </div>
        <div className={styles.profileDivider}></div>
        <div className={styles.profileBottom}>
          <div className={styles.iconGroup}>
            <Image
              src="/icons/link.svg"
              alt="링크"
              width={24}
              height={24}
              className={styles.icon}
            />
            <Image
              src="/icons/location.svg"
              alt="위치"
              width={24}
              height={24}
              className={styles.icon}
            />
          </div>
        </div>
      </div>

      {/* gap */}
      <div className={styles.gap}></div>

      {/* detail-contents */}
      <div className={styles.detailContents}>
        <div className={styles.contentImage}>
          <Image
            src="/images/Tranquil Beachside Serenity 1.png"
            alt="여행 이미지"
            width={400}
            height={531}
            className={styles.mainImage}
          />
        </div>
        <div className={styles.contentText}>
          <p>
            살겠노라 살겠노라. 청산에 살겠노라.
            <br />
            머루랑 다래를 먹고 청산에 살겠노라.
            <br />
            얄리얄리 얄랑셩 얄라리 얄라
            <br />
            <br />
            우는구나 우는구나 새야. 자고 일어나 우는구나 새야.
            <br />
            너보다 시름 많은 나도 자고 일어나 우노라.
            <br />
            얄리얄리 얄라셩 얄라리 얄라
            <br />
            <br />
            갈던 밭(사래) 갈던 밭 보았느냐. 물 아래(근처) 갈던 밭 보았느냐
            <br />
            이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.
            <br />
            얄리얄리 얄라셩 얄라리 얄라
            <br />
            <br />
            이럭저럭 하여 낮일랑 지내 왔건만
            <br />
            올 이도 갈 이도 없는 밤일랑 또 어찌 할 것인가.
            <br />
            얄리얄리 얄라셩 얄라리 얄라
            <br />
            <br />
            어디다 던지는 돌인가 누구를 맞히려던 돌인가.
            <br />
            미워할 이도 사랑할 이도 없이 맞아서 우노라.
            <br />
            얄리얄리 얄라셩 얄라리 얄라
            <br />
            <br />
            살겠노라 살겠노라. 바다에 살겠노라.
            <br />
            나문재, 굴, 조개를 먹고 바다에 살겠노라.
            <br />
            얄리얄리 얄라셩 얄라리 얄라
            <br />
            <br />
            가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라.
            <br />
            사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라.
            <br />
            얄리얄리 얄라셩 얄라리 얄라
            <br />
            <br />
            가다 보니 배불룩한 술독에 독한 술을 빚는구나.
            <br />
            조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.[1]
            <br />
            얄리얄리 얄라셩 얄라리 얄라
          </p>
        </div>
      </div>

      {/* gap */}
      <div className={styles.gap}></div>

      {/* detail-youtube */}
      <div className={styles.detailYoutube}>
        <div className={styles.youtubeWrapper}>
          <div className={styles.playButton}>
            <div className={styles.playIcon}></div>
          </div>
        </div>
      </div>

      {/* gap */}
      <div className={styles.gap}></div>

      {/* detail-like */}
      <div className={styles.detailLike}>
        <div className={styles.likeArea}>
          <Image
            src="/icons/bad.svg"
            alt="별로에요"
            width={24}
            height={24}
            className={styles.likeIcon}
          />
          <span className={styles.likeCount}>24</span>
        </div>
        <div className={styles.likeArea}>
          <Image
            src="/icons/good.svg"
            alt="좋아요"
            width={24}
            height={24}
            className={styles.likeIcon}
          />
          <span className={styles.likeCountActive}>24</span>
        </div>
      </div>

      {/* gap */}
      <div className={styles.gap}></div>

      {/* detail-button */}
      <div className={styles.detailButton}>
        <Button
          hiraki="tertiary"
          size="s"
          leftIcon={
            <Image
              src="/icons/menublack.svg"
              alt="목록으로"
              width={24}
              height={24}
            />
          }
          className={styles.buttonItem}>
          목록으로
        </Button>
        <Button
          hiraki="tertiary"
          size="s"
          leftIcon={
            <Image
              src="/icons/editblack.svg"
              alt="수정하기"
              width={24}
              height={24}
            />
          }
          className={styles.buttonItem}>
          수정하기
        </Button>
      </div>

      {/* gap - 24px */}
      <div className={styles.gap}></div>

      {/* gap - 40px */}
      <div className={styles.gapLarge}></div>

      {/* retrospect-input */}
      <div className={styles.retrospectInput}></div>

      {/* gap - 40px */}
      <div className={styles.gapLarge}></div>

      {/* retrospect-list */}
      <div className={styles.retrospectList}></div>

      {/* gap - 40px */}
      <div className={styles.gapLarge}></div>
    </div>
  );
};

export default BoardsDetail;
