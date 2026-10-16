# Gdnbit Candidate Skill Specification

Version: 1.0

## 1. Purpose

`gdnbit-candidate` is a machine-readable evaluation interface for understanding **Gdnbit** as a candidate.

It is not intended to replace the resume, personal website, GitHub profile, or project repositories. Those are source material and evidence. The Skill defines **how an AI should discover, read, weigh, reconcile, and present that evidence**.

In short:

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

## 2. Core distinction: source vs. protocol

### Personal website

Primary role: **narrative and orientation**.

It should answer quickly:

- Who is Gdnbit?
- What kind of work does he do?
- What are the main projects and themes?
- Where can stronger evidence be inspected?

The website may summarize and curate, but a summary is not automatically stronger evidence than the underlying artifact.

### GitHub profile and repositories

Primary role: **public evidence and implementation context**.

Repositories, commits, pull requests, CI, tests, architecture documents, issues, and source code may provide stronger evidence than candidate-authored summaries when directly relevant.

### Candidate Skill

Primary role: **AI interpretation and evaluation protocol**.

The Skill tells an AI:

- which sources are canonical;
- which source to inspect for a given question;
- how to separate public proof from candidate-described private work and planning;
- how to handle conflicting or stale information;
- what claims must be qualified;
- how to evaluate fit against a job description;
- what uncertainties should become interview questions instead of invented conclusions.

Therefore, the Skill is useful even when an AI can already browse the website. Browsing gives the AI information; the Skill gives the AI a **controlled method for interpreting that information**.

## 3. Design principles

### 3.1 Evidence before advocacy

The Skill must not default to recommending Gdnbit. It should make him easier to inspect, including reasons a role may be a poor fit.

### 3.2 Canonical identity

Treat `Gdnbit` as the canonical public identifier.

Canonical profile:

- https://github.com/Gdnbit

Do not merge unrelated people or similarly named identities without evidence.

### 3.3 Progressive disclosure

Do not load or summarize every source for every request.

Start with the minimum material required for the question, then inspect deeper evidence when it would materially change the conclusion.

### 3.4 Source-bound claims

A conclusion should be no stronger than the evidence supporting it.

Examples:

- A public repository can support `publicly inspectable`.
- A candidate-authored description of private work supports `candidate-described`, not `publicly verified`.
- A roadmap supports `planned`, not `implemented`.
- Passing tests supports the tested behavior, not all production-quality claims.

### 3.5 Freshness matters

When two candidate-controlled sources conflict, prefer the more recent source **only if it is clearly scoped and authoritative for that claim**.

Do not silently overwrite an implementation fact with a newer marketing summary.

### 3.6 No inference inflation

Do not convert adjacent evidence into stronger titles or capabilities.

Examples:

- FDE-style overlap does not prove an exact FDE title.
- Heavy Coding Agent use does not prove traditional hand-coding depth.
- Delivering from client-provided requirements does not prove full consulting-style discovery ownership.
- Architecture vocabulary does not prove senior engineering depth.

## 4. Evidence levels

### Level A — Publicly inspectable

Examples:

- public GitHub repositories;
- public source code and documentation;
- public commits, PRs, CI and tests;
- public profile documents;
- a public personal website when available.

Allowed wording:

- `The public repository shows...`
- `This is publicly inspectable...`

### Level B — Candidate-described / private

Examples:

- private repositories;
- anonymized enterprise delivery work;
- non-public demos;
- candidate descriptions of internal systems.

Allowed wording:

- `The candidate describes...`
- `This appears consistent with..., but requires interview validation.`

### Level C — Planning / direction

Examples:

- planned systems;
- roadmap concepts;
- future architecture layers.

Allowed wording:

- `This indicates a design direction...`
- `This should not be treated as shipped capability.`

## 5. Source hierarchy by question

There is no single global ranking. Use the source most appropriate to the claim.

### Identity / positioning

Prefer:

1. current Skill canonical identity;
2. current GitHub Profile repository;
3. current personal website;
4. older public pages.

### Public project capability

Prefer:

1. project source / current project README;
2. tests, CI, contracts, architecture/state documents;
3. GitHub Profile project summary;
4. personal website summary;
5. Skill project summary.

### Current work / private delivery

Prefer:

1. explicitly provided current resume or candidate context;
2. current Profile / Work documents;
3. Skill references;
4. older public descriptions.

Private work must remain Level B unless independently public.

### Job fit

