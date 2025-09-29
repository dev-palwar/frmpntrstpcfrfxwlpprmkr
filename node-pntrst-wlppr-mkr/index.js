// save this as render.js
const { exec } = require("child_process");

const imageUrl = process.argv[2]; // get the image URL from terminal args
if (!imageUrl) {
  console.error("❌ Please provide an image URL.");
  process.exit(1);
}

// HTML template with the passed image URL
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cover</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background: black;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      max-width: 30%;
      margin-top: -8rem;
      object-fit: cover;
    }
  </style>
</head>
<body>
  <img src="${imageUrl}" alt="cover">
</body>
</html>
`;

const fs = require("fs");
fs.writeFileSync("index.html", html);

// Run wkhtmltoimage with fixed 1920x1080 resolution
exec(
  `wkhtmltoimage --width 1920 --height 1080 index.html output.jpg`,
  (err, stdout, stderr) => {
    if (err) {
      console.error("❌ Error:", stderr);
      return;
    }

    console.log("✅ Rendered image at 1920x1080.");

    // Move to Firefox chrome images dir
    exec(
      `mv output.jpg ~/.mozilla/firefox/ibf4holo.default-release-1752041992313/chrome/images/cover.jpg`,
      (mvErr) => {
        if (mvErr) {
          console.error("❌ Move failed:", mvErr);
          return;
        }
        console.log("🎉 Image updated in Firefox chrome/images folder.");
      }
    );
  }
);
