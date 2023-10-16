# Apollo Graph Developer - Associate course work

This repository contains course work from the [Apollo Graph Developer - Associate Certification](https://www.apollographql.com/tutorials/certifications/apollo-graph-associate/).

The original coursework has been adapted to include helper scripts for running the Apollo router and publishing subgraphs. Additionally, the repository has been transformed into a [pnpm workspace](https://pnpm.io/workspaces) with the following packages:

- `router`
- `subgraph-locations`
- `subgraph-reviews`
- `client`

## getting started

[install the Apollo router binary in the router package folder](https://www.apollographql.com/docs/router/quickstart/)

```bash
cd ./packages/router & curl -sSL https://router.apollo.dev/download/nix/latest | sh
```

[signup for an Apollo Studio Account](https://studio.apollographql.com/signup)
create env file from sample file and add Apollo env vars

```bash
APOLLO_KEY=<APOLLO_KEY>
APOLLO_GRAPH_REF=<APOLLO_GRAPH_REF>
```

## Available Scripts

You can run the following scripts using the `pnpm` command:

- **Start Router**:

  ```bash
  pnpm run start-router
  ```

  This will start the Apollo router using the script located at `scripts/start-router.js`.

- **Publish Locations Subgraph**:

  ```bash
  pnpm run publish-locations
  ```

  This will publish the locations subgraph using the script located at `scripts/publish-locations.js`.

- **Publish Reviews Subgraph**:

  ```bash
  pnpm run publish-reviews
  ```

  This will publish the reviews subgraph using the script located at `scripts/publish-reviews.js`.

- **Publish All Subgraphs**:

  ```bash
  pnpm run publish-all
  ```

  This will publish both the locations and reviews subgraphs.

## Dependencies

The project uses the following key dependencies:

- Development Dependencies:
  - `dotenv-cli`: `^7.3.0`

- Regular Dependencies:
  - `dotenv`: `^16.3.1`
