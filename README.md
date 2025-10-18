这是一个使用 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) 创建的 [Next.js](https://nextjs.org) 项目。

## 快速开始

先启动本地开发服务器：

```bash
bun run dev
# 或 npm run dev / yarn dev / pnpm dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看页面效果。

你可以从修改 `app/page.tsx` 开始开发，保存后页面会自动热更新。

本项目使用 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) 自动优化并加载 [Geist](https://vercel.com/font) 字体。

## 了解更多

想进一步了解 Next.js，可以参考：

- [Next.js 文档](https://nextjs.org/docs) —— 特性与 API 说明。
- [Next.js 交互式教程](https://nextjs.org/learn) —— 动手学习教程。

也欢迎浏览 [Next.js GitHub 仓库](https://github.com/vercel/next.js) 并提交反馈或贡献代码！

## 部署到 Vercel

部署 Next.js 应用最简单的方式是使用 Next.js 团队提供的 [Vercel 平台](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)。

更多细节请参考官方的[部署文档](https://nextjs.org/docs/app/building-your-application/deploying)。

## 使用 SVGR CLI 将 SVG 转为 React 组件

本仓库集成了 [SVGR CLI](https://react-svgr.com/docs/cli/)。运行以下命令会把 `public/` 目录下的所有 `*.svg` 转换为 TypeScript React 组件，输出到 `src/components/icons/`，组件名为 PascalCase：

```bash
bunx svgr
# 或 bun run svgr（需先在 package.json 中定义脚本）/ npm run svgr / yarn svgr / pnpm svgr
```

常用用法：

- 在代码中按组件方式引入：

```tsx
import Logo from "@/components/icons/Logo";

export default function Example() {
  return <Logo className="size-6 text-blue-600" />;
}
```

- 仍需以 URL 方式引入原始 SVG（如 `<img>` 或 CSS 背景）时，可使用 `?url` 保留文件加载行为：

```tsx
import logoUrl from "@/public/logo.svg?url";
```

可在项目根目录 `.svgrrc.json` 中调整转换选项（已启用 `typescript`、`icon`、`svgo` 与 `currentColor` 映射等）。
