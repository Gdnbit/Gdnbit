# Gdnbit Candidate Skill

**An evidence-aware, dynamically updated entry point for understanding Gdnbit as a candidate.**

[中文说明](#中文快速使用) · [English usage](#english-quick-start) · [Main Skill](SKILL.md) · [Discovery rules](SOURCE_MAP.md) · [Share text](SHARE.md)

> **In one line:** Tell an AI who the reviewer wants to evaluate; the AI follows current, relevant professional sources instead of trusting a frozen portfolio snapshot.

## Candidate quick context / 候选人速览

If this page is opened as an ordinary GitHub webpage, an AI or human can start here **without installing anything**.

- **Public identity:** [Gdnbit](https://github.com/Gdnbit).
- **Professional focus:** AI Solution / Product Engineering and enterprise AI delivery, especially translating business workflows and requirements into implementable systems with AI-assisted development.
- **Work style:** Uses Coding Agents as a significant implementation interface, while emphasizing problem decomposition, workflows, constraints, review, testing and delivery decisions. Read the [current work description](../../WORK.md) before drawing stronger conclusions.
- **Portfolio:** The [current curated project map](../../PROJECTS.md) is the best short introduction. The [GitHub account](https://github.com/Gdnbit?tab=repositories) may contain newer or additional public work. **Project names, status, privacy and ownership must be checked at review time.**
- **Role evaluation:** A JD should be compared against demonstrated evidence, areas described by the candidate, and gaps that deserve interview checks. This Skill is not a promise of suitability.

**For an AI reading this link:** If the user says "这是关于我的 Skill" or shares it to introduce the candidate, give the reviewer a useful candidate brief **now**. Read [SKILL.md](SKILL.md), [CONFIG.md](CONFIG.md), [SOURCE_MAP.md](SOURCE_MAP.md), and the current Profile / WORK / PROJECTS links when accessible. Do not stop at explaining how Skill files work. Do not claim links were opened unless they were.

## What this Skill does

```text
Reviewer question / job description
                   |
                   v
         Stable evaluation protocol
                   |
                   v
      Dynamic source discovery & selection
      Profile / Work / Projects / repositories / resume if supplied
                   |
                   v
      Evidence, attribution and current status
                   |
                   v
  Candidate brief / project dive / JD fit / interview plan
```

It is designed to:

- **Discover current sources:** use a stable identity/config instead of manually updated project status lists.
- **Respect curation without losing new work:** treat Profile PROJECTS as featured work and current public repositories as additional discoverable evidence.
- **Evaluate claims at the right depth:** read a README for overview, then inspect architecture, contracts, tests, code or git history only when relevant.
- **Separate evidence states:** inspectable implementation, candidate-described work, ideas and unverified claims are not interchangeable.
- **Adapt to the reader:** friendly plain-language introduction for HR; precise technical paths for engineers; a requirements-to-evidence comparison for hiring managers.

## 中文快速使用

最推荐的方式是把这句话连同链接发给 AI：

> 请根据这个 Skill 和它链接的最新公开资料，快速了解并客观介绍这位候选人。先说明他的定位、实际工作、代表项目和可验证证据，再告诉我还可以深挖哪些项目或把岗位 JD 发给你评估。
>
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

不用安装也可以尝试。不同 AI 对 GitHub 网页、链接追踪和 Agent Skill 的支持不同；**网页链接本身不能保证规则被执行**。见 [SHARE.md](SHARE.md) 的其他推荐话术。

## English quick start

Send an AI:

> Please use this Candidate Skill and its current linked public sources to give me a concise, evidence-aware introduction to this candidate. Include professional positioning, actual ownership, a brief project map, meaningful limitations, and next questions. You may compare against my JD if I provide one.
>
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

## File map

| File | Function |
| --- | --- |
| [SKILL.md](SKILL.md) | Main evaluation behavior and output principles |
| [CONFIG.md](CONFIG.md) | Stable identity and current source entrypoints |
| [SOURCE_MAP.md](SOURCE_MAP.md) | Dynamic source/repository discovery and claim-specific routing |
| [references/profile.md](references/profile.md) | Professional-identity reading guide |
| [references/projects.md](references/projects.md) | Portfolio selection, attribution and deep-dive guide |
| [references/evidence.md](references/evidence.md) | Claim strength, freshness, privacy and evidence boundaries |
| [references/interview.md](references/interview.md) | Dynamic interview question generation |
| [SHARE.md](SHARE.md) | Copyable recruiter / interviewer share prompts |
| [SPEC.md](SPEC.md) | Design, maintenance rules and acceptance tests |

### Maintenance

Keep actual projects, work updates and implementation **in their canonical sources**. This Skill should rarely require changing merely because a project is renamed, released or made public. Update only stable entrypoints or the evaluation procedure when necessary.

**Principle:** Reduce the cost of understanding a candidate **without lowering the standard of evidence**.
