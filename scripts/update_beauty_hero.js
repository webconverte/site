const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../app/beleza');

const getFiles = (dir, filesList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, filesList);
    } else if (file === 'page.tsx') {
      filesList.push(filePath);
    }
  }
  return filesList;
};

const filesToUpdate = getFiles(baseDir);

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace hero-gradient with hero-gradient-beleza
  content = content.replace(/className="hero-gradient( pt-16)/, 'className="hero-gradient-beleza$1');
  
  // Also adjust the gradient overlay for the hero image to match the dark green background instead of dark blue (azul-noite)
  // The original was: bg-gradient-to-t from-azul-noite/80 to-transparent
  content = content.replace(/from-azul-noite\/80 to-transparent/, 'from-[#101c06]/80 to-transparent');

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
