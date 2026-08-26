---
title: Changelog
---

# Changelog

## v0.2.0 — August 2026

Protocol upgrades proven out by the reference implementation, now standardized. An official
**Python SDK** implementing v0.2.0 is available at
[github.com/aiquilibria/atp-python](https://github.com/aiquilibria/atp-python), with runnable
examples at [github.com/aiquilibria/atp-examples](https://github.com/aiquilibria/atp-examples).

**Protocol upgrades**

- **Challenger identity replaces API keys in Challenges** — API keys now authenticate systems to
  the Exchange only and are never transmitted agent-to-agent. Challenge requests carry a
  registered challenger identity that the target validates against the Exchange (§10, §12.2).
  This removes credential circulation between agents, the largest attack surface of the v0.1
  challenge design.
- **Exchange Assessment API (REQUIRED)** — Quality and Compliance verdicts are now delivered to
  the Exchange directly via `POST /assess`, in addition to the protocol-native record embedded in
  the assessor's own Proof (§9.3). Self-assessment on these dimensions is rejected.
- **Commit countersignature** — every accepted commit is countersigned by the Exchange (Ed25519
  RECOMMENDED), giving agents an independently verifiable receipt; verification key served at
  `GET /exchange/public-key` (§11.4).
- **Richer registration** — registrations now carry the system's challenge endpoint `url`
  (solving challenge-endpoint discovery), `proof_ttl_seconds`, and optional `extensions` (§4.5).
- **Challenge response as implemented** — the authorized response returns the full Proof record;
  denials are JSON-RPC errors with defined codes (§12.2).
- **`atp_metadata` request/response context** — the v0.1 `atp_payload` object is renamed so ATP
  context travels under one namespace across requests, responses, and Proofs; adds optional
  `caller_task_id` and per-dependency `challenge_url` (§7.2–7.3).
- **Framework bindings** — standardized A2A agent-card extension
  (`https://agenttrustprotocol.org/a2a/v0.2`) and the MCP `_atp_task_id` response-metadata
  convention (§7.4).
- **Precise canonicalization** — RFC 3339 timestamp form and omit-empty rules pinned for
  cross-language hash reproducibility (§5.3).
- **Hosted ontology** — the capability registry is published at its canonical versioned URI,
  [agenttrustprotocol.org/ontology/v0.2.0](/ontology/v0.2.0).
- Endpoint table updated (base-path prefixes, commit/assessment/public-key routes) (§12.1).

**Python SDK support matrix** — the core protocol (registration, proof lifecycle, commit,
challenge–response on both sides, integrity verification, assessments) is fully supported.
Framework adapters (MCP, A2A, LangChain) are implemented and demonstrated, with public release
to follow; the SDK's `FrameworkAdapter` extension point makes additional adapters
straightforward to build. Response-context emission (§7.3) is on the SDK roadmap.


## v0.1.0 — February 2026

Initial draft release of the Agent Trust Protocol specification.

- Core Proof structure defined (full Proof + Proof Sketch)
- ATP Exchange API specified (register, commit, query)
- Challenge-response protocol specified (JSON-RPC 2.0 `atp.challenge`)
- Task Classification Ontology defined (O*NET + HuggingFace + ATP Extensions)
- Multi-dimensional trust model defined (Integrity, Quality, Compliance)
- Dependency disclosure and AI-BOM reconstruction specified
- Security considerations documented
