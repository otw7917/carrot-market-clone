# NextJS & Carrot Market Clone

keyword

- Static generation and server-side rendering

## NextJs

##### 📂 pages

- 폴더 안 파일이름에 맞추어 url 맵핑
- 다이나믹 라우팅의 경우
  `pages/posts/[id].ts` => `posts/1`, `posts/2`에 접근 가능

#### Pre-rendering

- Next는 모든 페이지를 pre-rendering
  => better performance, SEO

#### Static Generation & Server-side Rendering

- Static Generation : **build time** HTML 생성
- Server-side Rendering : **request** 시 HTML 생성

## tailwindcss

`yarn add -D tailwindcss postcss autoprefixer` 🚀
`yarn tailwindcss init -p`

```css
// <input tpye = number /> 화살표 지우기

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```

postcss.config.js
tailwind.config.js

Rule
branch git-flow
feature
develop
release
hotfix
main

commit
feat: ✨
docs: 📚
dependency

## HTML

### 라벨 인풋 조합

- 관련 label 클릭시 해당 input 포커스 맞춰줌!

```html
<label htmlFor="`${_id}`"></label> <input id="`${_id}`" type="number" />
```

[mozilla label, input](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label)

## Prisma & planetScale

[Prisma, planetScale 정리하기](./document/pp.md)

## typescript

import, export type
=> 타입 표기와 선언에 사용될 선언만 import
=> 런타임시 제거됌
