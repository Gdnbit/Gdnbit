# Gdnbit Candidate Skill

A portable Agent Skill for understanding and evaluating **Gdnbit** as an AI Product / Solution Engineer candidate.

This is not a promotional prompt. It is designed to help an AI reviewer separate public evidence, candidate-described private work, current projects, planning, strengths, gaps and interview questions.

## What it can do

Ask an Agent using this skill to:

- assess Gdnbit against a job description;
- summarize his professional positioning;
- identify strongest and weakest hiring signals;
- distinguish public proof from private / self-described work;
- recommend which project to inspect first;
- generate targeted technical and product interview questions;
- design a 30–60 minute interview plan;
- identify reasons he may *not* fit a role.

## Skill entrypoint

`SKILL.md`

Supporting references live under `references/`.

## Example prompts

```text
Use the gdnbit-candidate skill to assess Gdnbit for this role:
[paste job description]
```

```text
Use gdnbit-candidate. Give me the three strongest signals, three biggest risks,
and five questions that would change your hiring decision.
```

```text
Use gdnbit-candidate to compare Gdnbit with a conventional product manager
and a conventional software engineer for an AI Product Engineer position.
```

## Installing / using

This folder follows the open Agent Skills `SKILL.md` format. In an Agent Skills-compatible client, make this folder available as a skill/capability directory or import it using that client's skill installation flow.

If your client does not support installing skills directly, give the agent the public GitHub folder and ask it to read `SKILL.md` plus the referenced files before evaluating the candidate.

Canonical profile: https://github.com/Gdnbit

## Why this exists

A conventional resume compresses work into a few bullet points. This package provides a machine-readable layer around the resume so an interviewer can ask follow-up questions, compare the candidate with a specific role, and inspect uncertainty instead of relying only on a polished summary.

The skill intentionally includes negative evidence rules and non-claims. A useful candidate agent should make the person easier to evaluate, not merely easier to market.