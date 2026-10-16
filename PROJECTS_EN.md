# Projects

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

This page prioritizes **what each system actually does**. Architecture and technical terms are used to explain implementation, not to replace the product itself.

> **Status:** `Building` = active/private implementation exists · `Planning` = a defined design direction that is not yet a complete project.

---

# Four Core Projects

## 🏢 Enterprise AI Core

`Planning` · Enterprise AI / Reusable Infrastructure

A reusable **AI-native enterprise foundation** for small and traditional organizations. The goal is not another standalone SaaS product, but a shared layer connecting existing systems and repeatedly needed AI capabilities.

### Planned capabilities

- **Connect existing systems**: consume data and exports from `ERP / OA / SaaS / Excel / CSV / Files` without requiring a rip-and-replace migration.
- **Enterprise Context Layer**: represent people, organizations, roles, business objects, events, tasks, state and evidence as queryable enterprise context.
- **Capability Layer**: standardize `OCR / ASR / Vision / Document Parsing / File Conversion / Search / RAG / Model Access` for reuse across business modules.
- **Model / Tool Gateway**: hide provider/model differences so the business layer can switch implementations without being rebuilt.
- **Domain Packs**: package schemas, rules, workflows and agent capabilities for procurement, administration, finance, operations and other domains.
- **Permission / Approval / Audit**: make read scope, action scope, human approval and execution history explicit.
- **Agent Runtime / Business Command Gateway**: let agents advance real workflows through controlled commands and write results back safely.

```text
Existing Systems / Files
          ↓
Enterprise Context
          ↓
Reusable Capabilities
          ↓
Permissions / Audit
          ↓
Agent Runtime
          ↓
Domain Apps & Workflows
```

This is the next abstraction layer above my current enterprise AI delivery work: **moving from building one system per request toward reusable enterprise AI capabilities.**

---

## 🏫 Class OS

`Building` · Agent-native Work System

A personal class-management workbench for Chinese K-12 homeroom teachers. The core idea is not “AI chat for teachers,” but keeping long-running facts, follow-ups and responsibilities inside one traceable operational system.

### Existing / actively validated functionality

- **Class & roster**: classes, student rosters, immutable student IDs and controlled name corrections.
- **Typed Facts**: record student facts/events as structured records instead of loose text.
- **Task / Follow-up**: turn follow-up work into Tasks with responsibility, status and source relationships.
- **Today**: a focused view of what needs attention now.
- **Student Timeline**: inspect facts, events and tasks for one student over time.
- **Corrections & audit**: preserve previous values, versions and audit history instead of silently overwriting facts.
- **Identity / Permission Boundary**: local owner, login, sessions and recovery boundaries.
- **Query Gateway / Business Command Gateway**: route reads and writes through explicit boundaries instead of letting UI/agents edit storage directly.
- **Agent query / drafts**: implementation exists, but database regression and formal gates are still in progress, so this is not presented as fully validated production capability.

Typical flow:

```text
Login
 → Create class / import roster
 → Record student facts or follow-ups
 → Review Today
 → Inspect Student Timeline
 → Preview / confirm corrections and business changes
```

The project tests whether a real work domain can become **structured state that both humans and agents can operate safely.**

---

## 🩺 Health OS / Family Health Records

`Building` · Personal / Family Health Information System

A long-term health record system for personal and family use. The current implementation is a Chinese household-oriented customization and extension of the open-source project **MediKeep**, with emphasis on source preservation, human review, trends, member isolation and recoverability.

### Current source capabilities

- **Multi-file upload & source preservation** for checkups, lab reports and other health documents.
- **OCR / parser candidates** that remain provisional instead of becoming official facts automatically.
- **Human review → official record** with editable candidates and revision history.
- **Health records** for labs, vitals, medications, allergies, vaccines, visits and attachments.
- **Trends & batch comparison** across measurements and checkup sessions.
- **AI assistance** in constrained flows such as “what changed recently,” with source references and no direct writes to official facts.
- **Members & sharing** with household member separation, invitations and scoped visibility.
- **Export & recovery** including CSV/SVG/report export, full backups, verification and isolated restore drills.

Core data path:

```text
Original Report
      ↓
OCR / Parsed Candidate
      ↓
Human Review
      ↓
Official Health Record
      ↓
Trend / Comparison / Export
```

The key rule is simple: **AI can help organize health data, but it must not silently create medical facts.**

---

## 🔬 Research OS

`Building` · Evidence-driven Personal Research & Decision System

A personal **evidence-driven decision support system**. The current goal is not a generic search engine or a chat archive, but a recoverable end-to-end flow from source ingestion to judgment, outcome capture and later replay.

### Current local v0.1 flow

```text
Upload / Ingestion
      ↓
RawSource / ClaimCard / EvidenceSpan
      ↓
Selected-source Chat / Briefing
      ↓
DecisionSnapshot
      ↓
Outcome
      ↓
Replay
```

### Current functionality

- **Source upload / parsing / ingestion** into persistent RawSource records.
- **ClaimCard / EvidenceSpan** linking claims back to original evidence passages.
- **Strict selected-source chat** where the user defines which sources are allowed for the current analysis.
- **Stop-before-generation on insufficient evidence** across chat, briefing and committee flows.
- **Briefing mode** with direction, action, summary, supporting points, counterpoints, risk and field-level evidence state.
- **DecisionSnapshot** to persist the evidence/judgment state at decision time.
- **Outcome** capture after real-world results become available.
- **Replay** to compare original evidence/judgment with later outcomes.
- **Committee** as an optional multi-model review mode, without claiming it is inherently better than the default flow.

The loop is:

**sources → evidence → analysis → judgment → decision snapshot → real outcome → replay.**

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

- **Class OS / Health OS / Research OS** are three domain systems in different real-world contexts.
- **Enterprise AI Core** abstracts repeated capabilities from enterprise delivery into a reusable foundation.
- **Personal Context / Audio Gateway** add reusable context and capabilities for long-running personal agents and other products.

I keep `Building` and `Planning` clearly separated, and I do not present private client systems, other people's repositories or unvalidated features as public proof.

[← Back to profile](README_EN.md) · [Work →](WORK_EN.md) · [Now →](NOW_EN.md)
