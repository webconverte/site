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

  // We find all `<a href="https://wa.me... className="...">`
  content = content.replace(
    /(<a href="https:\/\/wa\.me[^>]*? className=")([^"]*)(")/g,
    (match, prefix, classes, suffix) => {
      let newClasses = classes;
      
      // Remove any existing layout classes we are about to manage to avoid duplicates
      newClasses = newClasses.replace(/\b(flex|inline-block|block|items-center|justify-center|text-center)\b/g, '').replace(/\s+/g, ' ').trim();
      
      // Append the classes needed to behave exactly like a centered button
      newClasses += ' flex items-center justify-center text-center';
      
      return `${prefix}${newClasses}${suffix}`;
    }
  );

  fs.writeFileSync(file, content);
  console.log(`Updated classes in ${file}`);
});
