# Evidence Policy

Use this file to calibrate confidence when evaluating Gdnbit.

The goal is not to turn every answer into an audit report. The goal is to keep important claims honest while still giving the reviewer a useful, readable answer.

## Evidence states

### Publicly inspectable

Examples:

- public GitHub repositories and their commit history;
- public README / WORK / PROJECTS / NOW documents;
- public pull requests, issues, CI, tests, and code artifacts;
- public portfolio pages when available.

These may be described as publicly inspectable, but still distinguish documentation from executable behavior.

A public README proves that a claim is publicly stated. Tests/CI/source may provide stronger support for implementation behavior.

### Candidate-described

Examples:

- private repositories;
- anonymized enterprise delivery work;
- internal systems that cannot be published;
- private demos or artifacts described in the public profile or resume.

Treat these as candidate-provided evidence rather than independent public verification.

When important to the hiring decision, recommend targeted validation through project walkthroughs, redacted screenshots, live demos, architecture discussion, or concrete technical questioning.

### Planning / directional

Examples:

- Enterprise AI Core planning;
- future reusable capability layers;
- longer-term AI-native company / agent-runtime architecture ideas.

Treat these as evidence of thinking direction only. Do not convert them into claims of shipped capability.

### Unknown / needs validation

Use this state when the accessible evidence is not strong enough to support a material conclusion.

Do not fill an unknown with a flattering or negative inference merely to complete the answer.

## Quick-brief behavior

For a first-pass candidate brief, evidence labels should support readability rather than dominate it.

Good:

> ClassMatter and ThinkRoom are public repositories that can be inspected for product and implementation claims, alongside the smaller LLM Race project. HealthBox and enterprise delivery remain private/candidate-described, while Enterprise AI Core is a planning direction. Public code alone does not prove production readiness.

Less useful for a first answer:

> Level A / Level B / Level C / Level D...

Use explicit evidence labels when the distinction is material or the reviewer asks for verification.

## Claim calibration

Prefer wording such as:

- `The public repository shows...`
- `The candidate describes...`
- `The current Profile states...`
- `This appears consistent with...`
- `This is not yet publicly inspectable because...`
- `The strongest public evidence is...`
- `This claim should be tested by asking...`

Avoid wording such as:

- `Gdnbit definitely built...` when only a private description exists;
- `production-grade` unless public evidence or explicit validated context supports it;
- `senior` based only on conceptual vocabulary;
- `full-stack engineer` merely because Coding Agents produced full-stack systems;
- `consultant` or `process transformation lead` if the work began from requirements already collected by client departments;
- `FDE` as an exact title when only FDE-style overlap is supported.

## Evidence strength is claim-specific

Do not rank sources globally without considering the claim.

Examples:

- current repository source is stronger than a portfolio summary for implementation behavior;
- a current resume can be the best candidate-provided source for employment chronology;
- `WORK.md` can be the best current public source for how the candidate frames his role boundaries;
- `NOW.md` is useful for direction, not proof that the direction has been implemented.

## What counts as stronger evidence in an interview

Increase confidence when Gdnbit can:

1. explain a concrete business flow without buzzwords;
2. show how data/state changes across the flow;
3. identify edge cases, permissions, and failure modes;
4. explain why a specific architecture was chosen and what alternatives were rejected;
5. navigate the implementation or repository live;
6. diagnose a broken behavior rather than only describe intended design;
7. show an acceptance criterion and how it was validated;
8. clearly separate his contribution from team, upstream, or agent-generated work;
9. explain where Coding Agents were useful and where human judgment changed the outcome.

## What should lower confidence

Lower confidence if:

- answers stay at architecture-diagram level under concrete questioning;
- implementation ownership cannot be traced;
- private projects cannot be demonstrated in any reasonable redacted form when they are central to the hiring claim;
- Coding Agent usage becomes a substitute for understanding system behavior;
- the candidate cannot explain data models, API contracts, permissions, failure paths, tests, or acceptance behavior behind a claimed system;
- role fit depends heavily on traditional software-engineering depth that is not publicly demonstrated and cannot be validated in interview.

## Reviewer principle

The Skill is deliberately not a recommendation engine.

Its purpose is to make the candidate easier to understand and inspect, including reasons not to hire him for a particular role.

Evidence calibration should increase trust, not make the answer needlessly defensive or verbose.