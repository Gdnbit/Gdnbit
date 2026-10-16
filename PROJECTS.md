# 项目地图

[中文](PROJECTS.md) · [English](PROJECTS_EN.md)

这里不是把所有仓库简单列出来，而是展示我正在构建的系统，以及这些项目分别在验证什么能力。

> **状态说明：** `Public` = 已公开源码 · `Building` = 正在开发 / 暂未公开 · `Preparing OSS` = 正在整理，计划后续开源。

## 代表项目

| 项目 | 状态 | 方向 | 它在验证什么 |
| --- | --- | --- | --- |
| **[LLM Race](https://github.com/Gdnbit/llm-race)** | `Public` | Agent Infrastructure | 通过 MCP 暴露模型发现与选择能力，做跨源模型对齐、评分和 Agent 可直接调用的工具。 |
| **Class OS** | `Building` | Agent-native Product | 如何把真实工作域抽象成结构化事实、任务、权限、审计和人机边界，让人和 Agent 操作同一套业务状态。 |
| **Research OS** | `Building` | Evidence-driven AI | 如何保留来源、证据、Claim、Decision Snapshot 与结果回放，让研究和决策过程可以追溯。 |
| **Image Dedup** | `Preparing OSS` | Local-first Tooling | 精确 / 感知重复检测、人审流程，以及桌面 / 浏览器产品形态。 |
| **Image Quality Audit** | `Preparing OSS` | Vision Workflow | 可解释图像质量检测、重复分组、人审与结果导出。 |

## 这些项目不是孤立 Demo

我希望它们最终形成的是一条逐渐向上抽象的路线：

```text
具体工具 / Workflow
        ↓
可复用能力
        ↓
Domain-specific Systems
        ↓
Agent-facing Tools / Runtime
        ↓
AI-native Enterprise Systems
```

### 1. Workflow / Domain Products

Class OS 这类项目关注的是：**如何把一个真实工作域变成结构化的状态、动作、权限、证据与工作流**，从而让人和 Agent 都能安全地操作它。

这比“加一个聊天框”更接近我理解的 Agent-native Product。

### 2. Agent Infrastructure

LLM Race 更靠近基础设施侧：把模型发现、比较与推荐通过 MCP 暴露成 Agent 可以直接消费的能力，而不是一个需要人手动打开的网站。

我感兴趣的不是“做一个榜单”，而是 **怎样把模型选择本身变成 Agent Runtime 可以调用的一项工具能力。**

### 3. Evidence / Memory / Traceability

Research OS 在验证另一个经常被忽略的问题：AI 系统不仅要给答案，还要能保留：

- 来源；
- Claim / Evidence 关系；
- 决策时的上下文；
- Decision Snapshot；
- 后续 Outcome；
- 为什么当时会得出那个结果。

这类结构最终也会影响企业 Agent 的审计、记忆与责任边界。

### 4. Reusable Capability Layer

我正在思考如何把企业 AI 系统里反复出现的能力统一封装，例如：

`OCR` · `ASR` · `Document Parsing` · `File Conversion` · `Vision` · `Search / RAG` · `Model Access` · `Tool Adapters`

目标是让不同业务模块和 Agent 复用统一能力接口，并可以在不重写业务层的情况下切换模型、供应商或实现方式。

### 5. AI-native Development

这些项目普遍大量使用 Coding Agents 完成开发。

因此我也把下面这些东西视为软件本身的一部分：

`Specs` · `Contracts` · `Tests` · `Evals` · `Repository Context` · `Development Records` · `Review Loops`

也就是说，未来真正重要的不只是代码仓库，而是 **一个 Agent 能够持续理解、执行、验证和迭代的开发环境。**

## Public Proof 与 Work in Progress

私有项目、Building 项目和真正公开可检查的项目不是同一等级的证据。

我会优先让公开仓库的 README、commit history、tests、documentation 和 release 成为可验证层；其余项目在公开前都会明确标注状态，不把“我说做过”当成“外部已经可以验证”。

随着项目逐步整理，这里会把 `Building / Preparing OSS` 替换成真正的公开仓库链接。

[← 返回主页](README.md) · [工作方式 →](WORK.md) · [当前方向 →](NOW.md)
