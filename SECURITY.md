# Security Policy

## Reporting a Vulnerability

Please report suspected vulnerabilities in the ATP specification, this site, or its build
pipeline privately via **GitHub Security Advisories** ("Report a vulnerability" on this
repository). Do not open public issues for security reports.

We will acknowledge reports within 5 business days. Coordinated disclosure is appreciated;
we will credit reporters in the changelog unless anonymity is requested.

## Scope

- The ATP specification texts under `docs/spec/` (protocol-level weaknesses are in scope and
  especially valuable — e.g., flaws in the challenge-response authentication model,
  canonicalization ambiguities enabling hash collisions, or replay/impersonation vectors).
- The published site and its GitHub Actions deployment pipeline.

Implementation vulnerabilities in the Python SDK belong to
[aiquilibria/atp-python](https://github.com/aiquilibria/atp-python/security).

## Supported Versions

| Version | Supported |
|---------|-----------|
| spec v0.2.x | ✅ |
| spec v0.1.x | superseded — protocol reports still welcome |
