import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const distPath = path.join(__dirname, 'dist');

// If dist doesn't exist yet, serve a friendly fallback or warn
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  app.get('*', (req, res) => {
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Building Application</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h2>Application is preparing. Please run 'npm run build'.</h2>
        </body>
      </html>
    `);
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Onix production server listening on port ${port} (0.0.0.0)`);
});
