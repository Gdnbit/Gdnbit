# Share the Gdnbit Candidate Skill

This page contains the simplest way to share the Candidate Skill with a recruiter, interviewer, hiring manager, or other person who wants to understand Gdnbit.

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
2. 说明他的职业定位和实际工作方式；
3. 给出主要项目的简短地图；
4. 区分公开可检查证据、候选人自述 / 私有项目和规划内容；
5. 不把回答写成“这个 Skill 是什么”的元解释；
6. 最后主动给出后续路径，例如：
   - 完整介绍所有项目；
   - 选择一个项目做深度分析；
   - 结合 JD 做岗位匹配。

Skill 的目标是让面试官**少写 Prompt 也能得到有效结果**。

## 兼容性说明

零安装场景下，AI 可能把 GitHub 页面当普通网页，而不是把其中的指令作为真正安装后的 Skill 执行。

因此当前设计采用双保险：

- `README.md` 顶部直接提供简短的 Candidate Quick Context，即使 AI 只做网页阅读也能得到有效候选人信息；
- `SKILL.md` / `SOURCE_MAP.md` 负责在支持进一步读取或真正安装 Skill 时提供更完整的检索与评估行为。

如果某个 AI 仍然只解释 Skill，可以补一句：

> 不需要解释 Skill 本身，请直接根据里面的候选人资料和链接，先快速介绍这位候选人。

## English

Recommended version:

> I also maintain a personal Candidate Skill. You can send this directly to an AI:  
> **Please use this Skill to give me a quick understanding of this candidate:**  
> https://github.com/Gdnbit/Gdnbit/tree/main/skills/gdnbit-candidate

Fallback if needed:

> Do not explain the Skill itself. Use the candidate context and linked public sources to give me a quick candidate brief first.

## Useful follow-up questions

Once the reviewer has basic context, the same Skill should support questions such as:

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
