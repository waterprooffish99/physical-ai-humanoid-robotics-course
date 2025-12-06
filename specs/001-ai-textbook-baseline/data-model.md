# Data Model

This document outlines the data models for the AI-Native Textbook project.

## 1. ChatSession

Represents a single conversation with the chatbot. This will be stored in the Neon serverless Postgres database.

| Field       | Type      | Description                                     |
|-------------|-----------|-------------------------------------------------|
| `session_id`| `UUID`    | Primary key for the session.                    |
| `user_id`   | `STRING`  | A unique identifier for the user (e.g., a cookie). |
| `created_at`| `TIMESTAMP`| The timestamp when the session was created.     |
| `metadata`  | `JSON`    | Any additional metadata about the session.      |

## 2. ChatMessage

Represents a single message within a `ChatSession`. Stored in Postgres.

| Field       | Type      | Description                                     |
|-------------|-----------|-------------------------------------------------|
| `message_id`| `UUID`    | Primary key for the message.                    |
| `session_id`| `UUID`    | Foreign key to the `ChatSession`.               |
| `role`      | `STRING`  | The role of the message sender (`user` or `assistant`). |
| `content`   | `TEXT`    | The text content of the message.                |
| `created_at`| `TIMESTAMP`| The timestamp when the message was created.     |

## 3. VectorEmbedding

Represents a chunk of the textbook content stored in Qdrant Cloud.

| Field       | Type        | Description                                     |
|-------------|-------------|-------------------------------------------------|
| `vector_id` | `UUID`      | Primary key for the vector.                     |
| `vector`    | `FLOAT[]`   | The vector embedding of the content chunk.      |
| `payload`   | `JSON`      | Metadata about the content chunk, including the original text and source chapter/section. |
