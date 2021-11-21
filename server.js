import { loadSettings } from './modules/sync.js';

function logStart (msg) {
  console.log('>>>> ---- ---- -----');
  console.log(msg);
  console.log('---- ---- ---- -----');
  console.log('');
  console.log('');
}
function logComplete (msg) {
  console.log('');
  console.log('');
  console.log('---- ---- ---- -----');
  console.log(msg);
  console.log('---- ---- ---- <<<<');
}
function logFailure (msg, ex) {
  console.log('');
  console.log('');
  console.log('---- ---- ---- -----');
  console.error(msg, ex);
  console.log('---- ---- ---- <<<<');
}

const run = async () => {
  await loadSettings();
  logComplete('done launching');
}

try {
  logStart('Launching responses sync!');
  run();
}
catch(ex) {
  logFailure('Launch failed.', ex);
}