# Now

My current direction is less about adding AI features to existing software and more about asking a deeper question:

> **What should software look like when agents become part of the operating model, not just an extra chat interface?**

## From delivery to reusable enterprise AI

The immediate path I am exploring is:

```text
Custom delivery
      ↓
Reusable capabilities
      ↓
Domain packs / business modules
      ↓
Enterprise context + capability layer
      ↓
Agent runtime
      ↓
AI-native enterprise system
```

The goal is to move from solving one request at a time toward reusable building blocks that can support many workflows.

## Enterprise context & state

For agents to operate inside real organizations, they need more than prompts or document retrieval.

I care about representing:

- business entities and relationships;
- current state and historical facts;
- roles, permissions and responsibilities;
- claims, evidence and provenance;
- tasks, commitments, events and exceptions;
- organizational memory that can be queried and updated safely.

The important idea is not a single "context engineering" technique. It is building a durable operating context that software and agents can share.

## Capability layer

Many AI products repeatedly need the same capabilities:

`OCR` · `ASR` · `Document Parsing` · `File Conversion` · `Vision` · `Search / RAG` · `Model Access` · `Tool Adapters`

I am interested in exposing these behind stable interfaces so different workflows can reuse them, switch providers or models, and evolve independently of the business layer.

## Agent runtime

The model is only one component of an agent system.

The runtime around it increasingly matters:

- MCP and tool execution;
- skills and reusable procedures;
- long-running tasks and resumable state;
- approvals and human intervention;
- permissions and business command boundaries;
- subagents and delegation;
- execution traces, observability and recovery;
- evals and policy checks before actions become business facts.

## AI-native development

Coding agents are already part of how I build software.

I am interested in improving the environment around them:

`Coding Agents` · `Agent Harnesses` · `Specs` · `Tests` · `Evals` · `Repo-level Context` · `Structured Development Records`

The shift I care about is from "AI writes code" toward **AI operates inside a well-structured software-production system**.

## Personal agents — a parallel exploration

Personal agents are important to me, but they are not my main professional identity.

I am also exploring systems with:

- durable personal memory;
- reusable skills;
- cross-session continuity;
- local files and app access;
- computer use;
- multimodal / ambient capture;
- local-first or privacy-aware execution.

The interesting version is closer to a persistent collaborator than a stateless chatbot.

## Longer-term direction

Longer term, I am interested in **AI-native company architecture**: a company where business state, capabilities, permissions, workflows and agents are designed as one operating layer.

That direction connects my current enterprise delivery work with the systems I want to build next.

---

These are current directions and working hypotheses, not claims that every layer is already production-ready in my projects.

[← Back to profile](README.md) · [Projects →](PROJECTS.md) · [Work →](WORK.md)
