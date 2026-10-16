# 项目地图

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

这里优先写 **系统实际做什么**。架构和技术词是为了说明实现方式，不替代产品本身。

> **状态：** `Building` = 已有实际开发 / 私有实现 · `Planning` = 已形成明确方案，尚未作为完整项目落地。

---

# 四个核心项目

## 🏢 Enterprise AI Core

`Planning` · Enterprise AI / Reusable Infrastructure

一个面向中小企业与传统组织的 **可复用 AI-native 企业底座**。目标不是再做一个独立 SaaS，而是把企业现有系统和反复出现的 AI 能力接成统一层。

### 计划功能

- **接入现有业务系统**：承接 `ERP / OA / SaaS / Excel / CSV / Files` 的数据与导出结果，不要求企业一次性推翻旧系统。
- **Enterprise Context Layer**：把人员、组织、角色、业务对象、事件、任务、状态、证据等沉淀成可查询的企业 Context。
- **Capability Layer**：统一封装 `OCR / ASR / Vision / Document Parsing / File Conversion / Search / RAG / Model Access`，供多个业务模块复用。
- **Model / Tool Gateway**：屏蔽不同模型与供应商差异，让业务层可以更换模型、工具和实现方式。
- **Domain Packs**：把采购、行政、财务、生产等不同领域的 Schema、规则、Workflow 与 Agent 能力做成可插拔业务包。
- **Permission / Approval / Audit**：Agent 读取什么、能执行什么、什么操作需要人工批准、发生过什么，都要有明确边界。
- **Agent Runtime / Business Command Gateway**：让 Agent 不只回答问题，而是通过受控命令推进真实业务流程并回写结果。

```text
Existing Systems / Files
          ↓
Enterprise Context
          ↓
Reusable Capabilities
          ↓
Permissions / Audit
          ↓
Agent Runtime
          ↓
Domain Apps & Workflows
```

它对应我现在企业 AI 交付工作的下一层抽象：**从一个需求做一个系统，逐步变成一套可以复用的企业 AI 能力。**

---

## 🏫 Class OS

`Building` · Agent-native Work System

面向中国中小学班主任的个人班级工作台。核心不是“AI 帮老师聊天”，而是把班务中需要长期跟进的事实、事项和责任放到同一套可追溯系统里。

### 当前已有 / 正在验证的功能

- **班级与名单**：班级、学生名单、不可变学生 ID，以及姓名更正等受控变更。
- **Typed Facts**：记录学生事实 / 事件，而不是只保存散乱文本。
- **Task / Follow-up**：把需要后续处理的事项转成 Task，保留责任、状态与关联来源。
- **Today**：集中查看当前要处理和跟进的事情。
- **Student Timeline**：按学生查看相关事实、事件和任务的时间线。
- **更正与审计**：变更保留旧值、版本和审计记录，不直接覆盖历史事实。
- **Identity / Permission Boundary**：本机 owner、登录、会话、恢复等身份边界。
- **Query Gateway / Business Command Gateway**：查询与业务写入走明确边界，而不是让 UI / Agent 直接改数据库。
- **Agent 查询 / 草稿**：相关实现已存在，但当前仍在做数据库回归与正式 Gate 验证，不把它描述成已完成的正式能力。

典型使用路径：

```text
登录
 → 建班 / 导入名单
 → 记录学生事实或跟进事项
 → Today 查看待办
 → Student Timeline 回看上下文
 → 预览 / 确认更正与业务变更
```

项目重点是验证：**真实工作域能不能被建模成一套人和 Agent 都能安全操作的结构化业务系统。**

---

## 🩺 Health OS / Family Health Records

`Building` · Personal / Family Health Information System

面向本人和家庭成员的长期健康档案系统。当前实现基于开源项目 **MediKeep** 做中文家庭化定制与扩展，重点放在长期资料保存、人工复核、趋势、成员隔离和可恢复性上。

### 当前源码中的功能

- **多文件上传与原件保留**：保存体检报告、检验单和其他健康资料，同时保留来源。
- **OCR / Parser 候选结果**：解析结果先进入候选区，不直接成为正式健康事实。
- **人工复核 → 正式入库**：候选可编辑、确认后提交；正式修订保留历史。
- **健康记录**：检验、生命体征、用药、过敏、疫苗、就诊及附件。
- **趋势与批次对比**：查看指标趋势、体检批次变化与数据质量。
- **AI 辅助**：当前限定在受控范围，例如总结“最近有哪些变化”；回答需要引用记录，不能直接写入正式事实。
- **成员与共享**：家庭成员身份隔离、受邀开户和明确范围的相互可见。
- **导出与恢复**：CSV / SVG / 报告导出，以及完整备份、校验和隔离恢复演练。

核心数据链路是：

```text
Original Report
      ↓
OCR / Parsed Candidate
      ↓
Human Review
      ↓
Official Health Record
      ↓
Trend / Comparison / Export
```

这里最重要的设计原则是：**AI 可以帮助整理，但不能静默创造医疗事实。**

---

## 🔬 Research OS

`Building` · Evidence-driven Personal Research & Decision System

这是一个面向个人研究的 **证据驱动决策辅助系统**。当前目标不是做通用搜索引擎，也不是单纯“保存 AI 对话”，而是让从资料进入到形成判断、记录结果、事后复盘的整个流程可以真实运行和恢复。

### 当前本地 v0.1 主流程

```text
Upload / Ingestion
      ↓
RawSource / ClaimCard / EvidenceSpan
      ↓
Selected-source Chat / Briefing
      ↓
DecisionSnapshot
      ↓
Outcome
      ↓
Replay
```

### 当前功能

- **资料上传 / 解析 / 入库**：把用户资料转为可持续查询的 RawSource。
- **ClaimCard / EvidenceSpan**：把主张与原始证据片段关联起来，可回查原文。
- **严格选定资料问答**：用户先选定本轮允许使用的资料，回答和引用限定在这个范围内。
- **证据不足时停止调用**：chat、briefing、committee 在证据不足时会在模型调用前停止，而不是硬编答案。
- **Briefing 模式**：输出方向、行动、摘要、支持点、反面点、风险，并保留字段证据状态。
- **DecisionSnapshot**：把当时资料、判断和决策状态保存下来，而不是只留一段聊天。
- **Outcome**：后续记录真实结果。
- **Replay**：把当时的证据 / 判断与后续实际结果重新放到一起比较，支持复盘。
- **Committee**：可手动开启多模型审议，但目前不把它宣传成一定比单模型更好。

Research OS 真正想完成的是一个闭环：

**资料 → 证据 → 分析 → 判断 → 决策快照 → 实际结果 → 复盘。**

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

- **Class OS / Health OS / Research OS**：三个不同场景下的 Domain System。
- **Enterprise AI Core**：把企业交付里反复出现的能力进一步抽象成通用底座。
- **Personal Context / Audio Gateway**：为长期 Personal Agent 和其他产品补充可复用 Context / Capability。

我会继续明确区分 `Building` 和 `Planning`，也不会把私有客户项目、他人仓库或未验证功能包装成公开成果。

[← 返回主页](README.md) · [工作方式 →](WORK.md) · [当前方向 →](NOW.md)
