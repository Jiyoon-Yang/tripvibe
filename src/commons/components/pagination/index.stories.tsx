import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Pagination } from "./index";

/**
 * Pagination Component Stories
 *
 * 페이지네이션 UI 컴포넌트의 Storybook 문서
 * - 2가지 size (s, m)
 * - 다양한 페이지 상태 (1개, 2개, 3개 이상)
 * - 화살표 버튼 활성화 상태별 variant
 */
const meta = {
  title: "Commons/Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "페이지네이션 UI 컴포넌트입니다. Figma 디자인을 기반으로 다양한 variant를 지원하며, s와 m 두 가지 크기로 제공됩니다. 페이지 수에 따라 자동으로 적절한 UI를 표시합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: {
      control: { type: "number", min: 1, max: 20 },
      description: "현재 페이지 번호 (1부터 시작)",
      table: {
        type: { summary: "number" },
      },
    },
    totalPages: {
      control: { type: "number", min: 1, max: 20 },
      description: "전체 페이지 수",
      table: {
        type: { summary: "number" },
      },
    },
    onPageChange: {
      description: "페이지 변경 이벤트 핸들러",
      action: "page changed",
      table: {
        type: { summary: "(page: number) => void" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m"],
      description: "컴포넌트 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    visiblePages: {
      control: { type: "number", min: 3, max: 10 },
      description: "한 번에 보여줄 페이지 번호 개수",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
    },
    className: {
      control: "text",
      description: "추가 클래스명",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Size 별 기본 스토리
// ============================================

export const Small: Story = {
  args: {
    size: "s",
    currentPage: 3,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const Medium: Story = {
  args: {
    size: "m",
    currentPage: 3,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

// ============================================
// 페이지 수별 스토리
// ============================================

export const SinglePage: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 1,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const TwoPages: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 2,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const ThreePages: Story = {
  args: {
    size: "m",
    currentPage: 2,
    totalPages: 3,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const FivePages: Story = {
  args: {
    size: "m",
    currentPage: 3,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const TenPages: Story = {
  args: {
    size: "m",
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const TwentyPages: Story = {
  args: {
    size: "m",
    currentPage: 10,
    totalPages: 20,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

// ============================================
// 현재 페이지 위치별 스토리
// ============================================

export const FirstPage: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const MiddlePage: Story = {
  args: {
    size: "m",
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const LastPage: Story = {
  args: {
    size: "m",
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

// ============================================
// VisiblePages 옵션별 스토리
// ============================================

export const VisibleThreePages: Story = {
  args: {
    size: "m",
    currentPage: 5,
    totalPages: 10,
    visiblePages: 3,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const VisibleFivePages: Story = {
  args: {
    size: "m",
    currentPage: 5,
    totalPages: 10,
    visiblePages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const VisibleSevenPages: Story = {
  args: {
    size: "m",
    currentPage: 5,
    totalPages: 10,
    visiblePages: 7,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

// ============================================
// 화살표 상태별 스토리
// ============================================

export const BothArrowsEnabled: Story = {
  args: {
    size: "m",
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const OnlyLeftArrowEnabled: Story = {
  args: {
    size: "m",
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const OnlyRightArrowEnabled: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

export const NoArrowsWithTwoPages: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 2,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
};

// ============================================
// 인터랙티브 예제
// ============================================

export const Interactive: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 10,
    visiblePages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: function InteractivePagination(args) {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);

    React.useEffect(() => {
      setCurrentPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}>
        <div
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            minWidth: "200px",
            textAlign: "center",
          }}>
          <div style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            현재 페이지
          </div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {currentPage} / {args.totalPages}
          </div>
        </div>
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    );
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size}>
          <h3
            style={{
              marginBottom: "24px",
              textTransform: "capitalize",
              fontSize: "18px",
              fontWeight: "bold",
            }}>
            Size: {size}
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* 페이지 1개 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                1 페이지:
              </span>
              <Pagination
                size={size}
                currentPage={1}
                totalPages={1}
                onPageChange={() => {}}
              />
            </div>

            {/* 페이지 2개 - 첫번째 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                2 페이지 (1/2):
              </span>
              <Pagination
                size={size}
                currentPage={1}
                totalPages={2}
                onPageChange={() => {}}
              />
            </div>

            {/* 페이지 2개 - 두번째 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                2 페이지 (2/2):
              </span>
              <Pagination
                size={size}
                currentPage={2}
                totalPages={2}
                onPageChange={() => {}}
              />
            </div>

            {/* 페이지 10개 - 첫번째 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                10 페이지 (1/10):
              </span>
              <Pagination
                size={size}
                currentPage={1}
                totalPages={10}
                onPageChange={() => {}}
              />
            </div>

            {/* 페이지 10개 - 중간 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                10 페이지 (5/10):
              </span>
              <Pagination
                size={size}
                currentPage={5}
                totalPages={10}
                onPageChange={() => {}}
              />
            </div>

            {/* 페이지 10개 - 마지막 */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                10 페이지 (10/10):
              </span>
              <Pagination
                size={size}
                currentPage={10}
                totalPages={10}
                onPageChange={() => {}}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ============================================
// 실전 사용 예제
// ============================================

export const WithDataList: Story = {
  args: {
    size: "m",
    currentPage: 1,
    totalPages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: function WithDataListExample(args) {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);

    const itemsPerPage = 5;
    const allItems = Array.from(
      { length: args.totalPages * itemsPerPage },
      (_, i) => `아이템 ${i + 1}`
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = allItems.slice(startIndex, endIndex);

    React.useEffect(() => {
      setCurrentPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
          width: "400px",
        }}>
        {/* 데이터 리스트 */}
        <div
          style={{
            width: "100%",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            overflow: "hidden",
          }}>
          {currentItems.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                padding: "16px",
                borderBottom:
                  index < currentItems.length - 1
                    ? "1px solid #e0e0e0"
                    : "none",
                background: index % 2 === 0 ? "#fafafa" : "#fff",
              }}>
              {item}
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />

        {/* 정보 표시 */}
        <div style={{ fontSize: "14px", color: "#666" }}>
          전체 {allItems.length}개 중 {startIndex + 1}-
          {Math.min(endIndex, allItems.length)}번째 표시
        </div>
      </div>
    );
  },
};

// ============================================
// 대용량 페이지 처리
// ============================================

export const LargePageNumbers: Story = {
  args: {
    size: "m",
    currentPage: 50,
    totalPages: 100,
    visiblePages: 5,
    onPageChange: (page) => console.log("Page changed to:", page),
  },
  render: function LargePageExample(args) {
    const [currentPage, setCurrentPage] = React.useState(args.currentPage);

    React.useEffect(() => {
      setCurrentPage(args.currentPage);
    }, [args.currentPage]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}>
        <div style={{ fontSize: "14px", color: "#666" }}>
          대용량 페이지 (100 페이지) 처리 예제
        </div>
        <Pagination
          {...args}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div style={{ fontSize: "12px", color: "#999" }}>
          현재 페이지: {currentPage}
        </div>
      </div>
    );
  },
};
