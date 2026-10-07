const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crcBuf]);
}

function createPng(size) {
  const width = size;
  const height = size;

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  // Raw Scanlines
  const rowBytes = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowBytes);

  const cx = width / 2;
  const cy = height / 2;
  const r = width * 0.44;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowBytes;
    rawData[rowOffset] = 0; // Filter: None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Warm Saddle Leather palette: #8B4513 (139, 69, 19)
      // Background base: #F7F4EE (247, 244, 238)
      if (dist <= r) {
        // Border ring
        if (dist >= r - Math.max(2, size * 0.035)) {
          rawData[pxOffset] = 221;     // #DDD4C7
          rawData[pxOffset + 1] = 212;
          rawData[pxOffset + 2] = 199;
          rawData[pxOffset + 3] = 255;
        } else {
          // Inside circle: Saddle leather brown (#8B4513)
          let red = 139;
          let green = 69;
          let blue = 19;

          // Compass diamond emblem in center
          const absDx = Math.abs(dx);
          const absDy = Math.abs(dy);
          const diamondDist = absDx / (r * 0.55) + absDy / (r * 0.55);

          if (diamondDist <= 1.0) {
            // Cream / gold star highlight (#F7F4EE)
            red = 247;
            green = 244;
            blue = 238;

            // Center needle shadow
            if (dx > 0 && dy > 0 || dx < 0 && dy < 0) {
              red = 229;
              green = 168;
              blue = 92; // Amber gold
            }
          }

          rawData[pxOffset] = red;
          rawData[pxOffset + 1] = green;
          rawData[pxOffset + 2] = blue;
          rawData[pxOffset + 3] = 255;
        }
      } else {
        // Background rounded icon padding: #F7F4EE
        rawData[pxOffset] = 247;
        rawData[pxOffset + 1] = 244;
        rawData[pxOffset + 2] = 238;
        rawData[pxOffset + 3] = 255;
      }
    }
  }

  const idatData = zlib.deflateSync(rawData);

  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate 192x192, 512x512, and apple-touch-icon
fs.writeFileSync(path.join(iconsDir, 'icon-192x192.png'), createPng(192));
fs.writeFileSync(path.join(iconsDir, 'icon-512x512.png'), createPng(512));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192x192.png'), createPng(192));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512x512.png'), createPng(512));
fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), createPng(180));

console.log('PWA PNG icons generated successfully!');