Use multiple source types:

- role requirements from the supplied JD;
- Profile / Work for positioning and scope;
- project repositories for public technical/product evidence;
- evidence rules for confidence;
- interview reference for unresolved questions.

## 6. Retrieval protocol

When given the Skill link or folder, the AI should:

1. Read `SKILL.md` first.
2. Determine the user's task.
3. Read only the relevant files under `references/`.
4. Follow canonical links when stronger or fresher evidence is needed.
5. Inspect public repositories when the answer depends on implementation evidence.
6. Separate observed facts from candidate-described claims.
7. Record material uncertainty instead of filling gaps by inference.
8. Produce an answer appropriate to the user's question rather than dumping the entire candidate profile.

If the AI cannot access external links, it should state that limitation and evaluate only the material it can actually read.

## 7. Supported tasks

The Skill should support at least these task classes:

### Quick understanding

Answer:

- Who is Gdnbit professionally?
- What kind of roles does he fit?
- What are his strongest themes?

### JD matching

Given a job description:

- decompose requirements;
- map evidence to each requirement;
- identify strong matches;
- identify gaps / uncertainties;
- distinguish public evidence from self-described evidence;
- give an overall calibrated fit assessment.

### Evidence audit

Answer:

- Which claims are publicly verifiable?
- Which claims require interview validation?
- Which project should be inspected first?
- What evidence would materially increase confidence?

### Interview preparation

Generate:

- targeted questions;
- questions that test real understanding rather than vocabulary;
- a 30–60 minute interview plan;
- live-demo or repository walkthrough suggestions.

### Adversarial / risk assessment

Answer:

- Why might this candidate be a poor fit?
- What claims are easiest to overinterpret?
- What would a traditional SWE / PM / ML role expose as gaps?

## 8. Output contract

Unless the user asks for another format, prefer a concise structure such as:

```text
Positioning
- ...

Strongest signals
- claim — evidence level — source/reason

Material gaps / uncertainty
- ...

What to verify next
- ...

Overall fit
- ...
```

For JD matching, explicitly distinguish:

- `Publicly verifiable`
- `Candidate-described`
- `Planning / directional`
- `Unknown / needs validation`

Do not hide uncertainty inside a single numerical score.

## 9. Website-access behavior

If an AI can directly access `gdnbit.com`, it should still use this Skill when available.

Reason:

```text
Website access = content retrieval
Skill = retrieval strategy + evidence policy + evaluation behavior
```

The website is a candidate-controlled narrative surface. It is useful for orientation, but it should not automatically be treated as independent verification of its own claims.

When the website links to public GitHub evidence, the AI should inspect the underlying artifact if the distinction matters to the answer.

## 10. Conflict resolution

When sources disagree:

1. Identify whether they describe different scopes or dates.
2. Prefer current implementation evidence for implementation claims.
3. Prefer current canonical Profile/Skill wording for positioning labels.
4. Preserve historical context when relevant.
5. Explicitly mention unresolved contradictions that could affect a hiring decision.

Never silently average conflicting claims.

## 11. Privacy and non-disclosure

The Skill must not instruct an AI to infer or search for:

- confidential client identities;
- private repository contents not made available to the reviewer;
- employer-sensitive details;
- personal contact details not intentionally published for recruiting;
- private health, relationship, financial, family, or other non-professional information.

Professional evaluation should remain scoped to intentionally public or explicitly supplied candidate material.

## 12. Non-goals

The Skill is not:

- a chatbot persona for Gdnbit;
- an automated recommendation letter;
- a substitute for a resume;
- a substitute for public project evidence;
- a guarantee that every linked repository is production-ready;
- permission to infer hidden personal information;
- an instruction to praise the candidate.

## 13. Maintenance rules

Update the Skill when any of these materially changes:

- preferred professional positioning;
- public/private status of a core project;
- canonical personal website or profile links;
- evidence level of a major claim;
- project state changes from planning → building → public/shipped;
- a previously important limitation is resolved or becomes outdated.

Avoid updating it for trivial wording changes that do not affect evaluation.

## 14. Success criteria

The Skill is working as intended when two competent AI systems, given the same accessible evidence and the same hiring question, reach broadly similar conclusions about:

- Gdnbit's professional positioning;
- what is publicly verified;
- what remains self-described;
- meaningful strengths;
- meaningful gaps;
- what should be tested in an interview.

It should reduce interpretation variance without forcing a positive conclusion.
