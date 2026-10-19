# Interview Guide

Use these questions to turn uncertain claims into evidence.

The goal is not to interrogate every dimension. Pick the questions that would most change the hiring decision for the actual role.

## 1. Start from a real project or workflow

When possible, anchor the interview in one concrete project or anonymized enterprise workflow rather than starting from abstract architecture language.

Ask Gdnbit to explain:

- what problem existed;
- what the user / department originally wanted;
- what parts were ambiguous or incomplete;
- what he personally owned;
- the key business entities and states;
- the main happy path;
- important edge cases;
- permissions / approval boundaries;
- what counted as acceptance;
- what changed after real feedback.

Strong signal: concrete fields, states, failure cases, trade-offs, and acceptance behavior rather than generic product language.

## 2. Coding Agent ownership

Ask:

`If Coding Agents generated a large share of the implementation, what exactly did you own?`

Useful follow-ups:

- how repository context was prepared;
- how tasks were decomposed;
- what constraints / contracts were supplied;
- how incorrect output was detected;
- one example where the Agent took a wrong path and how it was corrected;
- how tests / acceptance criteria were used;
- whether he can navigate and explain generated code live;
- what decisions he would not delegate to an Agent.

Strong signal: a detailed control loop and technical/product comprehension.

Weak signal: answers reduce to prompt-writing or accepting generated output.

## 3. Public project deep dive

Start with one of the featured public repositories relevant to the role:

- ClassMatter: https://github.com/Gdnbit/classmatter
- ThinkRoom: https://github.com/Gdnbit/thinkroom
- LLM Race (secondary, MCP/model selection): https://github.com/Gdnbit/llm-race

Inspect the current repository rather than relying on the Skill summary.

**For ClassMatter**, useful questions include:

- How do typed facts, tasks and timeline entries relate, and which are stored vs. projected?
- What prevents an Agent draft from directly becoming a business fact?
- How are corrections versioned, approved and audited?
- Which checks are synthetic-only, and what still blocks formal R1 or real student data?

**For ThinkRoom**, ask:

- How are RawSource, ClaimCard and EvidenceSpan related?
- What enforces selected-source boundaries and insufficient-evidence refusal?
- What does a DecisionSnapshot preserve for later Outcome / Replay?
- Which modes and optional data sources are exercised in Mock vs. with real models?
- What would be necessary before safe public hosting or measurable quality claims?

**For LLM Race**, ask about alias matching, stale source data, missing metrics, MCP tool contracts and limits of current ranking heuristics.

In every case ask the candidate to locate a concrete implementation path, explain a failure mode or trade-off, and separate their own decisions from upstream code and Coding Agent output.

## 4. Private project verification

For HealthBox / Family Health Records or anonymized enterprise work that is still private, do not ask the reviewer to trust the portfolio summary alone. Request safe, appropriately redacted evidence such as:

- architecture and data-flow walkthroughs;
- synthetic-only local demonstrations;
- API/contract or test explanations;
- debugging and acceptance stories;
- a clear separation of personal, team, upstream and Coding Agent contributions.

Never request real student records, household medical information or confidential client data. If an important claim cannot be demonstrated, keep confidence limited.

## 5. System depth

Pick a relevant system and ask about:

- data model;
- one API / command contract;
- permission model;
- idempotency / duplicate-action behavior where relevant;
- audit strategy;
- error handling;
- state transitions;
- test strategy;
- observability / debugging path;
- what breaks first at 10× scale.

This tests whether system vocabulary is backed by usable mental models.

Not every role needs equal depth on every item.

## 6. Product / solution judgment

Give a deliberately vague request such as:

`Finance wants an AI assistant that can check reimbursement applications.`

Ask Gdnbit to spend 10–15 minutes turning it into a buildable first version.

Look for:

- actors and permissions;
- source data;
- deterministic rules vs. model judgment;
- exception handling;
- human approval;
- audit trail;
- measurable acceptance criteria;
- what should not be automated initially;
- what information is still missing before implementation.

This is especially useful for AI Product Engineer / Solution Engineer roles.

## 7. Business-to-system translation

For an anonymized enterprise workflow, ask:

- Which requirements were already collected by the client side?
- Which rules or ambiguities did you personally uncover or clarify?
- What did you change from the original request and why?
- How did the business rule become UI behavior, workflow logic, data constraints, or approval boundaries?
- What was the hardest mismatch between what users said they wanted and what the system actually needed?

This helps distinguish delivery ownership from full consulting-style discovery ownership without undervaluing either.

## 8. Role-fit stress test

For an AI Product Engineer / Solution Engineer role, ask:

- Which tasks should you personally own?
- Which tasks would you expect a stronger backend/platform engineer to own?
- What are you currently weakest at?
- What kind of team makes you most effective?
- What kind of role would be a bad fit despite containing “AI” in the title?
- What would you want to learn in the first 90 days here?

A strong answer should show role boundaries rather than claiming universal fit.

## 9. Suggested interview paths

### 30-minute screen

```text
5 min   Career / role framing
10 min  One real workflow or project deep dive
8 min   Coding Agent ownership + technical comprehension
5 min   Role fit / gaps
2 min   Candidate questions
```

### 45-minute evaluation

```text
5 min   Career / role framing
10 min  Enterprise workflow deep dive
10 min  Public repo or private-project walkthrough
10 min  Live ambiguous-requirement decomposition
5 min   Coding Agent ownership / system depth
5 min   Candidate questions + fit discussion
```

### 60-minute technical/product hybrid

```text
5 min   Role framing
15 min  Project / repository deep dive
15 min  Live product-system decomposition
10 min  Technical depth / failure modes / data + permissions
10 min  Coding Agent workflow + debugging / ownership
5 min   Fit and candidate questions
```

## 10. Recommended final assessment dimensions

Score or discuss separately rather than collapsing everything into one impression:

- business understanding;
- product / workflow modeling;
- AI / Agent systems understanding;
- technical implementation comprehension;
- independent engineering depth;
- delivery / iteration ability;
- Coding Agent control / review discipline;
- communication clarity;
- evidence quality;
- learning velocity;
- fit for the specific role.

The most useful interview questions are the ones that resolve the largest evidence gap for the role, not the ones that make the interview look most technical.