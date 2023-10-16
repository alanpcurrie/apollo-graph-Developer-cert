require('dotenv').config();
const { execSync } = require('child_process');

execSync(`rover subgraph publish ${process.env.APOLLO_GRAPH_REF} --name locations --schema ./packages/subgraph-locations/locations.graphql`, { stdio: 'inherit' });
