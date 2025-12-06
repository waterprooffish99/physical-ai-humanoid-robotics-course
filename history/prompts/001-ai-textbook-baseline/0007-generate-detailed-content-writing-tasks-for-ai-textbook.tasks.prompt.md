---
id: 0007
title: Generate Detailed Content Writing Tasks for AI Textbook
stage: tasks
date: 2025-12-05
surface: agent
model: Gemini
feature: 001-ai-textbook-baseline
branch: 001-ai-textbook-baseline
user: Salman Hassan
command: /sp.tasks
labels: ["task-generation", "content-writing", "ai-native-textbook"]
links:
  spec: specs/001-ai-textbook-baseline/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-ai-textbook-baseline/tasks.md
tests:
  - none
---

## Prompt

---
description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
---

## User Input

```text
$ARGUMENTS
```

You **MUST** consider the user input before proceeding (if not empty).

## Outline

1. **Setup**: Run `.specify/scripts/bash/check-prerequisites.sh --json` from repo root and parse FEATURE_DIR and AVAILABLE_DOCS list. All paths must be absolute. For single quotes in args like "I'm Groot", use escape syntax: e.g 'I'\''m Groot' (or double-quote if possible: "I'm Groot").

2. **Load design documents**: Read from FEATURE_DIR:
   - **Required**: plan.md (tech stack, libraries, structure), spec.md (user stories with priorities)
   - **Optional**: data-model.md (entities), contracts/ (API endpoints), research.md (decisions), quickstart.md (test scenarios)
   - Note: Not all projects have all documents. Generate tasks based on what's available.

3. **Execute task generation workflow**:
   - Load plan.md and extract tech stack, libraries, project structure
   - Load spec.md and extract user stories with their priorities (P1, P2, P3, etc.)
   - If data-model.md exists: Extract entities and map to user stories
   - If contracts/ exists: Map endpoints to user stories
   - If research.md exists: Extract decisions for setup tasks
   - Generate tasks organized by user story (see Task Generation Rules below)
   - Generate dependency graph showing user story completion order
   - Create parallel execution examples per user story
   - Validate task completeness (each user story has all needed tasks, independently testable)

4. **Generate tasks.md**: Use `.specify.specify/templates/tasks-template.md` as structure, fill with:
   - Correct feature name from plan.md
   - Phase 1: Setup tasks (project initialization)
   - Phase 2: Foundational tasks (blocking prerequisites for all user stories)
   - Phase 3+: One phase per user story (in priority order from spec.md)
   - Each phase includes: story goal, independent test criteria, tests (if requested), implementation tasks
   - Final Phase: Polish & Cross-Cutting Concerns
   - All tasks must follow the strict checklist format (see Task Generation Rules below)
   - Clear file paths for each task
   - Dependencies section showing story completion order
   - Parallel execution examples per story
   - Implementation strategy section (MVP first, incremental delivery)

5. **Report**: Output path to generated tasks.md and summary:
   - Total task count
   - Task count per user story
   - Parallel opportunities identified
   - Independent test criteria for each story
   - Suggested MVP scope (typically just User Story 1)
   - Format validation: Confirm ALL tasks follow the checklist format (checkbox, ID, labels, file paths)

Context for task generation: "create tasks for writing chapter content for all modules (Module 1–4) and Capstone, including intro, topics, subtopics placeholders for a human to fill in"

The tasks.md should be immediately executable - each task must be specific enough that an LLM can complete it without additional context.

## Response snapshot

The task list for the "Baseline AI-Native Textbook Website" has been updated to include detailed content creation tasks.

**Task File:** `specs/001-ai-textbook-baseline/tasks.md`

A new set of tasks in "Phase 7: Content Creation" has been added, which includes granular tasks for creating structured placeholder files and for a human to fill in the actual content for each chapter of Modules 1-4 and the Capstone project.

The project is now ready for further implementation, starting with these detailed content creation tasks. You can proceed by running the `/sp.implement` command.

## Outcome

- ✅ Impact: Generated a detailed, human-centric task list for content writing of the AI-native textbook.
- 🧪 Tests: none
- 📁 Files: 1 file modified
- 🔁 Next prompts: /sp.implement
- 🧠 Reflection: Clarifying the user's intent regarding "LLM completing task" vs. "LLM generating task for human" is crucial for effective task generation.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none