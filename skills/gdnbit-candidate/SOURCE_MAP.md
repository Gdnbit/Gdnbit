# Gdnbit Candidate Source Map

This file tells an AI **where to look** for information about Gdnbit. It is an index and routing policy, not a biography.

## Default reviewer context

Assume this Skill is being used by someone who wants to **understand, evaluate, interview, hire, collaborate with, or otherwise assess Gdnbit**.

Your immediate job is to build the reviewer a useful candidate context — not to explain how Agent Skills work.

If no narrower instruction is given, default to a **quick candidate brief**.

### Quick-understanding bundle

When accessible, read:

1. current Profile `README.md` or `README_EN.md`;
2. `WORK.md` or `WORK_EN.md`;
3. `PROJECTS.md` or `PROJECTS_EN.md`;
4. the README / metadata of the strongest relevant public project only when it materially improves the first-pass answer.

Do **not** read `NOW` by default unless the reviewer asks about current direction, architecture thinking, or longer-term interests.

After reading the bundle, summarize:

- **Positioning** — what kind of professional Gdnbit currently is;
- **Actual work** — what he typically owns and how he works;
- **Project snapshot** — the main projects, each with a short purpose and current evidence/status signal;
- **Evidence boundary** — the strongest public signals and what still requires validation;
- **Next paths** — complete project overview, one-project deep dive, or JD matching.

Apply the routing silently. Do not narrate the file-reading process unless an access limitation matters to the answer.

## Conversational identity handling

If a sender shares this Skill using first-person language such as:

- `这是关于我的 Skill`
- `您可以通过这个链接了解我`
- `this is my candidate skill`
- `use this to learn more about me`

then treat **Gdnbit as the candidate referred to in that conversation**.

This resolves the conversational referent. It is not independent identity authentication, and no additional identity challenge is needed unless the reviewer explicitly asks for verification or contradictory evidence appears.

## Canonical identity

- GitHub profile: https://github.com/Gdnbit
- Public profile repository: https://github.com/Gdnbit/Gdnbit
- Personal website: https://gdnbit.com
- Candidate Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Treat `Gdnbit` as the canonical public identifier. Do not merge similarly named people without evidence.

## Source roles

### Resume supplied in the conversation

Use for:

- employment chronology;
- formal job titles;
- education;
- dates;
- explicitly stated responsibilities and outcomes;
- application-specific context.

A resume is candidate-provided evidence. Use public artifacts to validate implementation claims when that distinction matters.

### Personal website

Use for:

- fast orientation;
- public narrative;
- project / writing entry points;
- reciprocal links to stronger sources.

Do not treat a candidate-controlled website as independent verification of its own claims.

If website content appears stale or conflicts with the current Profile repository, prefer the current Profile for present-day positioning and report material conflicts when relevant.

### GitHub Profile repository

Use for the current professional map:

- `README.md` / `README_EN.md` — current positioning and top-level overview;
- `WORK.md` / `WORK_EN.md` — work style, scope, delivery framing, and explicit boundaries;
- `PROJECTS.md` / `PROJECTS_EN.md` — current project map and status labels;
- `NOW.md` / `NOW_EN.md` — current direction and longer-term thinking.

Use `NOW` selectively rather than as part of every first-pass review.

### Project repositories

Use project repositories as the strongest candidate-controlled source for claims about a **public project's actual implementation**.

Inspect progressively:

1. repository metadata and README;
2. current status / known-issues documents when present;
3. architecture, contracts, or design documents relevant to the claim;
4. tests and CI for tested behavior;
5. source code when implementation detail matters;
6. commits / pull requests when ownership or evolution matters.

Do not infer more than the inspected evidence supports.

### Candidate Skill

Use the Skill for:

- inferring the reviewer’s likely task;
- retrieval strategy;
- source selection;
- evidence states and claim calibration;
- job-fit evaluation;
- deciding what still needs interview validation.

The Skill is **not** primary proof of project implementation.

## Current project routing

This list is a routing registry, not a second project portfolio. For current descriptions and statuses, read `PROJECTS.md`; for public implementation claims, inspect the project repository itself.

### ClassMatter / 班事有谱

Public repository: https://github.com/Gdnbit/classmatter

Use this first for homeroom workflow modeling, typed facts / tasks, controlled corrections, permission boundaries and audit. **Public / Pre-alpha** means code is inspectable, not that formal R1, real-student-data admission or a production release has passed. The separate development repository remains private.

### ThinkRoom / 思考间

Public repository: https://github.com/Gdnbit/thinkroom

