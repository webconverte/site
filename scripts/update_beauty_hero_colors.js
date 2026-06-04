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
  // It starts with <section className="hero-gradient-beleza ... and ends with the first </section>
  const heroRegex = /(<section className="hero-gradient-beleza[\s\S]*?<\/section>)/;
  
  content = content.replace(heroRegex, (match) => {
    let newHero = match;
    
    // Replace text-secondary-fixed -> text-blue-400
    newHero = newHero.replace(/text-secondary-fixed/g, 'text-blue-400');
    // Replace bg-secondary-fixed/10 -> bg-blue-400/10
    newHero = newHero.replace(/bg-secondary-fixed\/10/g, 'bg-blue-400/10');
    // Replace bg-secondary-fixed -> bg-blue-400
    newHero = newHero.replace(/bg-secondary-fixed(?![\/\-])/g, 'bg-blue-400');
    // Replace border-secondary-fixed/30 -> border-blue-400/30
    newHero = newHero.replace(/border-secondary-fixed\/30/g, 'border-blue-400/30');
    // Replace button shadow color from lime to blue-400 rgb
    newHero = newHero.replace(/rgba\(192,243,102,0\.3\)/g, 'rgba(96,165,250,0.3)');
    
    // Replace utilities
    newHero = newHero.replace(/conversion-line(?!-)/g, 'conversion-line-blue');
    newHero = newHero.replace(/dot-guide(?!-)/g, 'dot-guide-blue');

    return newHero;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
