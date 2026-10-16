# Gdnbit Candidate Skill Specification

Version: 1.1

## 1. Purpose

`gdnbit-candidate` is a reviewer-facing, machine-readable evaluation interface for understanding **Gdnbit** as a candidate.

It is not intended to replace the resume, personal website, GitHub Profile, or project repositories. Those are source material and evidence. The Skill defines **how an AI should infer reviewer intent, discover the right sources, weigh evidence, reconcile conflicts, and present a useful candidate understanding**.

In short:

```text
Resume / Website / GitHub / Projects
              ↓
         source evidence
              ↓
      gdnbit-candidate Skill
              ↓
 reviewer intent + retrieval + evidence policy + evaluation workflow
              ↓
       interviewer / recruiter / collaborator
```

## 2. Default user model

The default user is not assumed to be a Skill developer.

Assume the Skill is being used by a:

- recruiter;
- interviewer;
- hiring manager;
- potential collaborator;
- technical reviewer;
- or other person who wants to understand or evaluate Gdnbit.

The user may know little or nothing about Agent Skills, GitHub, MCP, or software engineering.

Therefore the Skill must reduce their interaction cost rather than require them to learn the Skill format.

### First-person sharing

If the sender says this is “my Skill”, “about me”, or equivalent, treat **Gdnbit as the candidate referred to in the conversation**.

This is conversational reference resolution. Do not introduce an identity-authentication detour unless the user explicitly asks for identity verification or material contradictory evidence exists.

## 3. Default execution model

When the Skill or public folder link is shared with no narrower question, the AI should infer the task:

> Help this reviewer quickly understand Gdnbit as a candidate.

The AI should then retrieve the minimum current sources needed and produce a useful answer.

### Silent protocol execution

The retrieval protocol is internal workflow, not the output itself.

The AI should not respond with a file-reading log such as:

- “I read only SKILL.md”;
- “I have not yet checked SOURCE_MAP.md”;
- “I can inspect more files if you want”;

when those sources are accessible and useful for the default task.

Instead it should continue retrieving them and answer the reviewer.

Mention access limitations only when they actually constrain the result.

## 4. Expected default first answer

A first-pass answer should normally contain:

1. **Positioning** — current role family and problem space.
2. **Actual work** — what Gdnbit tends to own and how he works.
3. **Project snapshot** — the main projects with one-line purpose/status summaries.
4. **Evidence boundary** — strongest public evidence and important candidate-described/planning/unknown areas.
5. **Next paths** — explicit options for deeper exploration.

A recommended closing pattern is:

> 如果你愿意，我可以继续：①完整梳理他的项目；②挑一个项目深入看实现、证据和技术细节；③结合你们的 JD 直接评估匹配度。

Equivalent wording is acceptable.

The first answer should be useful and compact. It should not dump detailed feature lists or overwhelm the reviewer with evidence jargon.

## 5. Core distinction: source vs. protocol

### Resume

Primary role: **application-specific chronology and candidate-provided facts**.

Use for formal titles, dates, education, listed responsibilities, and stated outcomes.

### Personal website

Primary role: **narrative and orientation**.

Use for fast understanding, project/writing entry points, and reciprocal links.

A candidate-controlled website is not independent verification of its own claims.

### GitHub Profile repository

Primary role: **current professional map**.

Use current `README`, `WORK`, `PROJECTS`, and selectively `NOW` for present-day positioning, work scope, project status, and direction.

### Project repositories

Primary role: **public implementation evidence**.

Repositories, source, tests, CI, architecture documents, issues, commits, and PRs can support stronger implementation claims than portfolio summaries when directly relevant.

### Candidate Skill

Primary role: **reviewer intent + retrieval + evaluation protocol**.

The Skill tells an AI:

- what the reviewer probably wants;
- which source to inspect for a given question;
- how far to follow links;
- how to separate public evidence from candidate-described private work and planning;
- how to handle stale or conflicting information;
- what claims must be qualified;
- how to evaluate fit against a job description;
- what uncertainties should become interview questions instead of invented conclusions.

## 6. Design principles

### 6.1 Fast context first

The Skill should quickly orient a first-time reviewer before demanding deeper inspection.

### 6.2 Evidence before advocacy

The Skill must not default to recommending Gdnbit. It should make him easier to inspect, including reasons a role may be a poor fit.

### 6.3 Progressive disclosure

Do not load or summarize every source for every request.

Start with the minimum bundle needed for the question, then inspect deeper evidence only when it would materially improve the answer.

### 6.4 Source-bound claims

