const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const { reloadApp } = require('detox-expo-helpers');

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await detox.init(config);
});

beforeEach(async () => {
  await reloadApp();
});

afterAll(async () => {
  await adapter.afterAll();
  await detox.cleanup();
});