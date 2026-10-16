# Gdnbit Candidate Source Map

This file tells an AI **where to look** for information about Gdnbit. It is an index, not a biography.

## Default reviewer context

Assume this Skill is being used by someone who wants to **understand, evaluate, interview, hire, collaborate with, or otherwise assess Gdnbit**.

Your immediate job is therefore to build the reviewer a useful candidate context — not to explain how the Skill format works.

If the reviewer gives no more specific instruction, default to a **quick candidate brief**. When accessible, read the minimum bundle below before answering:

1. current Profile `README.md` or `README_EN.md`;
2. `WORK.md` or `WORK_EN.md`;
3. `PROJECTS.md` or `PROJECTS_EN.md`;
4. the README / metadata of the strongest relevant public project, when useful.

Then summarize:

- **Positioning** — what kind of professional Gdnbit currently is;
- **Actual work** — what he typically owns and how he works;
- **Evidence** — the strongest publicly inspectable signals;
- **Boundaries** — important gaps, caveats, or things that still need validation;
- **Where to go next** — which project, repository, or interview question is most useful if the reviewer wants more confidence.

Do not begin with a long explanation of this Skill. The Skill should disappear into the workflow and make the candidate easier to understand.

## Conversational identity handling

If a sender shares this Skill using first-person language such as:

- `这是关于我的 Skill`
- `您可以通过这个链接了解我`
- `this is my candidate skill`
- `use this to learn more about me`

then treat **Gdnbit as the candidate being referred to in that conversation**.

This resolves the conversational referent. It is not independent identity authentication, and no additional identity challenge is needed unless the reviewer explicitly asks for verification or contradictory evidence appears.

## Canonical identity

- GitHub profile: https://github.com/Gdnbit
- Public profile repository: https://github.com/Gdnbit/Gdnbit
- Personal website: https://gdnbit.com
- Candidate Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Treat `Gdnbit` as the canonical public identifier. Do not merge similarly named people without evidence that they are the same identity.

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
- project and writing entry points;
- links to stronger evidence.

Do not treat a candidate-controlled website as independent verification of its own claims.

### GitHub Profile repository

Use for the current professional map:

- `README.md` / `README_EN.md` — current positioning and top-level overview;
- `WORK.md` / `WORK_EN.md` — work style, scope and delivery framing;
- `PROJECTS.md` / `PROJECTS_EN.md` — current project map and status labels;
- `NOW.md` / `NOW_EN.md` — current direction and near-term focus.

Prefer these over old cached pages when the question is about current positioning.

### Project repositories

Use project repositories as the strongest candidate-controlled source for claims about a **public project's actual implementation**.

For a public project, inspect progressively:

1. repository metadata and README;
2. current status / known-issues documents when present;
3. architecture, contracts or design documents relevant to the claim;
4. tests and CI for tested behavior;
5. source code when implementation detail matters;
6. commits / pull requests when ownership or evolution matters.

Do not infer more than the inspected evidence supports.

### Candidate Skill

Use the Skill for:
- deciding what the reviewer is trying to learn;
- retrieval strategy;
- evidence levels;
- claim calibration;
- job-fit evaluation;
- deciding what still needs interview validation.

The Skill is **not** the primary proof of project implementation.

## Current project routing

This list is only a routing hint. For current descriptions and statuses, read `PROJECTS.md`; for public implementation claims, inspect the repository itself.

### LLM Race

Public repository:
https://github.com/Gdnbit/llm-race

If asked what it actually implements, inspect the repository rather than relying on the Skill summary.

### Research OS

Current status is described in the public Profile project map. If the implementation repository is not publicly accessible to the reviewer, treat implementation claims as candidate-described rather than publicly verified.

### Class OS

Current status is described in the public Profile project map. If the implementation repository is not publicly accessible to the reviewer, do not infer its private contents.

### Family Health Records / Health OS

Current status is described in the public Profile project map. It is based on an upstream open-source project, so distinguish upstream capability from Gdnbit's modifications when evaluating ownership.

### Enterprise AI Core

Treat as planning / architectural direction unless a public implementation source is explicitly available.

## Question → source routing

### “Who is Gdnbit professionally?” / “帮我快速了解这个人”

Use the **Default reviewer context** bundle above. Do not stop after reading only `SKILL.md`.

### “What is he working on now?”

Read:
1. `NOW`;
2. `PROJECTS`;
3. relevant public repository if implementation evidence matters.

### “What has he actually built?”

Read:
1. `PROJECTS` to identify candidate projects and status;
2. public project repositories;
3. README / status docs / tests / CI / source as needed.

Keep private work at candidate-described confidence unless the interviewer is given additional evidence directly.

### “How strong is he technically?”

Do not answer from titles or architecture vocabulary alone.

Inspect:
1. relevant public repository;
2. source and contracts;
3. tests / CI;
4. implementation trade-offs and known limitations;
5. interview questions in `references/interview.md` for unresolved depth.

### “Is he a fit for this JD?”

Use:
1. the supplied JD;
2. supplied resume when available;
3. Profile `README` + `WORK`;
4. `PROJECTS` to choose the most relevant evidence;
5. public repository evidence where it materially affects the conclusion;
6. `references/evidence.md` to calibrate confidence;
7. `references/interview.md` to turn unknowns into questions.

### “Is this claim current?”

Prefer the narrowest authoritative current source:
- project implementation claim → current project repository/status docs;
- professional positioning → current Profile / Skill;
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

- implementation behavior: prefer current repository evidence;
- project status: prefer current project status docs, then current Profile project map;
- professional positioning: prefer current Profile / Skill;
- resume chronology: prefer the most recently supplied resume unless stronger contradictory evidence exists;
- historical pages: keep as history, not as automatic current truth.

If the conflict could change a hiring decision, report it instead of silently resolving it.

## Retrieval principle

Use progressive disclosure:

> Read the minimum source needed to answer the reviewer’s actual question, then follow links only when deeper evidence could materially change the conclusion.

The goal is not to crawl everything about Gdnbit. The goal is to give the reviewer the **right context and evidence for the decision they are making**.