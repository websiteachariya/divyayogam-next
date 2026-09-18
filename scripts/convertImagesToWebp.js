const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '../public/images');

async function convertAll() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const filePath = path.join(dir, file);
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dir, `${baseName}.webp`);

      console.log(`Converting ${file} to ${baseName}.webp...`);
      await sharp(filePath)
        .webp({ quality: 85 })
        .toFile(webpPath);
      
      console.log(`Successfully converted ${baseName}.webp. Deleting original ${file}...`);
      fs.unlinkSync(filePath);
    }
  }
  console.log('All image conversions complete.');
}

convertAll().catch(err => {
  console.error('Error during image conversion:', err);
  process.exit(1);
});
