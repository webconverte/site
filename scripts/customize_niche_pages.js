const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');

const pagesToUpdate = [
  {
    path: 'saude/psicologo',
    heroImageName: 'psicologo_hero.png',
    noun: 'paciente',
    verb: 'agendar',
    copyA: 'sessões de terapia',
    copyB: 'a saúde mental',
    copyC: 'pacientes particulares'
  },
  {
    path: 'saude/dentista',
    heroImageName: 'dentista_hero.png',
    noun: 'paciente',
    verb: 'agendar',
    copyA: 'tratamentos odontológicos',
    copyB: 'a saúde bucal',
    copyC: 'pacientes particulares'
  },
  {
    path: 'saude/nutricionista',
    heroImageName: 'nutricionista_hero.png',
    noun: 'paciente',
    verb: 'agendar',
    copyA: 'consultas nutricionais',
    copyB: 'a qualidade de vida',
    copyC: 'pacientes qualificados'
  },
  {
    path: 'saude/fisioterapeuta',
    heroImageName: 'fisioterapeuta_hero.png',
    noun: 'paciente',
    verb: 'agendar',
    copyA: 'sessões de fisioterapia',
    copyB: 'a reabilitação',
    copyC: 'pacientes particulares'
  },
  {
    path: 'saude/fonoaudiologo',
    heroImageName: 'fonoaudiologo_hero.png',
    noun: 'paciente',
    verb: 'agendar',
    copyA: 'sessões de fonoaudiologia',
    copyB: 'a comunicação',
    copyC: 'pacientes qualificados'
  },
  {
    path: 'beleza/cabeleireiro',
    heroImageName: 'cabeleireiro_hero.png',
    noun: 'cliente',
    verb: 'marcar horário',
    copyA: 'procedimentos capilares',
    copyB: 'a autoestima',
    copyC: 'clientes fiéis'
  },
  {
    path: 'beleza/lash-designer',
    heroImageName: 'lash_designer_hero.png',
    noun: 'cliente',
    verb: 'marcar horário',
    copyA: 'extensões de cílios',
    copyB: 'o olhar',
    copyC: 'clientes recorrentes'
  },
  {
    path: 'beleza/sobrancelhas',
    heroImageName: 'sobrancelhas_hero.png',
    noun: 'cliente',
    verb: 'marcar horário',
    copyA: 'design de sobrancelhas',
    copyB: 'a expressão facial',
    copyC: 'clientes fiéis'
  },
  {
    path: 'beleza/nail-designer',
    heroImageName: 'nail_designer_hero.png',
    noun: 'cliente',
    verb: 'marcar horário',
    copyA: 'alongamento de unhas',
    copyB: 'a beleza das unhas',
    copyC: 'clientes recorrentes'
  },
  {
    path: 'beleza/maquiador',
    heroImageName: 'maquiador_hero.png',
    noun: 'cliente',
    verb: 'marcar horário',
    copyA: 'produções de maquiagem',
    copyB: 'a beleza em eventos',
    copyC: 'clientes em eventos'
  }
];

pagesToUpdate.forEach(page => {
  const pagePath = path.join(appDir, page.path, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // 1. Remove "ESPECIALIDADES" / "solucoes" section
  const sectionRegex = /\{\/\*\s*ESPECIALIDADES\s*\*\/\}.*?<\/section>/s;
  content = content.replace(sectionRegex, '');
  
  // 2. Update Image Import
  content = content.replace(/import heroImage from '@\/src\/assets\/images\/.*?';/, `import heroImage from '@/src/assets/images/${page.heroImageName}';`);
  
  // 3. Update copy generically
  // E.g. "pacientes" to page.noun+"s" if noun is "cliente"
  if (page.noun === 'cliente') {
    content = content.replace(/pacientes fidelizados/g, 'clientes fidelizadas');
    content = content.replace(/paciente ideal/g, 'cliente ideal');
    content = content.replace(/seus pacientes/g, 'suas clientes');
  }
  
  // 4. Update the "Problema Section" copy slightly to adapt to area
  content = content.replace(/O caminho até você/g, 'O caminho até o agendamento');
  
  fs.writeFileSync(pagePath, content);
  console.log(`Updated ${page.path}`);
});
