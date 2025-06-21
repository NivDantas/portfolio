const toggleButton = document.querySelector("#theme-toggle");
const darkButton = document.querySelector("#theme-toggle-dark-icon");
const lightButton = document.querySelector("#theme-toggle-light-icon");
const userLanguage = navigator.language || navigator.userLanguage;
const groupTab = document.querySelector("#group-tab");
const groupTabTwo = document.querySelector("#group-tab-two");
const svgIcon = groupTab.querySelector("#svg");
const svgIconTwo = groupTabTwo.querySelector("#svg-two");
const expandableDiv = document.querySelector("#expandable");
const expandableDivTwo = document.querySelector("#expandable-two");
groupTab.addEventListener("click", () => {
  if (!window.matchMedia("(min-width: 1024px)").matches) return;
  if (event.target === expandableDiv || exParagraphOne.contains(event.target))
    return;
  if (expandableDiv.classList.contains("hidden")) {
    expandableDiv.classList.add("grid");
    expandableDiv.classList.remove("hidden");
    svgIcon.classList.remove("motion-safe:lg:animate-bounce");
    expandableDiv.appendChild(svgIcon);
  } else {
    expandableDiv.classList.remove("grid");
    expandableDiv.classList.add("hidden");
    svgIcon.classList.add("motion-safe:lg:animate-bounce");
    groupTab.appendChild(svgIcon);
  }
});
groupTabTwo.addEventListener("click", (event) => {
  if (!window.matchMedia("(min-width: 1024px)").matches) return;
  if (
    event.target === expandableDivTwo ||
    exParagraphTwo.contains(event.target)
  )
    return;
  if (expandableDivTwo.classList.contains("hidden")) {
    expandableDivTwo.classList.add("grid");
    expandableDivTwo.classList.remove("hidden");
    svgIconTwo.classList.remove("motion-safe:lg:animate-bounce");
    expandableDivTwo.appendChild(svgIconTwo);
  } else {
    expandableDivTwo.classList.remove("grid");
    expandableDivTwo.classList.add("hidden");
    svgIconTwo.classList.add("motion-safe:lg:animate-bounce");
    groupTabTwo.appendChild(svgIconTwo);
  }
});
if (
  localStorage.getItem("color-theme") === "dark" ||
  (
    !("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)")
  ).matches
) {
  darkButton.classList.remove("hidden");
} else {
  lightButton.classList.remove("hidden");
}

toggleButton.addEventListener("click", () => {
  darkButton.classList.toggle("hidden");
  lightButton.classList.toggle("hidden");
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }
});
let typed = new Typed("#element", {
  strings: ["Nivaldo Dantas"],
  typeSpeed: 80,
  showCursor: false,
});
let ptButton = document.querySelector("#button-pt");
let enButton = document.querySelector("#button-en");

const translations = {
  pt: {
    devTitle: "Desenvolvedor Full-stack",
    paragraph:
      "Olá, me chamo Nivaldo Dantas — desenvolvedor full-stack atualmente formado em engenhenharia de software — com sólida base acadêmica e experiência prática no desenvolvimento de aplicações mobile e web.",
    titleOne: "Educação",
    edSubTitleOne: "Bacharelado em Engenharia de Software",
    edSubParagraphOne: "Instituto Federal do Amazonas - IFAM",
    edSubTitleTwo: "Formação Continuada",
    edSubParagraphTwo: "Projeto Aranouá - Instituto Federal do Amazonas",
    titleTwo: "Experiência",
    exSubTitle: "Estagiário",
    exSubParagraph: "Tribunal de Contas do Amazonas - TCE/AM",
    titleThree: "Idiomas",
    lanSubTitleOne: "Português",
    lanSubParagraphOne: "Nativo",
    lanSubTitleTwo: "Inglês",
    lanSubParagraphTwo: "Avançado (C1)",
    exParagraphOne:
      "Atividade extracurricular em parceria do IFAM com a Samsung com finalidade de capacitar, aperfeiçoar e atualizar o estudante, garantindo a constante modernização das competências e atualizar saberes com foco no desempenho, aprimoramento focado em cursos de React, React Native, Programação para Dispositivos Móveis, Banco de Dados, entre outros, com a implementação projetos reais.",
    exParagraphTwo:
      "<li>Desenvolvimento e manutenção de aplicações web para setores internos.</li><li>Participação na concepção de novos projetos colaborando com equipes multidisciplinares para levantamento de requisitos e definição de funcionalidades.</li><li>Implementação de automações para otimizar fluxos de trabalho e reduzir tarefas manuais, utilizando scripts e integrações entre sistemas internos.</li><li>Utilização de ferramentas de Kanban para organização, acompanhamento e priorização das tarefas, promovendo eficiência nos fluxos de trabalho.</li><li>Participação em reuniões de planejamento e retrospectiva, contribuindo para o alinhamento das demandas e melhoria contínua dos processos.</li>",
    footerText: "© 2025 Nivaldo Dantas. Todos os direitos reservados.",
  },
  en: {
    devTitle: "Fullstack Developer",
    paragraph:
      "Hi, my name is Nivaldo Dantas — a full-stack developer currently studying software engineering — with a solid academic background and practical experience in mobile and web application development.",
    titleOne: "Education",
    edSubTitleOne: "Bachelor of Software Engineering",
    edSubParagraphOne: "Federal Institute of Amazonas - IFAM",
    edSubTitleTwo: "Continuous Formation",
    edSubParagraphTwo: "Aranoua Project - Federal Institute of Amazonas",
    titleTwo: "Experience",
    exSubTitle: "Intern",
    exSubParagraph: "State Court of Accounts of Amazonas",
    titleThree: "Languages",
    lanSubTitleOne: "Brazilian Portuguese",
    lanSubParagraphOne: "Native",
    lanSubTitleTwo: "English",
    lanSubParagraphTwo: "Advanced (C1)",
    exParagraphOne:
      "Extracurricular activity in partnership between IFAM and Samsung with the aim of training, improving and updating the student, ensuring the constant modernization of skills and updating knowledge with a focus on performance, improvement focused on courses in React, React Native, Programming for Mobile Devices, Database, among others, with the implementation of real projects",
    exParagraphTwo:
      "<li>Development and maintenance of web applications for internal sectors.</li><li>Participation in the conception of new projects, collaborating with multidisciplinary teams to gather requirements and define functionalities.</li> <li>Implementing automation to optimize workflows and reduce manual tasks, using scripts and integrations between internal systems.</li><li>Use of Kanban tools to organize, monitor and prioritize tasks, promoting efficiency in workflows.</li> <li>Participation in planning and retrospective meetings, helping to align demands and continuously improve processes.</li>",
    footerText: "© 2025 Nivaldo Dantas. Todos os direitos reservados.",
  },
};

