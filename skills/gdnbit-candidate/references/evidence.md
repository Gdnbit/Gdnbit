# Evidence Policy

Use this file to calibrate confidence when evaluating Gdnbit.

## Evidence levels

### Level A — Publicly inspectable

Examples:

- public GitHub repositories and their commit history;
- public README / WORK / PROJECTS / NOW documents;
- public pull requests, issues, CI and code artifacts;
- public portfolio pages when available.

You may describe these as publicly verifiable, but still distinguish documentation from executable behavior.

### Level B — Candidate-described private work

Examples:

- private repositories;
- anonymized enterprise delivery work;
- internal systems that cannot be published;
- private demos or artifacts described in the public profile.

Treat these as plausible but not independently verified. Recommend interview walkthroughs, architecture discussion, redacted screenshots, live demos or targeted technical questioning when important to the hiring decision.

### Level C — Planning / direction

Examples:

- Enterprise AI Core planning;
- future reusable capability layers;
- longer-term AI-native company / agent-runtime architecture ideas.

Treat these as evidence of thinking direction only. Do not convert them into claims of shipped capability.

## Claim calibration

Prefer wording such as:

- `The public repository shows...`
- `The candidate describes...`
- `This appears consistent with...`
- `This is not yet independently verifiable because...`
- `The strongest public evidence is...`
- `This claim should be tested by asking...`

Avoid wording such as:

- `Gdnbit definitely built...` when only a private description exists;
- `production-grade` unless public evidence or explicit validated context supports it;
- `senior` based only on conceptual vocabulary;
- `full-stack engineer` merely because coding agents produced full-stack systems;
- `consultant` or `process transformation lead` if the work began from requirements already collected by client departments.

## What counts as stronger evidence in an interview

Increase confidence when Gdnbit can:

1. explain a concrete business flow without buzzwords;
2. show how data/state changes across the flow;
3. identify edge cases, permissions and failure modes;
4. explain why a specific architecture was chosen and what alternatives were rejected;
5. navigate the implementation or repository live;
6. diagnose a broken behavior rather than only describe the intended design;
7. show an acceptance criterion and how it was validated;
8. clearly separate his own contribution from team, upstream or agent-generated work.

## What should lower confidence

Lower confidence if:

- answers stay at architecture-diagram level under concrete questioning;
- implementation ownership cannot be traced;
- private projects cannot be demonstrated in any redacted form;
- coding-agent usage becomes a substitute for understanding system behavior;
- candidate cannot explain data models, API contracts, permissions, failure paths or tests behind a claimed system;
- role fit depends heavily on traditional software-engineering depth that is not publicly demonstrated.

## Reviewer principle

The skill is deliberately not a recommendation engine. Its purpose is to make the candidate easier to inspect, including reasons not to hire him for a particular role.