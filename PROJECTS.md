# 项目地图

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

这里优先写 **系统实际做什么**。架构和技术词是为了说明实现方式，不替代产品本身。

> **状态说明：** `Public` 表示源码已经公开、可检查，不等于正式发布或生产可用；`Private` 表示已有私有实现但尚不可公开检查；`Planning` 表示明确的规划/架构方向。

---

# 四个核心项目

## 🏫 [班事有谱 · ClassMatter](https://github.com/Gdnbit/classmatter)

`Public / Pre-alpha` · Agent-assisted Homeroom Workbench

**解决什么问题：** 班主任日常面对分散的学生事实、待办跟进和长期未闭环事项，很难同时保证及时处理与事后可追溯。ClassMatter 尝试把这些信息放进一个有状态、可更正、可审计的班级工作台。

**公开源码中的主要路径：**

- 本机 owner 初始化 / 登录 → 创建班级与名单；
- 记录类型化学生事实、事件及跟进 Task；
- 在 Today 和 Student Timeline 中查看待处理事项与学生上下文；
- 对重要更正执行预览、明确批准和版本 / 审计记录；
- Agent 通过受控边界查询、生成草稿，不直接批准或提交业务写入。

这是与私有开发主仓分离的**独立公开候选仓库**；代码处于 Pre-alpha，**只允许合成数据开发验证**。尚未形成正式 R1、真实学生数据准入或生产发布。不要把 CI / 合成测试通过等同于教师减负效果已验证。

[查看源码、运行说明与限制 →](https://github.com/Gdnbit/classmatter)

---

## 🔬 [思考间 · ThinkRoom](https://github.com/Gdnbit/thinkroom)

`Public / Early-stage` · Personal Knowledge & Multi-perspective Reasoning

**解决什么问题：** 人们收藏了大量文章、研究文档和笔记，但下一次遇到问题时，很难快速找回相关观点、来源与分歧。ThinkRoom 让积累的信息能够带着证据参与新的思考，而不只是被保存。

**当前公开代码的六步主线：**

```text
收集 Uploads / Feeds
  → 解析 Text / OCR
  → 处理 RawSource / ClaimCard / EvidenceSpan
  → 存储原文与衍生知识
  → 按问题和来源范围召回
  → Chat / Briefing / Committee / Replay
```

- **知识入库**：文档、笔记及可选信息源经解析与关联，保留来源；
- **资料范围与证据**：选定来源问答，观点可回溯原文，证据不足时应停止生成而非编造；
- **多种思考模式**：日常问答、结构化简报及可手动选择的多角色讨论；
- **判断复盘**：保存决策快照，记录后续结果，再回看当时依据。

早期应用场景包含金融研究，但它**不是已验证的投资建议或自动交易系统**；公开的本地测试 / Mock 路径不等于真实模型效果与生产托管安全性。不同来源和高级模块成熟度有差异，以仓库 README 和验证材料为准。

[查看源码、合成演示与设计思路 →](https://github.com/Gdnbit/thinkroom)

---

## 🩺 HealthBox / Family Health Records

`Private / Preparing for open source` · Personal & Family Health Records

**解决什么问题：** 家庭医疗报告、体检批次和健康指标散落在各处，缺乏统一归档、人工核对和长期对比的工具。

私有实现基于开源 **MediKeep** 定制和扩展；`HealthBox` 是计划采用的公开名称，**当前未公开发布名为 HealthBox 的仓库**。以下属于项目描述，暂不等于可供外部独立检查的证据：

- 多文件上传、保留原始报告与来源；
- OCR / 解析结果先成为候选，经人工复核后才正式入库；
- 检验与生命体征趋势、体检批次对比；
- 家庭成员与共享边界、导出和备份恢复；
- AI 用于受控辅助分析，不能静默生成或修改正式健康事实。

该项目继承上游开源代码，评价个人贡献时应区分上游能力与新增定制实现。计划完成公开审计后再发布，不将准备中当作已经开源。

---

## 🏢 Enterprise AI Core

`Planning / Architecture direction` · Enterprise AI / Reusable Infrastructure

这是我从当前企业 AI 应用交付中进一步抽象的架构方向，**不是已完成的独立平台或可公开检查的代码成果**。

它考虑把 `ERP / OA / SaaS / Excel / Files` 等业务系统与重复使用的 `OCR / ASR / 文档解析 / RAG / Model / Tool` 能力连接起来，再通过统一的企业 Context、权限 / 审批 / 审计边界和可受控执行的 Agent Runtime，为采购、行政、生产等 Domain Packs 提供可复用基础。

```text
Existing Systems / Files
      → Enterprise Context / State
      → Reusable Capabilities
      → Permissions / Approval / Audit
      → Agent Runtime / Domain Workflows
```

它体现我长期想研究的方向：让 Agent 不只回答问题，还能在明确的业务、权限和审计边界内可靠推进工作。实现深度和适用性需要未来单独证明。

---

# 其他正在形成的方向

## 🧠 Personal Context Infrastructure · `Planning`

把录音、位置、日历、应用使用、健康 / 穿戴、文件等多源个人数据对齐到统一时间线，提取 `Event / Person / Claim / Task` 并保留 provenance，再通过 API / MCP 提供给 Personal Agent。核心思想是 **context 属于用户，Agent 只是消费者**。

## 🎙️ Audio Intelligence Gateway · `Planning`

统一封装多 ASR、speaker diarization、上下文纠错、专有名词处理、模型交叉校验与 `Transcript → Artifact`，给 Class OS、Personal Context、会议 / 访谈等场景复用。

## 🖼️ Image Quality Audit / Image Dedup

偏工具型的本地工作流：重复 / 近似重复检测、图像质量评估、人审和结果导出。它们主要验证 **明确输入 → 可解释检测 → 人工复核 → 可导出结果** 这一类小而完整的产品链路。

---

# 这些项目之间的关系

```text
真实业务 / 个人场景
        ↓
Domain System
        ↓
Reusable Capabilities
        ↓
Structured Context / State
        ↓
Tools + Permission + Runtime
        ↓
Agent-native System
```

- **ClassMatter / ThinkRoom / HealthBox**：三个不同场景下的 Domain System；前两者已有公开源码，HealthBox 仍为私有准备中。
- **Enterprise AI Core**：把企业交付里反复出现的能力进一步抽象成通用底座。
- **Personal Context / Audio Gateway**：为长期 Personal Agent 和其他产品补充可复用 Context / Capability。

我会继续明确区分 `Building` 和 `Planning`，也不会把私有客户项目、他人仓库或未验证功能包装成公开成果。

[← 返回主页](README.md) · [工作方式 →](WORK.md) · [当前方向 →](NOW.md)
