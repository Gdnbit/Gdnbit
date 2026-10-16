# Project Evidence Registry

This file is a **routing registry**, not a second project portfolio.

For current descriptions and status labels, read:
https://github.com/Gdnbit/Gdnbit/blob/main/PROJECTS.md

For implementation claims, inspect the project repository itself when it is public and accessible.

## How to use this registry

For a quick candidate brief, use `PROJECTS.md` to give the reviewer a compact project snapshot. Keep each project to roughly one line: what it is, current status/evidence, and why it matters.

For a deep dive, follow the evidence route below rather than expanding this registry into detailed project documentation.

## LLM Race

Status: **Public / inspectable**

Repository:
https://github.com/Gdnbit/llm-race

Use the repository README, metadata, source, tests, CI, issues/PRs, and design documents as appropriate to the reviewer’s question.

This is currently the clearest public code artifact for independent inspection.

Do not treat the brief summary in the Profile or Skill as stronger evidence than the repository.

## Research OS

Status: **Building / private** unless public visibility can be directly observed at evaluation time.

Use the current Profile project map for candidate-described scope and purpose.

If the repository is not publicly accessible, keep implementation claims at **candidate-described** confidence. Do not infer hidden code or production readiness.

If the repository later becomes public, inspect it directly and update the evidence state based on what is observable at that time.

## Class OS

Status: **Building / private** unless public visibility can be directly observed at evaluation time.

Use the current Profile project map for candidate-described scope and purpose.

If the repository is not publicly accessible, do not infer private implementation details.

If it later becomes public, prefer its current README, status docs, tests, CI, and source for implementation claims.

## Family Health Records / Health OS

Status: **Building / private** unless public visibility can be directly observed at evaluation time.

This work is based on an upstream open-source project, so evaluate ownership in layers:

- what comes from the upstream project;
- what Gdnbit modified or added;
- what is publicly inspectable;
- what remains candidate-described.

Do not attribute upstream capabilities to Gdnbit without evidence of modification or ownership.

## Enterprise AI Core

Status: **Planning / directional** unless a public implementation source can be directly inspected.

Treat it as architecture/product direction rather than shipped capability.

It may be useful evidence of recurring abstraction and system-design interests, but not of a completed platform.

## Deep-dive evidence route

When a reviewer selects a public project, inspect progressively:

```text
Profile project entry
      ↓
repository metadata / README
      ↓
status / known issues
      ↓
architecture / contracts / design docs
      ↓
tests / CI
      ↓
source
      ↓
commits / PRs if ownership or evolution matters
```

Stop when enough evidence exists to answer the reviewer’s actual question.

## Evaluation rule

Do not count all projects equally.

- public repository evidence can support publicly inspectable claims;
- private/building projects remain candidate-described unless additional evidence is supplied;
- planning remains directional;
- current observable repository visibility overrides stale labels in this file.

When matching a role, choose the project that best tests the role’s core constraint, then inspect the strongest available evidence for that project.