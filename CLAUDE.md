# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CRM is a relationship management application that focuses on "caring for digital connections." The project explores new UX for human relationships through AI-assisted networking.

**Mission**: "Care for encounters and guide connections with people you haven't met yet."

**Current Stage**: PoC v1 - Mockup/Prototype phase. This is a frontend-only prototype to validate UX concepts. No backend implementation required.

## Core Philosophy

- AI is a "quiet supporter," not a replacement for human relationships
- Don't over-automate; maintain transparency and undo capability
- Design around human motivations like "want to meet" and "interested in"
- Mockup first: Focus on working UI demonstrations, not production-ready backend

## Development Phases

1. **PoC v1** (Current): Meeting → Follow-up
   - Auto-generate contacts from business cards/SNS
   - AI-generated follow-up message drafts

2. **PoC v2** (Planned): Discover/Search
   - Purpose-driven search and connection path suggestions

3. **β version**: Team sharing and introduction automation
   - Slack integration, shared network

4. **Commercial**: Individual/Enterprise deployment

## Core Data Objects

- **Contact**: Record of encounters (business card, SNS, manual)
- **Profile**: Multi-faceted information about others or self
- **Keyword**: Network tag axis
- **Interaction**: Action records (follow-ups, etc.)
- **Reminder**: Action reminders
- **Group**: Community, profession, keyword-based
- **Purpose**: Discovery exploration purpose
- **Introduction**: Introduction requests and progress tracking
- **Connector**: External integrations (Prairie/Gmail/Slack)
- **Discovery/Search**: Potential connection exploration and search engine

## Project Structure

```
personal-crm/
├── src/
│   ├── components/
│   │   ├── PersonalCRMHome.tsx      # Main container (view mode switcher)
│   │   ├── MobileView.tsx           # Mobile interface (3-tab navigation)
│   │   ├── DesktopView.tsx          # Desktop interface (sidebar)
│   │   ├── ContactDetailPage.tsx    # Full contact detail view
│   │   ├── ContactEditModal.tsx     # Contact editing modal
│   │   ├── AddModal.tsx             # New contact addition
│   │   ├── NotificationModal.tsx    # Notification center
│   │   ├── KeepInTouchModal.tsx     # Follow-up reminder UI
│   │   ├── FollowUpModal.tsx        # AI follow-up suggestion
│   │   ├── AddNoteModal.tsx         # Quick note addition
│   │   ├── ActivityDetailModal.tsx  # Activity timeline detail
│   │   ├── Home/                    # Home tab sub-components
│   │   │   ├── NewContactsSection.tsx
│   │   │   ├── ActivitySection.tsx
│   │   │   ├── TodayEventsSection.tsx
│   │   │   └── ReminderSection.tsx
│   │   ├── ContactEditModal/        # Contact edit form sections
│   │   │   ├── BasicInfo.tsx
│   │   │   ├── OrganizationInfo.tsx
│   │   │   ├── SocialInfo.tsx
│   │   │   ├── MetInfo.tsx
│   │   │   ├── TagSection.tsx
│   │   │   └── ...
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── Modal.tsx
│   │   │   ├── Flash.tsx
│   │   │   ├── Toast.tsx
│   │   │   ├── Button.tsx
│   │   │   └── Loading.tsx
│   │   └── Settings/                # Settings components
│   ├── types/
│   │   ├── Contact.ts               # Contact type (extended with social/org)
│   │   ├── Notification.ts
│   │   ├── Reminder.ts
│   │   ├── Activity.ts
│   │   └── TimelineSettings.ts
│   ├── data/                        # Mock data for prototype
│   │   ├── sampleContacts.ts
│   │   ├── sampleNotifications.ts
│   │   ├── sampleReminders.ts
│   │   └── sampleActivities.ts
│   ├── App.tsx                      # Application root
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Global styles (Tailwind)
├── docs/                            # Project documentation (Japanese)
│   ├── specs/v1/                    # PoC v1 specifications
│   │   ├── iphone_view/             # Mobile view specs (by date)
│   │   │   ├── iphone_view_rule.md  # Critical iPhone view rules
│   │   │   ├── 1008/                # Oct 8 specs
│   │   │   ├── 1009/                # Oct 9 specs
│   │   │   ├── 1010/                # Oct 10 specs
│   │   │   └── ...
│   │   └── poc_v1.md                # Overall PoC v1 spec
│   ├── github/                      # GitHub workflow docs
│   │   ├── Issue-Management-Workflow.md
│   │   └── Plan-Phase-Template.md
│   ├── personas/                    # User personas
│   └── benchmark/                   # Competitive analysis
├── .cursor/rules/                   # Cursor AI development rules
│   ├── 000_general.mdc              # General principles
│   ├── 001_bestPractices_common.mdc # Coding standards
│   ├── 002_bestPractices_frontend.mdc
│   ├── 003_mockup_development.mdc   # Mockup-specific rules
│   ├── 004_planning_guide.mdc
│   ├── 005_github_issue_workflow.mdc
│   └── personal-crm-specific.mdc
├── hoge.tsx                         # Original prototype (legacy)
└── ...config files (vite, tailwind, typescript)
```

