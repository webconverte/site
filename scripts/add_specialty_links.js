const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');

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

filesToUpdate.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Skip if we already added Link
  if (content.includes('<Link href={item.href}')) {
      return;
  }

  // 1. Add href to the array objects
  content = content.replace(/{ icon: Brain, label: 'Psicólogo\(a\)'(?!,) }/g, "{ icon: Brain, label: 'Psicólogo(a)', href: '/saude/psicologo' }");
  content = content.replace(/{ icon: Smile, label: 'Dentista'(?!,) }/g, "{ icon: Smile, label: 'Dentista', href: '/saude/dentista' }");
  content = content.replace(/{ icon: Apple, label: 'Nutricionista'(?!,) }/g, "{ icon: Apple, label: 'Nutricionista', href: '/saude/nutricionista' }");
  content = content.replace(/{ icon: Activity, label: 'Fisioterapeuta'(?!,) }/g, "{ icon: Activity, label: 'Fisioterapeuta', href: '/saude/fisioterapeuta' }");
  content = content.replace(/{ icon: Ear, label: 'Fonoaudiólogo\(a\)'(?!,) }/g, "{ icon: Ear, label: 'Fonoaudiólogo(a)', href: '/saude/fonoaudiologo' }");
  
  content = content.replace(/{ icon: Paintbrush, label: 'Nail Designer'(?!,) }/g, "{ icon: Paintbrush, label: 'Nail Designer', href: '/beleza/nail-designer' }");
  content = content.replace(/{ icon: Eye, label: 'Lash Designer'(?!,) }/g, "{ icon: Eye, label: 'Lash Designer', href: '/beleza/lash-designer' }");
  content = content.replace(/{ icon: Wand2, label: 'Sobrancelhas'(?!,) }/g, "{ icon: Wand2, label: 'Sobrancelhas', href: '/beleza/sobrancelhas' }");
  content = content.replace(/{ icon: Scissors, label: 'Cabeleireiro\(a\)'(?!,) }/g, "{ icon: Scissors, label: 'Cabeleireiro(a)', href: '/beleza/cabeleireiro' }");
  content = content.replace(/{ icon: Palette, label: 'Maquiador\(a\)'(?!,) }/g, "{ icon: Palette, label: 'Maquiador(a)', href: '/beleza/maquiador' }");

  // 2. Change the button/div wrapper to Link
  content = content.replace(
    /<(button|div) className="w-full h-full group flex flex-col items-start p-4 sm:p-6 md:p-8 bg-surface-container-lowest rounded-card border border-outline-variant\/30 hover:border-secondary/g, 
    '<Link href={item.href} className="w-full h-full group flex flex-col items-start p-4 sm:p-6 md:p-8 bg-surface-container-lowest rounded-card border border-outline-variant/30 hover:border-secondary'
  );
  
  // 3. Change closing tag
  content = content.replace(
    /<span className="font-headline font-bold text-azul-noite text-sm sm:text-base md:text-lg leading-tight">\{item\.label\}<\/span>\s*<\/(button|div)>\s*<\/FadeIn>/g,
    '<span className="font-headline font-bold text-azul-noite text-sm sm:text-base md:text-lg leading-tight">{item.label}</span>\n                  </Link>\n                </FadeIn>'
  );

  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
