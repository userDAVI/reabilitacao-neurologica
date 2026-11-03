const stages = [
  {
    id: 'entrada',
    title: 'Entrada do paciente',
    type: 'Entrada',
    professionals: ['Coordenação', 'Regulação hospitalar', 'Equipe de acolhimento'],
    description: 'Encaminhamentos pela rede pública e privada convergem para uma triagem padronizada.',
    process: ['Cadastro', 'Identificação do encaminhamento', 'Elegibilidade clínica', 'Orientação ao paciente'],
    outputs: ['Ficha inicial', 'Priorização', 'Acesso ao serviço'],
    technology: ['Portal de encaminhamento', 'Fluxo de regulação', 'Checklist de elegibilidade']
  },
  {
    id: 'triagem',
    title: 'Triagem e avaliação',
    type: 'Processo clínico',
    professionals: ['Neurologista', 'Fisiatra', 'Fisioterapeuta', 'Terapeuta ocupacional'],
    description: 'Avaliação inicial com dados clínicos, nível neurológico, dor, espasticidade, risco e contexto funcional.',
    process: ['Anamnese', 'Exame físico', 'Classificação neurológica', 'Rastreio de riscos'],
    outputs: ['Avaliação inicial', 'Prioridade de atendimentos', 'Plano de especialidades'],
    technology: ['Prontuário eletrônico', 'Escalas clínicas', 'Alertas de risco']
  },
  {
    id: 'prontuario',
    title: 'Prontuário inteligente',
    type: 'Dados e IA',
    professionals: ['Equipe multidisciplinar', 'IA support'],
    description: 'Linha do tempo longitudinal com informações clínicas, exames, avaliações e indicadores de evolução.',
    process: ['Agrupamento', 'Comparação temporal', 'Identificação de lacunas', 'Relatórios estruturados'],
    outputs: ['Resumo longitudinal', 'Rastreamento', 'Análise comparativa'],
    technology: ['Base de dados clínicos', 'IA explicável', 'Auditoria de alterações']
  },
  {
    id: 'metas',
    title: 'Metas GAS e planejamento',
    type: 'Decisão clínica',
    professionals: ['Equipe', 'Paciente', 'Profissional responsável'],
    description: 'As metas são construídas junto ao paciente com critérios objetivos e reavaliação periódica.',
    process: ['Estado basal', 'Definição de metas', 'Intervenções', 'Reavaliação'],
    outputs: ['GAS score', 'Plano terapêutico', 'Critérios de progressão'],
    technology: ['Dashboard de metas', 'Acompanhamento visual', 'Validação de campos']
  },
  {
    id: 'terapias',
    title: 'Intervenções terapêuticas',
    type: 'Execução',
    professionals: ['Fisioterapia', 'FES', 'Terapia ocupacional', 'Dor'],
    description: 'A jornada terapêutica combina exercícios, tecnologias digitais, treinamento funcional e suporte multidisciplinar.',
    process: ['Planejamento', 'Sessões', 'Ajustes', 'Progressão'],
    outputs: ['Sessões realizadas', 'Ajustes de plano', 'Resposta terapêutica'],
    technology: ['FES', 'Jogos sérios', 'Sensores vestíveis']
  },
  {
    id: 'monitoramento',
    title: 'Monitoramento e telereabilitação',
    type: 'Tecnologia e feedback',
    professionals: ['Equipe de telessaúde', 'Profissionais de reabilitação'],
    description: 'Uso de sensores, relatórios domiciliares e teleconsultas para segurança, adesão e ajustes em tempo real.',
    process: ['Registro remoto', 'Análise de sintomas', 'Feedback', 'Ajuste da frequência'],
    outputs: ['Atenção remota', 'Alertas clínicos', 'Atualização do plano'],
    technology: ['App de telereabilitação', 'Dispositivos vestíveis', 'Alertas de risco']
  },
  {
    id: 'reavaliacao',
    title: 'Reavaliação',
    type: 'Ciclo de feedback',
    professionals: ['Médicos', 'Fisioterapeutas', 'Equipe multidisciplinar'],
    description: 'Os dados são comparados longitudinalmente para ajustar metas, intervenções e continuidade de cuidado.',
    process: ['Repetição de exames', 'Comparação', 'Decisão', 'Novo ciclo'],
    outputs: ['Relatório final', 'Novo planejamento', 'Encaminhamentos'],
    technology: ['Dashboards', 'Visualização temporal', 'IA explicável']
  },
  {
    id: 'saida',
    title: 'Saídas e alta',
    type: 'Desfecho',
    professionals: ['Equipe responsável', 'Coordenação'],
    description: 'O sistema registra alta, manutenção, continuidade do programa ou redirecionamento para outro nível de cuidado.',
    process: ['Avaliar metas', 'Comparar resultados', 'Comunicar decisão'],
    outputs: ['Alta', 'Manutenção', 'Encaminhamento'],
    technology: ['Relatório executivo', 'Indicadores de desfecho', 'Governança clínica']
  }
];

