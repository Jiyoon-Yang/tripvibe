# 공통컴포넌트 Optional Props 재검토 보고서

## 재검토 일자

2025-01-27

## 개요

모든 공통 컴포넌트의 optional props 조건을 재검토하여 일관성과 사용성을 개선합니다.

---

## 재검토 결과 요약

### 1. Button 컴포넌트 (`src/commons/components/button/index.tsx`)

**현재 Optional Props:**

- ✅ `position?: "enabled" | "disabled"` (기본값: "enabled") - 적절함
- ✅ `leftIcon?: React.ReactNode` - 적절함
- ✅ `rightIcon?: React.ReactNode` - 적절함
- ✅ `fullWidth?: boolean` (기본값: false) - 적절함

**검토 의견:**

- 모든 optional props가 적절하게 처리됨
- 기본값이 설정되어 있어 사용성이 좋음

---

### 2. Input 컴포넌트 (`src/commons/components/input/index.tsx`)

**현재 Optional Props:**

- ✅ `status?: ...` (기본값: "enabled") - 적절함
- ✅ `size?: "s" | "m"` (기본값: "m") - 적절함
- ✅ `filled?: "on" | "off"` (기본값: "off") - 적절함
- ✅ `label?: string` - 적절함
- ✅ `required?: boolean` (기본값: false) - 적절함
- ✅ `errorMessage?: string` - 적절함
- ✅ `rightButton?: React.ReactNode` - 적절함

**검토 의견:**

- 모든 optional props가 적절하게 처리됨
- 기본값이 설정되어 있어 사용성이 좋음
- `errorMessage`는 `status === "error"`일 때만 표시되므로 적절함

---

### 3. Modal 컴포넌트 (`src/commons/components/modal/index.tsx`)

**현재 Optional Props:**

- ✅ `variant?: "info" | "danger"` (기본값: "info") - 적절함
- ✅ `actions?: "single" | "dual" | "cash"` (기본값: "single") - 적절함
- ✅ `theme?: "light" | "dark"` (기본값: "light") - 적절함
- ✅ `description?: string` - 적절함
- ✅ `singleActionLabel?: string` (기본값: "확인") - 적절함
- ✅ `onSingleAction?: () => void` - 적절함
- ✅ `cancelLabel?: string` (기본값: "취소") - 적절함
- ✅ `onCancel?: () => void` - 적절함
- ✅ `confirmLabel?: string` (기본값: "구매") - 적절함
- ✅ `onConfirm?: () => void` - 적절함
- ✅ `chargeLabel?: string` (기본값: "충전하기") - 적절함
- ✅ `onCharge?: () => void` - 적절함
- ✅ `dropdownOptions?: DropdownOption[]` (기본값: []) - 적절함
- ✅ `dropdownValue?: string` - 적절함
- ✅ `onDropdownChange?: (value: string) => void` - 적절함
- ✅ `dropdownPlaceholder?: string` (기본값: "내용입력") - 적절함

**검토 의견:**

- 모든 optional props가 적절하게 처리됨
- `actions` 타입에 따라 필요한 props만 사용되므로 적절함
- 다만, `actions === "cash"`일 때 `dropdownOptions`가 비어있으면 사용자가 값을 선택할 수 없음
  - **권장사항**: `actions === "cash"`일 때 `dropdownOptions`가 필수여야 할 수도 있음 (현재는 optional로 유지 가능)

---

### 4. Dropdown 컴포넌트 (`src/commons/components/dropdown/index.tsx`)

**현재 Optional Props:**

- ✅ `filled?: "on" | "off"` - 적절함 (controlled/uncontrolled 지원)
- ✅ `selected?: "on" | "off"` - 적절함 (controlled/uncontrolled 지원)
- ✅ `value?: string` - 적절함 (uncontrolled 모드 지원)
- ✅ `placeholder?: string` (기본값: "내용입력") - 적절함
- ✅ `onChange?: (value: string) => void` - 적절함
- ✅ `className?: string` - 적절함
- ✅ `disabled?: boolean` (기본값: false) - 적절함

**Required Props:**

- ✅ `options: DropdownOption[]` - 필수 (적절함)

**검토 의견:**

- Controlled/Uncontrolled 패턴이 잘 구현됨
- `options`가 필수인 것은 적절함

---

### 5. Datepicker 컴포넌트 (`src/commons/components/datepicker/index.tsx`)

**현재 Optional Props:**

- ✅ `startDate?: Date | null` (기본값: null) - 적절함
- ✅ `endDate?: Date | null` (기본값: null) - 적절함
- ✅ `placeholder?: string` (기본값: "YYYY.MM.DD - YYYY.MM.DD") - 적절함
- ✅ `disabled?: boolean` (기본값: false) - 적절함
- ✅ `className?: string` - 적절함

**Required Props:**

- ✅ `size: "s" | "m"` - 필수 (적절함)

**검토 의견:**

- 모든 optional props가 적절하게 처리됨
- `size`는 필수인 것이 적절함

---

### 6. Tabs 컴포넌트 (`src/commons/components/tabs/index.tsx`)

**현재 Optional Props:**

- ✅ `disabled?: boolean` (기본값: false) - 적절함
- ✅ `onClick?: () => void` - 적절함
- ✅ `className?: string` - 적절함

