# Share the Gdnbit Candidate Skill

This page is the shortest way to give an interviewer or hiring manager an AI-readable version of Gdnbit's profile.

## 中文：推荐直接发给面试官

> 另外这里有一个关于我的个人 Skill，您可以直接把这个链接发给 AI，帮您更快了解我：  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

这句话故意保持简单，不要求对方理解 Agent Skill、MCP 或安装流程。

如果对方想进一步了解，可以补充：

> 这个 Skill 主要告诉 AI 应该怎么读取和判断我的简历、网站、GitHub 和项目证据，也会区分公开可验证内容、私有项目和规划内容。

## English: short version

> I also maintain a personal Candidate Skill. You can send this link directly to an AI to help it understand my background more quickly:  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Optional explanation:

> The Skill tells the AI how to interpret my resume, website, GitHub, and project evidence, including what is publicly verifiable and what still requires interview validation.

## Zero-install usage

The interviewer does not need to install anything. The simplest workflow is:

1. send the GitHub folder link to an AI that can access the web;
2. ask it to read `SKILL.md` first;
3. for deeper evaluation, let it read `SPEC.md` and the relevant files under `references/`;
4. optionally provide the job description and ask for a fit assessment.

Example:

```text
Read this Candidate Skill first, then assess the candidate against the job description below.
Distinguish public evidence from candidate-described work and identify what should be verified in interview.

[Skill link]
[Job description]
```

## What the Skill is for

The Skill is not another resume or another personal website.

```text
Resume / website / GitHub / projects = information and evidence
Candidate Skill                         = instructions for how AI should interpret them
```

The formal behavior specification is in [SPEC.md](SPEC.md).

## Using it as an actual Agent Skill

The folder follows the open `SKILL.md` Agent Skills format. In a compatible client, the folder can be installed or made available as a skill/capability directory.

For an interviewer who only wants to understand the candidate quickly, the zero-install GitHub-reading method above is the preferred path.

## Canonical links

- GitHub profile: https://github.com/Gdnbit
- Candidate Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate
- Skill manifest: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SKILL.md
- Skill specification: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SPEC.md
