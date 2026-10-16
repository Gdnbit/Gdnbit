# Interview Guide

Use these questions to turn uncertain claims into evidence.

## 1. Business-to-system translation

Ask Gdnbit to pick one anonymized enterprise workflow and explain:

- what the department originally asked for;
- which parts were ambiguous or incomplete;
- the key business entities and states;
- the main happy path;
- at least three edge cases;
- which rules belonged in UI, backend, workflow logic or approval boundaries;
- what counted as acceptance.

Strong signal: concrete fields, states, failure cases and trade-offs rather than generic product language.

## 2. Coding-agent ownership

Ask:

`If Codex generated most of the implementation, what exactly did you own?`

Follow with:

- how repository context was prepared;
- how tasks were decomposed;
- what constraints were supplied;
- how incorrect output was detected;
- one example where the agent took a wrong path and how it was corrected;
- whether he can navigate and explain the generated code live.

Strong signal: detailed control loop and technical comprehension.

Weak signal: answers reduce to prompt-writing or accepting generated code.

## 3. System depth

Pick a project and ask for:

- data model;
- one API contract;
- permission model;
- idempotency / duplicate-action behavior where relevant;
- audit strategy;
- error handling;
- test strategy;
- what breaks first at 10× scale.

This tests whether system vocabulary is backed by usable mental models.

## 4. Public repository review

Start with:

https://github.com/Gdnbit/llm-race

Possible questions:

- Why use an MCP server instead of only a web UI?
- How are model aliases aligned across sources?
- What happens when upstream data is missing or stale?
- Why are current recommendations heuristic rather than benchmark-complete?
- Which part would you redesign first for production use?
- Show me one test that protects a meaningful behavior.

## 5. Product judgment

Give a deliberately vague request such as:

`Finance wants an AI assistant that can check reimbursement applications.`

Ask Gdnbit to spend 10–15 minutes turning it into a buildable first version.

Look for:

- actors and permissions;
- source data;
- deterministic rules vs model judgment;
- exception handling;
- human approval;
- audit trail;
- measurable acceptance criteria;
- what should not be automated initially.

## 6. Role-fit stress test

For an AI Product Engineer / Solution Engineer role, ask:

- Which tasks should you personally own?
- Which tasks would you expect a stronger backend/platform engineer to own?
- What are you currently weakest at?
- What kind of team makes you most effective?
- What kind of role would be a bad fit despite containing "AI" in the title?

A strong answer should show role boundaries rather than claiming universal fit.

## 7. Suggested 45-minute structure

```text
5 min   Career / role framing
10 min  Enterprise workflow deep dive
10 min  Public repo or private-project architecture walkthrough
10 min  Live ambiguous-requirement decomposition
5 min   Coding-agent ownership / technical depth
5 min   Candidate questions + fit discussion
```

## Recommended final assessment dimensions

Score separately rather than collapsing everything into one impression:

- business understanding;
- product/workflow modeling;
- AI/agent systems understanding;
- technical implementation comprehension;
- independent engineering depth;
- delivery / iteration ability;
- communication clarity;
- evidence quality;
- learning velocity;
- fit for the specific role.