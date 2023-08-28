import { Config } from '@wdio/config';

const config: Config = {
runner: 'local',
specs: ['./tests/resources/Features.feature'],
exclude: [],
maxInstances: 1,
capabilities: [{
maxInstances: 1,
browserName: 'chrome'
}],
logLevel: 'info',
bail: 0,
baseUrl: 'https://www.amazon.in/', // Your base URL
waitforTimeout: 10000,
connectionRetryTimeout: 90000,
connectionRetryCount: 3,
services: ['chromedriver'],
framework: 'cucumber',
cucumberOpts: {
require: ['./tests/resources/StepDefinitions.ts'],
backtrace: false,
compiler: ['ts:ts-node/register'],
dryRun: false,
failFast: false,
format: ['pretty'],
colors: true,
snippets: true,
source: true,
profile: [],
strict: true,
tags: [],
timeout: 60000,
ignoreUndefinedDefinitions: false
},


export { config };
