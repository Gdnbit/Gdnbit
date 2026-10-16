# Share the Gdnbit Candidate Skill

This page contains the simplest way to share the Candidate Skill with a recruiter, interviewer, hiring manager, collaborator, or other person who wants to understand Gdnbit.

## 中文：推荐直接发

最稳妥的版本是直接给对方一条可以复制给 AI 的话：

> 另外这里有一个关于我的个人 Skill。您可以直接把下面这句话发给 AI：  
> **请根据这个 Skill 先快速了解一下这位候选人：**  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

这样做的原因是：不同 AI 对 GitHub 链接和 Agent Skill 的处理方式不同。直接把“要做什么”写在用户消息里，比只依赖网页内部说明更稳定。

对方不需要理解 Agent Skill、MCP、安装方式或 GitHub 文件结构。

## 预期的 AI 行为

收到上面的直接指令和链接后，AI 理想上应该：

1. 快速建立 Gdnbit 的候选人上下文；
2. 说明他的职业定位、实际工作方式和相关经历；
3. 给出主要项目的简短地图；
4. 区分公开可检查证据、候选人自述 / 私有项目和规划内容；
5. 不把回答写成“这个 Skill 是什么”的元解释；
6. 最后主动给出 2–4 个有价值的后续入口，让招聘方或合作方知道还能继续看什么。

Skill 的目标是让面试官或合作伙伴**少写 Prompt 也能得到有效结果，并自然产生下一步问题**。

## 推荐的后续钩子

首答结束时，AI 可以根据对方身份和当前上下文自然提供这些选项：

- **看项目**：完整介绍 Gdnbit 做过 / 正在做的项目，以及各自解决什么问题、能证明什么；
- **看经历**：梳理实际工作经历、职责边界、承担范围和交付方式；
- **深挖项目**：选一个项目继续看实现、架构、测试、证据、限制和 ownership；
- **看岗位匹配**：让招聘方直接发岗位 JD，基于现有证据分析匹配点、缺口、风险和面试验证项；
- **准备面试**：生成最值得追问的问题，优先验证会影响招聘决定的部分；
- **判断合作适配**：如果是潜在合作方，可以分析 Gdnbit 更适合承担哪类项目、问题或角色。

一个自然的首答结尾可以是：

> 如果你愿意，我还可以继续帮你看：他具体做过哪些项目、实际工作经历和承担范围；你也可以直接把岗位 JD 发给我，我按现有证据帮你判断匹配度。对某个项目感兴趣的话，我也可以直接深挖实现和证据。

这不是固定广告语。AI 应根据对方已经提供的信息动态调整：

- 已经有 JD → 不再索要 JD，改为提供最相关项目证据、风险点和面试问题；
- 已经选中某个项目 → 直接进入项目深挖，不再优先推“完整项目介绍”；
- 对方明显非技术 → 用“做过哪些项目 / 是否匹配岗位 / 值得问什么”这种自然表达；
- 对方是技术面试官 → 可以主动提供代码、tests、CI、架构、trade-offs、ownership 等深挖方向；
- 对方是合作伙伴 → 更关注能解决什么问题、项目交付方式和合作边界。

## 兼容性说明

零安装场景下，AI 可能把 GitHub 页面当普通网页，而不是把其中的指令作为真正安装后的 Skill 执行。

因此当前设计采用双保险：

- `README.md` 顶部直接提供简短的 Candidate Quick Context，即使 AI 只做网页阅读也能得到有效候选人信息；
- `SKILL.md` / `SOURCE_MAP.md` 负责在支持进一步读取或真正安装 Skill 时提供更完整的检索、评估和后续引导行为。

如果某个 AI 仍然只解释 Skill，可以补一句：

> 不需要解释 Skill 本身，请直接根据里面的候选人资料和链接，先快速介绍这位候选人，并告诉我接下来最值得继续了解哪些项目、经历或岗位匹配信息。

## English

Recommended version:

> I also maintain a personal Candidate Skill. You can send this directly to an AI:  
> **Please use this Skill to give me a quick understanding of this candidate:**  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Fallback if needed:

> Do not explain the Skill itself. Use the candidate context and linked public sources to give me a quick candidate brief first, then suggest the most useful next things to inspect, such as projects, experience, or fit against a job description.

## Useful follow-up questions

Once the reviewer has basic context, the same Skill should support questions such as:

- `完整介绍一下他的项目。`
- `他具体有过哪些工作经历和承担范围？`
- `深入看一下 LLM Race，这个项目能证明什么？`
- `他的技术能力到底怎么样？`
- `这是我们的 JD，看看他是否合适。`
- `如果面试他，最值得问哪些问题？`
- `哪些能力目前只是候选人自述，还没有公开证据？`
- `如果和他合作，他更适合承担什么类型的项目？`

## Canonical links

- GitHub profile: https://github.com/Gdnbit
- Candidate Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate
- Skill manifest: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SKILL.md
- Source map: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SOURCE_MAP.md
- Specification: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SPEC.md