## Development Commands

- **Start dev server**: `npm run dev` - Runs on http://localhost:5173/
- **Build for production**: `npm run build` - Outputs to `dist/`
- **Preview production build**: `npm run preview`

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **Icons**: lucide-react

## Architecture & State Management

**View Mode System** (`PersonalCRMHome.tsx`):

- Switchable between Mobile (393px × 852px iPhone frame) and Desktop views
- Fixed yellow header with screen ID for development/testing
- Centered container with gray background for visual context

**Mobile View** (`MobileView.tsx`):

- State management: All data (contacts, notifications, reminders, activities) managed locally with `useState`
- 3-tab navigation: Home, Contacts, Settings
- Modal system: Multiple modal states controlled via boolean flags and selected entity states
- Flash notification system: Temporary success/error messages with optional actions
- Activity tracking: All user actions generate activity log entries

**Desktop View** (`DesktopView.tsx`):

- Sidebar navigation with contact list
- Preview pane for selected contact details
- Integration settings section

**Modal Architecture**:

- Base `Modal` component in `common/Modal.tsx` with overlay, backdrop, and animation
- Specialized modals: AddModal, ContactEditModal, NotificationModal, KeepInTouchModal, FollowUpModal, AddNoteModal, ActivityDetailModal
- Modal width constraint: Max 320px to fit within iPhone screen (393px - padding)
- Each modal has unique Screen ID for tracking (e.g., "MOB-EDIT-001")

**Data Flow**:

1. Sample data loaded from `src/data/sample*.ts` files
2. State lifted to MobileView/DesktopView components
3. Callbacks passed down to child components for state updates
4. Activity logs generated for user actions
5. Flash messages shown for confirmations

## Critical Development Rules

### iPhone View Constraints

- **CRITICAL**: All work must be done within iPhone view constraints
- iPhone screen width: **393px** (fixed)
- Modal max width: **320px** (to fit with padding)
- Modals must NEVER overflow beyond iPhone screen boundaries
- Every screen/modal must have unique Screen ID visible in yellow header bar
- Use `docs/specs/v1/iphone_view/iphone_view_rule.md` as reference

### Mockup Development Approach

- This is a **mockup/prototype project** - focus on visual demonstration, not production code
- No backend development required - use mock data and simulated interactions
- AI features are UI mockups showing generated text, not actual AI integration
- Prioritize visual polish and smooth UX over functional completeness

### Component Design

- Break down complex modals into sub-components (see `ContactEditModal/*`)
- Use composition over large monolithic components
- Common UI elements go in `components/common/`
- Screen-specific logic stays in main view components

### TypeScript Usage

- All data types defined in `src/types/`
- Contact type is heavily extended with optional fields for future features
- Avoid `any` types - define explicit interfaces

### Documentation Reference

- Specs in Japanese: `docs/specs/v1/iphone_view/MMDD/*.md`
- Each date folder (1008, 1009, etc.) contains incremental feature specs
- Check `iphone_view_rule.md` for critical constraints
- Use `docs/github/Issue-Management-Workflow.md` for PDCA workflow

## Development Workflow

### Standard Development Process

1. Check relevant spec documents in `docs/specs/v1/iphone_view/`
2. Verify iPhone view constraints (393px width, 320px modal max)
3. Implement feature with proper TypeScript types
4. Add Screen ID to new screens/modals
5. Test within iPhone view frame in PersonalCRMHome
6. Update mock data if needed in `src/data/`

### GitHub Issue PDCA Workflow

- **Plan Phase**: Create spec document in `docs/Plan-Phase-{feature}.md`
- **Do Phase**: Implement according to plan, add labels
- **Check Phase**: Verify against acceptance criteria
- **Action Phase**: Iterate and improve

For details, see `docs/github/Issue-Management-Workflow.md`

## Current Implementation Status

**Completed Features**:

- Dual view mode (Mobile/Desktop) with switcher
- Contact list with multiple sources (Prairie Card, LinkedIn, Gmail, etc.)
- Contact detail page with full profile information
- Contact editing with sections: Basic, Organization, Social, Met Info, Tags, Notes
- Add contact modal with business card scanner mockup
- Notification center with General and AI Search tabs
- Follow-up modal with AI-generated message suggestions
- Keep In Touch reminder system
- Activity timeline tracking all user actions
- Flash notification system
- Timeline settings (show/hide sections)
- Screen ID system for development tracking

**Mockup Features** (UI only, no real functionality):

- AI follow-up message generation
- Business card OCR scanning
- AI deep search for contact information
- Prairie Card integration
- Social media integrations

## Success Metrics

- **UX**: 1 session completion rate 60%+
- **Technical**: Connector success rate 90%+
- **Retention**: Usage intent 70%+
- **Business**: 3+ PoC companies
