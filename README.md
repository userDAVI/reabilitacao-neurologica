# Plataforma inteligente de reabilitação neurológica

Protótipo web de um **ecossistema inteligente de reabilitação para pacientes com lesão medular**. O projeto mostra, de forma navegável, como seria um centro de reabilitação que acompanha o paciente desde o encaminhamento até a alta, combinando atendimento multidisciplinar, prontuário eletrônico longitudinal, metas terapêuticas mensuráveis, telereabilitação e inteligência artificial de apoio à decisão clínica, sempre com supervisão profissional.

> **Status:** protótipo conceitual com dados fictícios. Não é um dispositivo médico validado e não deve ser usado com pacientes reais.

## O problema

O cuidado de pessoas com lesão medular é longo, multidisciplinar e difícil de medir. Pacientes chegam por caminhos diferentes (SUS, hospitais, clínicas, planos de saúde), passam por várias especialidades e tecnologias, e a evolução clínica e funcional nem sempre fica registrada de forma objetiva e comparável ao longo do tempo.

## A proposta

Uma jornada única e estruturada para todos os pacientes, independentemente da porta de entrada, organizada em torno de ciclos contínuos de avaliação e ajuste:

1. **Entrada:** encaminhamentos da rede pública e da rede privada convergem para o mesmo acolhimento e a mesma triagem de elegibilidade.
2. **Triagem e avaliação:** avaliação multidisciplinar com nível neurológico, dor, espasticidade, riscos e contexto funcional e social.
3. **Prontuário inteligente:** linha do tempo longitudinal com exames, avaliações e sessões; a IA resume o histórico e aponta lacunas e tendências.
4. **Metas GAS e planejamento:** metas construídas junto com o paciente usando *Goal Attainment Scaling*, com critérios objetivos de progressão.
5. **Intervenções:** fisioterapia neurofuncional, FES e FES-Cycling, terapia ocupacional, manejo da dor, jogos sérios e sensores vestíveis.
6. **Monitoramento e telereabilitação:** acompanhamento remoto, registros domiciliares, alertas clínicos e ajustes do plano.
7. **Reavaliação:** comparação com a linha de base para decidir o próximo ciclo.
8. **Saída:** alta, manutenção no programa ou encaminhamento para outro nível de cuidado. O sistema também registra ausência de resposta e intercorrências, e não apenas os sucessos.

## O que tem neste repositório

| Arquivo | O que é |
|---|---|
| [`index.html`](index.html) | Protótipo navegável do sistema, com 12 telas: visão geral, painel de gestão, lista de pacientes, prontuário eletrônico, IA clínica, exames, plano terapêutico, agenda, gamificação, telereabilitação, tecnologias e pesquisa, resultados e alta. |
| [`apresentacao.html`](apresentacao.html) | Apresentação executiva em slides para coordenação e instituições: problema, objetivos, jornada, tecnologias, indicadores, roadmap e decisão solicitada. Use as setas do teclado para navegar. |
| [`fluxograma.html`](fluxograma.html) | Fluxograma interativo da jornada do paciente: 2 portas de entrada, 6 etapas, 3 ciclos de retorno e 3 saídas finais. Clique em uma etapa para ver os detalhes. |
| [`app.js`](app.js) | Dados fictícios e interações do protótipo (navegação, filtros de pacientes, metas GAS, gráficos, agenda). |
| [`styles.css`](styles.css) | Estilos e design system da plataforma. |
| [`docs/arquitetura.md`](docs/arquitetura.md) | Arquitetura conceitual: módulos funcionais, tecnologia proposta, segurança e governança. |
| [`docs/roadmap.md`](docs/roadmap.md) | Roadmap de implementação em curto, médio e longo prazo e priorização de tecnologias. |
| [`docs/riscos.md`](docs/riscos.md) | Matriz de riscos clínicos, tecnológicos, operacionais e regulatórios, com estratégias de mitigação. |
| [`prompt.txt`](prompt.txt) | Prompt mestre usado para conceber o projeto, com o escopo completo da proposta. |

## Como executar

O protótipo é HTML, CSS e JavaScript puros, sem dependências nem etapa de build.

- **Jeito mais simples:** abra `index.html` (ou `apresentacao.html` / `fluxograma.html`) diretamente no navegador.
- **Com servidor local:**

  ```bash
  git clone https://github.com/userDAVI/reabilitacao-neurologica.git
  cd reabilitacao-neurologica
  python -m http.server 8000
  ```

  Depois acesse `http://localhost:8000`.

As fontes são carregadas do Google Fonts; sem internet, as páginas funcionam com fontes alternativas do sistema.

## Tecnologia

- **Hoje (protótipo):** HTML5, CSS3 e JavaScript, com layout responsivo e dados simulados.
- **Proposta para as próximas fases:** backend em Python com FastAPI, banco PostgreSQL, interoperabilidade via HL7 FHIR, integração com sensores biomédicos e serviços de IA isolados da base do prontuário. Os detalhes estão em [`docs/arquitetura.md`](docs/arquitetura.md).

## Princípios

- **Supervisão humana em todas as decisões clínicas:** a IA sugere, resume e alerta, mas quem decide é o profissional.
- **IA explicável**, com limites claros e rastreabilidade.
- **Conformidade com a LGPD** e com as regras de telemedicina, consentimento e auditoria do prontuário.
- **Medição honesta de resultados:** inclui manutenção funcional, ausência de resposta e mudanças de estratégia.

## Aviso

Todos os dados de pacientes deste repositório são fictícios. O protótipo serve para demonstrar a proposta e não substitui avaliação profissional nem validação clínica ou regulatória.
