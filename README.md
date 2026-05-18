# TWNY Proposal Platform

TWNY Proposal Platform is a premium interactive proposal and demo delivery system used to create client-specific proposal environments on a single Next.js application. It is designed for consulting, sales, and strategic delivery work where proposal content and live product demonstrations need to sit inside one cohesive experience.

This repository is not a generic website builder, a SaaS product, a CMS, or a template marketplace. It exists to help TWNY rapidly prototype premium client experiences, deliver interactive proposals, refine them collaboratively with AI-assisted workflows, and host temporary or semi-permanent proposal environments at `proposal.twny.com.au`.

## Platform Model

- One Next.js application
- One GitHub repository
- One Vercel deployment
- One proposal subdomain: `proposal.twny.com.au`

Client experiences are route-based. Each client receives a dedicated path such as:

- `/first-finance`
- `/deller`
- `/coco-and-pastel`

Each route can contain:

- proposal content
- scope and context
- strategic recommendations
- optional live demo sections
- proposal and demo navigation or toggles

The platform is intentionally high-touch, curated, and proposal-oriented. It is not intended to evolve into a multi-tenant product with account systems, complex permissions, or self-serve editing.

## Operating Philosophy

The repository should support fast creation of polished client environments while keeping the implementation simple. Reusability matters, but only where it improves speed and quality across proposals. The default posture is:

- build one-off client experiences on shared foundations
- keep routes independent enough for fast tailoring
- extract reusable components only when patterns repeat
- optimise for premium presentation over platform complexity
- prefer temporary, focused environments over permanent productisation

## Route Strategy

The application should use route-based client experiences within the App Router. A typical direction is a structure such as:

```text
app/
  [client]/
    page.tsx
content/
  clients/
    first-finance/
    deller/
templates/
```

This allows the team to maintain one deployment while producing clearly separated proposal environments. Shared layout, navigation, modules, and content patterns can live in reusable components and templates, while client-specific content stays isolated by route.

More detail is documented in [docs/architecture.md](docs/architecture.md).

## GitHub And Vercel Workflow

The repository is the single source of truth for proposal environments. The expected workflow is:

1. Create or update a client route in GitHub.
2. Review the route locally and in preview deploys.
3. Merge to the main branch when the proposal experience is approved.
4. Let Vercel publish the updated experience to `proposal.twny.com.au`.

This keeps proposal work versioned, reviewable, and easy to iterate on with fast preview feedback before anything is client-facing.

## Deployment Model

There is one Vercel project backing one deployed application. Each client experience lives under its own route on the same domain rather than as a separate codebase or standalone deployment. This keeps operations lightweight and makes it easy to maintain common styling, shared interaction patterns, and consistent quality across proposals.

Where required, proposals can remain semi-ephemeral:

- published for an active sales or consulting cycle
- refined during live collaboration
- archived or removed once no longer needed

## Working In The Repository

- Use the App Router structure as the default architectural baseline.
- Keep proposal content and implementation close enough for fast iteration.
- Avoid introducing unnecessary admin systems, schema layers, or multi-tenant abstractions.
- Treat each client route as a crafted experience, not a generated page bundle.

Additional operating guidance:

- [docs/architecture.md](docs/architecture.md)
- [docs/workflow.md](docs/workflow.md)
- [docs/design-principles.md](docs/design-principles.md)
