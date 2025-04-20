import { createCanvas } from 'canvas';

export default function handler(req, res) {
  const text = req.query.text || 'Fehlt ein Text';

  const width = 1080;
  const height = 1080;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Hintergrund
  ctx.fillStyle = '#111111';
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Antwort als Bild
  res.setHeader('Content-Type', 'image/png');
  canvas.pngStream().pipe(res);
}
