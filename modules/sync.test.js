import { loadSettings } from './sync.js';

test('can load settings', async () => {
  const settings = await loadSettings();

  expect(settings?.dataForTesting).toMatch('expected value for testing');
});