// upload_to_cloudinary.js
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const util = require("util");
const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PUBLIC_IMG_FOLDER = path.join(__dirname, "public", "assets", "imgs");
const OUTPUT_JSON = path.join(__dirname, "cloudinary_images.json");

async function walk(dir) {
  let results = [];
  const list = await readdir(dir);
  for (const file of list) {
    const filepath = path.join(dir, file);
    const s = await stat(filepath);
    if (s && s.isDirectory()) {
      const res = await walk(filepath);
      results = results.concat(res);
    } else {
      results.push(filepath);
    }
  }
  return results;
}

function keyFromFilepath(filepath) {
  // Queremos la clave relativa tal como la referenciás desde public:
  // ej: public/assets/imgs/folder/pic.jpg -> assets/imgs/folder/pic.jpg
  const parts = filepath.split(path.sep);
  const idx = parts.indexOf("public");
  if (idx >= 0) {
    return parts.slice(idx + 1).join("/");
  }
  return filepath;
}

async function uploadAll() {
  const files = await walk(PUBLIC_IMG_FOLDER);
  const mapping = {};

  for (const file of files) {
    const relativeKey = keyFromFilepath(file); // "assets/imgs/..."
    // Subir a Cloudinary y conservar subcarpeta "portfolio" + la ruta relativa dentro de imgs
    // Por ejemplo folder structure en cloud: portfolio/assets/imgs/...
    // Ajustá "folder" si querés otra carpeta.
    const folderInCloud = `portfolio/${relativeKey.replace(/\/[^/]+$/, "")}`; // carpeta sin el filename
    try {
      console.log("Subiendo:", relativeKey);
      const res = await cloudinary.uploader.upload(file, {
        folder: folderInCloud,
        use_filename: true,
        unique_filename: false,
        overwrite: false,
      });

      mapping[relativeKey] = res.secure_url;
      console.log("OK ->", res.secure_url);
    } catch (err) {
      console.error("ERROR subiendo", relativeKey, err);
    }
  }

  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(mapping, null, 2), "utf8");
  console.log("Hecho. Mapeo guardado en:", OUTPUT_JSON);
}

uploadAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
