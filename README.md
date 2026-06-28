# Loading Technology 官方網站

Phase 0 — 純內容網站,Next.js 16 + Tailwind CSS v4。

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config via `@theme`)
- **gray-matter** for MDX/Markdown content

## 啟動

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # 跑 production build
npm run lint
```

## 結構

```
app/                          Next.js App Router
├── layout.tsx                Root layout + 字體 + SEO JSON-LD
├── page.tsx                  首頁
├── globals.css               Tailwind v4 + 設計 token
├── sitemap.ts                自動生成 sitemap.xml
├── robots.ts                 自動生成 robots.txt
├── not-found.tsx             404 頁
│
├── products/
│   ├── page.tsx              產品列表
│   └── [slug]/page.tsx       產品詳情
├── solutions/
│   ├── page.tsx              方案列表
│   └── [slug]/page.tsx       方案詳情
├── case-studies/
│   ├── page.tsx              案例列表
│   └── [slug]/page.tsx       案例詳情
├── about/page.tsx
└── contact/page.tsx

components/
├── layout/
│   ├── Header.tsx
│   └── Footer.tsx
└── seo/
    └── JsonLd.tsx

lib/
├── seo.ts                    siteConfig + buildMetadata
├── content.ts                MDX 讀取
└── utils.ts                  cn() + formatDate()

content/
├── products/                 產品 .md
├── solutions/                方案 .md
└── case-studies/             案例 .md

public/                       靜態資源
```

## 設計 Token

所有顏色 / 字體 / spacing 在 `app/globals.css` 的 `@theme { }` 區塊:

- Brand: `--color-brand-*` (紫)
- 天 Sky: `--color-sky-*` (藍)
- 人 Human: `--color-human-*` (橘)
- 地 Ground: `--color-ground-*` (綠/黃/紅)
- 雲 Cloud: `--color-cloud-*` (紫)
- Ink: `--color-ink-*` (灰階)

## 加新內容

1. 在 `content/products/` 加一個 `.md` 檔,frontmatter 格式:

```markdown
---
title: 產品名稱
description: 一句話描述
category: sky | human | ground | cloud
order: 1
updatedAt: 2026-06-28
published: true
image: /images/products/xxx.jpg
---

## 段落標題

內文...
```

2. 儲存,Next.js dev server 自動 hot reload。

## SEO

- 每頁有自動 `<title>` + `<meta description>` + OG/Twitter card
- 產品頁有 Product JSON-LD
- 全站有 Organization JSON-LD
- `/sitemap.xml` + `/robots.txt` 自動生成

## 之後的 Phase

- Phase 1: Auth.js + 客戶後台
- Phase 2: Medusa.js + Stripe + 訂單流程
- Phase 3: CMS (Sanity)
- Phase 4: 串接 n8n / Appsmith / Frigate / MQTT

每一層加在 Next.js repo 內,不重寫。