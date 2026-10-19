# 项目地图

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

这里按实际使用场景介绍项目：它解决什么问题、有哪些核心能力，以及背后的产品思路。更完整的实现细节可以在各项目仓库查看。

---

# 核心项目

## 🏫 [班事有谱 · ClassMatter](https://github.com/Gdnbit/classmatter)

**面向班主任的班级事务工作台。** 把分散在聊天、表格和个人记忆中的学生情况与跟进事项集中管理，通过学生记录、任务跟进、Today 和 Timeline，让班里的事记得住、跟得上、查得到。

项目想解决的不只是“有哪些待办”，更是“哪些事情还没有真正结束”。让班主任减少反复记忆、翻找和确认，把精力留给真正需要判断的事情。

[了解 ClassMatter →](https://github.com/Gdnbit/classmatter)

---

## 🔬 [思考间 · ThinkRoom](https://github.com/Gdnbit/thinkroom)

**让积累的信息真正参与下一次思考。** 将文章、笔记、文档与不同作者的观点整理成可检索、有出处的个人知识，再通过问答、研究简报、多视角讨论与决策复盘帮助理解、比较和判断。

它不只是“上传文件然后聊天”，更关注信息从收集、理解、召回，到参与决策与事后复盘的完整过程。

[了解 ThinkRoom →](https://github.com/Gdnbit/thinkroom)

---

## 🩺 HealthBox

**面向个人及家庭的长期健康档案系统。** 集中管理体检报告、检验指标和健康历史，结合报告解析、人工复核、趋势对比、家庭成员共享与数据备份，让零散的健康资料能够持续积累和使用。

设计重点是保留数据来源、尊重人工确认，让 AI 辅助整理和理解，而不是替人随意生成健康事实。基于开源 MediKeep 进行家庭化定制与扩展。

---

## 🏢 Enterprise AI Core

**从企业 AI 项目交付延伸出的通用架构探索。** 希望把企业已有的 ERP、OA、文件和业务流程，与结构化 Context、OCR / ASR、模型调用、工具能力及权限控制连接起来，形成可复用的 Agent 业务基础设施。

核心思路是：不要每做一个企业需求就重新搭一套系统，而是不断沉淀可复用的能力与业务工作流。

---

# 其他正在形成的方向

## 🧠 Personal Context Infrastructure

把录音、位置、日历、应用使用、健康 / 穿戴、文件等多源个人数据对齐到统一时间线，提取 `Event / Person / Claim / Task` 并保留 provenance，再通过 API / MCP 提供给 Personal Agent。核心思想是 **context 属于用户，Agent 只是消费者**。

## 🎙️ Audio Intelligence Gateway

统一封装多 ASR、speaker diarization、上下文纠错、专有名词处理、模型交叉校验与 `Transcript → Artifact`，给 ClassMatter、Personal Context、会议 / 访谈等场景复用。

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

- **ClassMatter / ThinkRoom / HealthBox**：知识、班务和健康三个场景下的 Domain System。
- **Enterprise AI Core**：把企业交付里反复出现的能力进一步抽象成通用底座。
- **Personal Context / Audio Gateway**：为长期 Personal Agent 和其他产品补充可复用 Context / Capability。



[← 返回主页](README.md) · [工作方式 →](WORK.md) · [当前方向 →](NOW.md)
