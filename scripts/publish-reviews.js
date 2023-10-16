require('dotenv').config();
const { execSync } = require('child_process');

execSync(`rover subgraph publish ${process.env.APOLLO_GRAPH_REF} --name reviews --schema ./packages/subgraph-reviews/reviews.graphql`, { stdio: 'inherit' });
