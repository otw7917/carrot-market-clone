# NextJS & Carrot Market Clone

keyword

- Static generation and server-side rendering

## NextJs

##### ๐ pages

- ํด๋ ์ ํ์ผ์ด๋ฆ์ ๋ง์ถ์ด url ๋งตํ
- ๋ค์ด๋๋ฏน ๋ผ์ฐํ์ ๊ฒฝ์ฐ
  `pages/posts/[id].ts` => `posts/1`, `posts/2`์ ์ ๊ทผ ๊ฐ๋ฅ

#### Pre-rendering

- Next๋ ๋ชจ๋  ํ์ด์ง๋ฅผ pre-rendering
  => better performance, SEO

#### Static Generation & Server-side Rendering

- Static Generation : **build time** HTML ์์ฑ
- Server-side Rendering : **request** ์ HTML ์์ฑ

## tailwindcss

`yarn add -D tailwindcss postcss autoprefixer` ๐
`yarn tailwindcss init -p`

```css
// <input tpye = number /> ํ์ดํ ์ง์ฐ๊ธฐ

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
feat: โจ
docs: ๐
dependency

## HTML

### ๋ผ๋ฒจ ์ธํ ์กฐํฉ

- ๊ด๋ จ label ํด๋ฆญ์ ํด๋น input ํฌ์ปค์ค ๋ง์ถฐ์ค!

```html
<label htmlFor="`${_id}`"></label> <input id="`${_id}`" type="number" />
```

[mozilla label, input](https://developer.mozilla.org/ko/docs/Web/HTML/Element/label)

## Prisma & planetScale

[Prisma, planetScale ์ ๋ฆฌํ๊ธฐ](./document/pp.md)

## typescript

import, export type
=> ํ์ ํ๊ธฐ์ ์ ์ธ์ ์ฌ์ฉ๋  ์ ์ธ๋ง import
=> ๋ฐํ์์ ์ ๊ฑฐ๋
