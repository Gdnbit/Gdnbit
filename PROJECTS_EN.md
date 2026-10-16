# Projects

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

This is not a flat repository list. It is a map of the **AI-native products and infrastructure** I am building or planning. I care first about who the system is for, what pain it removes, and what workflow it changes; architecture comes second.

> **Status:** `Public` = source available now · `Building` = active/private development · `Preparing OSS` = being cleaned for future open source · `Planning` = a defined direction that is not yet a complete public project.

---

## 🏢 Enterprise AI Core

`Planning` · Enterprise AI / Reusable Infrastructure

**Who it is for**  
Organizations that already run on Excel, OA, ERP, SaaS, file servers and manual handoffs, while AI still exists only as isolated tools or chatbots.

**Pain points**

- business state is fragmented across systems, files and people;
- OCR, ASR, document parsing, model access and file conversion are repeatedly integrated project by project;
- each new departmental request rebuilds accounts, permissions, interfaces and workflows;
- agents can answer questions but cannot safely perform real business actions;
- legacy systems cannot be replaced overnight, yet organizations still need a path toward AI-native operation.

**What I want to build**  
A reusable enterprise AI layer that connects existing systems, business context and AI capabilities, then exposes them upward as shared context and executable tools.

```text
Existing ERP / OA / SaaS / Files
              ↓
     Enterprise Context Layer
              ↓
       Capability / Tool Layer
              ↓
 Permissions / Approval / Audit
              ↓
          Agent Runtime
              ↓
     Domain Apps / Workflows
```

**Core capabilities**  
`Context / Ontology` · `Domain Packs` · `OCR / ASR / Vision` · `Model Gateway` · `Tool Adapters` · `Permissions` · `Audit` · `Agent Runtime`

The goal is not to add another chatbot. It is to let AI read business state, invoke capabilities, advance workflows and write results back safely.

---

## 🏫 Class OS

`Building` · Agent-native Work System

**Who it is for**  
K-12 homeroom teachers managing teaching, student affairs, parent communication and constant ad-hoc work.

**Pain points**

- student information is scattered across chats, spreadsheets, paper notes and memory;
- commitments and follow-up tasks are easy to lose;
- real student events have context, while traditional spreadsheets preserve only fragments;
- drafting notices or reviewing history requires jumping between many sources;
- a generic AI chat box does not know the class state and cannot safely manage it.

**What the system does**  
It brings facts, events, tasks, commitments, communication, timelines, permissions and evidence into one workspace so the teacher and the agent operate on the same structured state.

Examples include recording what actually happened to a student, creating linked follow-up tasks, querying a student's historical context, drafting communication from verified data, and controlling agent read/write actions through approval and audit boundaries.

**Core question**  
How do you turn a real work domain into a system of **facts + events + tasks + permissions + timelines + agents** rather than bolt AI onto existing software?

---

## 🩺 Health OS

`Building` · Personal / Family Health Information

**Who it is for**  
People who want to manage long-term personal or family health records instead of searching through photos, chats and paper reports before every appointment.

**Pain points**

- checkups, clinic visits, labs, imaging and medication history are fragmented;
- medical reports are information-dense and difficult to track over time;
- people forget when tests should be repeated or when old results are no longer current;
- wearable data and hospital records live in separate silos;
- AI can extract information, but medical facts should not be silently written by an unreliable model.

**What the system does**  
It builds a longitudinal health timeline across reports, measurements, visits, medications, follow-up plans and wearable data, using a **AI extraction → human confirmation → official record** workflow to reduce incorrect writes.

Areas of interest include report OCR and structuring, trends, follow-up scheduling, appointment preparation, Apple Health / Health Connect integration, and privacy-aware family-member separation.

**Core question**  
How can personal health data become a long-term, traceable and reviewable health record instead of a pile of documents?

---

## 🔬 Research OS

`Building` · Evidence-driven Research & Decision System

**Who it is for**  
People who use AI for research, comparisons and decisions, but do not want important conclusions to disappear into a chat transcript.

**Pain points**

- a conclusion survives while its sources are forgotten;
- claims and evidence are not explicitly connected;
- assumptions behind a decision are hard to reconstruct later;
- real-world outcomes are rarely fed back into the original judgment;
- the same research often starts from zero next time.

