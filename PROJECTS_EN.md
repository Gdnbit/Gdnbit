# Projects

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

This is not a flat list of repositories. It is a map of the systems I am building and what each project is meant to validate.

> **Status:** `Public` = source available now · `Building` = active/private development · `Preparing OSS` = being cleaned for future open-source release.

## Selected projects

| Project | Status | Area | What it validates |
| --- | --- | --- | --- |
| **[LLM Race](https://github.com/Gdnbit/llm-race)** | `Public` | Agent Infrastructure | MCP-facing model discovery and selection, cross-source model alignment, scoring and agent-consumable tooling. |
| **Class OS** | `Building` | Agent-native Product | Turning a real work domain into structured facts, tasks, permissions, auditability and human/agent boundaries. |
| **Research OS** | `Building` | Evidence-driven AI | Source-grounded research, claim/evidence structures, decision snapshots and replayable outcomes. |
| **Image Dedup** | `Preparing OSS` | Local-first Tooling | Exact/perceptual duplicate detection, human review and desktop/browser product delivery. |
| **Image Quality Audit** | `Preparing OSS` | Vision Workflow | Explainable quality checks, duplicate grouping, review workflows and exportable results. |

## How the projects connect

The projects are not intended to be a random collection of AI demos. They sit along a broader path:

```text
Focused tools / workflows
        ↓
Reusable capabilities
        ↓
Domain-specific systems
        ↓
Agent-facing tools / runtime
        ↓
AI-native enterprise systems
```

### 1. Workflow / domain products

Projects such as Class OS explore how to turn a real domain into **structured state, actions, permissions, evidence and workflows** that both humans and agents can operate safely.

That is closer to what I mean by an agent-native product than simply adding a chat interface.

### 2. Agent infrastructure

LLM Race sits closer to the infrastructure side: exposing model discovery, comparison and recommendation through MCP so an agent can consume model-selection capability directly instead of relying on a separate manual comparison step.

The interesting question is not only how to build a leaderboard, but **how model selection itself becomes a callable capability inside an agent runtime.**

### 3. Evidence, memory and traceability

Research OS explores a recurring requirement for useful AI systems: retaining sources, claims, evidence, decision context, snapshots and outcomes so work can be reviewed later instead of disappearing into a chat transcript.

Those structures also matter for enterprise-agent auditability, memory and responsibility boundaries.

### 4. Reusable capability layer

I am interested in packaging capabilities such as:

`OCR` · `ASR` · `Document Parsing` · `File Conversion` · `Vision` · `Search / RAG` · `Model Access` · `Tool Adapters`

behind stable interfaces so different products and agents can reuse them, switch providers or models, and evolve independently of the business layer.

### 5. AI-native development

Most of these systems are developed with coding agents as a core part of the workflow.

That makes the following part of the development interface itself:

`Specs` · `Contracts` · `Tests` · `Evals` · `Repository Context` · `Development Records` · `Review Loops`

The repository is no longer just code; it increasingly becomes **an environment that an agent can understand, execute against, validate and iteratively improve.**

## Public proof vs. work in progress

Private projects, building projects and independently inspectable public work are not equivalent forms of evidence.

I prefer public repositories, commit history, documentation, tests and releases to be the verifiable layer. Projects that are not yet public remain clearly labeled rather than being presented as externally verified proof.

As projects are cleaned and released, this page will gradually replace `Building / Preparing OSS` labels with direct repository links.

[← Back to profile](README_EN.md) · [Work →](WORK_EN.md) · [Now →](NOW_EN.md)
