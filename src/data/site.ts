// Todas as informações do consultório ficam aqui. Para atualizar o site,
// normalmente basta mexer neste arquivo.

export const doctor = {
  name: "Dr. Augusto César Borges",
  shortName: "Dr. Augusto",
  specialty: "Otorrinolaringologista",
  crm: "CRM-MG 21453",
  rqe: "RQE 59380",
  amb: "AMB nº 17904",
  whatsapp: "5534996461300",
  phoneDisplay: "(34) 99646-1300",
  phoneHref: "tel:+5534996461300",
  instagram: "https://www.instagram.com/dr.augusto/",
  instagramHandle: "@dr.augusto",
  doctoralia: "https://www.doctoralia.com.br/augusto-cesar-borges/otorrino/uberlandia",
  googleRating: "4,9",
  googleReviews: 178,
  doctoraliaReviews: 723,
  doctoraliaAnswers: 56,
};

export const clinic = {
  street: "Rua Martinésia, 303",
  room: "Sala 602",
  district: "Nossa Senhora Aparecida",
  city: "Uberlândia – MG",
  cep: "38400-109",
  landmark: "Em frente ao Centro Municipal de Cultura",
  mapsQuery: "DR AUGUSTO CÉSAR BORGES OTORRINO, R. Martinésia, 303 - Sl 602, Uberlândia - MG",
  payments: ["Cartão de crédito", "Cartão de débito", "Dinheiro"],
  plans: ["Unimed", "Cassi", "Saúde Caixa"],
  refund: ["SulAmérica", "Bradesco Saúde", "Amil"],
};

export type DayHours = { open: string; close: string } | null;

// Índice = dia da semana (0 = domingo)
export const hours: DayHours[] = [
  null,
  { open: "08:00", close: "18:00" },
  { open: "08:00", close: "18:00" },
  { open: "08:00", close: "18:00" },
  { open: "08:00", close: "18:00" },
  { open: "08:00", close: "18:00" },
  null,
];

export const weekdayNames = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Atuação" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#consultorio", label: "Consultório" },
];

export const formation = [
  { title: "Medicina", place: "Universidade Federal de Uberlândia" },
  { title: "Residência médica em Otorrinolaringologia", place: "Universidade Federal de Uberlândia" },
  { title: "Especialização em Cirurgia Plástica da Face", place: "Universidade Federal de Uberlândia" },
  { title: "Pós-graduação em Plástica de Face", place: "IBPG, São Paulo" },
  { title: "Dezoito anos de docência", place: "Professor de medicina" },
];

export type AreaId = "ouvido" | "nariz" | "garganta";

export const areas: {
  id: AreaId;
  name: string;
  summary: string;
  conditions: string[];
  procedures: string[];
}[] = [
  {
    id: "ouvido",
    name: "Ouvido",
    summary:
      "Diagnóstico e tratamento das dores de ouvido, das alterações da audição e das tonturas, com exames do labirinto e cirurgia otológica quando indicada.",
    conditions: ["Dor de ouvido e otites", "Labirintite e doenças do labirinto", "Tontura e vertigem", "Perda de audição", "Estenose do conduto auditivo"],
    procedures: ["Otologia cirúrgica", "Otoneurologia", "Audiometria", "Exame do labirinto (vectoeletronistagmografia)", "Tubos de ventilação", "Reconstrução da orelha"],
  },
  {
    id: "nariz",
    name: "Nariz",
    summary:
      "Uma respiração livre e um nariz em harmonia com o rosto. Tratamento de rinite e sinusite, correção do septo e rinoplastia funcional e estética.",
    conditions: ["Rinite", "Sinusite", "Desvio do septo nasal", "Obstrução nasal", "Desarmonia no formato do nariz"],
    procedures: ["Rinoplastia", "Septoplastia", "Cirurgia endoscópica nasossinusal", "Reconstrução parcial do nariz"],
  },
  {
    id: "garganta",
    name: "Garganta",
    summary:
      "Atenção às amigdalites de repetição, à rouquidão persistente e à adenoide aumentada, tão comum na infância.",
    conditions: ["Amigdalite e amigdalite de repetição", "Dor de garganta", "Rouquidão", "Adenoide aumentada", "Alterações da voz"],
    procedures: ["Amigdalectomia", "Adenoidectomia", "Toxina botulínica nas pregas vocais", "Laringotraqueoplastia"],
  },
];

