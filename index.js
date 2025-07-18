// index.js

const { spawn } = require('child_process');

const web = spawn('node', ['src/web/main/server.js'], { stdio: 'inherit' });
const game = spawn('node', ['src/game.js'], { stdio: 'inherit' });

// Opcional: capturar errores
web.on('error', err => {
  console.error('[web] Error:', err);
});
game.on('error', err => {
  console.error('[game] Error:', err);
});
