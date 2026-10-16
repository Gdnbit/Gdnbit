# Projects

A curated map of the systems I build and what each one proves.

> **Status:** `Public` = source available now · `Building` = active/private development · `Preparing OSS` = being cleaned for a future public release.

## Selected projects

| Project | Status | Area | What it proves |
| --- | --- | --- | --- |
| **[LLM Race](https://github.com/Gdnbit/llm-race)** | `Public` | Agent infrastructure | MCP-facing model discovery/selection, cross-source alignment, scoring and agent-consumable tooling. |
| **Class OS** | `Building` | Agent-native product | Domain modeling, structured facts/tasks, permissions, auditability and human/agent boundaries in a real work domain. |
| **Research OS** | `Building` | Evidence-driven AI | Source-grounded research, claims/evidence, decision snapshots and replayable outcomes. |
| **Image Dedup** | `Preparing OSS` | Local-first tooling | Exact/perceptual duplicate detection, human review and desktop/browser product delivery. |
| **Image Quality Audit** | `Preparing OSS` | Vision workflow | Explainable quality checks, duplicate grouping, review workflows and exportable results. |

## How the projects connect

The projects are not meant to be a random collection of AI demos. They sit along a broader path:

```text
Focused tools / workflows
        ↓
Reusable capabilities
        ↓
Domain-specific systems
        ↓
Agent-facing tools & runtime
        ↓
AI-native enterprise systems
```

### 1. Workflow products

Projects such as Class OS explore how to turn a real domain into structured state, actions, permissions, evidence and workflows that both humans and agents can operate.

### 2. Agent infrastructure

LLM Race sits closer to the infrastructure side: exposing model-selection capability through MCP so an agent can consume it as a tool rather than as a separate website or manual comparison step.

### 3. Evidence, memory and traceability

Research OS explores a recurring requirement for useful AI systems: retaining sources, evidence, decisions and outcomes so work can be reviewed later instead of disappearing into a chat transcript.

### 4. Reusable capability layer

I am interested in packaging capabilities such as OCR, ASR, document processing, vision, model access and file conversion behind stable interfaces so different products and agents can reuse or swap them without rebuilding the same integration repeatedly.

### 5. AI-native development

Most of these systems are developed with coding agents as a core part of the workflow. Specs, contracts, tests, evals, repository context and review loops become part of the development interface.

## Public proof vs. work in progress

A private or building project is not presented as equivalent to public proof. Public repositories, commit history, documentation, tests and releases are the independently inspectable layer.

As more projects are cleaned for release, this page will gradually shift from `Building` / `Preparing OSS` to direct repository links.

[← Back to profile](README.md) · [Work →](WORK.md) · [Now →](NOW.md)
