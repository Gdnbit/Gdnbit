# Now

[中文](NOW.md) · [English](NOW_EN.md)

My current focus is no longer just about adding AI features to existing software. The deeper question is:

> **What should software look like when agents become part of the operating model of an organization?**

I care about how agents read business state, invoke capabilities, respect permissions, advance workflows, receive human approval, and write outcomes back into systems — rather than remaining an extra chat interface beside the real work.

## From project delivery to reusable enterprise AI

The path I am exploring is:

```text
Custom Delivery
      ↓
Reusable Capabilities
      ↓
Domain Packs / Business Modules
      ↓
Enterprise Context + Capability Layer
      ↓
Agent Runtime
      ↓
AI-native Enterprise System
```

The goal is to move from solving one request at a time toward reusable layers that capture recurring business structures, capabilities and execution patterns.

## Enterprise context & state

Agents operating inside real organizations need more than prompts or document retrieval.

They need a durable operating context that can represent and safely update:

- business entities and relationships;
- current state and historical facts;
- roles, responsibilities and permissions;
- claims, evidence and provenance;
- tasks, commitments, events and exceptions;
- organizational memory that can be queried and written back safely.

The important idea for me is not a single "context engineering" technique, but a persistent shared operating context for software and agents.

## Capability layer

Many AI products repeatedly integrate the same capabilities:

`OCR` · `ASR` · `Document Parsing` · `File Conversion` · `Vision` · `Search / RAG` · `Model Access` · `Tool Adapters`

I am interested in exposing these through stable interfaces so different business modules and agents can reuse them while models, providers and implementations evolve independently underneath.

Over time, this begins to look like a **Capability Layer / AI Capability Bus** between the business layer and model/tool providers.

## Agent runtime

The model is only one component of an agent system.

What increasingly determines whether agents can operate in production is the runtime around them:

- MCP / tool execution;
- skills and reusable procedures;
- long-running tasks and resumable state;
- approvals and human intervention;
- permissions and business-command boundaries;
- subagents and delegation;
- execution traces, observability and recovery;
- evals, policy checks and audit.

The question I care about is: **how can agent execution itself become a controllable, recoverable and auditable enterprise process?**

## AI-native development

Coding agents are already part of how I build software.

The next layer I care about is the environment around them:

`Coding Agents` · `Agent Harnesses` · `Specs` · `Tests` · `Evals` · `Repo-level Context` · `Structured Development Records`

The shift is not simply that "AI can write code". It is that:

> **software production is moving from humans manually editing every line toward humans maintaining an engineering environment that agents can continuously understand, execute against, validate and improve.**

## Personal agents — a parallel exploration

Personal agents matter to me, but they are not my primary professional label.

In parallel, I am exploring:

- durable personal memory;
- reusable skills;
- cross-session continuity;
- local files and app access;
- computer use;
- multimodal / ambient capture;
- local-first / privacy-aware execution.

The interesting version is closer to a persistent collaborator than a stateless chatbot.

## Longer-term: AI-native company / ANC

Longer term, I am interested in an **AI-native Company Architecture**:

```text
Business State
      ↓
Context / Ontology
      ↓
Capabilities / Tools
      ↓
Permissions / Governance
      ↓
Agents / Workflows
      ↓
Actions
      ↓
Audit / Memory / Outcomes
```

The idea is to design business state, capabilities, permissions, workflows and agents as one operating layer.

That direction connects my current enterprise AI delivery work with the reusable systems I want to build next.

---

These are current directions and working hypotheses, not claims that every layer is already production-ready in my existing projects.

[← Back to profile](README_EN.md) · [Projects →](PROJECTS_EN.md) · [Work →](WORK_EN.md)
