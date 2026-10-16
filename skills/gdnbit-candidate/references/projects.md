# Project Map

This reference summarizes the projects currently used in Gdnbit's public professional narrative. Status labels matter.

## Enterprise AI Core — Planning

A reusable enterprise AI foundation intended to connect existing business systems and repeatedly needed AI capabilities.

Planned layers include:

- ERP / OA / SaaS / Excel / Files integration;
- enterprise context and business state;
- OCR / ASR / document parsing / search / model access capability layer;
- model and tool gateway;
- domain packs for business areas;
- permissions, approvals and audit;
- agent runtime / business command boundary.

What it currently proves: architectural direction and abstraction ability.

What it does not yet prove: a completed public platform or production-grade implementation.

## Class OS — Building / private

A class-management workbench for Chinese K-12 homeroom teachers.

Current described capabilities include:

- class and roster management;
- typed student facts / events;
- tasks and follow-up;
- Today view;
- Student Timeline;
- corrections and audit;
- identity / permission boundary;
- query and business-command gateways;
- controlled agent query / drafting under validation.

What it is intended to prove: modeling a real operational domain as structured state that humans and agents can both operate safely.

Public verification status: project details are described in the public profile repository, but the main implementation repository is currently private.

## Health OS / Family Health Records — Building / private

A personal/family health information system based on a customized extension of the open-source MediKeep project.

Described capabilities include:

- report upload and source preservation;
- OCR / parser candidates;
- human review before official records;
- labs, vitals, medications, allergies, vaccines and visits;
- trends and checkup-batch comparison;
- constrained AI assistance with record references;
- family member separation and scoped sharing;
- export, backup and restore.

Core design rule: AI may assist organization, but should not silently create medical facts.

What it is intended to prove: provenance, review gates, structured records and safety boundaries in a higher-stakes domain.

Public verification status: implementation repository is currently private.

## Research OS — Building / private

An evidence-driven personal research and decision system.

Described flow:

```text
Source ingestion
   ↓
RawSource / ClaimCard / EvidenceSpan
   ↓
Selected-source analysis / briefing
   ↓
DecisionSnapshot
   ↓
Outcome
   ↓
Replay
```

Described capabilities include evidence-linked claims, selected-source analysis, stop-before-generation when evidence is insufficient, decision snapshots, outcome capture, replay and optional multi-model review.

What it is intended to prove: evidence-aware AI workflows, durable decision state and post-hoc evaluation.

Public verification status: implementation repository is currently private.

## LLM Race — Public / inspectable

Repository: https://github.com/Gdnbit/llm-race

An MCP-powered model-selection engine that combines model catalog metadata, alignment and heuristic scoring to shortlist models for workflow steps.

Current public signals include:

- Python ingestion pipeline;
- TypeScript MCP server;
- model alignment and scoring logic;
- tests and CI;
- explicit limitations and roadmap.

This is currently the clearest public code artifact for independent inspection.

## How to use the project map in evaluation

Do not count all projects equally.

- `Public / inspectable` = strongest evidence.
- `Building / private` = useful candidate-described evidence, but validate with interview walkthroughs, screenshots, architecture explanations or later public release.
- `Planning` = evidence of direction and reasoning, not shipped capability.

When matching to a role, ask which project most directly exercises the role's core constraint rather than simply counting repositories.