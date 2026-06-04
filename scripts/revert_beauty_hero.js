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

  // Extract the hero section
  const heroRegex = /(<section className="hero-gradient-beleza[\s\S]*?<\/section>)/;
  
  if (!heroRegex.test(content)) {
    console.log(`Hero regex not found in ${file}`);
    return;
  }

  content = content.replace(heroRegex, (match) => {
    let newHero = match;
    
    // Revert colors
    newHero = newHero.replace(/text-azul-noite/g, 'text-secondary-fixed');
    newHero = newHero.replace(/bg-azul-noite text-white/g, 'bg-secondary-fixed text-azul-noite');
    newHero = newHero.replace(/bg-azul-noite\/10/g, 'bg-secondary-fixed/10');
    newHero = newHero.replace(/border-azul-noite\/30/g, 'border-secondary-fixed/30');
    newHero = newHero.replace(/rgba\(17,26,51,0\.3\)/g, 'rgba(192,243,102,0.3)');
    
    // Revert utils
    newHero = newHero.replace(/conversion-line-dark/g, 'conversion-line');
    newHero = newHero.replace(/dot-guide-dark/g, 'dot-guide');
    
    // Revert bg and overlay
    newHero = newHero.replace(/hero-gradient-beleza/g, 'hero-gradient');
    newHero = newHero.replace(/from-\[\#101c06\]\/80/g, 'from-azul-noite/80');

    return newHero;
  });

  fs.writeFileSync(file, content);
  console.log(`Reverted ${file}`);
});
