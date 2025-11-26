## 목적

이 파일은 이 레포지토리에서 자동 코딩 에이전트가 빠르게 생산적으로 작업하기 위한 핵심 안내입니다. 이 프로젝트는 정적 랜딩 페이지(HTML/CSS(+선택적 Tailwind))이며, 아래의 구조·컨벤션·워크플로우를 참고하면 코드 변경과 검증이 수월합니다.

## 한 문장 요약

정적 모바일 우선 랜딩 페이지: 루트의 `index.html`과 `styles.css`가 주된 진입점이며, 추가 예제는 `landing-project/Landing.html`과 `landing-project/Landing style.css`에 있습니다. 이미지는 `images/` 폴더에 보관됩니다.

## 파일/디렉터리 핵심

- `index.html` — 최종 퍼블릭 HTML(루트). 변경 후 브라우저에서 바로 확인.
- `styles.css` — 프로젝트의 주된 CSS. 모바일 우선 규칙과 CSS 변수(:root)를 사용한 스타일링이 중심.
- `images/` — 모든 이미지 리소스(logo_h.png, box-cat.png, img_1.jpg 등).
- `landing-project/Landing.html` 및 `landing-project/Landing style.css` — 실습용/예시 구현이 들어 있음.
- `landing-project/tailwind.config.js` — Tailwind 설정 파일이 존재하지만 현재 빈 파일(즉, Tailwind가 자동으로 빌드 파이프라인에 연결되어 있지 않음).

## 아키텍처(작동 방식)

- 정적 사이트: 서버 사이드 로직이나 패키지 매니저에 의존하지 않음(레포에 `package.json` 없음). 기본 개발 흐름은 파일 편집 → 브라우저 리로드.
- 스타일은 모바일 우선(모바일 기본 스타일 + `@media (min-width: 768px)` 또는 `@media (max-width: 768px)`로 데스크톱 처리).
- 레이아웃 패턴: Flexbox와 CSS Grid 혼합 사용(`.hero`, `.intro-inner`, `.gallery-cards`).
- 인터랙션: 소량의 DOM 제어(모달, 모바일 네비 토글)를 JavaScript로 처리. README에 제시된 예시에서 `subscribe-btn`, `my-modal`, `.modal-close-btn` 같은 id/class가 사용됩니다.

## 프로젝트에서 자주 쓰이는 패턴(에이전트가 참고할 것)

- 모바일/데스크톱 표시 전환: `.pc-only` / `.mobile-only` 클래스를 CSS에서 전환.
- 모바일 내비: 요소 `.mobile-nav`에 `.show` 클래스를 더하면 슬라이드 인(오른쪽으로 이동).
- 모달 표시: `.modal`에 `.show`를 토글하거나 `display: none` / `display: flex`를 제어.
- 구독 섹션 배경: `::after` 가상요소로 `images/up-cat.png`를 배치하고 `z-index: -1`로 뒤로 보냄.
- 이미지 스타일: 카드/갤러리 이미지는 `border-radius`와 `box-shadow`로 처리 (`--shadow-md` 등 변수 사용 권장).

## 빌드/실행/검증 워크플로우

1. 로컬에서 코드를 편집한다 (VS Code 권장).
2. 브라우저에서 `index.html` 혹은 `landing-project/Landing.html`을 열어 변경을 확인한다.
3. 자동화된 빌드 스크립트가 없음: Tailwind를 사용하려면 별도 `package.json`과 빌드 도구(예: tailwindcss CLI, PostCSS)를 추가해야 함(현재 레포에는 `package.json` 없음).

## 주의할 점 / 결정 근거(레포에서 관찰한 것)

- Tailwind 관련 파일은 있으나(빈 `tailwind.config.js`) 자동 빌드가 구성되어 있지 않음 — Tailwind 스타일을 사용하려면 개발자가 빌드 환경을 추가해야 함.
- README 및 CSS 예시에서 모바일 우선 접근, CSS 변수, Flexbox/그리드 패턴이 명확히 사용되고 있음 — 변경 시 이 방식 유지.
- 이미지 경로는 상대 경로(`images/...`) 사용 — 파일 이동 시 경로 고침 필요.

## 변경 제안(신규 기능을 구현할 때 유의)

- 새로운 자바스크립트 파일을 추가할 때는 간단한 네임스페이스(예: `modal.js` 또는 `ui/navigation.js`)로 분리하고 HTML에서 `<script>`로 포함.
- Tailwind를 도입하려면 별도의 이슈를 만들고, `package.json`과 `build`/`dev` 스크립트를 추가하도록 안내.

## 빠른 예시 참조(에이전트용)

- 모달 토글: README의 예시를 따르세요 — `subscribe-btn` 클릭 → `my-modal`에서 `.hidden` 제거/추가.
- 모바일 네비: `.mobile-nav.show` 클래스를 토글하면 메뉴가 오픈됩니다(현재 CSS에 `right: 0`으로 이동).

## 질문이 있을 때 요청할 추가 정보

1. 실제 배포 방식(단순 정적 파일 호스팅인지, CI가 있는지)
2. Tailwind 사용 의도(단순 설정 파일만 있는지, 실제 사용 계획인지)
3. 추가적인 자바스크립트/테스트 규약(파일명 규칙, lint 설정 여부)

---

위 내용을 바탕으로 `.github/copilot-instructions.md`를 작성했습니다. 명확하지 않거나 더 포함하면 좋을 정보가 있으면 알려 주세요 — 예: 배포 절차, 선호하는 폴더 구조 변경, 또는 Tailwind 도입 계획 등.
