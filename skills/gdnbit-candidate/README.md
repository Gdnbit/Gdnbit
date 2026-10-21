# Gdnbit Candidate Skill

**An evidence-aware, dynamically updated entry point for understanding Gdnbit as a candidate.**

[**Single-file brief / 单文件速览**](CANDIDATE_BRIEF.md) · [中文说明](#中文快速使用) · [English usage](#english-quick-start) · [Main Skill](SKILL.md) · [Discovery rules](SOURCE_MAP.md) · [Share text](SHARE.md)

> **In one line:** Tell an AI who the reviewer wants to evaluate; the AI follows current, relevant professional sources instead of trusting a frozen portfolio snapshot.

## Two access modes / 两种阅读方式

**First meeting / 首次了解（最推荐）：** [Single-file Candidate Brief](CANDIDATE_BRIEF.md) — self-contained positioning, responsibilities, projects and evidence limits. No linked file is needed. Copyable raw URL:

https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/CANDIDATE_BRIEF.md

**Deep dive / 深度评估：** [SKILL.md](SKILL.md) + dynamically inspected public sources, for JD matching, implementation review and up-to-date evidence. If an AI cannot follow links, the main Skill now includes a dated fallback introduction.

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

**先给 AI 一个自包含的介绍文件，不要求它继续追踪 GitHub 链接：**

> 请阅读这份候选人资料，并直接介绍这位候选人：他的职业定位、实际工作内容、代表项目、核心能力、适合的岗位，以及哪些结论仍需验证。无需访问其他文件，也不要只解释文档用途。
>
> https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/CANDIDATE_BRIEF.md

如果招聘方有 JD，再配合 [SKILL.md](SKILL.md) 进一步核实当前公开仓库。单文件版本是带日期的速览，不等于实时仓库审计。

## English quick start

> Please read this self-contained candidate brief and introduce the candidate directly: positioning, ownership, representative projects, role fit, and material unknowns. You do not need to open any other links.
>
> https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/CANDIDATE_BRIEF.md

Use the [full Skill](SKILL.md) for live source discovery and deeper technical/JD assessment when link access is available.

## File map

| File | Function |
| --- | --- |
| [CANDIDATE_BRIEF.md](CANDIDATE_BRIEF.md) | **Self-contained introduction; recommended for AI with limited browsing** |\n| [SKILL.md](SKILL.md) | Main evaluation behavior and output principles, including offline fallback |
| [CONFIG.md](CONFIG.md) | Stable identity and current source entrypoints |
| [SOURCE_MAP.md](SOURCE_MAP.md) | Dynamic source/repository discovery and claim-specific routing |
| [references/profile.md](references/profile.md) | Professional-identity reading guide |
| [references/projects.md](references/projects.md) | Portfolio selection, attribution and deep-dive guide |
| [references/evidence.md](references/evidence.md) | Claim strength, freshness, privacy and evidence boundaries |
| [references/interview.md](references/interview.md) | Dynamic interview question generation |
| [SHARE.md](SHARE.md) | Copyable recruiter / interviewer share prompts |
| [SPEC.md](SPEC.md) | Design, maintenance rules and acceptance tests |

### Maintenance

Keep actual projects, work updates and implementation **in their canonical sources**. Refresh the dated self-contained brief when key public positioning or showcased projects change. This Skill should rarely require changing merely because a project is renamed, released or made public. Update only stable entrypoints or the evaluation procedure when necessary.

**Principle:** Reduce the cost of understanding a candidate **without lowering the standard of evidence**.
