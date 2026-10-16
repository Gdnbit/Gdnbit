# Gdnbit Candidate Skill

A portable Agent Skill for helping an AI **find, verify and evaluate** information about **Gdnbit** as an AI Solution / Product Engineer candidate.

This is intentionally **not** a second resume or a full personal knowledge base.

Its main value is to tell an Agent:

- where to look;
- which source is best for which question;
- when to inspect the underlying GitHub repository;
- how to separate public evidence, candidate-described work and planning;
- how to handle stale or conflicting information;
- what should remain an interview question instead of becoming an invented conclusion.

## Core model

```text
Resume / Website / GitHub / Project repositories
                    ↓
                 evidence
                    ↓
             Candidate Skill
                    ↓
   retrieval + evidence + evaluation protocol
                    ↓
             AI reviewer / Agent
```

The website and GitHub contain the information. The Skill tells the Agent **how to use it**.

## Start here

- [`SKILL.md`](SKILL.md) — compact Agent instructions and evaluation behavior.
- [`SOURCE_MAP.md`](SOURCE_MAP.md) — where to find the right information for a given question.
- [`references/evidence.md`](references/evidence.md) — confidence / evidence rules.
- [`references/interview.md`](references/interview.md) — questions for validating uncertain areas.
- [`SPEC.md`](SPEC.md) — deeper design specification; not required for every review.

Other files under `references/` are deliberately small calibration notes rather than copies of the website or project documentation.

## What an Agent should do

For a quick question such as “Who is Gdnbit?”, the Agent should read only the current Profile / website and give a short answer.

For a question such as “Did he actually build this?”, it should follow the source map into the relevant public repository and inspect stronger evidence such as:

```text
README
  ↓
current status / known issues
  ↓
architecture / contracts
  ↓
tests / CI
  ↓
source / commits / PRs when needed
```

For private work, it should say that the claim is candidate-described unless additional evidence is supplied.

## Example prompts

```text
Read this Candidate Skill and help me understand Gdnbit.
```

```text
Use this Skill to assess Gdnbit against this job description. Verify public claims from the strongest available sources and list what still needs interview validation.
```

```text
Use the Skill to check whether Gdnbit's Agent / system claims are actually supported by his public repositories.
```

## Using it

If the AI supports Agent Skills, import or expose this folder as a Skill.

If it does not, simply give the AI this public folder URL and ask it to read `SKILL.md` first:

https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

## Share with an interviewer

The simplest wording is:

> 另外这里有一个关于我的个人 Skill，您可以直接把这个链接发给 AI，帮您更快了解我：  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

## Principle

A useful candidate Skill should reduce the cost of understanding the candidate **without reducing the standard of evidence**.

It should make Gdnbit easier to inspect, not merely easier to market.