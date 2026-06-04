const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');
const saudeTemplatePath = path.join(appDir, 'saude/page.tsx');
const belezaTemplatePath = path.join(appDir, 'beleza/page.tsx');

const saudeTemplate = fs.readFileSync(saudeTemplatePath, 'utf8');
const belezaTemplate = fs.readFileSync(belezaTemplatePath, 'utf8');

const saudePages = [
  {
    path: 'saude/psicologo',
    badge: 'Marketing para Psicólogos',
    title: 'Psicólogos merecem uma <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">agenda cheia e previsível.</span>',
    btn: 'Quero Lotar Minha Agenda de Psicoterapia'
  },
  {
    path: 'saude/dentista',
    badge: 'Marketing para Dentistas',
    title: 'Dentistas merecem uma <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">agenda cheia e previsível.</span>',
    btn: 'Quero Mais Pacientes Particulares'
  },
  {
    path: 'saude/nutricionista',
    badge: 'Marketing para Nutricionistas',
    title: 'Nutricionistas merecem uma <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">agenda cheia e previsível.</span>',
    btn: 'Quero Lotar Minha Agenda de Consultas'
  },
  {
    path: 'saude/fisioterapeuta',
    badge: 'Marketing para Fisioterapeutas',
    title: 'Fisioterapeutas merecem uma <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">agenda cheia e previsível.</span>',
    btn: 'Quero Mais Pacientes de Fisioterapia'
  },
  {
    path: 'saude/fonoaudiologo',
    badge: 'Marketing para Fonoaudiólogos',
    title: 'Fonoaudiólogos merecem uma <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">agenda cheia e previsível.</span>',
    btn: 'Quero Mais Pacientes de Fonoaudiologia'
  }
];

const belezaPages = [
  {
    path: 'beleza/cabeleireiro',
    badge: 'Marketing para Cabeleireiros',
    title: 'Cabeleireiros merecem ser <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">a primeira escolha da cliente.</span>',
    btn: 'Quero Lotar Minha Agenda'
  },
  {
    path: 'beleza/lash-designer',
    badge: 'Marketing para Lash Designers',
    title: 'Lash Designers merecem ter <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">uma agenda recorrente e previsível.</span>',
    btn: 'Quero Mais Clientes Fiéis'
  },
  {
    path: 'beleza/sobrancelhas',
    badge: 'Marketing para Designers de Sobrancelha',
    title: 'Designers de Sobrancelha merecem ser <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">a referência na sua cidade.</span>',
    btn: 'Quero Lotar Minha Agenda'
  },
  {
    path: 'beleza/nail-designer',
    badge: 'Marketing para Nail Designers',
    title: 'Nail Designers merecem ter <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">uma agenda 100% preenchida.</span>',
    btn: 'Quero Mais Clientes Todo Mês'
  },
  {
    path: 'beleza/maquiador',
    badge: 'Marketing para Maquiadores',
    title: 'Maquiadores merecem ser <span className="text-primary font-black underline decoration-secondary-fixed decoration-4">a primeira opção em eventos especiais.</span>',
    btn: 'Quero Mais Agendamentos'
  }
];

function generateSaudePage(pageConfig) {
  let content = saudeTemplate;
  content = content.replace('Marketing de Saúde de Alto Padrão', pageConfig.badge);
  content = content.replace(/Profissionais de Saúde merecem uma.*?<\/h1>/s, `${pageConfig.title}\n              </h1>`);
  content = content.replace('Quero Pacientes Particulares', pageConfig.btn);
  content = content.replace('export default function SaudePage() {', `export default function Page() {`);
  
  const targetDir = path.join(appDir, pageConfig.path);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), content);
  console.log(`Created ${pageConfig.path}`);
}

function generateBelezaPage(pageConfig) {
  let content = belezaTemplate;
  content = content.replace('Marketing Digital para Profissionais de Beleza', pageConfig.badge);
  content = content.replace(/Profissionais da beleza merecem ser.*?<\/h1>/s, `${pageConfig.title}\n              </h1>`);
  content = content.replace('Quero Lotar Minha Agenda', pageConfig.btn);
  content = content.replace('export default function BelezaPage() {', `export default function Page() {`);
  
  const targetDir = path.join(appDir, pageConfig.path);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'page.tsx'), content);
  console.log(`Created ${pageConfig.path}`);
}

saudePages.forEach(generateSaudePage);
belezaPages.forEach(generateBelezaPage);

console.log('Done!');
