# Implementation Plan: Baseline AI-Native Textbook Website

**Branch**: `001-ai-textbook-baseline` | **Date**: 2025-12-05 | **Spec**: [./spec.md](./spec.md)
**Input**: Feature specification from `specs/001-ai-textbook-baseline/spec.md`

**Note**: This template is filled in by the `/sp.plan` command.

## Summary

This plan outlines the technical approach for creating a Docusaurus-based textbook website with an embedded RAG chatbot. The backend will be a FastAPI application, with Neon serverless Postgres for chat state and Qdrant Cloud for vector storage.

## Technical Context

**Language/Version**: Python 3.11, Node.js (latest LTS)
**Primary Dependencies**: FastAPI, Docusaurus, `qdrant-client`, `psycopg2-binary`
**Storage**: Neon serverless Postgres, Qdrant Cloud (free tier)
**Testing**: `pytest`, `jest`
**Target Platform**: Web (GitHub Pages for frontend, [NEEDS CLARIFICATION: Hosting for FastAPI backend])
**Project Type**: Web application (frontend/backend)
**Performance Goals**: Chatbot responses < 5 seconds
**Constraints**: Must operate within the free-tier limitations of Neon and Qdrant Cloud.
**Scale/Scope**: Initial scope is a textbook with 4 modules and a capstone project.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [X] **I. Teaching Principles**: The plan adheres to the pedagogical approach by focusing on a clear presentation of content and a helpful AI assistant.
- [X] **II. Content Philosophy**: The structure will be modular and easy to navigate.
- [X] **III. AI-Native Approach**: The RAG chatbot is a core component of the plan.
- [X] **IV. Scope Boundaries**: The plan is focused on the baseline features defined in the spec.
- [X] **V. Quality Bar**: The plan includes testing and aims for a high-quality user experience.

## Project Structure

### Documentation (this feature)

```text
specs/001-ai-textbook-baseline/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output
└── tasks.md             # Phase 2 output
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── api/
│   ├── core/
│   ├── services/
│   └── models/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── theme/
└── docusaurus.config.js
```

**Structure Decision**: The project is divided into a `frontend` directory for the Docusaurus site and a `backend` directory for the FastAPI application. This separation allows for independent development and deployment.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
|           |            |                                     |