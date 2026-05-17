
```
Restora
└─ server
   ├─ .env
   ├─ .prettierrc
   ├─ dist
   │  ├─ prisma.config.js
   │  ├─ src
   │  │  ├─ app.controller.js
   │  │  ├─ app.module.js
   │  │  ├─ app.service.js
   │  │  ├─ generated
   │  │  │  └─ prisma
   │  │  │     ├─ client.d.ts
   │  │  │     ├─ client.js
   │  │  │     ├─ default.d.ts
   │  │  │     ├─ default.js
   │  │  │     ├─ edge.d.ts
   │  │  │     ├─ edge.js
   │  │  │     ├─ index-browser.js
   │  │  │     ├─ index.d.ts
   │  │  │     ├─ index.js
   │  │  │     ├─ package.json
   │  │  │     ├─ query_compiler_fast_bg.js
   │  │  │     ├─ query_compiler_fast_bg.wasm
   │  │  │     ├─ query_compiler_fast_bg.wasm-base64.js
   │  │  │     ├─ runtime
   │  │  │     │  ├─ client.d.ts
   │  │  │     │  ├─ client.js
   │  │  │     │  ├─ index-browser.d.ts
   │  │  │     │  ├─ index-browser.js
   │  │  │     │  └─ wasm-compiler-edge.js
   │  │  │     ├─ schema.prisma
   │  │  │     ├─ wasm-edge-light-loader.mjs
   │  │  │     └─ wasm-worker-loader.mjs
   │  │  ├─ main.js
   │  │  ├─ prisma
   │  │  │  └─ prisma.service.js
   │  │  └─ users
   │  │     ├─ dto
   │  │     │  └─ user.repository.js
   │  │     ├─ user.controller.js
   │  │     ├─ user.module.js
   │  │     └─ user.service.js
   │  └─ Types
   │     └─ usertype.js
   ├─ eslint.config.mjs
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ prisma
   │  ├─ migrations
   │  │  ├─ 20260506042048_init
   │  │  │  └─ migration.sql
   │  │  ├─ 20260506063132_add_default_id
   │  │  │  └─ migration.sql
   │  │  └─ migration_lock.toml
   │  └─ schema.prisma
   ├─ prisma.config.ts
   ├─ README.md
   ├─ src
   │  ├─ app.controller.spec.ts
   │  ├─ app.controller.ts
   │  ├─ app.module.ts
   │  ├─ app.service.ts
   │  ├─ generated
   │  │  └─ prisma
   │  │     ├─ client.d.ts
   │  │     ├─ client.js
   │  │     ├─ default.d.ts
   │  │     ├─ default.js
   │  │     ├─ edge.d.ts
   │  │     ├─ edge.js
   │  │     ├─ index-browser.js
   │  │     ├─ index.d.ts
   │  │     ├─ index.js
   │  │     ├─ package.json
   │  │     ├─ query_compiler_fast_bg.js
   │  │     ├─ query_compiler_fast_bg.wasm
   │  │     ├─ query_compiler_fast_bg.wasm-base64.js
   │  │     ├─ runtime
   │  │     │  ├─ client.d.ts
   │  │     │  ├─ client.js
   │  │     │  ├─ index-browser.d.ts
   │  │     │  ├─ index-browser.js
   │  │     │  └─ wasm-compiler-edge.js
   │  │     ├─ schema.prisma
   │  │     ├─ wasm-edge-light-loader.mjs
   │  │     └─ wasm-worker-loader.mjs
   │  ├─ main.ts
   │  ├─ prisma
   │  │  └─ prisma.service.ts
   │  └─ users
   │     ├─ dto
   │     │  └─ user.repository.ts
   │     ├─ user.controller.ts
   │     ├─ user.module.ts
   │     └─ user.service.ts
   ├─ test
   │  ├─ app.e2e-spec.ts
   │  └─ jest-e2e.json
   ├─ tsconfig.build.json
   ├─ tsconfig.json
   └─ Types
      └─ usertype.ts

```
```
Restora
├─ README.md
└─ server
   ├─ .env
   ├─ .prettierrc
   ├─ dist
   │  ├─ prisma.config.js
   │  ├─ src
   │  │  ├─ app.controller.js
   │  │  ├─ app.module.js
   │  │  ├─ app.service.js
   │  │  ├─ generated
   │  │  │  └─ prisma
   │  │  │     ├─ client.d.ts
   │  │  │     ├─ client.js
   │  │  │     ├─ default.d.ts
   │  │  │     ├─ default.js
   │  │  │     ├─ edge.d.ts
   │  │  │     ├─ edge.js
   │  │  │     ├─ index-browser.js
   │  │  │     ├─ index.d.ts
   │  │  │     ├─ index.js
   │  │  │     ├─ package.json
   │  │  │     ├─ query_compiler_fast_bg.js
   │  │  │     ├─ query_compiler_fast_bg.wasm
   │  │  │     ├─ query_compiler_fast_bg.wasm-base64.js
   │  │  │     ├─ runtime
   │  │  │     │  ├─ client.d.ts
   │  │  │     │  ├─ client.js
   │  │  │     │  ├─ index-browser.d.ts
   │  │  │     │  ├─ index-browser.js
   │  │  │     │  └─ wasm-compiler-edge.js
   │  │  │     ├─ schema.prisma
   │  │  │     ├─ wasm-edge-light-loader.mjs
   │  │  │     └─ wasm-worker-loader.mjs
   │  │  ├─ main.js
   │  │  ├─ prisma
   │  │  │  └─ prisma.service.js
   │  │  └─ users
   │  │     ├─ dto
   │  │     │  └─ user.repository.js
   │  │     ├─ user.controller.js
   │  │     ├─ user.module.js
   │  │     └─ user.service.js
   │  └─ Types
   │     └─ usertype.js
   ├─ eslint.config.mjs
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ prisma
   │  ├─ migrations
   │  │  ├─ 20260506042048_init
   │  │  │  └─ migration.sql
   │  │  ├─ 20260506063132_add_default_id
   │  │  │  └─ migration.sql
   │  │  └─ migration_lock.toml
   │  └─ schema.prisma
   ├─ prisma.config.ts
   ├─ README.md
   ├─ src
   │  ├─ app.controller.spec.ts
   │  ├─ app.controller.ts
   │  ├─ app.module.ts
   │  ├─ app.service.ts
   │  ├─ generated
   │  │  └─ prisma
   │  │     ├─ client.d.ts
   │  │     ├─ client.js
   │  │     ├─ default.d.ts
   │  │     ├─ default.js
   │  │     ├─ edge.d.ts
   │  │     ├─ edge.js
   │  │     ├─ index-browser.js
   │  │     ├─ index.d.ts
   │  │     ├─ index.js
   │  │     ├─ package.json
   │  │     ├─ query_compiler_fast_bg.js
   │  │     ├─ query_compiler_fast_bg.wasm
   │  │     ├─ query_compiler_fast_bg.wasm-base64.js
   │  │     ├─ runtime
   │  │     │  ├─ client.d.ts
   │  │     │  ├─ client.js
   │  │     │  ├─ index-browser.d.ts
   │  │     │  ├─ index-browser.js
   │  │     │  └─ wasm-compiler-edge.js
   │  │     ├─ schema.prisma
   │  │     ├─ wasm-edge-light-loader.mjs
   │  │     └─ wasm-worker-loader.mjs
   │  ├─ main.ts
   │  ├─ prisma
   │  │  └─ prisma.service.ts
   │  └─ users
   │     ├─ dto
   │     │  └─ user.repository.ts
   │     ├─ user.controller.ts
   │     ├─ user.module.ts
   │     └─ user.service.ts
   ├─ test
   │  ├─ app.e2e-spec.ts
   │  └─ jest-e2e.json
   ├─ tsconfig.build.json
   ├─ tsconfig.json
   └─ Types
      └─ usertype.ts

```