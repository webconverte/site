const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '../app');

const belezaPages = [
  {
    path: 'beleza/cabeleireiro',
    badge: 'Marketing para Cabeleireiros',
    title: 'Cabeleireiros merecem ser <span className="text-secondary-fixed">a primeira escolha da cliente.</span>',
    btn: 'Quero Lotar Minha Agenda'
  },
  {
    path: 'beleza/lash-designer',
    badge: 'Marketing para Lash Designers',
    title: 'Lash Designers merecem ter <span className="text-secondary-fixed">uma agenda recorrente e previsível.</span>',
    btn: 'Quero Mais Clientes Fiéis'
  },
  {
    path: 'beleza/sobrancelhas',
    badge: 'Marketing para Designers de Sobrancelha',
    title: 'Designers de Sobrancelha merecem ser <span className="text-secondary-fixed">a referência na sua cidade.</span>',
    btn: 'Quero Lotar Minha Agenda'
  },
  {
    path: 'beleza/nail-designer',
    badge: 'Marketing para Nail Designers',
    title: 'Nail Designers merecem ter <span className="text-secondary-fixed">uma agenda 100% preenchida.</span>',
    btn: 'Quero Mais Clientes Todo Mês'
  },
  {
    path: 'beleza/maquiador',
    badge: 'Marketing para Maquiadores',
    title: 'Maquiadores merecem ser <span className="text-secondary-fixed">a primeira opção em eventos especiais.</span>',
    btn: 'Quero Mais Agendamentos'
  }
];

belezaPages.forEach(pageConfig => {
  const pagePath = path.join(appDir, pageConfig.path, 'page.tsx');
  if (!fs.existsSync(pagePath)) return;
  
  let content = fs.readFileSync(pagePath, 'utf8');

  // Replace badge
  content = content.replace(/<span className="text-white\/80 text-sm font-medium tracking-wide uppercase">.*?<\/span>/, `<span className="text-white/80 text-sm font-medium tracking-wide uppercase">${pageConfig.badge}</span>`);
  
  // Replace title (Generic is: "Profissionais de Beleza merecem uma <span className="text-secondary-fixed">agenda cheia e altamente lucrativa.</span>")
  content = content.replace(/<h1 className="[^"]*">\s*.*?<\/h1>/s, (match) => {
    // Keep the h1 opening tag intact
    return match.replace(/>\s*.*?<\/h1>/s, `>\n                ${pageConfig.title}\n              </h1>`);
  });
  
  // Replace button
  content = content.replace(/Quero Lotar Minha Agenda(?!\s+de)/g, pageConfig.btn);
  
  fs.writeFileSync(pagePath, content);
  console.log(`Updated text for ${pageConfig.path}`);
});
