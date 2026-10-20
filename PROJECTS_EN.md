# Projects

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

Projects are presented by the problems they tackle, their core capabilities and the product ideas behind them. Visit each project repository for implementation details.

---

# Core Projects

## 🏫 [ClassMatter · 班事有谱](https://github.com/Gdnbit/classmatter)

**A workspace for homeroom teachers.** Bring student records and follow-ups out of scattered chats, spreadsheets and personal memory, then organize them through records, tasks, Today and Timeline views so class matters can be tracked and revisited.

The idea goes beyond a to-do list: help teachers notice what remains unresolved, without having to keep everything in their heads.

[Explore ClassMatter →](https://github.com/Gdnbit/classmatter)

---

## 🔬 [ThinkRoom · 思考间](https://github.com/Gdnbit/thinkroom)

**Make collected knowledge useful in the next thinking session.** Turn articles, notes, documents and different viewpoints into searchable, source-linked knowledge, then explore it through chat, research briefs, multi-perspective discussion and decision review.

More than “chat with your files,” ThinkRoom focuses on the journey from information collection and understanding to reasoning, decisions and learning from outcomes.

[Explore ThinkRoom →](https://github.com/Gdnbit/thinkroom)

---

## 🩺 [HealthBox](https://github.com/Gdnbit/healthbox)

**Long-term health records for individuals and families.** Organize medical reports, lab measurements and health history with document parsing, human review, trends, family sharing and backup, so records remain useful over time.

The guiding principle is to retain sources and keep people in control of confirmed health facts. The project builds on the open-source MediKeep foundation with household-focused customization.

---

## 🏢 Enterprise AI Core

**An exploration of reusable enterprise AI infrastructure drawn from real delivery work.** The idea is to connect ERP, OA, files and business processes with structured context, OCR / ASR, model access, tools and authorization boundaries for agent workflows.

Instead of rebuilding the same integrations for every new request, the aim is to accumulate reusable capabilities and domain workflows.

---

# Other Directions Taking Shape

## 🧠 Personal Context Infrastructure

Align audio, location, calendars, app usage, health/wearable data and files onto a canonical timeline; extract `Event / Person / Claim / Task` with provenance; expose the resulting context through API / MCP to personal agents. The key idea is that **the user owns the context layer and agents consume it.**

## 🎙️ Audio Intelligence Gateway

A reusable layer for multi-ASR, speaker diarization, context correction, domain terminology, cross-model verification and `Transcript → Artifact`, serving ClassMatter, Personal Context, meetings, interviews and other products.

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

- **ClassMatter / ThinkRoom / HealthBox** address different domains: class management, knowledge and health.
- **Enterprise AI Core** abstracts repeated capabilities from enterprise delivery into a reusable foundation.
- **Personal Context / Audio Gateway** add reusable context and capabilities for long-running personal agents and other products.



[← Back to profile](README_EN.md) · [Work →](WORK_EN.md) · [Now →](NOW_EN.md)
