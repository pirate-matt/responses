import { readFile } from 'fs/promises';

async function loadSettings() {
  const settings = JSON.parse(await readFile('./data/settings.json'));

  return settings;
}

export { loadSettings } ;