const metrics = [
  { label: 'Pacientes ativos', value: '184', trend: '+12% vs mês anterior', className: 'up' },
  { label: 'Aguardando avaliação', value: '26', trend: '-4% nesta semana', className: 'down' },
  { label: 'Sessões realizadas', value: '1.248', trend: '+18% no trimestre', className: 'up' },
  { label: 'Adesão domiciliar', value: '87%', trend: '+9 pts', className: 'up' }
];

const gasData = [
  { label: 'Dor', value: 78 },
  { label: 'Tronco', value: 64 },
  { label: 'Transferências', value: 58 },
  { label: 'Resistência', value: 71 },
  { label: 'Adesão', value: 82 }
];

const stageDistribution = [
  { label: 'Triagem', value: 24 },
  { label: 'Avaliação', value: 18 },
  { label: 'Reabilitação', value: 36 },
  { label: 'Monitoramento', value: 16 },
  { label: 'Alta', value: 6 }
];

const patients = [
  { name: 'Ana Lins', origin: 'Rede privada', lesion: 'T10 incompleta', stage: 'reabilitacao', gas: '+1', owner: 'Fisioterapia' },
  { name: 'César Nogueira', origin: 'SUS', lesion: 'C6 completa', stage: 'triagem', gas: '0', owner: 'Neurologia' },
  { name: 'Marta Dias', origin: 'Clínica parceira', lesion: 'T12 incompleta', stage: 'monitoramento', gas: '+2', owner: 'Telereabilitação' },
  { name: 'Igor Machado', origin: 'SUS', lesion: 'L2 incompleta', stage: 'reabilitacao', gas: '+1', owner: 'Terapia ocupacional' },
  { name: 'Lívia Andrade', origin: 'Rede privada', lesion: 'C4 incompleta', stage: 'alta', gas: '0', owner: 'Coordenação' }
];

const goals = [
  {
    title: 'Maior independência em transferências',
    score: '0 / +1',
    items: ['Estado basal: -1', 'Objetivo: reduzir assistência mínima', 'Critério: 2 transferências independentes por semana']
  },
  {
    title: 'Melhor controle de tronco',
    score: '+1',
    items: ['Estado basal: 0', 'Objetivo: maior estabilidade em sentado', 'Critério: tolerância à atividade funcional por 15 minutos']
  },
  {
    title: 'Redução da interferência da dor',
    score: '+2',
    items: ['Estado basal: -1', 'Objetivo: menor impacto nas tarefas cotidianas', 'Critério: dor classificada como leve em 4 dias/semana']
  }
];

