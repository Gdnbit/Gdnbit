# Projects

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

This page prioritizes **what each system actually does**. Architecture and technical terms are used to explain implementation, not to replace the product itself.

> **Status guide:** `Public` means source is currently visible and inspectable, **not** that a production release exists; `Private` means implementation exists but is not publicly inspectable; `Planning` denotes architectural direction.

---

# Four Core Projects

## 🏫 [ClassMatter · 班事有谱](https://github.com/Gdnbit/classmatter)

`Public / Pre-alpha` · Agent-assisted Homeroom Workbench

**Problem:** Homeroom teachers manage scattered student records and long-running follow-ups, making it hard to track open loops and maintain reliable evidence of what happened.

**Inspectable implementation scope:**

- local owner setup / login and class / roster management;
- typed student facts, events and follow-up Tasks;
- Today and Student Timeline for work and context;
- preview / explicit approval for controlled corrections, version history and audit;
- controlled Agent queries and drafts, without autonomous business-write approval.

The public repository is an **isolated publication candidate**, separate from the private development repository. It is **Pre-alpha and synthetic-data only**, not an approved R1, real-student-data deployment or production release. Tests and CI do not establish real-world teacher time savings.

[Inspect source, setup and limitations →](https://github.com/Gdnbit/classmatter)

---

## 🔬 [ThinkRoom · 思考间](https://github.com/Gdnbit/thinkroom)

`Public / Early-stage` · Private Knowledge & Multi-perspective Thinking

**Problem:** Saved articles, research, documents and notes are hard to retrieve and compare when new questions arise. ThinkRoom is meant to make accumulated information usable again, with traceable sources and different reasoning modes.

**Current source workflow:**

```text
Collect Uploads / Feeds
  → Parse Text / OCR
  → Process RawSource / ClaimCard / EvidenceSpan
  → Store raw and derived information
  → Retrieve within relevant source scope
  → Chat / Briefing / Committee / Replay
```

- ingest documents and optional feeds while retaining source context;
- associate claims with supporting evidence and constrain answers to selected sources;
- support chat, structured Briefing and manually selected multi-perspective Committee discussions;
- preserve DecisionSnapshot, record Outcome and review through Replay.

Financial research was an early use case, but this is **not a validated investment adviser or automated trading system**. Mock/local tests do not establish real-model quality or public-hosting readiness; optional modules have different maturity levels.

[Inspect source, synthetic demo and design rationale →](https://github.com/Gdnbit/thinkroom)

---

## 🩺 HealthBox / Family Health Records

`Private / Preparing for open source` · Personal & Family Health Records

**Problem:** Health reports and longitudinal measurements are scattered and hard to compare, validate and recover.

This is a customization and extension of the upstream open-source **MediKeep** project. `HealthBox` is the intended public-facing name; **there is not yet a public HealthBox repository**. The following is a description of private implementation rather than independently inspectable evidence:

- multi-file upload with original reports and provenance;
- OCR/parser candidates requiring human approval before formal entry;
- lab/vital trends and checkup-batch comparisons;
- household member boundaries, sharing, export and backup/restore;
- constrained AI assistance that cannot silently create or alter official health facts.

Upstream features and the candidate's modifications must be evaluated separately. Public release awaits its own audit.

---

## 🏢 Enterprise AI Core

`Planning / Architecture direction` · Enterprise AI / Reusable Infrastructure

A design direction informed by my enterprise AI delivery work, **not a shipped stand-alone platform**.

It explores linking `ERP / OA / SaaS / Excel / Files` to reusable `OCR / ASR / document parsing / RAG / model / tool` capabilities, an Enterprise Context / State layer, explicit permissions / approvals / audit and controlled Agent Runtime for domain workflows such as procurement, administration and operations.

```text
Existing Systems / Files
      → Enterprise Context / State
      → Reusable Capabilities
      → Permissions / Approval / Audit
      → Agent Runtime / Domain Workflows
```

The long-term goal is to make agents participants in authorized business workflows, rather than chat interfaces bolted onto them. Implementation and suitability need independent future validation.

---

# Other Directions Taking Shape

## 🧠 Personal Context Infrastructure · `Planning`

Align audio, location, calendars, app usage, health/wearable data and files onto a canonical timeline; extract `Event / Person / Claim / Task` with provenance; expose the resulting context through API / MCP to personal agents. The key idea is that **the user owns the context layer and agents consume it.**

## 🎙️ Audio Intelligence Gateway · `Planning`

A reusable layer for multi-ASR, speaker diarization, context correction, domain terminology, cross-model verification and `Transcript → Artifact`, serving Class OS, Personal Context, meetings, interviews and other products.

## 🖼️ Image Quality Audit / Image Dedup

Smaller local-first utility workflows for duplicate / near-duplicate detection, image-quality assessment, human review and export. Their main value is demonstrating a complete **clear input → explainable detection → human review → exportable result** workflow.

---

# How the projects connect

```text
Real business / personal context
        ↓
Domain System
        ↓
Reusable Capabilities
        ↓
Structured Context / State
        ↓
Tools + Permission + Runtime
        ↓
Agent-native System
```

- **ClassMatter / ThinkRoom / HealthBox** are domain systems in different contexts. The first two have public source; HealthBox remains private and in preparation.
- **Enterprise AI Core** abstracts repeated capabilities from enterprise delivery into a reusable foundation.
- **Personal Context / Audio Gateway** add reusable context and capabilities for long-running personal agents and other products.

I keep `Building` and `Planning` clearly separated, and I do not present private client systems, other people's repositories or unvalidated features as public proof.

[← Back to profile](README_EN.md) · [Work →](WORK_EN.md) · [Now →](NOW_EN.md)
