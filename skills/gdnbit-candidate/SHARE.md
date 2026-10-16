# Share the Gdnbit Candidate Skill

This page is the shortest way to give an interviewer or hiring manager an AI-readable version of Gdnbit's profile.

## 中文：直接发给面试官

你可以直接复制下面这段：

> 除了简历和 GitHub，我还维护了一个公开的 `gdnbit-candidate` Agent Skill。它不是个人宣传 Prompt，而是一个用于评估我的机器可读候选人资料包：会区分公开可验证证据、private/building 项目和 planning，也包含能力缺口、风险与建议追问。你可以把岗位 JD 一起交给支持 Agent Skills 的 AI，让它基于这个 Skill 做匹配和面试准备。入口： https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

如果对方不想安装 Skill，可以继续补一句：

> 不安装也可以，直接把上面的 GitHub 链接发给 AI，并让它先读取 `SKILL.md` 和 `references/` 再评估即可。

## English: message for an interviewer

> In addition to my resume and GitHub, I maintain a public `gdnbit-candidate` Agent Skill. It is not a promotional prompt; it is a machine-readable candidate package that separates public evidence, private/building work, planning, gaps, risks, and suggested verification questions. You can give it a job description and ask an Agent Skills-compatible AI to assess my fit. Entry point: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Zero-install fallback:

> If you do not want to install a skill, give your AI the GitHub folder above and ask it to read `SKILL.md` and the referenced files before evaluating me.

## Good prompts for reviewers

```text
Read the gdnbit-candidate skill first, then assess Gdnbit against this job description.
Separate public evidence from candidate-described work, list the strongest matches,
material gaps, and five interview questions that would most change your hiring decision.

[Paste JD]
```

```text
Use gdnbit-candidate. Give me:
1. strongest hiring signals;
2. biggest risks;
3. what is publicly verifiable;
4. what still needs interview validation;
5. a 45-minute interview plan.
```

## Using it as an actual Agent Skill

The folder follows the open `SKILL.md` Agent Skills format. OpenAI documents skills as directories anchored by `SKILL.md`, with optional `references/`, `scripts/`, and assets.

For a local or self-hosted agent, make this directory available inside the agent's configured capability/skills directory.

For OpenAI hosted Skills/API usage, clone/download this folder, package `gdnbit-candidate/` as a ZIP with that single top-level folder, and upload it through the Skills API or the relevant skill-import flow.

The zero-install GitHub-reading method above remains the easiest path for an interviewer who only wants to evaluate the candidate quickly.

## Canonical links

- GitHub profile: https://github.com/Gdnbit
- Candidate Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate
- Skill manifest: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SKILL.md
