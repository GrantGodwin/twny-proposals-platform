# Workflow

## Purpose

This workflow is designed for high-touch proposal delivery rather than product operations. The goal is to move quickly from client context to a polished interactive proposal route, with AI used to accelerate strategy, writing, and implementation while human creative direction remains in control.

## Operating Model

The platform workflow combines:

- human-led strategic and creative direction
- AI-assisted refinement and drafting
- code-based implementation in one repository
- preview-based review before production release

Each proposal route should be treated as a curated client environment, not a commodity page-generation task.

## Onboarding A New Client

When starting a new proposal environment:

1. Define the client route slug.
2. Gather the proposal brief, strategic framing, scope inputs, and any live demo requirements.
3. Decide whether the route will be mostly content-led, demo-led, or a balanced combination.
4. Collect brand references, imagery, logos, screenshots, and any product assets needed for the experience.
5. Establish the review group and expected proposal delivery timing.

The route slug should be stable, readable, and client-specific. It becomes the public path for the experience.

## Creating A New Proposal Route

The standard flow is:

1. Create the new route in `app/[client]` or the current route structure used by the repository.
2. Add client-specific content and supporting assets.
3. Apply shared templates, layout primitives, and proposal modules where they improve speed and consistency.
4. Keep bespoke sections local to the client route when needed.
5. Review content flow, navigation, and demo transitions as one coherent experience.

Where appropriate, use a shared content location such as `content/clients/<client>` to keep implementation and content manageable.

## Importing Assets And Content

Typical inputs include:

- proposal copy
- strategy notes
- scope and deliverables
- screenshots
- diagrams
- demo links or embeds
- brand references

Recommended handling:

- place reusable static assets under `public/clients/<client>` or a comparable client-specific asset directory
- keep draft copy and structured content in version-controlled files
- avoid scattering core proposal content across too many locations

The repository should remain easy to navigate under deadline pressure.

## AI-Assisted Refinement

AI should accelerate quality, not replace direction.

Intended workflow:

- ChatGPT or Claude for strategic framing, proposal writing refinement, content condensation, option generation, and copy iteration
- Codex for repository-aware implementation, route creation, component extraction, styling refinement, and technical cleanup
- humans for taste, positioning, business judgment, narrative selection, and final approval

Useful AI tasks:

- tightening copy without losing specificity
- reframing recommendations for clarity
- turning raw notes into structured proposal sections
- improving transitions between content and demos
- accelerating implementation of approved direction

AI should not be allowed to set the creative direction unchecked or generate generic consulting language that weakens trust.

## Review Process

The review process should be lightweight but deliberate:

1. Review route structure and narrative flow locally.
2. Use preview deployments to review presentation in a shareable environment.
3. Validate content accuracy, strategic positioning, and overall tone.
4. Check that demo sections support the proposal rather than distracting from it.
5. Confirm that the route feels polished, believable, and client-specific before release.

Review criteria should include both correctness and experience quality.

## Deployment Process

The intended release model is:

1. Implement the client route in a Git branch.
2. Push the branch and use the Vercel preview deployment for review.
3. Iterate until the route is approved.
4. Merge to the main branch.
5. Let Vercel publish the route to `proposal.twny.com.au`.

This keeps deployment simple while preserving a useful review trail in GitHub.

## Archive And Remove Process

Because proposal environments may be temporary or semi-permanent, closure matters.

When a route is no longer active:

1. Decide whether it should remain live, be hidden, or be removed.
2. Archive any reusable content, assets, or interaction patterns worth keeping.
3. Remove route-specific content that should no longer be public.
4. Clean up navigation, indexes, or references affected by the removal.

If a proposal has ongoing reference value, it can remain live in a controlled form. If not, it should be retired cleanly rather than left to drift.

## GitHub And Vercel Responsibilities

GitHub is used for:

- version control
- review history
- collaboration on proposal implementation
- preserving reusable patterns over time

Vercel is used for:

- preview environments
- production hosting
- route delivery under the proposal subdomain

This split keeps the workflow operationally simple and appropriate for a single-application platform.
