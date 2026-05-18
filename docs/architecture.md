# Architecture

## Purpose

The TWNY Proposal Platform is a single Next.js application used to deliver premium client-specific proposal environments. The architecture should support fast creation of tailored routes, shared visual and interaction quality, and lightweight deployment operations without drifting into SaaS platform complexity.

## Application Structure

The repository is structured around one App Router application. The most important architectural idea is that each client experience is route-based rather than application-isolated.

An intended structure is:

```text
app/
  layout.tsx
  page.tsx
  [client]/
    page.tsx
    loading.tsx
    not-found.tsx
components/
  proposal/
  demo/
  layout/
content/
  clients/
    first-finance/
      index.ts
      copy.md
      assets/
    deller/
      index.ts
      copy.md
      assets/
templates/
  proposal-shell/
  demo-sections/
public/
  clients/
    first-finance/
    deller/
```

Not every directory needs to exist immediately. The point is to keep a clean separation between routing, reusable building blocks, and client-specific material.

## Route Structure

Client experiences live at dedicated paths on the same deployed application:

- `/first-finance`
- `/deller`
- `/coco-and-pastel`

Each route may include:

- proposal narrative
- strategic recommendations
- scope and delivery framing
- embedded or linked demo sections
- navigation between proposal and demo content

The route is the primary boundary for client-specific work. This keeps implementation straightforward and makes each experience easy to preview, refine, and retire.

## Content Organization

Content should be organized so that client-specific material can be updated without forcing every route to become custom-coded from scratch.

Preferred direction:

- `app/[client]` handles route composition
- `content/clients/<client>` stores copy, configuration, assets, and structured content
- `components/` contains reusable UI modules
- `templates/` contains shared shells or section patterns

This model supports two useful modes:

1. A largely templated proposal route with light client customization
2. A more bespoke route that still uses shared foundations where helpful

The repository should not introduce a heavy CMS layer unless operational need clearly justifies it. Content can remain file-based for speed, clarity, and version control.

## Reusable Templates And Components

Reusability should be practical, not abstract.

Good candidates for shared reuse:

- proposal page shells
- section wrappers
- navigation patterns
- content blocks for recommendations, scope, outcomes, and timelines
- demo embeds or interactive panels
- shared spacing, type, and motion primitives

Avoid extracting a generic system too early. If a component exists only for one proposal, keeping it local to that route is acceptable.

## Deployment Architecture

The platform uses:

- one GitHub repository
- one Vercel project
- one deployed Next.js application
- one subdomain: `proposal.twny.com.au`

This means:

- all proposal experiences ship from one codebase
- preview deployments can be used for internal and stakeholder review
- production deployment remains operationally simple
- shared design quality can be maintained centrally

## Vercel Setup

The intended Vercel setup is straightforward:

- one project connected to the repository
- preview deployments for branch and pull request review
- production deployment from the main branch
- domain mapping for `proposal.twny.com.au`

Client experiences should usually be deployed as route additions or updates within the same project rather than spun out into separate Vercel projects.

## Subdomain Model

The domain model is intentionally simple:

- base domain for the platform: `proposal.twny.com.au`
- each client experience receives a path beneath that domain

Example:

- `proposal.twny.com.au/first-finance`
- `proposal.twny.com.au/deller`

This keeps the platform recognisably TWNY-owned while allowing each proposal to feel like its own curated environment.

## Scalability Direction

Scalability here means operational scalability, not product multi-tenancy.

The platform should scale by:

- adding more client routes to the same application
- strengthening shared templates where repetition emerges
- improving content organization for faster proposal creation
- keeping route-level customization easy

The platform should not scale by introducing:

- user accounts by default
- client-managed content administration
- generic site-builder abstractions
- multi-tenant data models
- internal platform complexity that outweighs proposal delivery value

## Extensibility Without Over-Engineering

Reasonable future extensions may include:

- richer structured content files for proposals
- shared demo modules
- lightweight route metadata for proposal indexing
- archival conventions for inactive client routes

Those extensions should remain subordinate to the core use case: premium, route-based proposal environments delivered quickly and refined collaboratively.