const technologies = [
  {
    name: 'Sensores inerciais vestíveis',
    trl: 'TRL 5',
    focus: 'Análise de movimento e postura',
    challenge: 'Instrumentação e calibração em ambiente clínico'
  },
  {
    name: 'FES-Cycling',
    trl: 'TRL 6',
    focus: 'Ciclismo assistido e estimulação funcional',
    challenge: 'Sincronização, segurança e supervisão'
  },
  {
    name: 'Telereabilitação',
    trl: 'TRL 7',
    focus: 'Acompanhamento remoto e monitoramento',
    challenge: 'Dados de adesão e critérios de alerta '
  },
  {
    name: 'Jogos sérios',
    trl: 'TRL 4',
    focus: 'Motivação e feedback motor',
    challenge: 'Validação de ganho funcional real'
  }
];

const calendar = [
  {
    day: 'Segunda',
    events: ['Avaliação de fisioterapia', 'Treinamento funcional']
  },
  {
    day: 'Terça',
    events: ['FES-Cycling', 'Registro de desempenho']
  },
  {
    day: 'Quarta',
    events: ['Atividades domiciliares', 'Telemonitoramento']
  },
  {
    day: 'Quinta',
    events: ['Fisioterapia neurofuncional', 'Gamificação']
  },
  {
    day: 'Sexta',
    events: ['Reavaliação clínica', 'Acompanhamento de metas']
  }
];

function renderFlowDiagram() {
  const container = document.getElementById('flow-diagram');
  if (!container) return;

  container.innerHTML = stages
    .map(
      (stage, index) => `
        <button class="flow-node ${index === 0 ? 'active' : ''}" data-stage="${stage.id}">
          <small>${stage.type}</small>
          <strong>${stage.title}</strong>
          <span>${stage.professionals[0]}</span>
        </button>
      `
    )
    .join('');

  const buttons = container.querySelectorAll('.flow-node');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedId = button.dataset.stage;
      const selectedStage = stages.find((stage) => stage.id === selectedId);
      renderStageDetail(selectedStage);
      buttons.forEach((node) => node.classList.toggle('active', node === button));
    });
  });

  renderStageDetail(stages[0]);
}

function renderStageDetail(stage) {
  const detail = document.getElementById('stage-detail');
  if (!detail) return;

  detail.innerHTML = `
    <div>
      <span class="chip neutral">${stage.type}</span>
      <h4>${stage.title}</h4>
    </div>
    <div>
      <strong>Profissionais</strong>
      <p>${stage.professionals.join(', ')}</p>
    </div>
    <div>
      <strong>Descrição</strong>
      <p>${stage.description}</p>
    </div>
    <div>
      <strong>Processos</strong>
      <ul>
        ${stage.process.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <div>
      <strong>Saídas</strong>
      <ul>
        ${stage.outputs.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <div>
      <strong>Tecnologias relacionadas</strong>
      <ul>
        ${stage.technology.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `;
}

function renderMetrics() {
  const container = document.getElementById('metrics-grid');
  if (!container) return;

  container.innerHTML = metrics
    .map(
      (metric) => `
        <div class="metric-card">
          <span class="label">${metric.label}</span>
          <div class="value">${metric.value}</div>
          <span class="trend ${metric.className}">${metric.trend}</span>
        </div>
      `
    )
    .join('');
}

function renderGasChart() {
  const container = document.getElementById('gas-chart');
  if (!container) return;

  container.innerHTML = gasData
    .map(
      (item) => `
        <div class="bar-row">
          <span>${item.label}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${item.value}%"></div>
          </div>
          <strong>${item.value}%</strong>
        </div>
      `
    )
    .join('');
}

function renderStageDistribution() {
  const container = document.getElementById('stage-distribution');
  if (!container) return;

  container.innerHTML = stageDistribution
    .map(
      (item) => `
        <div class="stage-bar-row">
          <span>${item.label}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${item.value}%"></div>
          </div>
          <strong>${item.value}%</strong>
        </div>
      `
    )
    .join('');
}

