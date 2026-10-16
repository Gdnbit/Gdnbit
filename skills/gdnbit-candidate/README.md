# Gdnbit Candidate Skill

A portable Agent Skill for understanding and evaluating **Gdnbit** as an AI Product / Solution Engineer candidate.

This is not a promotional prompt and it is not a replacement for the personal website, resume, or GitHub repositories. Those are **source material and evidence**. This Skill defines **how an AI should discover, read, weigh and evaluate that evidence**.

```text
Website / Resume / GitHub / Projects
              ↓
         source evidence
              ↓
      gdnbit-candidate Skill
              ↓
 retrieval + evidence policy + evaluation workflow
              ↓
       interviewer / recruiter
```

The formal behavior and boundary specification is in [SPEC.md](SPEC.md).

> Want to send this to an interviewer? Use the ready-made Chinese/English wording in [SHARE.md](SHARE.md).

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

## Why use the Skill if an AI can already browse the website?

Direct website access gives an AI **content**.

The Skill adds a **method**:

- which sources are canonical;
- which source should be used for each kind of claim;
- when to inspect the underlying GitHub repository;
- how to separate public evidence, private descriptions and planning;
- how to handle stale or conflicting information;
- which conclusions must remain uncertain;
- how to turn uncertainty into interview questions instead of guesses.

The website is primarily a narrative and orientation surface. GitHub repositories are stronger public evidence for implementation claims. The Skill is the evaluation protocol connecting those sources.

## Skill entrypoint

`SKILL.md`

Supporting references live under `references/`.

Specification: `SPEC.md`

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

If your client does not support installing skills directly, give the agent the public GitHub folder and ask it to read `SKILL.md`, `SPEC.md`, and the relevant referenced files before evaluating the candidate.

Canonical profile: https://github.com/Gdnbit

## Why this exists

A conventional resume compresses work into a few bullet points. A personal website gives a curated overview. GitHub exposes public artifacts. This package provides the machine-readable layer that tells an AI how those sources should be interpreted together.

The skill intentionally includes negative evidence rules and non-claims. A useful candidate agent should make the person easier to evaluate, not merely easier to market.