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

postcss.config.js
tailwind.config.js