/**
 * Casos de antes e depois. Cada foto já traz as duas imagens juntas:
 * split "x" = antes à esquerda e depois à direita;
 * split "y" = antes em cima e depois embaixo.
 * Para trocar ou adicionar, salve em public/images/resultados/ e inclua aqui.
 */
export type Result = { id: string; title: string; detail: string; src: string; split: "x" | "y"; blur: string };

export const results: Result[] = [
  {
    id: "rinoplastia-1",
    title: "Rinoplastia",
    detail: "Três quartos",
    src: "/images/resultados/rinoplastia-1.jpg",
    split: "x",
    blur: "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAgMF/8QAHxAAAgICAQUAAAAAAAAAAAAAAQIAAxFBMQQSEyJR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAAMBAAAAAAAAAAAAAAAAAAAREiH/2gAMAwEAAhEDEQA/AA1hTp1s8vez6OogAAPYH7MVr3dkBPA1KEms4VjjmGWN4f/Z",
  },
  {
    id: "rinoplastia-2",
    title: "Rinoplastia",
    detail: "Três quartos, aproximada",
    src: "/images/resultados/rinoplastia-2.jpg",
    split: "x",
    blur: "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAwH/xAAhEAACAgECBwAAAAAAAAAAAAABAwACERIhEyIjMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAID/9oADAMBAAIRAxEAPwBFHiKvV3MfI9wXrqGdOpFcdpEk41Z3iu3uD8EPDN0C/9k=",
  },
  {
    id: "rinoplastia-3",
    title: "Rinoplastia",
    detail: "Perfil",
    src: "/images/resultados/rinoplastia-3.jpg",
    split: "y",
    blur: "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAMF/8QAIRAAAQMCBwEAAAAAAAAAAAAAAgABEQMFBBITITEyQZH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAIh/9oADAMBAAIRAxEAPwCgGD0dQZeOE2ld8M4NmA592Q7f0YfIWkNII6t8RWCen//Z",
  },
  {
    id: "rinoplastia-4",
    title: "Rinoplastia",
    detail: "Perfil, no centro cirúrgico",
    src: "/images/resultados/rinoplastia-4.jpg",
    split: "y",
    blur: "data:image/jpeg;base64,/9j/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAMAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQQF/8QAHxAAAgIBBAMAAAAAAAAAAAAAAQIAAxEEBRIhMkFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAQACAwAAAAAAAAAAAAAAAAIAAQMEMf/aAAwDAQACEQMRAD8Aj0yVrWwUd+zBtPVnomG0WM1DcsHJ+TWrpr4+IhLZRV9jnDSM/9k=",
  },
];

/** Fotos avulsas de pacientes, sem par de comparação */
export const moreResults: { src: string; alt: string }[] = [
  { src: "/images/resultados/registro-1.jpg", alt: "Paciente do Dr. Augusto, vista frontal do nariz" },
  { src: "/images/resultados/registro-2.jpg", alt: "Paciente do Dr. Augusto, nariz em perfil" },
  { src: "/images/resultados/registro-3.jpg", alt: "Paciente do Dr. Augusto, nariz em três quartos" },
  { src: "/images/resultados/registro-4.jpg", alt: "Paciente do Dr. Augusto logo após a cirurgia, no centro cirúrgico" },
];

export type Review = { name: string; text: string; when: string; source: "google" | "doctoralia"; tag?: string };

