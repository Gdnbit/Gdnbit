# 当前方向

[中文](NOW.md) · [English](NOW_EN.md)

我现在关注的重点，已经不只是“给现有软件加 AI 功能”，而是一个更底层的问题：

> **当 Agent 真正进入组织运行之后，软件本身应该长成什么样？**

我更关心的是：Agent 如何读取业务状态、调用能力、遵守权限、推进流程、接受人工审批，并把结果沉淀回系统，而不是始终停留在一个额外的聊天入口里。

## 从项目交付走向可复用企业 AI

我正在尝试沿着这条路径往上抽象：

```text
Custom Delivery
      ↓
Reusable Capabilities
      ↓
Domain Packs / Business Modules
      ↓
Enterprise Context + Capability Layer
      ↓
Agent Runtime
      ↓
AI-native Enterprise System
```

目标不是永远一个需求做一个系统，而是逐步把重复出现的业务结构、能力和执行机制沉淀成可复用层。

## Enterprise Context & State

真实组织里的 Agent 需要的不只是 Prompt，也不只是 RAG。

它需要一个可以持续维护、查询和更新的业务上下文，包括：

- 业务实体及关系；
- 当前状态与历史事实；
- Role / Responsibility / Permission；
- Claim / Evidence / Provenance；
- Task / Commitment / Event / Exception；
- 可以被安全读取和写回的组织记忆。

我更关心的是 **durable operating context**，而不是把它简单概括成某一种 “Context Engineering” 技巧。

## Capability Layer

很多 AI 产品都在重复接入同一批能力：

`OCR` · `ASR` · `Document Parsing` · `File Conversion` · `Vision` · `Search / RAG` · `Model Access` · `Tool Adapters`

我希望这些能力能够通过稳定接口暴露出来，让不同业务模块与 Agent 复用，并允许底层模型 / Provider / 实现方式独立切换。

这会逐渐形成一个介于业务系统和模型之间的 **Capability Layer / AI Capability Bus**。

## Agent Runtime

模型只是 Agent 系统里的一个组件。

真正决定 Agent 能不能进入生产环境的，往往是 Runtime 周围这些东西：

- MCP / Tool execution；
- Skills / reusable procedures；
- long-running tasks 与 resumable state；
- approval / human intervention；
- 权限与 Business Command Boundary；
- subagents / delegation；
- execution traces / observability / recovery；
- evals / policy checks / audit。

我更感兴趣的是：**怎样让 Agent 的执行过程本身变成可控、可恢复、可审计的企业流程。**

## AI-native Development

Coding Agents 已经是我实际开发方式的一部分。

下一步我更关注的是 Agent 周围的开发环境：

`Coding Agents` · `Agent Harnesses` · `Specs` · `Tests` · `Evals` · `Repo-level Context` · `Structured Development Records`

我认为真正重要的变化不是“AI 会写代码了”，而是：

> **软件生产开始从“人手动编辑每一行”转向“人维护一个 Agent 可以持续理解、执行、验证和改进的工程环境”。**

## Personal Agents：并行探索

Personal Agent 对我也很重要，但它不是我的主要职业标签。

我同时在探索：

- durable personal memory；
- reusable skills；
- cross-session continuity；
- local files / app access；
- computer use；
- multimodal / ambient capture；
- local-first / privacy-aware execution。

我更感兴趣的是“长期存在的个人协作者”，而不是一次性对话机器人。

## 更长期：AI-native Company / ANC

更长期，我想研究的是一种 **AI-native Company Architecture**：

```text
Business State
      ↓
Context / Ontology
      ↓
Capabilities / Tools
      ↓
Permissions / Governance
      ↓
Agents / Workflows
      ↓
Actions
      ↓
Audit / Memory / Outcomes
```

也就是把企业的业务状态、能力、权限、工作流和 Agent 设计成一个统一运行层。

这条路线把我现在做的企业 AI 交付、正在构建的项目，以及未来想做的可复用企业 AI 系统连接在一起。

---

这些内容代表我现在的方向和工作假设，并不意味着每一层都已经在现有项目中完成生产级实现。

[← 返回主页](README.md) · [项目 →](PROJECTS.md) · [工作方式 →](WORK.md)