const devTitle = document.querySelector("#dev-title");
const paragraph = document.querySelector("#paragraph");
const titleOne = document.querySelector("#title-one");
const edSubTitleOne = document.querySelector("#ed-subtitle-one");
const edSubParagraphOne = document.querySelector("#ed-subparagraph-one");
const edSubTitleTwo = document.querySelector("#ed-subtitle-two");
const edSubParagraphTwo = document.querySelector("#ed-subparagraph-two");
const titleTwo = document.querySelector("#title-two");
const exSubTitle = document.querySelector("#ex-subtitle");
const exSubParagraph = document.querySelector("#ex-subparagraph");
const titleThree = document.querySelector("#title-three");
const lanSubTitleOne = document.querySelector("#lan-subtitle-one");
const lanSubParagraphOne = document.querySelector("#lan-subparagraph-one");
const lanSubTitleTwo = document.querySelector("#lan-subtitle-two");
const lanSubParagraphTwo = document.querySelector("#lan-subparagraph-two");
const exParagraphOne = document.querySelector("#ex-paragraph-one");
const exParagraphTwo = document.querySelector("#ex-paragraph-two");
const footerText = document.querySelector("#footer-text");
function enSite() {
  enButton.classList.remove("opacity-50");
  ptButton.classList.add("opacity-50");
  devTitle.innerText = translations.en.devTitle;
  paragraph.innerText = translations.en.paragraph;
  titleOne.innerText = translations.en.titleOne;
  edSubTitleOne.innerText = translations.en.edSubTitleOne;
  edSubParagraphOne.innerText = translations.en.edSubParagraphOne;
  edSubTitleTwo.innerText = translations.en.edSubTitleTwo;
  edSubParagraphTwo.innerText = translations.en.edSubParagraphTwo;
  titleTwo.innerText = translations.en.titleTwo;
  exSubTitle.innerText = translations.en.exSubTitle;
  exSubParagraph.innerText = translations.en.exSubParagraph;
  titleThree.innerText = translations.en.titleThree;
  lanSubTitleOne.innerText = translations.en.lanSubTitleOne;
  lanSubParagraphOne.innerText = translations.en.lanSubParagraphOne;
  lanSubTitleTwo.innerText = translations.en.lanSubTitleTwo;
  lanSubParagraphTwo.innerText = translations.en.lanSubParagraphTwo;
  exParagraphOne.innerText = translations.en.exParagraphOne;
  exParagraphTwo.innerHTML = translations.en.exParagraphTwo;
  footerText.innerText = translations.en.footerText;
}

enButton.addEventListener("click", enSite);
if (userLanguage.startsWith("en")) {
  enSite();
}

ptButton.addEventListener("click", () => {
  enButton.classList.add("opacity-50");
  ptButton.classList.remove("opacity-50");
  devTitle.innerText = translations.pt.devTitle;
  paragraph.innerText = translations.pt.paragraph;
  titleOne.innerText = translations.pt.titleOne;
  edSubTitleOne.innerText = translations.pt.edSubTitleOne;
  edSubParagraphOne.innerText = translations.pt.edSubParagraphOne;
  edSubTitleTwo.innerText = translations.pt.edSubTitleTwo;
  edSubParagraphTwo.innerText = translations.pt.edSubParagraphTwo;
  titleTwo.innerText = translations.pt.titleTwo;
  exSubTitle.innerText = translations.pt.exSubTitle;
  exSubParagraph.innerText = translations.pt.exSubParagraph;
  titleThree.innerText = translations.pt.titleThree;
  lanSubTitleOne.innerText = translations.pt.lanSubTitleOne;
  lanSubParagraphOne.innerText = translations.pt.lanSubParagraphOne;
  lanSubTitleTwo.innerText = translations.pt.lanSubTitleTwo;
  lanSubParagraphTwo.innerText = translations.pt.lanSubParagraphTwo;
  exParagraphOne.innerText = translations.pt.exParagraphOne;
  exParagraphTwo.innerHTML = translations.pt.exParagraphTwo;
  footerText.innerText = translations.pt.footerText;
});
