const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const headerPath = path.join(__dirname, '../src/components/Header.tsx');

const filesToUpdate = [];

const walkSync = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath);
    } else if (file === 'page.tsx') {
      filesToUpdate.push(filePath);
    }
  }
};

walkSync(appDir);
filesToUpdate.push(headerPath);

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  if (file === headerPath) {
    // Only replace the "Falar com Especialista" buttons in the Header, leaving the mobile Menu buttons intact
    content = content.replace(
      /<button (className="[^"]*bg-secondary-fixed[^"]*")([^>]*)>([\s\S]*?Falar com Especialista[\s\S]*?)<\/button>/g,
      '<a href="https://wa.me/5583986650650" target="_blank" rel="noopener noreferrer" $1$2>$3</a>'
    );
  } else {
    // Replace all buttons in the pages (they are all CTA buttons)
    content = content.replace(
      /<button([^>]*)>([\s\S]*?)<\/button>/g,
      '<a href="https://wa.me/5583986650650" target="_blank" rel="noopener noreferrer"$1>$2</a>'
    );
  }

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
