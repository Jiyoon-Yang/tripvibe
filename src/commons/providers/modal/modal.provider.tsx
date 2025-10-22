"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  openModal: (content: ReactNode, options?: ModalOptions) => void;
  closeModal: () => void;
  isOpen: boolean;
}

interface ModalOptions {
  onClose?: () => void;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [options, setOptions] = useState<ModalOptions>({
    closeOnBackdropClick: true,
    closeOnEscape: true,
  });

  const openModal = useCallback(
    (content: ReactNode, modalOptions?: ModalOptions) => {
      setModalContent(content);
      setOptions({ ...options, ...modalOptions });
      setIsOpen(true);
    },
    [options]
  );

  const closeModal = useCallback(() => {
    setIsOpen(false);
    if (options.onClose) {
      options.onClose();
    }
    // 애니메이션을 위한 딜레이 후 콘텐츠 클리어
    setTimeout(() => {
      setModalContent(null);
    }, 300);
  }, [options]);

  // ESC 키로 모달 닫기
  React.useEffect(() => {
    if (!isOpen || !options.closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal, options.closeOnEscape]);

  // body 스크롤 방지
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && options.closeOnBackdropClick) {
      closeModal();
    }
  };

  const modalPortal =
    typeof window !== "undefined" && isOpen
      ? createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleBackdropClick}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Modal Content - max-w-md, w-full 제거됨 */}
            <div
              className={`relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition-all duration-300 ${
                isOpen ? "scale-100" : "scale-95"
              }`}>
              {modalContent}
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      {modalPortal}
    </ModalContext.Provider>
  );
};
