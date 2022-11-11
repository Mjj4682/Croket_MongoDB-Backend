# Croket_MongoDB-Backend

> 개발 기간 : 2022년 11월 7일 ~ 11월 10일 (4일)

> 추가 사항 구현 & 리팩토링(Refactoring) : 11월 11일 ~

## Installation

```bash
$ npm install
```

```bash
.env.sample file setting -> .env
```

## Running the app

```bash
$ npm run dev
```

## 프로젝트 구조

```bash
📦src
 ┣ 📂controllers
 ┃ ┣ 📜marketController.ts
 ┃ ┣ 📜productController.ts
 ┃ ┗ 📜userController.ts
 ┣ 📂middlewares
 ┃ ┣ 📜asyncHandler.ts
 ┃ ┣ 📜auth.ts
 ┃ ┗ 📜errorConstructor.ts
 ┣ 📂models
 ┃ ┣ 📜IMarket.ts
 ┃ ┣ 📜IProduct.ts
 ┃ ┣ 📜IUser.ts
 ┃ ┣ 📜Market.ts
 ┃ ┣ 📜Product.ts
 ┃ ┣ 📜User.ts
 ┃ ┗ 📜db.ts
 ┣ 📂routes
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜marketRouter.ts
 ┃ ┣ 📜productRouter.ts
 ┃ ┗ 📜userRouter.ts
 ┣ 📂services
 ┃ ┣ 📜marketService.ts
 ┃ ┣ 📜productService.ts
 ┃ ┗ 📜userService.ts
 ┣ 📜app.ts
 ┗ 📜server.ts
```
