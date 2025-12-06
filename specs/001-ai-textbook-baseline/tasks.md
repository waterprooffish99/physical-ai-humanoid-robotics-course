# Tasks: Baseline AI-Native Textbook Website

**Input**: Design documents from `specs/001-ai-textbook-baseline/`

---

## Phase 1: Setup

**Purpose**: Project initialization and basic structure.

- [X] T001 [P] Initialize Docusaurus project in `frontend/`
- [X] T002 [P] Initialize FastAPI project in `backend/`
- [X] T003 [P] Set up `pytest` for backend testing in `backend/tests/`
- [X] T004 [P] Set up `jest` for frontend testing in `frontend/`

---

## Phase 2: Foundational

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented.

- [X] T005 [P] Create database schema for `ChatSession` and `ChatMessage` in Neon Postgres.
- [X] T006 [P] Implement Qdrant collection setup script.
- [X] T007 Create content indexing pipeline script in `backend/scripts/index.py`.
- [X] T008 [P] Add placeholder content for Modules 1-4 and Capstone to `frontend/docs/`.

---

## Phase 3: User Story 1 - Browse Textbook Content (Priority: P1) 🎯 MVP

**Goal**: A navigable Docusaurus website showing the textbook structure.

**Independent Test**: The Docusaurus site can be deployed and navigated.

### Implementation for User Story 1

- [X] T009 [US1] Configure `docusaurus.config.js` with the correct sidebar structure for Modules 1-4 and Capstone.
- [X] T010 [US1] Style the Docusaurus site to have a clean, readable, textbook-like appearance.

---

## Phase 4: User Story 2 - Ask the Chatbot a General Question (Priority: P1)

**Goal**: A functional chatbot that can answer questions based on the book's content.

**Independent Test**: The chatbot UI can be used to ask a question and receive an answer.

### Implementation for User Story 2

- [X] T011 [US2] Create the `/chat` endpoint in the FastAPI backend (`backend/src/api/chat.py`).
- [X] T012 [US2] Implement the RAG logic in the backend to retrieve context from Qdrant and generate an answer.
- [X] T013 [US2] Implement the `ChatSession` and `ChatMessage` database logic in the backend.
- [X] T014 [P] [US2] Create the chatbot React component in `frontend/src/components/Chatbot.js`.
- [X] T015 [US2] Integrate the chatbot component into the Docusaurus theme.
- [X] T016 [US2] Connect the chatbot frontend to the FastAPI backend.

---

## Phase 5: User Story 3 - Ask the Chatbot about Selected Text (Priority: P2)

**Goal**: Enhance the chatbot to answer questions about user-selected text.

**Independent Test**: Highlighting text on the page allows asking a contextual question.

### Implementation for User Story 3

- [X] T017 [US3] Implement the frontend logic to capture selected text and show a context menu.
- [X] T018 [US3] Modify the chatbot component to send the selected text to the backend.
- [X] T019 [US3] Update the `/chat` endpoint to handle the `selected_text` field and prioritize it for context.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories.

- [X] T020 [P] Add unit tests for the FastAPI backend.
- [X] T021 [P] Add component tests for the chatbot React component.
- [X] T022 [P] Write documentation for the backend API.
- [X] T023 Set up GitHub Actions for CI/CD to deploy the frontend to GitHub Pages and the backend to Render.

---

## Phase 7: Content Creation

**Purpose**: Create the detailed chapter content for each module and the Capstone project, with structured placeholders for a human to fill.

### Module 1: Introduction to Physical AI

- [X] T024 Create `frontend/docs/module-1/chapter-1-overview.md` with structured placeholders.
- [X] T025 Write actual content for `frontend/docs/module-1/chapter-1-overview.md` (Human Task)
- [X] T026 Create `frontend/docs/module-1/chapter-2-history-of-ai-robotics.md` with structured placeholders.
- [X] T027 Write actual content for `frontend/docs/module-1/chapter-2-history-of-ai-robotics.md` (Human Task)
- [X] T028 Create `frontend/docs/module-1/chapter-3-key-concepts.md` with structured placeholders.
- [X] T029 Write actual content for `frontend/docs/module-1/chapter-3-key-concepts.md` (Human Task)

### Module 2: Sensors and Perception

- [X] T030 Create `frontend/docs/module-2/chapter-1-sensor-types.md` with structured placeholders.
- [X] T031 Write actual content for `frontend/docs/module-2/chapter-1-sensor-types.md` (Human Task)
- [X] T032 Create `frontend/docs/module-2/chapter-2-computer-vision.md` with structured placeholders.
- [X] T033 Write actual content for `frontend/docs/module-2/chapter-2-computer-vision.md` (Human Task)
- [X] T034 Create `frontend/docs/module-2/chapter-3-lidar-and-depth-sensing.md` with structured placeholders.
- [X] T035 Write actual content for `frontend/docs/module-2/chapter-3-lidar-and-depth-sensing.md` (Human Task)

### Module 3: Actuation and Control

- [X] T036 Create `frontend/docs/module-3/chapter-1-motor-control.md` with structured placeholders.
- [X] T037 Write actual content for `frontend/docs/module-3/chapter-1-motor-control.md` (Human Task)
- [X] T038 Create `frontend/docs/module-3/chapter-2-kinematics.md` with structured placeholders.
- [X] T039 Write actual content for `frontend/docs/module-3/chapter-2-kinematics.md` (Human Task)
- [X] T040 Create `frontend/docs/module-3/chapter-3-robot-manipulation.md` with structured placeholders.
- [X] T041 Write actual content for `frontend/docs/module-3/chapter-3-robot-manipulation.md` (Human Task)

### Module 4: AI for Robotics

- [X] T042 Create `frontend/docs/module-4/chapter-1-path-planning.md` with structured placeholders.
- [X] T043 Write actual content for `frontend/docs/module-4/chapter-1-path-planning.md` (Human Task)
- [X] T044 Create `frontend/docs/module-4/chapter-2-reinforcement-learning.md` with structured placeholders.
- [X] T045 Write actual content for `frontend/docs/module-4/chapter-2-reinforcement-learning.md` (Human Task)
- [X] T046 Create `frontend/docs/module-4/chapter-3-human-robot-interaction.md` with structured placeholders.
- [X] T047 Write actual content for `frontend/docs/module-4/chapter-3-human-robot-interaction.md` (Human Task)

### Capstone Project

- [X] T048 Create `frontend/docs/capstone/project-overview.md` with structured placeholders.
- [X] T049 Write actual content for `frontend/docs/capstone/project-overview.md` (Human Task)
- [X] T050 Create `frontend/docs/capstone/project-guidelines.md` with structured placeholders.
- [X] T051 Write actual content for `frontend/docs/capstone/project-guidelines.md` (Human Task)

---

## Dependencies & Execution Order

- **Phase 1 & 2** must be completed before starting on the user stories.
- **User Story 1** can be worked on in parallel with User Story 2's backend tasks (T011-T013).
- **User Story 2's** frontend tasks (T014-T016) depend on its backend tasks.
- **User Story 3** depends on the completion of User Story 2.
- **Phase 6** should be started after all user stories are complete.
- **Phase 7** (Content Creation) can be done in parallel with other phases once the basic Docusaurus structure is set up (after T010). Content can be incrementally added and indexed.