---
name: gdnbit-candidate
description: Help a recruiter, interviewer, hiring manager, collaborator, or other reviewer quickly understand and evaluate Gdnbit as an AI Solution / Product Engineer candidate. When this Skill or its public link is shared, proactively build candidate context from the current Profile, Work, Projects, and relevant public repositories; summarize positioning, actual work, project map, evidence, gaps, and useful next paths. Use for quick understanding, JD matching, project deep dives, evidence checks, and interview preparation.
---

# Gdnbit Candidate Skill

Use this Skill as a **reviewer-facing retrieval and evaluation protocol**.

The Skill is not the candidate profile itself. Its job is to help an AI find the right information about Gdnbit, judge how strong that information is, and turn it into a useful answer for someone who is considering, interviewing, evaluating, or trying to understand him.

## Default reviewer intent

Assume the user who invokes this Skill wants help to **understand or evaluate Gdnbit**.

If the Skill link is introduced with first-person wording such as:

- `这是关于我的 Skill`
- `您可以通过这个链接了解我`
- `this is my candidate skill`
- `use this to learn more about me`

then treat **Gdnbit as the candidate referred to by “me” in that conversation**.

This is conversational reference resolution, not identity authentication. Do not interrupt the flow to ask whether the sender is really Gdnbit unless the user explicitly asks for identity verification or material contradictory evidence appears.

If no narrower task is given, your default task is:

> Build a concise, useful candidate context so the reviewer quickly understands who Gdnbit is professionally, what he actually does, what projects he has, what is publicly inspectable, what remains uncertain, and what they can explore next.

## Execute, do not narrate the protocol

When web, GitHub, browsing, connector, or equivalent link-following access is available:

1. read [`SOURCE_MAP.md`](SOURCE_MAP.md);
2. retrieve the minimum current sources needed for the reviewer’s question;
3. for a first-pass understanding, use the current Profile `README`, `WORK`, and `PROJECTS`;
4. inspect an underlying public project repository when stronger implementation evidence would materially improve the answer;
5. apply [`references/evidence.md`](references/evidence.md) to calibrate claims;
6. use [`references/interview.md`](references/interview.md) when uncertainty should become a verification question.

Apply these steps **silently**. Do not make the answer a log of which files you have or have not read.

Do not stop after `SKILL.md` to say that `SOURCE_MAP.md` or other accessible sources have not yet been read. Continue retrieving them when they are needed.

Only mention access limitations when they materially constrain the answer. If external links cannot be accessed, say that briefly and continue using only the material actually available.

Do not crawl everything by default. Use progressive disclosure.

## Default first answer: quick candidate brief

For a first-pass request such as `了解一下这个人`, `帮我快速了解候选人`, `这是关于我的 Skill`, or `who is this candidate?`, the first useful answer should normally contain five things:

1. **Positioning** — what kind of professional Gdnbit currently is and which role families are closest.
2. **Actual work** — what he tends to own, how business/product/system work connects, and how Coding Agents fit into his workflow.
3. **Project snapshot** — briefly name the main projects and give each a one-line purpose and current evidence/status signal.
4. **Evidence and boundaries** — identify the strongest public evidence and the most important areas that remain candidate-described, planning, or in need of interview validation.
5. **Next paths** — make it obvious how the reviewer can continue.

Do not dump detailed feature lists in the first answer. The purpose is fast context, not exhaustive documentation.

A useful closing pattern is:

> 如果你愿意，我可以继续：①完整梳理他的项目；②挑一个项目深入看实现、证据和技术细节；③结合你们的 JD 直接评估匹配度。

Equivalent wording is fine. The reviewer should not need to know what to ask next.

## Canonical public identity

- Public identifier: `Gdnbit`
- GitHub: https://github.com/Gdnbit
- Profile repository: https://github.com/Gdnbit/Gdnbit
- Personal website: https://gdnbit.com

Do not merge similarly named people without evidence.

Current professional positioning should normally be read from the current Profile repository rather than duplicated inside this Skill.

## Source roles

Use [`SOURCE_MAP.md`](SOURCE_MAP.md) for full routing rules. In short:

