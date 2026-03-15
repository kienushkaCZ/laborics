import express from 'express';

const app = express();
const PORT = parseInt(process.env.PORT || '4001', 10);

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', project: 'laborics' });
});

app.get('/', (_req, res) => {
  res.send(`<html><body><h1>Laborics</h1><p>Running on port ${PORT}</p></body></html>`);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[laborics] Server running on http://0.0.0.0:${PORT}`);
});
