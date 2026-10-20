# Share Gdnbit Candidate Skill / 分享给招聘方

This page gives copyable instructions for a **zero-install GitHub-link workflow**. The recipient does not need to learn Agent Skills, MCP or GitHub's directory structure.

## 中文 · 推荐直接使用

**给 HR / 招聘负责人：**

> 另外这里有一个关于我的个人 Candidate Skill，可以直接把下面这句话和链接发给 AI：
>
> **请根据这个 Skill 及其链接的最新公开资料，快速了解这位候选人：说明他的职业定位、实际工作内容、代表项目及可验证证据，并推荐最值得继续了解的项目或问题。**
>
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

**已经有岗位 JD 的招聘方：**

> 请结合以下 JD，使用这个 Candidate Skill 和它链接的最新公开资料，分析候选人适合承担哪些职责、哪些能力有证据、哪些地方需要面试验证。不要只给笼统匹配分数。
>
> Skill：https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate
>
> JD：（粘贴岗位描述）

**技术面试官 / 潜在合作伙伴：**

> 请从这个 Candidate Skill 进入候选人当前 GitHub，选择与我们需求最相关的项目，验证其实际实现、个人贡献、测试与限制，并提出能够验证能力的技术或交付问题。
>
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

## AI 首轮回答应当是什么样？

- **先回答招聘方的问题**，不要只解释 Skill 是什么。
- 用简短自然的语言讲清定位、职责边界和项目实际用途。
- 默认优先读取当前 GitHub Profile、WORK、PROJECTS，而不是复述 Skill 内旧的项目名单。
- 只在问题需要时进一步发现当前公开仓库及其代码、测试和文档。
- 区分可以公开核实、候选人自述、规划设想及尚待验证的内容。
- 根据招聘方关注点，最后给出 2–4 个自然的深入选项，比如项目深挖、具体经历、JD 匹配、面试问题。
- 不为候选人编造成就，也不因为代码由 AI 协助实现就自动否定其贡献。

若对方已经提供 JD 或选择了项目，就直接处理现有问题，不重复询问。

## 兼容性与可信度

只有**真正加载/遵循该 Skill** 的 AI 才可能完整执行协议。其他模型可能只把 GitHub 页面当作资料阅读，或无法访问外链。因此分享时**在用户消息中写清任务**比只发送裸链接可靠。

如果 AI 只解释了 Skill，可以追加：

> 不需要解释 Skill 本身。请直接查阅它链接的当前候选人资料，先介绍这位候选人，再告诉我哪些结论有公开证据、哪些还需要验证。

如果 AI 无法访问 GitHub，它应诚实说明限制，不得假装已核验代码或最新项目状态。

## English

**Recruiter:**

> Please use this Candidate Skill and the candidate's current linked public sources to introduce the candidate to me. Explain positioning, actual work, notable projects, inspectable evidence, material unknowns, and the most useful next questions.
>
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

**Hiring manager with a JD:**

> Using this Candidate Skill and the current public evidence linked from it, evaluate the candidate against the JD below. Separate supported matches from unverified claims, identify important gaps, and suggest interview questions.
>
> Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate
>
> JD: (paste here)

## Canonical entrypoints

- [Candidate Skill](https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate)
- [Source configuration](CONFIG.md)
- [Retrieval and evaluation rules](SKILL.md)
- [GitHub Profile](https://github.com/Gdnbit)
