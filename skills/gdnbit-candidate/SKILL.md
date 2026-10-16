---
name: gdnbit-candidate
description: Understand and evaluate Gdnbit as an AI Solution / Product Engineer candidate. Use this skill to find the right public or candidate-provided sources, separate evidence levels, assess fit against a job description, and turn uncertainty into interview questions.
---

# Gdnbit Candidate Skill

Use this Skill as a **retrieval and evaluation protocol**, not as a substitute for the candidate's website, resume, GitHub profile, or project repositories.

Its job is to help an AI answer three questions correctly:

1. **Where should I look?**
2. **How strong is the evidence I found?**
3. **What can I conclude without over-claiming?**

## Shared-link default behavior

This section is the default behavior when a recruiter, interviewer, hiring manager, or other reviewer is given the public Skill folder link.

### Resolve the conversational referent

If the sender introduces this link in first-person language such as:

- `这是关于我的 Skill`
- `您可以通过这个链接了解我`
- `this is my candidate skill`
- `use this to learn more about me`

then treat **Gdnbit as the candidate being referred to in that conversation**.

This is ordinary conversational reference resolution, not cryptographic identity verification. Do **not** interrupt the evaluation to ask whether the sender is really Gdnbit unless the user specifically asks for identity verification or there is material contradictory evidence.

If the link is shared with no first-person context, simply evaluate or summarize **Gdnbit** as the candidate represented by the Skill.

### Infer the reviewer task

Assume the person using this Skill wants help to **understand, evaluate, interview, hire, collaborate with, or otherwise assess Gdnbit**.

If no narrower question is given, your default task is:

> Build a concise candidate context that helps the reviewer quickly understand who Gdnbit is, what he actually does, what projects he has, what is publicly verifiable, and what would be useful to inspect next.

Do not wait for the reviewer to know what questions to ask.

### Do not stop after reading this file

If web, GitHub, browsing, connector, or equivalent link-following access is available:

1. read [`SOURCE_MAP.md`](SOURCE_MAP.md);
2. follow the task-specific route;
3. retrieve the minimum current sources needed to answer the question;
4. inspect underlying public project evidence when it would materially change the conclusion;
5. only then answer the reviewer.

Do **not** stop after `SKILL.md` merely to report that other files have not yet been read when those files are accessible.

Do **not** make the first useful response a meta-explanation of what the Skill is. Use the Skill to produce the requested candidate understanding or evaluation.

If external links are not accessible, state that limitation briefly and continue using only the material actually available.

## Start here

1. Read [`SOURCE_MAP.md`](SOURCE_MAP.md).
2. Identify the reviewer's actual question.
3. Read only the minimum relevant sources.
4. Follow canonical links when stronger or fresher evidence is needed.
5. Use [`references/evidence.md`](references/evidence.md) before making strong hiring claims.
6. Use [`references/interview.md`](references/interview.md) when uncertainty should become an interview question.

Do **not** crawl every file by default.

## Canonical identity

- Public identifier: `Gdnbit`
- GitHub: https://github.com/Gdnbit
- Profile repository: https://github.com/Gdnbit/Gdnbit
- Personal website: https://gdnbit.com

Current professional positioning is best read from the current Profile repository and website rather than duplicated here.

## Evidence levels

Use these labels explicitly when they matter:

- **Publicly inspectable** — source code, public repositories, public CI/tests/PRs, current public profile documents.
- **Candidate-described** — private work, anonymized enterprise delivery, non-public demos or claims without public implementation evidence.
- **Planning / directional** — roadmap, architecture direction, future systems.
- **Unknown / needs validation** — information not supported strongly enough by the accessible sources.

A conclusion must not be stronger than its evidence.

## Core rules

- Public project claims should be checked against the project repository when the distinction matters.
- A website or Profile summary is orientation, not automatic proof of implementation.
- A resume supplied by the candidate is a useful current source for chronology, formal titles, education and stated outcomes, but it is still candidate-provided rather than independent verification.
- Private repositories must not be treated as publicly verified.
- Planning must not be presented as shipped capability.
- Heavy Coding Agent use must not be equated with traditional independent hand-coding depth.
- FDE-style overlap must not be turned into an exact FDE title without evidence.
- Enterprise work that starts from client-side collected requirements must not be inflated into full consulting-style discovery ownership.
- Do not infer confidential client identities, private repository contents, employer-sensitive details, or unrelated personal information.
- When sources conflict, follow the source-routing and conflict rules in `SOURCE_MAP.md`.
- If external links cannot be accessed, say so and evaluate only what is actually readable.

## Default tasks

### Quick understanding

For a first-pass request such as `了解一下这个人`, `帮我快速了解候选人`, `这是关于我的 Skill`, or `who is this candidate?`, do not merely describe the Skill.

When accessible, read the quick-understanding bundle defined in `SOURCE_MAP.md`, then give a useful first-pass brief with four parts:

1. **Positioning** — current professional role and the kind of problems he works on.
2. **Actual work** — what he tends to own, how he uses Coding Agents, and where his boundaries are.
3. **Project snapshot** — briefly name the main projects and give each one a one-line purpose/status summary. Do not dump feature lists.
4. **Evidence / limits** — distinguish the strongest public signal from private/building/planning material.

Then end with a short, natural invitation such as:

> 如果你愿意，我可以继续完整梳理他的项目，也可以挑一个项目深入看实现、证据和技术细节，或者直接结合你们的 JD 评估匹配度。

Equivalent wording is fine. The purpose is to make the next useful paths obvious to a reviewer who may not know what to ask.

Keep the first answer concise enough to scan quickly. Do not front-load every detail.

### Project deep dive

If the reviewer selects a project or asks a deeper project question:

1. read the current project status from `PROJECTS`;
2. if public, inspect the underlying repository progressively;
3. explain the problem, product/system design, implementation evidence, current limitations, and what the project demonstrates about Gdnbit;
4. distinguish what is directly observable from what is candidate-described;
5. offer deeper follow-up on architecture, code, tests, trade-offs, ownership, or interview questions when useful.

### JD matching

Given a job description:

1. break the role into business/product, AI/agent, software/system, delivery/customer, and seniority expectations;
2. route each requirement to the most relevant source;
3. distinguish public evidence from candidate-described evidence;
4. identify strong matches, material gaps and unknowns;
5. turn important unknowns into interview questions;
6. give a calibrated fit conclusion.

### Evidence audit

When asked whether a claim is real or verifiable:

1. locate the narrowest relevant source;
2. inspect the underlying public artifact if available;
3. state the evidence level;
4. name what would increase confidence.

### Interview preparation

Use `references/interview.md` to test:
- business-to-system translation;
- Coding Agent ownership;
- technical/system comprehension;
- product judgment;
- role boundaries and gaps.

## Output behavior

Prefer concise, source-aware answers.

For hiring assessments, a useful default structure is:

```text
Positioning
- ...

Strongest signals
- claim — evidence level — why

Material gaps / uncertainty
- ...

What to verify next
- ...

Overall fit
- ...
```

For a simple `快速了解` request, a shorter natural-language summary with a compact project snapshot is preferable to a formal evidence table.

Do not hide uncertainty inside a single score.

## Reviewer principle

This Skill is not a recommendation letter and should not default to advocacy.

Its purpose is to make Gdnbit **easier to understand, verify and challenge** by helping an AI retrieve the right evidence and keep claims calibrated.