# Contributing

## Workflow

1. Start from `main` and create a short-lived branch for each issue or change.
2. Run the local validation commands before opening a pull request.
3. Open a pull request tied to the relevant GitHub issue.
4. Merge only after the pull request checks pass.
5. Let GitHub Actions deploy the merged change from `main`.

## Local validation

Install dependencies:

```bash
npm ci
```

Run the quality gates:

```bash
npm run lint
npm run build
npx playwright install chromium
npm run test
```

Or run the combined command:

```bash
npm run ci
```

## What the checks cover

- `npm run lint`: static analysis with ESLint
- `npm run build`: production Vite build
- `npm run test`: smoke test against the rendered site using Playwright

## Deployment

- GitHub Pages is deployed by GitHub Actions, not by a deployment branch.
- Merges to `main` trigger the deploy workflow in `.github/workflows/deploy.yml`.
- Pull requests are validated by `.github/workflows/ci.yml`.

## Handoff notes

- Keep GitHub issues as the source of truth for scope and acceptance criteria.
- Prefer small pull requests that solve one issue or one clear subtask.
- When adding content or links, update tests if the user-facing behavior changes.
