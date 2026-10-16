# Share the Gdnbit Candidate Skill

This page contains the simplest way to share the Candidate Skill with a recruiter, interviewer, hiring manager, or other person who wants to understand Gdnbit.

## 中文：推荐直接发

> 另外这里有一个关于我的个人 Skill，您可以直接把这个链接发给 AI，帮您更快了解我：  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

就用这一句即可。

对方不需要理解 Agent Skill、MCP、安装方式或 GitHub 文件结构。Skill 本身会告诉可访问网页 / GitHub 的 AI 应该如何继续读取资料并建立候选人上下文。

## 预期的 AI 行为

对方把上面的文字和链接直接发给 AI 后，AI 理想上应该：

1. 理解 `Gdnbit` 就是这段话里“我”所指的候选人；
2. 自动读取 Skill 的入口和 source map，而不是停在解释“Skill 是什么”；
3. 继续读取当前 Profile / Work / Projects 等必要公开资料；
4. 快速说明候选人的职业定位、实际工作方式和主要项目；
5. 区分公开可检查证据、候选人自述 / 私有项目和规划内容；
6. 最后主动给出后续选项，例如：
   - 完整介绍项目；
   - 选择一个项目做深度分析；
   - 结合 JD 做岗位匹配。

Skill 的目标是让面试官**少写 Prompt 也能得到有效结果**。

## 如果某个 AI 没有自动继续读取

不同 AI / 浏览环境的网页访问能力可能不同。如果它只解释了 Skill 而没有继续了解候选人，可以补一句：

> 请直接按照这个 Skill 的说明继续读取相关公开资料，并先帮我快速了解这个候选人，不需要解释 Skill 本身。

这是兼容性 fallback，不是正常情况下必须发送的话术。

## English

Recommended short version:

> I also maintain a personal Candidate Skill. You can send this link directly to an AI to help it understand me more quickly:  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Fallback if needed:

> Please follow the Skill instructions, read the relevant public sources, and give me a quick understanding of the candidate rather than explaining the Skill itself.

## What the Skill should help with

Once the reviewer has basic context, the same Skill should support follow-up questions such as:

- `完整介绍一下他的项目。`
- `深入看一下 LLM Race，这个项目能证明什么？`
- `他的技术能力到底怎么样？`
- `这是我们的 JD，看看他是否合适。`
- `如果面试他，最值得问哪些问题？`
- `哪些能力目前只是候选人自述，还没有公开证据？`

## Canonical links

- GitHub profile: https://github.com/Gdnbit
- Candidate Skill: https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate
- Skill manifest: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SKILL.md
- Source map: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SOURCE_MAP.md
- Specification: https://github.com/Gdnbit/Gdnbit/blob/main/skills/gdnbit-candidate/SPEC.md
