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
  
  content = content.replace(heroRegex, (match) => {
    let newHero = match;
    
    // The button has bg-blue-400 text-azul-noite
    // Let's change the button text to white if we change its bg to azul-noite
    newHero = newHero.replace(/bg-blue-400(\/10)? text-azul-noite/g, 'bg-azul-noite$1 text-white');
    
    // Replace text-blue-400 -> text-azul-noite
    newHero = newHero.replace(/text-blue-400/g, 'text-azul-noite');
    // Replace bg-blue-400/10 -> bg-azul-noite/10
    newHero = newHero.replace(/bg-blue-400\/10/g, 'bg-azul-noite/10');
    // Replace bg-blue-400 -> bg-azul-noite
    newHero = newHero.replace(/bg-blue-400(?![\/\-])/g, 'bg-azul-noite');
    // Replace border-blue-400/30 -> border-azul-noite/30
    newHero = newHero.replace(/border-blue-400\/30/g, 'border-azul-noite/30');
    // Replace button shadow color from blue to azul-noite (17, 26, 51)
    newHero = newHero.replace(/rgba\(96,165,250,0\.3\)/g, 'rgba(17,26,51,0.3)');
    
    // We will keep conversion-line-blue but rename it to conversion-line-dark
    newHero = newHero.replace(/conversion-line-blue/g, 'conversion-line-dark');
    newHero = newHero.replace(/dot-guide-blue/g, 'dot-guide-dark');

    return newHero;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