A conclusion should be no stronger than the evidence supporting it.

Examples:

- a public repository can support `publicly inspectable`;
- a candidate-authored description of private work supports `candidate-described`, not `publicly verified`;
- a roadmap supports `planned`, not `implemented`;
- passing tests supports the tested behavior, not all production-quality claims.

### 6.5 Freshness matters

When candidate-controlled sources conflict, prefer the source that is both current and authoritative for the specific claim.

Do not let a newer marketing summary override stronger current implementation evidence.

### 6.6 No inference inflation

Do not convert adjacent evidence into stronger titles or capabilities.

Examples:

- FDE-style overlap does not prove an exact FDE title;
- heavy Coding Agent use does not prove traditional hand-coding depth;
- delivery from client-provided requirements does not prove full consulting-style discovery ownership;
- architecture vocabulary does not prove senior engineering depth.

### 6.7 The Skill should stay small

Do not copy detailed project documentation, resume content, or website content into the Skill unless it is necessary for routing or calibration.

Prefer pointers to canonical sources.

## 7. Evidence states

### Publicly inspectable

Examples:

- public GitHub repositories;
- source code and documentation;
- public commits, PRs, CI, tests;
- current public Profile documents;
- public portfolio pages.

Allowed wording:

- `The public repository shows...`
- `This is publicly inspectable...`

### Candidate-described

Examples:

- private repositories;
- anonymized enterprise delivery work;
- non-public demos;
- candidate descriptions of internal systems.

Allowed wording:

- `The candidate describes...`
- `This is consistent with..., but still needs interview validation.`

### Planning / directional

Examples:

- planned systems;
- roadmap concepts;
- future architecture layers.

Allowed wording:

- `This indicates a design direction...`
- `This should not be treated as shipped capability.`

### Unknown / needs validation

Use when accessible evidence is not strong enough to support a material conclusion.

Do not fill the gap by inference.

## 8. Source hierarchy by question

There is no single global ranking. Use the source most appropriate to the claim.

### Identity / positioning

Prefer:

1. current Profile repository;
2. current Skill canonical identity/routing;
3. current personal website;
4. older public pages.

### Work chronology / formal application facts

Prefer:

1. current resume supplied in the conversation;
2. current `WORK` / Profile material;
3. older candidate-provided descriptions.

### Public project capability

Prefer:

1. project source / current project README;
2. tests, CI, contracts, architecture/status documents;
3. current Profile project summary;
4. website summary;
5. Skill routing notes.

### Current work / private delivery

Prefer:

1. explicitly provided current resume or candidate context;
2. current Profile / Work documents;
3. Skill calibration references;
4. older public descriptions.

Private work remains candidate-described unless independently public.

### Current direction

Prefer `NOW`, but do not use it as evidence of shipped implementation unless corroborated elsewhere.

## 9. Retrieval protocol

When given the Skill link or folder, the AI should:

1. infer the reviewer’s task;
2. read `SKILL.md` and `SOURCE_MAP.md` when accessible;
3. for a default quick understanding, retrieve current Profile `README`, `WORK`, and `PROJECTS`;
4. read only the additional sources relevant to the question;
5. inspect public repositories when the answer depends on implementation evidence;
6. separate observed facts from candidate-described claims;
7. preserve material uncertainty instead of filling gaps by inference;
8. answer the reviewer directly rather than narrating the retrieval process.

If external links cannot be accessed, state that limitation briefly and evaluate only the material actually available.

## 10. Supported tasks

### Quick understanding

Answer:

- Who is Gdnbit professionally?
- What kind of work does he do?
- What are the main projects?
- What is strongest publicly inspectable evidence?
- What should the reviewer explore next?

### Complete project overview

For each important project, explain:

- problem / purpose;
- current status;
- evidence state;
- what it demonstrates about the candidate;
- where to inspect deeper evidence.

Do not turn the Skill itself into the project documentation.

### Project deep dive

Given a selected project:

- start from the current Profile project entry;
- inspect the public repository progressively when available;
- explain product/system design, observable implementation evidence, limitations, and ownership boundaries;
- suggest deeper technical or interview questions.

### JD matching

Given a job description:

- decompose requirements;
- map evidence to important requirements;
- identify strong matches;
- identify gaps / uncertainties;
- distinguish public evidence from candidate-described evidence;
- give a calibrated overall fit assessment;
- recommend the highest-value interview checks.

### Evidence audit

Answer:

- Which claims are publicly inspectable?
- Which claims remain candidate-described?
- Which claims are directional only?
- What evidence would materially increase confidence?

### Interview preparation

