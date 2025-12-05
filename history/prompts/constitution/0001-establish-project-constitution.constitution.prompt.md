---
id: 0001
title: Establish Project Constitution
stage: constitution
date: 2025-12-05
surface: agent
model: Gemini
feature: none
branch: master
user: Salman Hassan
command: /sp.constitution
labels: ["constitution", "project-setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
tests:
  - none
---

## Prompt

/sp.constitution Project Name

Physical AI & Humanoid Robotics Course (AI-Native Textbook)

Purpose

To create an AI-native textbook that teaches Physical AI and Humanoid Robotics concepts clearly, progressively, and practically, bridging the gap between digital intelligence and embodied intelligence in the physical world.

Target Audience

Students with basic programming knowledge

AI learners new to robotics

Software engineers transitioning into Physical AI

Beginners who have never worked with robots or ROS before

Teaching Principles

Concept before tools

Explain “why” before “how”

No hardware assumptions

Simulation-first mindset

Clear mental models over code dumps

Real-world analogies wherever possible

Content Philosophy

Each chapter must be understandable on its own

No unexplained jargon

Every major system must be explained visually and conceptually before being technical

Complex systems are broken into layers: brain, senses, body, environment

AI-Native Approach

The book is designed to work with an embedded AI assistant

AI is treated as a learning companion, not a shortcut

Content must be structured for retrieval, reasoning, and personalization

Chapters should be modular and machine-readable

Scope Boundaries

This book explains systems, architectures, and workflows

It does not require physical robots to complete learning objectives

Hardware setup is explained conceptually, not enforced

Focus is on understanding, not hardware ownership

Quality Bar

Beginner-friendly but technically accurate

No copy-paste tutorials without explanation

Every diagram, block, or step must serve learning

If something cannot be explained simply, it must be reworked

## Response snapshot

I have successfully created the project constitution and updated the relevant templates.

## Outcome

- ✅ Impact: Established the project constitution and updated related templates.
- 🧪 Tests: none
- 📁 Files: 2 files modified
- 🔁 Next prompts: none
- 🧠 Reflection: The process of creating a constitution and propagating changes ensures consistency across the project.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): none