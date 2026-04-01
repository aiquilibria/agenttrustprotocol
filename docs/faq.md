---
title: FAQ
---

# Frequently Asked Questions

## What is ATP?

The Agent Trust Protocol is an open, transport-agnostic protocol that lets AI agents produce
cryptographically verifiable proofs of task execution. It adds an accountability layer to
multi-agent systems — enabling trust assessment, reputation scoring, and compliance verification
without exposing sensitive task content.

## Why do I need it?

Without ATP, there is no standard way to verify that an agent actually performed a task, that
the result wasn't tampered with, or which downstream agents were involved. ATP fills this gap
with a minimal, privacy-preserving mechanism that works alongside existing protocols.

## How does ATP differ from OAuth or JWT?

OAuth and JWT handle *authentication* — proving who a caller is. ATP handles *accountability* —
proving what an agent *did*. They are complementary: ATP uses API keys (which may be backed by
OAuth) for authentication, but its core value is the verifiable task execution record, not
identity.

## Is v0.1 stable?

No. v0.1.0 is a draft specification published for community review. It may change before a
stable release. Implementations built against v0.1 should expect to track changes as the spec
evolves.

## Who maintains ATP?

ATP is authored and maintained by the [AIquilibria](https://aiquilibria.com) team. The spec is
open for community contribution via GitHub Issues and PRs.

## How do I implement ATP?

Start with the [specification](/spec/v0.1). A Python SDK (`atp-python`) is available that
provides automatic hash computation, canonical JSON serialization, an Exchange REST client, and
a JSON-RPC server for Challenge responses. See Section 14.2 of the spec.

## Which agent frameworks does ATP support?

ATP is framework-agnostic. The Python SDK includes adapters for A2A and LangChain (v0.1.0) with
CrewAI planned for v0.2.0. Any framework can be made ATP-compliant by implementing the proof
generation, commit, and challenge-response requirements in Section 4.
