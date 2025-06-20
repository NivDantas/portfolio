const html = document.querySelector("#html");

const darkButton = document.querySelector("#dark-mode");
const lightButton = document.querySelector("#light-mode");
darkButton.addEventListener("click", () => {
  html.classList.remove("dark");
  darkButton.classList.add("hidden");
  lightButton.classList.remove("hidden");
});

lightButton.addEventListener("click", () => {
  html.classList.add("dark");
  lightButton.classList.add("hidden");
  darkButton.classList.remove("hidden");
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque repudiandae libero exercitationem nemo, sint consequatur quaerat delectus illo ipsam blanditiis non, sapiente cum qui corporis incidunt illum voluptatibus ratione.",
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
  },
  en: {
    devTitle: "Fullstack Developer",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloremque repudiandae libero exercitationem nemo, sint consequatur quaerat delectus illo ipsam blanditiis non, sapiente cum qui corporis incidunt illum voluptatibus ratione.",
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

enButton.addEventListener("click", () => {
  enButton.classList.add("text-white");
  enButton.classList.remove("text-neutral-500");
  ptButton.classList.add("text-neutral-500");
  ptButton.classList.remove("text-white");
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
});

ptButton.addEventListener("click", () => {
  enButton.classList.add("text-neutral-500");
  enButton.classList.remove("text-white");
  ptButton.classList.add("text-white");
  ptButton.classList.remove("text-neutral-500");
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
});