function renderPatientsTable() {
  const table = document.getElementById('patient-table');
  if (!table) return;

  const search = document.getElementById('patient-search');
  const filter = document.getElementById('patient-filter');
  const searchValue = search ? search.value.trim().toLowerCase() : '';
  const filterValue = filter ? filter.value : 'all';

  const filteredPatients = patients.filter((patient) => {
    const matchesText = `${patient.name} ${patient.stage}`.toLowerCase().includes(searchValue);
    const matchesFilter = filterValue === 'all' || patient.stage === filterValue;
    return matchesText && matchesFilter;
  });

  table.innerHTML = filteredPatients
    .map(
      (patient) => `
        <tr>
          <td><strong>${patient.name}</strong></td>
          <td>${patient.origin}</td>
          <td>${patient.lesion}</td>
          <td><span class="badge ${patient.stage}">${patient.stage}</span></td>
          <td>${patient.gas}</td>
          <td>${patient.owner}</td>
        </tr>
      `
    )
    .join('');
}

function renderGoals() {
  const container = document.getElementById('therapy-goals');
  if (!container) return;

  container.innerHTML = goals
    .map(
      (goal) => `
        <article class="goal-card">
          <div class="goal-top">
            <h5>${goal.title}</h5>
            <span class="goal-score">${goal.score}</span>
          </div>
          <ul>
            ${goal.items.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

function renderCalendar() {
  const container = document.getElementById('calendar');
  if (!container) return;

  container.innerHTML = calendar
    .map(
      (day) => `
        <div class="day-column">
          <div class="day-header">${day.day}</div>
          <div class="day-events">
            ${day.events.map((event) => `<div class="event-tag">${event}</div>`).join('')}
          </div>
        </div>
      `
    )
    .join('');
}

function renderTechGrid() {
  const container = document.getElementById('tech-grid');
  if (!container) return;

  container.innerHTML = technologies
    .map(
      (tech) => `
        <article class="tech-card">
          <h5>${tech.name}</h5>
          <div class="tech-meta">
            <span>${tech.focus}</span>
            <span class="tag">${tech.trl}</span>
          </div>
          <p>${tech.challenge}</p>
        </article>
      `
    )
    .join('');
}

function switchPanel(targetId) {
  const sections = document.querySelectorAll('.panel');
  const navButtons = document.querySelectorAll('.nav-item');

  sections.forEach((section) => {
    section.classList.toggle('active-panel', section.id === targetId);
  });

  navButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === targetId);
  });
}

function setupNavigation() {
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.addEventListener('click', () => switchPanel(button.dataset.target));
  });
}

function setupFilters() {
  const search = document.getElementById('patient-search');
  const filter = document.getElementById('patient-filter');

  if (search) search.addEventListener('input', renderPatientsTable);
  if (filter) filter.addEventListener('change', renderPatientsTable);
}

function setupGoalForm() {
  const form = document.getElementById('goal-form');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('goal-name').value.trim();
    const deadline = document.getElementById('goal-deadline').value.trim();
    const owner = document.getElementById('goal-owner').value.trim();
    const status = document.getElementById('goal-status').value.trim();

    if (!name || !deadline || !owner || !status) {
      showToast('Preencha todos os campos para simular a atualização da meta.');
      return;
    }

    const newGoal = { title: name, score: status, items: [`Prazo: ${deadline}`, `Responsável: ${owner}`, `Estado atual: ${status}`] };

    goals[0] = newGoal;
    renderGoals();
    showToast('Meta simulada com sucesso. Validação profissional necessária.');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('visible');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove('visible');
  }, 2200);
}

function init() {
  renderFlowDiagram();
  renderMetrics();
  renderGasChart();
  renderStageDistribution();
  renderPatientsTable();
  renderGoals();
  renderCalendar();
  renderTechGrid();
  setupNavigation();
  setupFilters();
  setupGoalForm();
}

document.addEventListener('DOMContentLoaded', init);