**What the system does**

```text
Source
  ↓
Claim ↔ Evidence
  ↓
Decision Snapshot
  ↓
Outcome
  ↓
Replay / Review
```

The goal is not to generate a longer AI report. It is to preserve the relationship between **sources, evidence, judgment, decisions and outcomes** so the work can be reviewed and replayed later.

**Core question**  
How do you turn a one-off AI conversation into a research and decision system with evidence, memory and feedback?

---

## 🏎️ LLM Race

`Public` · Agent Infrastructure  
[GitHub →](https://github.com/Gdnbit/llm-race)

**Who it is for**  
AI agents, agent workflows and developers that need to choose the right model for different tasks.

**Pain points**

- pricing, context windows, modalities and capability signals are fragmented;
- the strongest overall model is not always the best model for one workflow step;
- agents are often hard-wired to one model;
- manually checking leaderboards and editing configuration does not fit automated workflows.

**What the system does**  
It aggregates model metadata and evaluation signals, aligns models across sources, scores candidates, and exposes model selection through MCP as an agent-callable capability.

An agent can ask for a shortlist under concrete requirements such as long context, cost sensitivity and modality support, then receive candidates, score breakdowns and rationales instead of a static leaderboard.

**Core question**  
How can model selection become a dynamic capability inside an agent runtime instead of a developer-only configuration step?

---

## 🧠 Personal Context Infrastructure

`Planning` · Personal Agent Infrastructure

**Who it is for**  
People who want a personal agent to understand long-term life and work context instead of repeatedly explaining themselves in every conversation.

**Pain points**

- personal context is scattered across audio, location, photos, calendars, app usage, health data and files;
- most agents see only the current conversation or a few connected sources;
- long-term memory without provenance and timelines becomes unreliable;
- users cannot easily move their own context between different agents or models.

**What the system does**  
It aligns multi-source personal data onto a canonical timeline, extracts structures such as Event / Person / Claim / Task, preserves provenance, and exposes the result through API / MCP for personal agents.

The important idea is that **the user owns the context layer** and agents consume it, rather than memory being locked inside one product.

---

## 🎙️ Audio Intelligence Gateway

`Planning` · Reusable AI Capability

Speech-to-text in real environments is more than one ASR API call: recordings contain multiple speakers, accents, noise, domain terms, segmentation problems and context-dependent corrections.

The direction is to package multiple ASR engines, speaker diarization, context correction, cross-model verification and Transcript → Artifact generation behind one reusable interface.

This capability can support Class OS, Personal Context, interviews, meetings and other products without rebuilding the transcription pipeline each time.

---

## 🖼️ Image Quality Audit / Image Dedup

`Preparing OSS` · Local-first Utilities

These are smaller, more self-contained tool products.

**Image Dedup** addresses duplicate and near-duplicate cleanup in photo collections or datasets using exact hashes, perceptual similarity and human review instead of filenames or manual inspection alone.

**Image Quality Audit** evaluates image assets or training datasets across quality metrics such as blur, exposure, resolution, duplication and face suitability, then supports review and export.

Their value is in demonstrating a complete workflow of **clear input → explainable detection → human review → exportable result**.

---

## How the projects connect

They are different layers of the same broader question:

```text
Concrete business pain
        ↓
Usable workflow / product
        ↓
Reusable AI capabilities
        ↓
Structured context / state
        ↓
Tools + permissions + runtime
        ↓
Agent-native systems
```

Class OS, Health OS and Research OS are **domain systems**. LLM Race and Audio Gateway sit closer to **capabilities / agent infrastructure**. Personal Context explores the context foundation for long-running personal agents. Enterprise AI Core is the attempt to bring those ideas together inside real organizational environments.

## Public proof vs. work in progress

I keep a clear distinction between public, independently inspectable work; private projects already under development; projects being prepared for open source; and directions that are still at the planning/design stage.

A `Planning` label is not presented as something already delivered, and private client work is not used as public proof.

[← Back to profile](README_EN.md) · [Work →](WORK_EN.md) · [Now →](NOW_EN.md)
