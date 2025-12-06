---
id: 0001
title: Create Baseline Specification for AI Textbook
stage: spec
date: 2025-12-05
surface: agent
model: Gemini
feature: 001-ai-textbook-baseline
branch: 001-ai-textbook-baseline
user: Salman Hassan
command: /sp.specify
labels: ["specification", "baseline", "ai-native-textbook"]
links:
  spec: specs/001-ai-textbook-baseline/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-ai-textbook-baseline/spec.md
  - specs/001-ai-textbook-baseline/checklists/requirements.md
tests:
  - none
---

## Prompt

Create the baseline specification for this project using Spec-Kit Plus.

System to specify:
An AI-native technical textbook website titled “Physical AI & Humanoid Robotics Course”.

Mandatory components:
1. Docusaurus-based documentation site structured as a textbook.
2. Course content aligned with Modules 1–4 and Capstone as defined in the Constitution.
3. Embedded Retrieval-Augmented Generation (RAG) chatbot.
4. RAG stack must use:
   - FastAPI backend
   - Neon serverless Postgres for metadata and chat state
   - Qdrant Cloud (free tier) for vector storage
5. Chatbot must:
   - Answer questions using only the book content
   - Answer based only on user-selected text when provided
6. Project must be created and managed using Spec-Kit Plus and Claude Code.
7. Deployment target: GitHub Pages (book) and public GitHub repository.

Out of scope for baseline specification:
- Bonus features (authentication, personalization, Urdu translation, subagents)

Deliverables to define in the specification:
- Book structure (modules, chapters)
- System architecture
- RAG data flow
- Non-functional requirements
- Constraints and assumptions

Proceed to generate the baseline specification artifact.

## Response snapshot

The baseline specification for the "AI-Native Textbook Website" has been created.

**Branch:** `001-ai-textbook-baseline`
**Specification File:** `specs/001-ai-textbook-baseline/spec.md`

The specification quality checklist has been completed and all items have passed. A note was added to the checklist to reflect that implementation details were included in the specification as per your explicit request.

The project is now ready for the next phase: planning. You can proceed by running the `/sp.plan` command.

## Outcome

- ✅ Impact: Created the baseline specification for the AI-native textbook project.
- 🧪 Tests: none
- 📁 Files: 2 files created
- 🔁 Next prompts: /sp.plan
- 🧠 Reflection: A detailed user prompt with clear requirements allows for a high-quality specification to be generated with minimal ambiguity.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script initially failed because it expected the feature name without the numeric prefix.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): When using `create-phr.sh`, ensure the `--feature` flag includes the numeric prefix if the feature directory is named that way.