export const reviews: Review[] = [
  {
    name: "Vitor Hugo",
    source: "google",
    when: "há um mês",
    text: "Excelente atendimento! Um médico extremamente atencioso, competente e cuidadoso, que soube identificar com precisão o meu problema e, após a avaliação, já encaminhou todo o processo para a cirurgia necessária.",
  },
  {
    name: "Paulo Henrique",
    source: "doctoralia",
    when: "outubro de 2026",
    tag: "Septoplastia",
    text: "Fui surpreendido pelo melhor atendimento médico que tive até hoje. Linguagem clara. Muita didática e demonstrou muito conhecimento do assunto. Parabéns pelo atendimento.",
  },
  {
    name: "Viviane Rezende",
    source: "google",
    when: "há 2 meses",
    text: "Excelente atendimento. Dr. Augusto foi muito atencioso, explicou tudo sobre a cirurgia com clareza e paciência. A secretária também foi super prestativa. Me senti segura e acolhida. Recomendo!",
  },
  {
    name: "Odilon Moreira",
    source: "google",
    when: "há 6 meses",
    text: "Chegamos há pouco tempo na cidade e encontramos o Dr Augusto aqui no Google. Levei meus dois filhos pequenos e ficamos impressionados com a atenção e o carinho. Voltaremos mais vezes para que ele possa acompanhar os meus dois pequenos.",
  },
  {
    name: "Maraisa",
    source: "doctoralia",
    when: "setembro de 2026",
    tag: "Cirurgia do filho",
    text: "Estamos muito gratos com o atendimento do Dr Augusto, muito atencioso, cirurgia foi um sucesso do nosso filho. Pós operatório com cuidado e sempre disponível a atender o paciente. Super recomendamos!",
  },
  {
    name: "Manuela Moya",
    source: "google",
    when: "há 3 meses",
    text: "O melhor médico de Uberlândia, sempre atencioso e muito receptivo! Indico de olhos fechados!",
  },
  {
    name: "Zilda A.S.S",
    source: "doctoralia",
    when: "setembro de 2026",
    text: "Consulta pontual, atencioso, resultados excelentes, porque minha respiração e audição ficaram bem melhores.",
  },
  {
    name: "Galvão Mota",
    source: "google",
    when: "há 3 meses",
    text: "Foi excelente, nota 1.000 pelo atendimento do Dr Augusto César e pela atendente Cíntia. Parabéns e recomendo a quem precisar de um ótimo otorrino, como pessoa e profissional.",
  },
  {
    name: "Pedrinho Santos",
    source: "google",
    when: "há 2 meses",
    text: "Ótimo atendimento, secretária atenciosa! Dr Augusto é excepcional, excelente profissional e muito gentil.",
  },
  {
    name: "Rosana (Eloah)",
    source: "doctoralia",
    when: "setembro de 2026",
    text: "Atendimento excelente, o carinho que ele tem com a minha filha e sei que com outros pacientes também. Explica tudo e muito atencioso.",
  },
  {
    name: "Vitor Ferreira",
    source: "google",
    when: "há 3 meses",
    text: "Doutor atendeu minha filha com todo o carinho e tirou nossas dúvidas.",
  },
  {
    name: "Ana Maria Nunes Mariano",
    source: "doctoralia",
    when: "setembro de 2026",
    text: "O Dr. Augusto é um médico muito experiente, competente, humilde e prestativo!",
  },
  {
    name: "Leila Lopes",
    source: "google",
    when: "há 3 meses",
    text: "Ótimo atendimento médico. Muito indico.",
  },
];

export const faqs = [
  {
    q: "O Dr. Augusto atende crianças?",
    a: "Sim. Ele atende adultos e crianças, de otites e amigdalites de repetição até a avaliação de adenoide e ronco infantil.",
  },
  {
    q: "Quais convênios são aceitos?",
    a: "Unimed, Cassi e Saúde Caixa. A cobertura pode variar conforme o plano e o procedimento, então vale confirmar no momento do agendamento.",
  },
  {
    q: "Meu plano não está na lista. Consigo reembolso?",
    a: "O consultório trabalha com reembolso para SulAmérica, Bradesco Saúde e Amil. Você faz a consulta particular e solicita o reembolso ao seu plano com a documentação entregue.",
  },
  {
    q: "Quais formas de pagamento são aceitas na consulta particular?",
    a: "Cartão de crédito, cartão de débito e dinheiro.",
  },
  {
    q: "Como funciona a avaliação para rinoplastia?",
    a: "Na primeira consulta o Dr. Augusto examina a parte interna do nariz e a respiração, conversa sobre o que incomoda você e explica o que é possível mudar. A cirurgia só é indicada depois dessa avaliação.",
  },
  {
    q: "Qual a forma mais rápida de agendar?",
    a: "Pelo WhatsApp, com o formulário desta página, ou direto na agenda online do Doctoralia, onde aparecem os horários livres.",
  },
];
