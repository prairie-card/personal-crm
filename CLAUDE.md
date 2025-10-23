# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CRM is a relationship management application focusing on "caring for digital connections." This is a **mockup prototype** for internal communication with engineers and designers, prioritizing visual design over perfect implementation.

**Mission**: "Care for encounters and guide connections with people you haven't met yet."

## Core Philosophy

- AI is a "quiet supporter," not a replacement for human relationships
- Prioritize visual design and demo-ability over complete functionality
- Keep implementation simple - use `useState` only, no complex state management
- Mock data is hardcoded; persistence is not required (reload resets are acceptable)

## Development Commands

- `npm run dev` - Start dev server (http://localhost:5173/)
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3 (utility-first)
- **Icons**: lucide-react
- **State Management**: React Hooks (`useState` only - no Context API or external libraries)
- **Data**: Hardcoded sample data in `src/data/` (no persistence)

## Architecture & Component Structure

### Component Hierarchy
```
PersonalCRMHome (main container)
├── MobileView / DesktopView (responsive layouts)
├── Home/
│   ├── ActivitySection
│   ├── NewContactsSection
│   ├── ReminderSection
│   └── TodayEventsSection
├── AddModal/
│   ├── BusinessCardScanner
│   ├── OCRLoading
│   └── PhotoPreviewGrid
├── ContactEditModal/
│   ├── BasicInfo
│   ├── BioSection
│   ├── OrganizationInfo
│   ├── SocialInfo
│   └── ContentUrlsInfo
├── common/ (shared components)
│   ├── Button.tsx
│   ├── Modal.tsx
│   ├── Toast.tsx
│   ├── Loading.tsx
│   └── Flash.tsx
└── notifications/
    ├── GeneralTab
    └── AISearchTab
```

### Key Type Definitions

**Contact** (`src/types/Contact.ts`): Core entity with:
- Basic info (name, company, title)
- Extended fields (birthday, tags, status, photos)
- Organization details
- Social links (Twitter/X, LinkedIn, Instagram, etc.)
- Content URLs

**Activity** (`src/types/Activity.ts`): Interaction records (meeting, call, email, note)
**Reminder** (`src/types/Reminder.ts`): Action reminders
**Notification** (`src/types/Notification.ts`): System notifications

## Naming Conventions

- **Components**: `PascalCase.tsx` (e.g., `ContactCard.tsx`)
- **Hooks**: `use` + `PascalCase.ts` (e.g., `useContactData.ts`)
- **Utils**: `camelCase.ts` (e.g., `formatDate.ts`)
- **Types**: `PascalCase.ts` (e.g., `Contact.ts`)
- **Page Components**: `[Feature]Page`
- **Modal Components**: `[Feature]Modal`
- **Section Components**: `[Feature]Section`

## Styling Guidelines

### Color Palette (Minimal Design)
- **Primary**: Black (#000000)
- **Secondary**: Gray (#6B7280, #9CA3AF)
- **Accent**: Blue (#3B82F6) - minimal usage
- **Background**: White (#FFFFFF)
- **Text**: Black (#000000), Gray (#6B7280)

### Design Principles
- Use Tailwind utility classes (avoid custom CSS)
- Simple button designs (black or gray base colors)
- Touch-friendly sizes (minimum 44x44px)
- Basic animations only (CSS transitions, avoid complex animations)
- Responsive design considerations

## Implementation Philosophy (Mockup Development)

### DO:
- ✅ Focus on visual design and UI components
- ✅ Use simple state management (`useState` within components)
- ✅ Hardcode sample data
- ✅ Implement basic interactions (clicks, modal open/close)
- ✅ Ensure demo-ability

### DON'T:
- ❌ Implement complex backend integration
- ❌ Add real AI processing or OCR
- ❌ Use databases or persistence
- ❌ Add complex state management libraries (Redux, Zustand, etc.)
- ❌ Over-engineer or perfect the implementation

### Completion Criteria
- UI is visually implemented
- Basic interactions work (button clicks, modal toggles)
- Runs locally without errors
- Demo-ready state

## GitHub Issue-Based PDCA Workflow

This project uses a specification-driven development approach with GitHub Issues to prevent unintended AI implementations:

1. **Plan Phase**: Define features, requirements, UI/UX design, test cases (use `.github/ISSUE_TEMPLATE/plan-phase.md`)
2. **Do Phase**: Implementation and testing (use `.github/ISSUE_TEMPLATE/do-phase.md`)
3. **Check Phase**: Verification and quality evaluation (use `.github/ISSUE_TEMPLATE/check-phase.md`)
4. **Action Phase**: Improvements and optimization (use `.github/ISSUE_TEMPLATE/action-phase.md`)

### Issue Labels
- Phase labels: `plan-phase`, `do-phase`, `check-phase`, `action-phase`
- Type labels: `enhancement`, `implementation`, `verification`, `improvement`
- Priority labels: `priority-high`, `priority-medium`, `priority-low`

## Git Workflow

### Branch Strategy
- `main`: Main branch
- `feature/[feature-name]`: Feature development
- `fix/[issue-name]`: Bug fixes

### Commit Message Format
- `feat: new feature`
- `fix: bug fix`
- `style: styling changes`
- `refactor: refactoring`
- `docs: documentation updates`

## Current Development Phase

**PoC v1** (Current): Meeting → Follow-up
- Auto-generate contacts from business cards/SNS
- AI-generated follow-up message drafts
- Keep-in-Touch reminders
- Activity logging

**Future Phases**:
- PoC v2: Discover/Search functionality
- β: Team sharing and introduction automation (Slack integration)
- Commercial: Individual/Enterprise deployment