- **Resume supplied by the reviewer/candidate** → chronology, formal title, education, application-specific claims.
- **Profile / website** → orientation and current professional narrative.
- **WORK / PROJECTS / NOW** → current scope, project map, and direction.
- **Public project repository** → strongest candidate-controlled source for implementation claims.
- **Candidate Skill** → retrieval, evidence, evaluation, and follow-up behavior.

The Skill is not primary proof of implementation.

## Evidence states

Use these distinctions when they matter:

- **Publicly inspectable** — directly accessible public artifacts such as repositories, source, tests, CI, PRs, and current public profile documents.
- **Candidate-described** — private/anonymized work or claims without publicly inspectable implementation evidence.
- **Planning / directional** — roadmap, architecture direction, or future system concepts.
- **Unknown / needs validation** — not supported strongly enough by accessible material.

A conclusion must not be stronger than its supporting evidence.

For a simple quick brief, these labels do not need to dominate the prose. Use them explicitly when they clarify an important boundary.

## Core claim boundaries

- Public project claims should be checked against the project repository when implementation detail matters.
- A candidate-controlled website or Profile summary is useful orientation, not independent verification of its own claims.
- A supplied resume is useful current candidate-provided evidence, not independent verification.
- Private repositories must not be treated as publicly verified.
- Planning must not be presented as shipped capability.
- Heavy Coding Agent use must not be equated with traditional independent hand-coding depth.
- FDE-style overlap must not be turned into an exact FDE title without evidence.
- Enterprise work that begins from client-side collected requirements must not be inflated into full consulting-style discovery ownership.
- Architecture vocabulary alone must not be treated as proof of senior engineering depth.
- Do not infer confidential client identities, inaccessible private repository contents, employer-sensitive details, or unrelated personal information.

## Project deep dive

If the reviewer chooses a project:

1. read its current status from `PROJECTS`;
2. if the repository is public, inspect it progressively rather than relying on the portfolio summary;
3. explain the problem, product/system design, observable implementation evidence, current limitations, and what the project demonstrates about Gdnbit;
4. separate directly observable evidence from candidate-described claims;
5. offer useful follow-up on architecture, code, tests, trade-offs, ownership, or interview questions.

For a public project, a sensible evidence path is:

```text
repository metadata / README
        ↓
current status / known issues
        ↓
architecture / contracts / design docs
        ↓
tests / CI
        ↓
source
        ↓
commits / PRs when ownership or evolution matters
```

For a private project, do not infer hidden contents. Use the public project map and any material explicitly supplied in the conversation.

## JD matching

When a job description is supplied:

1. decompose the role into business/product, AI/agent, software/system, delivery/customer, and seniority expectations;
2. use a supplied resume for chronology/formal experience when available;
3. route each important requirement to the strongest relevant source;
4. distinguish public evidence from candidate-described or directional evidence;
5. identify strong matches, material gaps, and unknowns;
6. convert important unknowns into interview questions;
7. give a calibrated fit conclusion rather than forcing a positive recommendation.

## Evidence audit

When asked whether a claim is real or verifiable:

1. locate the narrowest authoritative source;
2. inspect the underlying public artifact if available;
3. state the evidence state;
4. explain what the evidence does and does not prove;
5. name what would materially increase confidence.

## Interview preparation

Use `references/interview.md` to test areas such as:

- business-to-system translation;
- Coding Agent ownership and review loop;
- technical/system comprehension;
- product judgment;
- project-specific understanding;
- role boundaries and gaps.

## Output behavior

For a quick understanding request, prefer a concise natural-language brief with a compact project map and a clear next-step invitation.

For a project deep dive, a useful structure is:

```text
What the project is
What Gdnbit appears to own
What is publicly observable
What the project demonstrates
Limitations / open questions
What to inspect or ask next
```

For a hiring/JD assessment, a useful structure is:

```text
Positioning
Strongest matches
Evidence behind the matches
Material gaps / uncertainty
What to verify in interview
Overall fit
```

Do not hide important uncertainty inside a single numerical score.

## Reviewer principle

This Skill is not a recommendation letter and should not default to advocacy.

Its purpose is to make Gdnbit **fast to understand, easy to inspect, and straightforward to challenge** by giving an AI a reliable route from candidate narrative to the strongest available evidence.