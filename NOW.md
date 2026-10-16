# Now

The areas I am actively exploring are less about prompt tricks and more about the **runtime around agents**: durable state, tools, skills, environments, approvals and long-horizon execution.

## Personal agents

I am interested in personal agents that can accumulate useful context over time, keep durable memory, learn reusable skills, work across files/apps and continue tasks across sessions.

The direction I care about is closer to a persistent collaborator than a stateless chatbot.

## Agent runtime

The model is only one component. The runtime increasingly decides whether an agent is actually useful.

Current interests:

- durable sessions and long-running work;
- tools, MCP and reusable skills;
- agent memory and state management;
- sandbox / computer-use environments;
- approvals, permissions and human intervention;
- subagents and task delegation;
- execution traces, observability and recovery.

## Agent-native software

I am interested in products designed around agents from the beginning — not existing software with a chat box added later.

That means exposing structured state, actions, permissions and evidence so humans and agents can operate the same underlying system safely.

```text
State + Memory
      ↓
Skills + Tools
      ↓
Agent Runtime
      ↓
Actions in software
      ↓
Observable outcomes
```

## AI-native development

Coding agents have changed how I think about software production.

The interesting interface is moving from manually editing every line toward maintaining a high-quality repository environment: specifications, architecture decisions, tests, evals, constraints, context and review loops that agents can operate against.

I am especially interested in:

`Coding Agents` · `Agent Harnesses` · `Skills` · `Evals` · `Repo-level Context` · `Spec-driven Development`

## Enterprise agents

For enterprise software, autonomy only matters if the system can also respect business rules, permissions, audit trails and human responsibility.

I am exploring how agent-native systems can connect:

**business state → permitted actions → agent execution → human approval → auditable result**

---

These are current directions, not claims that every item is already production-ready in my projects.

[← Back to profile](README.md) · [Projects →](PROJECTS.md) · [Work →](WORK.md)
