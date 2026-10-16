# 项目地图

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

这里不是仓库清单，而是我正在做 / 计划做的一组 **AI-native 产品与基础设施**。我更关心每个项目到底服务谁、解决什么痛点、最后应该改变什么工作方式，而不是先堆一串架构名词。

> **状态说明：** `Public` = 已公开源码 · `Building` = 正在开发 / 暂未公开 · `Preparing OSS` = 正在整理，计划后续开源 · `Planning` = 已形成明确方向，但尚未作为完整公开项目落地。

---

## 🏢 Enterprise AI Core

`Planning` · Enterprise AI / Reusable Infrastructure

**面向谁**  
已经有 Excel、OA、ERP、SaaS、文件服务器和各种人工流程，但 AI 仍然停留在“单点工具 / 聊天机器人”的中小企业与传统组织。

**痛点**

- 数据散在多个系统、表格、文档和人的脑子里，Agent 看不到完整业务状态；
- OCR、ASR、文档解析、模型调用、文件转换等能力被每个项目重复集成；
- 每来一个新部门需求，就重新做一套账号、权限、接口和流程；
- Agent 即使能回答问题，也很难安全地执行真实业务动作；
- 旧 ERP / OA / SaaS 不能一次推倒重来，但企业又希望逐步引入 AI-native 能力。

**我想做什么**  
做一层可复用的企业 AI 基础层，把现有系统、数据和 AI 能力连接起来，并向上提供统一的业务上下文与可执行能力。

```text
Existing ERP / OA / SaaS / Files
              ↓
     Enterprise Context Layer
              ↓
       Capability / Tool Layer
              ↓
 Permissions / Approval / Audit
              ↓
          Agent Runtime
              ↓
     Domain Apps / Workflows
```

**核心能力**  
`Context / Ontology` · `Domain Packs` · `OCR / ASR / Vision` · `Model Gateway` · `Tool Adapters` · `Permissions` · `Audit` · `Agent Runtime`

**它解决的不是** “给企业加一个聊天框”，而是让 AI 能真正读取企业状态、调用能力、推进流程，并把结果安全写回业务系统。

---

## 🏫 Class OS

`Building` · Agent-native Work System

**面向谁**  
中小学班主任，尤其是同时承担教学、班级管理、家校沟通和大量临时事务的人。

**痛点**

- 学生情况散在微信、表格、纸本、聊天记录和老师记忆里；
- “谁答应了什么、哪件事什么时候要跟进”很容易丢；
- 学生事件有上下文，但传统表格只能记一行结果；
- 写通知、整理材料、查历史情况时，要在多个地方来回翻；
- 普通“AI 聊天框”不了解班级真实状态，也不能直接承担管理工作。

**系统做什么**  
把学生事实、事件、任务、承诺、沟通、时间线、权限和证据统一到一个工作台里，让老师和 Agent 操作同一套结构化业务状态。

例如：

- 记录“某学生发生了什么”，而不是只存一段聊天；
- 自动生成后续待办，并保留事件与任务之间的关系；
- 查询某个学生过去一段时间的完整上下文；
- 根据真实数据辅助起草家长沟通、通知或总结；
- 对 Agent 的读取与写入设置权限、审批和审计边界。

**核心问题**  
怎样把一个真实工作域变成 **事实 + 事件 + 任务 + 权限 + 时间线 + Agent** 可以共同操作的系统。

---

## 🩺 Health OS

`Building` · Personal / Family Health Information

**面向谁**  
希望长期管理自己或家庭健康资料，而不是每次就医前临时翻相册、微信和纸质报告的人。

**痛点**

- 体检、门诊、化验、影像、用药记录长期分散；
- 医疗报告信息密度高，但普通人很难持续整理趋势；
- 做过一次检查后，什么时候应该复查、哪些结果已经过期，很容易忘；
- 可穿戴设备、生活方式和医院数据彼此割裂；
- AI 可以帮助提取，但医疗信息不能允许模型“自动写错还当成事实”。

**系统做什么**  
建立一条纵向健康时间线，把报告、指标、就诊、用药、复查计划和设备数据统一起来，同时采用 **AI 提取 → 人工确认 → 正式记录** 的机制降低错误写入风险。

计划关注：

- 医疗报告 / 体检单 OCR 与结构化；
- 指标趋势与异常变化；
- 复查周期与提醒；
- 就诊前自动整理时间线与问题清单；
- Apple Health / Health Connect / 可穿戴数据接入；
- 家庭成员隔离、权限与隐私保护。

**核心问题**  
如何让个人健康数据从“文件堆”变成长期可追溯、可复核、可辅助决策的健康记录系统。

---

## 🔬 Research OS

`Building` · Evidence-driven Research & Decision System

**面向谁**  
经常用 AI 做调研、比较、方案分析和决策，但不想让重要结论最终只剩一段聊天记录的人。

**痛点**