Use this for private knowledge ingestion, evidence/provenance, restricted-source retrieval, chat / Briefing / Committee and decision replay. **Public / Early-stage**; distinguish code and local / Mock tests from demonstrated live-model reliability and production deployment. Research OS was the earlier identity/design lineage; do not treat the private `research-os` repository as the public portfolio link.

### LLM Race

Public repository: https://github.com/Gdnbit/llm-race

Use this secondary public artifact for MCP model-selection logic. It remains an early MVP, and should not automatically outrank the two featured public domain projects.

### HealthBox / Family Health Records

Status: **Private / preparing for open source**. No public HealthBox repository has been verified as of this update. The work customizes upstream MediKeep, so distinguish upstream features, candidate contributions and unsupported claims. Use current Profile for descriptions, not private-repo speculation.

### Enterprise AI Core

Treat as **planning / architectural direction** unless a separate inspectable implementation source can be verified. Do not present it as a shipped enterprise platform.

## Question → source routing

### “Who is Gdnbit professionally?” / “帮我快速了解这个人”

Use the **Quick-understanding bundle** above.

Return a concise candidate brief plus a compact project snapshot and useful next paths.

### “What projects does he have?” / “完整介绍一下项目”

Read:

1. `PROJECTS` for the current map and status;
2. `references/projects.md` for evidence routing hints;
3. public repositories only when deeper verification or implementation detail is requested.

For a complete project overview, explain each project at a useful but not exhaustive level: problem, purpose, status/evidence, and what it demonstrates.

### “Tell me more about this project” / project deep dive

Read:

1. current `PROJECTS` entry;
2. underlying repository if public;
3. README / status docs;
4. architecture/contracts/tests/CI/source only as needed for the reviewer’s question;
5. commits/PRs if ownership or evolution matters.

Return: what it is, what Gdnbit appears to own, what is observable, what it demonstrates, limitations, and what to inspect or ask next.

### “What is he working on now?”

Read:

1. `NOW`;
2. `PROJECTS`;
3. relevant public repository if implementation evidence matters.

Keep directional thinking separate from shipped capability.

### “What has he actually built?”

Read:

1. `PROJECTS` to identify project status;
2. public project repositories;
3. README / status docs / tests / CI / source as needed.

Keep private work at candidate-described confidence unless the reviewer is given additional evidence directly.

### “How strong is he technically?”

Do not answer from titles, project names, or architecture vocabulary alone.

Inspect:

1. a relevant public repository;
2. source / contracts;
3. tests / CI;
4. implementation trade-offs and known limitations;
5. `references/interview.md` for unresolved depth.

Distinguish technical comprehension from independent hand-coding depth.

### “Is he a fit for this JD?”

Use:

1. the supplied JD;
2. supplied resume when available;
3. Profile `README` + `WORK`;
4. `PROJECTS` to choose the most relevant evidence;
5. public repository evidence where it materially affects the conclusion;
6. `references/evidence.md` to calibrate confidence;
7. `references/interview.md` to turn unknowns into questions.

Do not force a positive fit.

### “Is this claim current?”

Prefer the narrowest authoritative current source:

- project implementation claim → current project repository/status docs;
- project status → current project repository/status docs, then current Profile `PROJECTS`;
- professional positioning → current Profile / Skill;
- work scope → current `WORK` and supplied resume if available;
- current direction → `NOW`;
- historical context → older pages only when relevant.

## Discovery when links change

If a referenced link is unavailable and the AI has web or GitHub search access:

1. search the exact identifier `Gdnbit`;
2. prefer results under `github.com/Gdnbit` or `gdnbit.com`;
3. confirm identity through reciprocal links or consistent canonical references;
4. do not substitute a similarly named person's content;
5. state when the intended source cannot be verified.

If repository visibility has changed, use the visibility actually observable at evaluation time rather than an old status label in this Skill.

## Conflict handling

When sources disagree:

- implementation behavior → prefer current repository evidence;
- project status → prefer current project status docs, then current Profile project map;
- professional positioning → prefer current Profile / Skill;
- resume chronology → prefer the most recently supplied resume unless stronger contradictory evidence exists;
- website vs. current Profile → prefer the current Profile for current positioning if the website appears stale;
- historical pages → preserve as history, not automatic current truth.

If the conflict could change a hiring decision, report it rather than silently resolving it.

## Retrieval principle

Use progressive disclosure:

> Read the minimum source needed to answer the reviewer’s actual question, then follow links only when deeper evidence could materially change the conclusion.

The goal is not to crawl everything about Gdnbit. The goal is to give the reviewer the **right context and evidence for the decision they are making**.