# GEMINI.md

## Project Overview

This is a [Next.js](https://nextjs.org/) 15 project bootstrapped with `create-next-app`. It uses [TypeScript](https://www.typescriptlang.org/) and is configured with a rich set of UI components from [@radix-ui/react](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/), styled with [Tailwind CSS](https://tailwindcss.com/). The project also includes [Biome](https://biomejs.dev/) for code linting and formatting.

The application is set up to handle SVGs as React components and uses `next/font` to optimize and load the Geist font.

## Building and Running

### Development

To start the development server, run:

```bash
pnpm dev
```

This will start the server on [http://localhost:3000](http://localhost:3000). The application will automatically reload when you make changes to the code.

### Building

To create a production-ready build, run:

```bash
pnpm build
```

This will create an optimized build of the application in the `.next` directory.

### Starting the Production Server

To start the production server, run:

```bash
pnpm start
```

This will start a server with the optimized production build.

## Development Conventions

### Linting and Formatting

This project uses [Biome](https://biomejs.dev/) for code linting and formatting. To check for linting errors, run:

```bash
pnpm lint
```

To format the code, run:

```bash
pnpm format
```

A pre-commit hook is set up with `husky` and `lint-staged` to automatically format files before they are committed.

### SVG Components

The project is configured to import SVG files as React components. You can import them like this:

```tsx
import MyIcon from "@/public/assets/my-icon.svg";

const MyComponent = () => {
  return <MyIcon className="w-6 h-6" />;
};
```

If you need to use the SVG as a URL (e.g., in an `<img>` tag), you can append `?url` to the import:

```tsx
import myIconUrl from "@/public/assets/my-icon.svg?url";

const MyComponent = () => {
  return <img src={myIconUrl} alt="My Icon" />;
};
```

### Utility Functions

A `cn` utility function is available in `src/lib/utils.ts` for merging Tailwind CSS classes. This is useful for creating conditional or dynamic class names.

```tsx
import { cn } from "@/lib/utils";

const MyComponent = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className={cn("p-4", { "bg-blue-500": isActive })}>
      ...
    </div>
  );
};
```
