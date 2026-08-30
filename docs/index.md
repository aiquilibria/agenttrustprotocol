---
layout: home

hero:
  name: "Agent Trust Protocol"
  tagline: "An open protocol for verifiable AI agent task execution."
  text: ""
  actions:
    - theme: brand
      text: Read the Specification
      link: /spec/v0.2
    - theme: alt
      text: View on GitHub
      link: https://github.com/aiquilibria/agenttrustprotocol

features:
  - title: Verifiable Execution
    details: Every task an agent performs produces a cryptographically signed proof, creating a tamper-evident record of what was done, by whom, and when.
  - title: Privacy-Preserving
    details: Only hash summaries (proof sketches) are published to the exchange. Full task inputs and outputs remain with the executing agent.
  - title: Framework Agnostic
    details: ATP is transport-agnostic and works with any agent framework — A2A, LangChain, MCP, CrewAI, or custom implementations.
  - title: Non-Repudiation
    details: Once a proof sketch is committed to an ATP Exchange and anchored on a distributed ledger, an agent cannot credibly deny having executed the task.
  - title: AI Bill of Materials
    details: Dependency declarations in each proof enable full reconstruction of the execution graph for any task in the system.
  - title: Trust at Scale
    details: Lightweight proof sketches (~1–2 KB) are designed for high-volume multi-agent deployments across organizational boundaries.
---

## What is ATP?

The Agent Trust Protocol (ATP) is an open, transport-agnostic accountability layer for
multi-agent AI systems. It defines how agents generate cryptographic proofs of task
execution, commit proof summaries to a neutral exchange, and respond to verification
challenges — creating a tamper-evident audit trail that supports trust assessment,
reputation scoring, and compliance verification.

ATP complements existing agent protocols. It does not replace discovery (A2A, AGNTCY),
communication, tool access (MCP), or payment protocols — it adds the accountability
layer that all of them currently lack.

## Status

ATP v0.2.0 is a **draft specification**. It is published for community review and
is subject to change. An official [Python SDK](https://github.com/aiquilibria/atp-python)
implements the current version. Feedback is welcomed via
[GitHub Issues](https://github.com/aiquilibria/agenttrustprotocol/issues).
