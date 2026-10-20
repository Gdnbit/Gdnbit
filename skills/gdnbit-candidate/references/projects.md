# Dynamic Project Discovery & Evidence Guide

**Do not put a fixed portfolio or private/public-status cache in this file.** Resolve the current featured projects from the live [Profile project map](../../../PROJECTS.md) and find relevant additional public repositories under the GitHub account in [../CONFIG.md](../CONFIG.md).

## 1. Discover and curate

1. Read current PROJECTS for the candidate's **featured work** and project intent.
2. If the question asks for newer work, all projects, a missing project, or technical evidence not covered there, inspect currently public GitHub repositories, with pagination when claiming completeness.
3. Normalize renamed repositories, aliases, historical lineages, forks, templates and archived experiments. Do not double-count.
4. Identify **featured work**, **additional original work**, **upstream-derived/customized work**, **historical/archived work**, **forks/mirrors**, **private candidate-described work**, and **planning only** where applicable.
5. Select projects based on the reviewer's role/interest, candidate's stated focus and inspectable evidence—not stars, last-commit dates or repository volume alone.

Do not assert an entire inventory was checked unless the public listing was actually enumerated and the accessible coverage is known.

## 2. Extract project value

For each *selected* project, answer:

- **Problem and target user:** What concrete need is addressed?
- **Product shape:** What workflow or tool actually serves that need?
- **Implementation evidence:** What is observable in current repo docs, contracts, tests or code?
- **Candidate's contribution:** What can be reasonably attributed to this candidate, vs upstream code, tools and collaborators?
- **Reality check:** Local demo, Mock, tested path, early MVP, production deployment and measured outcome are different claims.
- **What it demonstrates:** Choose the skill signal relevant to the reviewer's decision.

When a repository is inaccessible, keep statements attributed to their actual source and avoid inferring hidden implementation.

## 3. Evidence drill-down

```text
Curated listing / discovered repo
             ↓
Repository README / status
             ↓
Architecture and contracts
             ↓
Relevant tests / CI
             ↓
Source implementation
             ↓
Commits / PRs / contributors (if ownership matters)
```

Inspect only the depth required by the question, while checking directly any claim that materially affects a recommendation.

## 4. Project-level follow-ups

Generate questions based on observed design and boundaries:

- What does a real user do from input to outcome?
- What data and state changes are involved?
- Which permissions, approvals and failure modes matter?
- What implementation path supports the main claimed capability?
- Which tests validate it, and which scenarios remain untested?
- What came from upstream / collaborators / Coding Agents?
- What design decision changed after feedback or debugging?
- What is not yet production-ready, and what would be required?

Do **not** use a fixed questionnaire naming yesterday's projects.

## 5. Source conflicts

For current repository visibility, check the current repository. For implementation, prefer relevant current code/tests over general claims. For featured positioning, use current Profile PROJECTS. When they disagree, note the difference rather than hiding or averaging it.
