# 똑똑(TtokTtok) 디자인 시스템

TypeScript와 Vanilla Extract를 사용한 타입 안전한 React 컴포넌트 라이브러리입니다.

## 📦 설치

```bash
npm install ttockttock-design-system
# 또는
yarn add ttockttock-design-system
```

## 🚀 사용 방법

### 기본 설정

앱의 진입점 또는 루트 레이아웃에서 스타일을 **한 번만** import 하세요:

```tsx
// app/layout.tsx (Next.js App Router)
import 'ttockttock-design-system/styles';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// pages/_app.tsx (Next.js Pages Router)
import 'ttockttock-design-system/styles';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### 컴포넌트 사용하기

```tsx
import { Button, Input, Checkbox, Tag } from 'ttockttock-design-system';

function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="medium">
        클릭하세요
      </Button>
      <Input placeholder="텍스트 입력..." />
      <Checkbox label="약관 동의" />
      <Tag>새로운</Tag>
    </div>
  );
}
```

### 디자인 토큰 사용하기

색상, 타이포그래피 등의 디자인 토큰을 직접 사용할 수 있습니다:

```tsx
import { vars } from 'ttockttock-design-system';
import { style } from '@vanilla-extract/css';

const customStyle = style({
  color: vars.colors.primary.default,
  fontSize: vars.typography.body.medium.fontSize,
  backgroundColor: vars.colors.surface.default,
});
```

## 📚 컴포넌트

### Button (버튼)

다양한 variant와 크기를 지원하는 버튼 컴포넌트

- **variant**: `primary`, `secondary`, `tertiary`, `quaternary`
- **size**: `small`, `medium`, `large`

### Input (입력 필드)

여러 상태를 지원하는 텍스트 입력 컴포넌트

- placeholder, disabled 등 다양한 상태 지원

### Checkbox (체크박스)

라벨을 포함한 체크박스 컴포넌트

- 커스터마이징 가능한 라벨 지원

### Tag (태그)

라벨/뱃지 형태의 태그 컴포넌트

- 다양한 컬러 variant 지원

### SearchBar (검색바)

아이콘이 포함된 검색 입력 컴포넌트

- 내장된 검색 아이콘

### DropdownButton (드롭다운 버튼)

드롭다운 기능이 있는 버튼 컴포넌트

- 확장 가능한 메뉴 구조

## 🎨 스타일링

이 라이브러리는 **Vanilla Extract**를 사용하여 타입 안전한 CSS-in-TypeScript 스타일링을 제공합니다.

### 특징

- ✅ **Zero-runtime CSS**: 빌드 타임에 정적 CSS로 변환
- ✅ **타입 안전성**: TypeScript로 완벽한 타입 체크
- ✅ **성능 최적화**: CSS 파일 분리로 브라우저 캐싱 최적화
- ✅ **디자인 토큰**: `vars`를 통한 일관된 디자인 시스템

## 🎨 디자인 토큰

```tsx
import { vars } from 'ttockttock-design-system';

// 색상
vars.colors.primary.default;
vars.colors.secondary.container;
vars.colors.surface.bright;

// 타이포그래피
vars.typography.heading.large;
vars.typography.body.medium;
vars.typography.label.small;
```

## 📖 Storybook

컴포넌트 문서와 예제를 확인하세요:

```bash
yarn storybook
```

## 🛠️ 개발

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 라이브러리 빌드
yarn build

# Storybook 실행
yarn storybook

# 테스트 실행
yarn test
```

## 🏗️ 기술 스택

- **React** 19+
- **TypeScript** 5+
- **Vanilla Extract** - 타입 안전한 CSS
- **Vite** - 빌드 도구
- **Storybook** - 컴포넌트 문서화

## 📦 번들 정보

- **ES Modules**: Next.js, Vite 등 모던 번들러 지원
- **CommonJS**: 레거시 환경 지원
- **TypeScript**: 완벽한 타입 정의 포함
- **CSS**: 별도 파일로 최적화된 캐싱

## 📄 라이선스

MIT © SMU-TtokTtok

## 🔗 링크

- [GitHub Repository](https://github.com/SMU-TtokTtok/ttockttock-design-system)
- [npm Package](https://www.npmjs.com/package/ttockttock-design-system)

## 🤝 기여하기

이슈와 PR은 언제나 환영합니다!

1. 이 저장소를 Fork 하세요
2. Feature 브랜치를 생성하세요 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋하세요 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 Push 하세요 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성하세요
