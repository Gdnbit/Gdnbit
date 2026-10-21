# Share Gdnbit Candidate Brief & Skill / 分享给招聘方

**两种入口：**

1. **首次介绍（默认）：单文件候选人速览。** AI 只需读取一个 Raw Markdown 链接；不要求它继续访问 GitHub。
2. **深度评估：动态 Candidate Skill。** 有 GitHub 读取能力时，可进一步审查最新公开源码、证据及 JD 匹配；无外链能力时使用 Skill 内置的简要 fallback。

## 中文 · 直接发给招聘方的 AI

> 请阅读这份独立的候选人资料，直接介绍这个人：他的职业定位、实际工作、代表项目、核心优势与能力边界，以及适合进一步评估的岗位。区分公开自述、作品可见信息与尚未验证的成果。**即使打不开其他链接，也直接依据本文作答，不要只介绍文档本身。**
>
> https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/CANDIDATE_BRIEF.md

### 已经有 JD

> 请结合下面的岗位 JD 和这份单文件候选人资料，判断哪些职责较匹配、证据有多强、哪些疑点值得面试核实。不要凭未经验证的内容下定论，也不要只给匹配分数。
>
> Candidate: https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/CANDIDATE_BRIEF.md
>
> JD：（粘贴岗位描述）

### 技术面试 / 深度审查

> 请从这个候选人 Skill 出发，按我提供的岗位或技术方向审查候选人的最新**公开**仓库；重点验证工作归属、实现、测试、限制与真实问题解决能力。若外链不可访问，先依据 Skill 内的备用介绍作有限评估，并说明需要验证什么。
>
> https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/SKILL.md

## 兼容性与可信度

- **Raw Markdown ≠ 所有 AI 均可联网。** 已有测试中某 AI 能读取原始 SKILL.md，但无法沿相对链接继续打开其他文件；单文件候选人速览专门降低这种依赖。
- **单文件解决的是首轮介绍，不是实时核验。** 内容带有更新日期，仓库状态和能力证明仍可能变化；有条件时应打开当前代码与测试。
- **若连 Raw 链接也打不开，** 直接把该文件的 Markdown 正文粘贴进对话，或上传文件；不要让 AI 根据用户名猜测。
- 不应凭仓库归属、AI-assisted 代码、设计文档或 Demo 自动认定生产级交付、独立编码或商业成果。

## English

**First impression (single file):**

> Please read this self-contained brief and introduce the candidate directly, covering positioning, actual responsibilities, relevant projects, evidence strength, role fit and verification questions. Do not require access to any additional files.
>
> https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/CANDIDATE_BRIEF.md

**Deeper evidence-based evaluation (when browsing works):**

> Use this Candidate Skill to evaluate current public repository evidence against my job description. Separate demonstrable implementation from candidate descriptions and plans, and identify decisive unknowns.
>
> https://raw.githubusercontent.com/Gdnbit/Gdnbit/main/skills/gdnbit-candidate/SKILL.md

## Entrypoints

- [Single-file Candidate Brief](CANDIDATE_BRIEF.md) — recommended sharing link
- [Full evaluation Skill](SKILL.md) — dynamic deep review
- [GitHub Profile](https://github.com/Gdnbit)
- [Source configuration](CONFIG.md)
