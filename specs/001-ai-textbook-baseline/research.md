# Research: FastAPI Backend Hosting

## Decision

We will use **Render** for hosting the FastAPI backend.

## Rationale

Render is chosen for its developer-friendly features, seamless integration with GitHub, and a free tier that is well-suited for this project's scale. Key benefits include:

- **Automatic Deploys from GitHub**: Changes pushed to the main branch can be automatically deployed.
- **Free Tier**: The free tier provides enough resources for a hobby project like this, including a PostgreSQL database if needed (though we are using Neon).
- **Free TLS Certificates**: Automatic SSL/TLS certificates for custom domains.
- **Python Support**: Render has first-class support for Python applications, including FastAPI.

## Alternatives Considered

- **Railway**: Another strong contender with a similar feature set. Render was chosen due to more widespread community examples and tutorials for FastAPI.
- **Vercel**: While it supports FastAPI, it's primarily focused on frontend frameworks.
- **PythonAnywhere**: A good option, but the free tier is more limited than Render's.
- **Koyeb**: Also a viable option, but Render's documentation and user experience are slightly more polished.