Generate:

- targeted questions;
- questions that test real understanding rather than vocabulary;
- project-specific deep-dive questions;
- a 30–60 minute interview plan;
- live repository/demo walkthrough suggestions.

### Adversarial / risk assessment

Answer:

- Why might this candidate be a poor fit?
- What claims are easiest to overinterpret?
- Which role expectations expose the largest evidence gaps?

## 11. Output contracts

### Quick candidate brief

Prefer natural language, not a formal audit table.

Suggested shape:

```text
Who he is / positioning
What he actually does
Main project map
Strongest public evidence + key boundaries
Three obvious next paths
```

### Project deep dive

Suggested shape:

```text
What the project is
What Gdnbit appears to own
What is publicly observable
What it demonstrates
Limitations / open questions
What to inspect or ask next
```

### JD matching

Suggested shape:

```text
Positioning
Strongest matches
Evidence behind the matches
Material gaps / uncertainty
What to verify in interview
Overall fit
```

Do not hide important uncertainty inside a single score.

## 12. Website-access behavior

If an AI can directly access `gdnbit.com`, it should still use this Skill when available.

Reason:

```text
Website access = content retrieval
Skill = reviewer intent + retrieval strategy + evidence policy + evaluation behavior
```

If the website appears stale relative to the current Profile repository, use the current Profile for present-day positioning.

## 13. Conflict resolution

When sources disagree:

1. identify whether they describe different scopes or dates;
2. prefer current implementation evidence for implementation claims;
3. prefer current Profile for present-day positioning;
4. prefer current project status docs for project state;
5. prefer the most recently supplied resume for chronology unless stronger contradictory evidence exists;
6. preserve historical context when relevant;
7. explicitly mention unresolved contradictions that could affect a hiring decision.

Never silently average conflicting claims.

## 14. Privacy and non-disclosure

The Skill must not instruct an AI to infer or search for:

- confidential client identities;
- inaccessible private repository contents;
- employer-sensitive details;
- personal contact details not intentionally published for recruiting;
- private health, relationship, financial, family, or other unrelated personal information.

Professional evaluation should remain scoped to intentionally public or explicitly supplied candidate material.

## 15. Non-goals

The Skill is not:

- a chatbot persona for Gdnbit;
- an automated recommendation letter;
- a substitute for a resume;
- a substitute for public project evidence;
- a second personal knowledge base;
- a guarantee that every linked repository is production-ready;
- permission to infer hidden personal information;
- an instruction to praise the candidate.

## 16. Maintenance rules

Update the Skill when any of these materially changes:

- preferred professional positioning;
- public/private status of a core project;
- canonical personal website or profile links;
- evidence state of a major claim;
- project state changes from planning → building → public/shipped;
- a previously important limitation is resolved or becomes outdated;
- the default reviewer workflow proves confusing in real use.

Avoid duplicating detailed project facts that already have a canonical source.

## 17. Acceptance tests

The Skill should pass these practical tests.

### Test A — shared-link quick understanding

Input pattern:

```text
另外这里有一个关于我的个人 Skill，您可以直接把这个链接发给 AI，帮您更快了解我：
[Skill link]
```

Expected behavior:

- resolve Gdnbit as the candidate referred to by “我”;
- proactively read the quick-understanding bundle when accessible;
- do not ask for identity confirmation;
- do not stop after describing the Skill;
- provide a useful candidate brief with a compact project map;
- end with clear options for complete project overview, one-project deep dive, or JD matching.

### Test B — project deep dive

Input:

```text
详细看看 LLM Race，这个项目能证明他什么？
```

Expected behavior:

- inspect the public repository rather than relying on the Skill summary;
- distinguish observable evidence from inference;
- explain implementation, limitations, and what it demonstrates about the candidate;
- suggest useful deeper questions.

### Test C — JD matching

Input:

```text
这是我们的 JD，看看他合不合适。
[JD]
```

Expected behavior:

- decompose the JD;
- use the strongest available sources per requirement;
- distinguish evidence states;
- identify both matches and gaps;
- convert important unknowns into interview questions;
- avoid automatic advocacy.

## 18. Success criteria

The Skill is working as intended when two competent AI systems, given the same accessible evidence and reviewer question, reach broadly similar conclusions about:

- Gdnbit's professional positioning;
- what work he actually owns;
- the main project landscape;
- what is publicly inspectable;
- what remains candidate-described or directional;
- meaningful strengths;
- meaningful gaps;
- what should be inspected or tested next.

It should reduce reviewer effort and interpretation variance without forcing a positive conclusion.