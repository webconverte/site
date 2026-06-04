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

function getPageName(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/');
  if (normalizedPath.includes('Header.tsx')) return 'Cabeçalho do Site';
  if (normalizedPath.endsWith('app/page.tsx')) return 'Página Inicial';
  if (normalizedPath.endsWith('app/saude/page.tsx')) return 'Área da Saúde';
  if (normalizedPath.endsWith('app/beleza/page.tsx')) return 'Área da Beleza';
  
  const parts = normalizedPath.split('/');
  const nicheFolder = parts[parts.length - 2];
  
  const nicheMap = {
    'cabeleireiro': 'Cabeleireiros',
    'lash-designer': 'Lash Designers',
    'maquiador': 'Maquiadores',
    'nail-designer': 'Nail Designers',
    'sobrancelhas': 'Designers de Sobrancelhas',
    'dentista': 'Dentistas',
    'fisioterapeuta': 'Fisioterapeutas',
    'fonoaudiologo': 'Fonoaudiólogos',
    'nutricionista': 'Nutricionistas',
    'psicologo': 'Psicólogos'
  };
  
  return nicheMap[nicheFolder] || 'Site';
}

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const pageName = getPageName(file);

  if (file === headerPath) {
    content = content.replace(
      /<button (className="[^"]*bg-secondary-fixed[^"]*")([^>]*)>([\s\S]*?Falar com Especialista[\s\S]*?)<\/button>/g,
      (match, p1, p2, p3) => {
        const cleanText = p3.replace(/<[^>]*>?/gm, '').trim();
        const message = `Olá! Estava navegando no site da WebConverte e cliquei em "${cleanText}". Gostaria de falar com um especialista!`;
        const url = `https://wa.me/5583986650650?text=${encodeURIComponent(message)}`;
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" ${p1}${p2}>${p3}</a>`;
      }
    );
  } else {
    // Replace all buttons in the pages (they are all CTA buttons)
    content = content.replace(
      /<button([^>]*)>([\s\S]*?)<\/button>/g,
      (match, p1, p2) => {
        const cleanText = p2.replace(/<[^>]*>?/gm, '').trim();
        const message = `Olá! Estava na página de ${pageName} e cliquei em "${cleanText}". Gostaria de falar com um especialista!`;
        const url = `https://wa.me/5583986650650?text=${encodeURIComponent(message)}`;
        return `<a href="${url}" target="_blank" rel="noopener noreferrer"${p1}>${p2}</a>`;
      }
    );
  }

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