- AI 给出一个结论，但过几天已经不知道它基于哪些来源；
- 来源、主张和证据没有结构化关系，真假混在一起；
- 当时为什么做这个决定、用了哪些假设，很难复盘；
- 后续真实结果出来后，也很少回头验证原判断；
- 同一个问题下次再研究，又从头开始。

**系统做什么**  
把研究过程拆成可追溯对象：

```text
Source
  ↓
Claim ↔ Evidence
  ↓
Decision Snapshot
  ↓
Outcome
  ↓
Replay / Review
```

它的目标不是“让 AI 写一篇更长的报告”，而是让 **来源、证据、判断、决策与真实结果** 保持连接，后续可以追溯、复核和复盘。

**核心问题**  
如何把一次性的 AI 对话升级为有记忆、有证据链、有结果反馈的研究与决策系统。

---

## 🏎️ LLM Race

`Public` · Agent Infrastructure  
[GitHub →](https://github.com/Gdnbit/llm-race)

**面向谁**  
需要在不同任务里选择合适模型的 AI Agent、Agent Workflow 或开发者。

**痛点**

- 模型变化太快，价格、上下文、模态和能力信息分散；
- “哪个模型最强”并不等于“哪个模型最适合当前步骤”；
- Agent 通常被固定绑定在一个模型上，不能根据任务自己选择；
- 人工看榜单、查价格、再改配置，不适合自动化工作流。

**系统做什么**  
聚合模型元数据和评测信号，对不同来源进行对齐和评分，并通过 MCP 暴露成 Agent 可以直接调用的能力。

例如 Agent 可以询问：

> 我现在需要处理 128k 长上下文、成本敏感、支持某种模态，请给我 3 个候选模型。

系统返回候选、评分拆解和选择理由，而不是只给一个静态排行榜。

**核心问题**  
如何让“选模型”从开发者手工配置，变成 Agent Runtime 中可动态调用的一项能力。

---

## 🧠 Personal Context Infrastructure

`Planning` · Personal Agent Infrastructure

**面向谁**  
希望 Personal Agent 真正了解长期生活与工作上下文，而不是每次聊天都重新解释自己的人。

**痛点**

- 个人上下文散在录音、位置、照片、日历、应用使用、健康数据和电脑文件里；
- 现有 Agent 大多只能看到当前聊天或少量连接器信息；
- 长期记忆如果没有来源和时间线，很容易失真；
- 用户很难把自己的上下文迁移给不同 Agent / 模型。

**系统做什么**  
把多源个人数据对齐到统一时间线，并提取 Event / Person / Claim / Task 等结构，同时保留 provenance，再通过 API / MCP 提供给 Personal Agent。

重点是 **用户拥有自己的 context layer**，Agent 只是其上的消费者，而不是把个人记忆锁死在某一个产品里。

---

## 🎙️ Audio Intelligence Gateway

`Planning` · Reusable AI Capability

**痛点**  
语音转文字不是简单调用一个 ASR API：真实录音会有多人说话、口音、噪声、专有名词、断句和上下文纠错问题，不同场景也适合不同模型。

**方向**  
把多 ASR、speaker diarization、上下文纠错、模型交叉校验和 Transcript → Artifact 封装成统一能力层，让其他产品直接调用，而不是每个项目重复做一套转录链路。

它可以服务 Class OS、Personal Context、会议记录、访谈整理等不同场景。

---

## 🖼️ Image Quality Audit / Image Dedup

`Preparing OSS` · Local-first Utilities

这两个项目更偏“小而完整”的工具型产品。

**Image Dedup** 解决照片 / 数据集中重复与近似重复图片难清理的问题，通过 SHA、感知哈希、图像相似度和人工复核组合，避免只靠文件名或肉眼逐张比较。

**Image Quality Audit** 面向训练数据 / 图像资产清理，把模糊、曝光、分辨率、重复、面部可用性等质量指标统一评估，并支持人工复核和结果导出。

它们的价值更多在于验证：**明确输入 → 可解释检测 → 人工复核 → 可导出结果** 这一类完整工具工作流。

---

## 这些项目怎么连在一起？

它们不是随机的一堆 AI Demo，而是在回答同一个问题的不同层面：

```text
具体业务痛点
    ↓
可用的 Workflow / Product
    ↓
可复用 AI Capabilities
    ↓
Structured Context / State
    ↓
Tools + Permissions + Runtime
    ↓
Agent-native Systems
```

Class OS、Health OS、Research OS 是 **Domain Systems**；
LLM Race、Audio Gateway 更接近 **Capabilities / Agent Infrastructure**；
Personal Context 研究长期个人 Agent 的上下文基础；
Enterprise AI Core 则尝试把这些思路组合到企业真实运行环境里。

## Public Proof 与 Work in Progress

我会明确区分：

- 已公开、可以独立检查的项目；
- 已经在做但暂未公开的项目；
- 正在整理准备开源的项目；
- 仍处于明确规划 / 设计阶段的方向。

不会把 `Planning` 写成“已经落地”，也不会把私有客户项目当成公开证据。

[← 返回主页](README.md) · [工作方式 →](WORK.md) · [当前方向 →](NOW.md)
