# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## The Golden Rule

1. When unsure about implementation details, ALWAYS ask the developer.
2. 입력 값을 통한 만세력 계산 로직은 수정하지 말 것 (Do not modify Saju calculation logic based on input values)
3. Always respond in 한국어
4. If installation is necessary, do not install using pip; ALWAYS use uv add instead.

## Development Commands

### Build & Development
- `npm run dev` - Start development server with HMR at http://localhost:5173
- `npm run build` - Create production build 
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking and generate route types

### Installation
- `npm install` - Install dependencies

## Project Architecture

### Tech Stack
- **Framework**: React Router v7 (SSR enabled by default)
- **Language**: TypeScript
- **Styling**: TailwindCSS with Shadcn UI components
- **UI Components**: Radix UI primitives via Shadcn UI
- **Icons**: Lucide React
- **Build Tool**: Vite

### Project Structure
- `app/` - Main application code
  - `common/` - Shared components and pages
    - `components/` - Reusable components including UI primitives
    - `pages/` - Page components
  - `lib/` - Utility functions (utils.ts with cn helper)
  - `routes/` - Individual route files
  - `root.tsx` - Root layout with Navigation component
  - `routes.ts` - Route configuration
- `pictures/` - Static images and assets
- `public/` - Public static files
- `react-router.config.ts` - React Router configuration (SSR enabled)
- `components.json` - Shadcn UI configuration

### Key Conventions (from .cursorrules)
- Use TypeScript for all code; prefer interfaces over types
- Use functional components and declarative programming patterns
- Import Route types: `import type { Route } from "./+types/..."`
- Never import from Radix UI directly - always use Shadcn UI components
- Never import from @remix-run - use "react-router" instead
- Loader/action functions use Route.LoaderArgs/Route.ActionArgs
- Return plain objects from loaders, not json()
- Components receive loaderData/actionData via Route.ComponentProps

## Shadcn UI Configuration

### Component Generation
- Use `npx shadcn@latest add [component-name]` to add new UI components
- Configuration file: `components.json` with aliases set up:
  - `components`: `~/common/components`
  - `ui`: `~/common/components/ui` 
  - `utils`: `~/lib/utils`
  - Style: "new-york", Base color: "neutral"

### Custom Styling
- Custom colors can be added to `app/app.css` in `:root`, `.dark`, and `@theme inline` sections
- Korean fonts are pre-configured: Inter (primary), Noto Sans KR, Nanum Brush Script

## React Router v7 Specific Patterns

### Route Structure
- Routes defined in `app/routes.ts` using RouteConfig array
- Individual routes use file-based structure in `app/common/pages/`
- Root layout in `app/root.tsx` includes Navigation component

### Route Functions
- `loader`: Return plain objects (not `json()`)
- `action`: Use Route.ActionArgs type
- `meta`: Use MetaFunction type, return array of meta objects
- `links`: Use Route.LinksFunction for external resources

### Component Props
- Components receive `Route.ComponentProps` containing `loaderData` and `actionData`
- No `useLoaderData()` or `useActionData()` hooks - data comes via props
- Route types imported as: `import type { Route } from "./+types/route-name"`

### Application Context
This is a "사주AI" (Korean fortune-telling/astrology AI) application that provides 1:1 fortune-telling consultations. Core Saju calculation logic should never be modified without explicit permission. All user-facing content should be in Korean. Main page displays background image: `/app/pictures/clouds_4k.webp`