**Required Props:**

- ✅ `position: "primary-black" | "secondary" | "side" | "primary-white"` - 필수 (적절함)
- ✅ `size: "s" | "m"` - 필수 (적절함)
- ✅ `selected: "on" | "off"` - 필수 (적절함)
- ✅ `children: React.ReactNode` - 필수 (적절함)

**검토 의견:**

- 모든 props가 적절하게 정의됨
- 핵심 variant props는 필수이고, 부가 기능만 optional로 처리됨

---

### 7. Pagination 컴포넌트 (`src/commons/components/pagination/index.tsx`)

**현재 Optional Props:**

- ✅ `size?: "s" | "m"` (기본값: "m") - 적절함
- ✅ `visiblePages?: number` (기본값: 5) - 적절함
- ✅ `className?: string` - 적절함

**Required Props:**

- ✅ `currentPage: number` - 필수 (적절함)
- ✅ `totalPages: number` - 필수 (적절함)
- ✅ `onPageChange: (page: number) => void` - 필수 (적절함)

**검토 의견:**

- 모든 props가 적절하게 정의됨
- 핵심 기능 props는 필수이고, 스타일/설정 props만 optional로 처리됨

---

### 8. Searchbar 컴포넌트 (`src/commons/components/searchbar/index.tsx`)

**현재 Optional Props:**

- ✅ `state?: "default" | "selected" | "filled" | "typing"` (기본값: "default") - 적절함
- ✅ `size?: "s" | "m"` (기본값: "m") - 적절함
- ✅ 모든 `InputHTMLAttributes`의 optional props 상속 - 적절함

**검토 의견:**

- 모든 optional props가 적절하게 처리됨
- 기본값이 설정되어 있어 사용성이 좋음

---

### 9. Radio 컴포넌트 (`src/commons/components/radio/index.tsx`)

**현재 Optional Props:**

- ✅ `state?: "enabled" | "selected"` - 적절함 (checked에 따라 자동 결정)
- ✅ `checked?: boolean` (기본값: false) - 적절함
- ✅ `onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void` - 적절함

**Required Props:**

- ✅ `size: "s" | "m"` - 필수 (적절함)
- ✅ `label: string` - 필수 (적절함)
- ✅ `value: string` - 필수 (적절함)

**검토 의견:**

- `state`는 `checked` 상태에 따라 자동으로 결정되므로 optional로 유지하는 것이 적절함
- 핵심 props는 필수로 처리됨

---

### 10. Tooltip 컴포넌트 (`src/commons/components/tooltip/index.tsx`)

**현재 Optional Props:**

- ✅ `size?: "s" | "m"` (기본값: "m") - 적절함
- ✅ `className?: string` - 적절함

**Required Props:**

- ✅ `children: React.ReactNode` - 필수 (적절함)

**검토 의견:**

- 모든 props가 적절하게 정의됨
- 최소한의 props만 있어 간단하고 사용하기 쉬움

---

### 11. Indicator 컴포넌트 (`src/commons/components/indicator/index.tsx`)

**현재 Optional Props:**

- ✅ `className?: string` - 적절함

**Required Props:**

- ✅ `size: "s" | "m"` - 필수 (적절함)
- ✅ `total: number` - 필수 (적절함)
- ✅ `current: number` - 필수 (적절함)

**검토 의견:**

- 모든 props가 적절하게 정의됨
- 핵심 기능 props는 필수로 처리됨

---

## 전체 검토 결과

### ✅ 일관성 있는 패턴

1. **기본값 설정**: 대부분의 optional props에 적절한 기본값이 설정되어 있음
2. **필수/선택 구분**: 핵심 기능 props는 필수, 부가 기능 props는 optional로 잘 구분됨
3. **TypeScript 타입**: 모든 props가 명확한 타입으로 정의되어 있음

### ⚠️ 개선 제안

1. **Modal 컴포넌트**

   - `actions === "cash"`일 때 `dropdownOptions`가 비어있으면 드롭다운이 의미 없음
   - **제안**: 조건부 타입을 사용하여 `actions === "cash"`일 때 `dropdownOptions`를 필수로 만들거나, 런타임 검증 추가 고려

2. **일관성 개선**
   - 모든 컴포넌트에서 `className`은 optional로 일관되게 처리됨 ✅
   - `disabled` prop은 대부분 optional이고 기본값이 false로 처리됨 ✅

### 📋 체크리스트

- [x] 모든 optional props에 적절한 기본값이 있는가?
- [x] 필수 props와 optional props가 논리적으로 구분되었는가?
- [x] 타입 안전성이 보장되는가?
- [x] Controlled/Uncontrolled 패턴이 적절하게 적용되었는가?
- [x] 컴포넌트 간 일관성이 유지되는가?

---

## 결론

**전체적으로 공통 컴포넌트의 optional props 조건이 잘 설계되어 있습니다.**

- 모든 컴포넌트에서 optional props가 적절하게 정의됨
- 기본값이 설정되어 있어 사용성이 좋음
- TypeScript 타입 안전성이 보장됨
- Controlled/Uncontrolled 패턴이 적절하게 적용됨

**추가 개선 사항**: Modal 컴포넌트의 `cash` 액션 타입에 대한 조건부 타입 고려 (선택사항)

