import sketcher from "./sketch";

// --------------------------------------------------------- UTILS
function getOneByChance(chance) {
  return Math.max(Math.sign(Math.random() - (1 - chance)), 0);
}

// --------------------------------------------------------- LOADED EVENT

const onLoadedFns = [];
window.addEventListener("DOMContentLoaded", event => {
  console.log(event);
  console.log("DOM entièrement chargé et analysé");
  onLoadedFns.map(fn => fn());
});

// --------------------------------------------------------- CLICK EVENT

window.addEventListener("click", () => {
  sketchInstance.redraw();
  updateTreeData();
});

// --------------------------------------------------------- LOCATIONS

const locationDomElement = document.getElementById("location");

const locations = [
  "Sundarbans, Bengale-Occidental, Inde",
  "Pichavaram, Tamil Nadu, Inde",
  "Ouano, Nouvelle Calédonie",
  "Nouméa, Nouvelle-Calédonie",
  "Dix-mille îles, Floride, Etats-Unis",
  "Bahia, Nordeste, Brésil",
  "Godavari-Krishna, Andhra Pradesh, Inde",
  "Golfe de Montijo, Costa Rica",
  "Golfe du Panama, Colombie",
  "Delta du fleuve Indus, Pakistan",
  "Godavari-Krishna, Inde",
  "Pichavaram, Inde",
  "Côtes Indochine, Cambodge, Malaisie",
  "Delta de la rivière Indus-mer d'Oman, Pakistan",
  "Côte du Myanmar, Inde",
  "Sunda, Brunei, Indonésie",
  "Sundarbans, Bangladesh, Inde",
  "Alvarado, Mexique",
  "Amapá, Brésil",
  "Bahamien, Bahamas, Îles Turks et Caïques",
  "Bahia, Brésil",
  "Côte bélizienne, Belize",
  "Récif de Belize, Belize",
  "Bocas del Toro-île de San Bastimentos-San Blas, Costa Rica",
  "Vénézuélien côtier, Venezuela",
  "Esmeraldes-Pacific Colombia, Colombie",
  "Floride, États Unis",
  "Grandes Antilles, Cuba, République dominicaine, Haïti",
  "Guyane française",
  "Golfe de Fonseca, El Salvador, Honduras",
  "Golfe de Guayaquil-Tumbes, Équateur",
  "Golfe du Panama, Panama",
  "Ilha Grande, Brésil",
  "Petites Antilles, Petites Antilles",
  "Magdalena-Santa Marta, Colombie",
  "Manabí, Équateur",
  "Maranhão, Brésil",
  "Marismas Nacionales-San Blas, Mexique",
  "Couloir Maya, Mexique",
  "Côte mexicaine du Pacifique Sud, Mexique",
  "Côte Pacifique humide, Costa Rica",
  "Mosquitia-Côte caraïbe nicaraguayenne, Costa Rica, Honduras",
  "Majagual, Colombie",
  "Nord du Honduras, Guatemala, Honduras",
  "Para, Brésil",
  "Petenes, Mexique",
  "Piura, Pérou",
  "Ría Lagartos, Mexique",
  "Rio Negro-Rio San Sun, Costa Rica,",
  "Rio Piranhas, Brésil",
  "Rio São Francisco, Brésil",
  "Côte sud aride du Pacifique, Costa Rica",
  "Tehuantepec-El Manchon, Mexique",
  "Trinidad, Trinité-et-Tobago",
  "Usumacinta, Mexique"
];

function updateLocationText() {
  locationDomElement.textContent = `${
    locations[Math.floor(Math.random() * locations.length)]
  }`;
}

// --------------------------------------------------------- TREE AGE

const FUTUR_YEARS_OFFSET = 400;
const currentYear = new Date().getFullYear();

const ageDomElement = document.getElementById("age");

function getBirthDate() {
  const futurYearLow = currentYear + FUTUR_YEARS_OFFSET;
  return Math.round(futurYearLow - FUTUR_YEARS_OFFSET * (Math.random() - 0.5));
}

function getAge() {
  let age = 40 + (120 - 40) * Math.random();
  age += getOneByChance(0.1) * 180 * Math.random();
  age -= age * getOneByChance(0.1) * 0.7 * Math.random();
  return Math.ceil(age); // avoid 0
}

function updateAgeText(birth, death) {
  ageDomElement.textContent = `${birth} - ${death}`;
}

// --------------------------------------------------------- SKETCH

const sketchInstance = sketcher("s");
function updateTreeData() {
  const birth = getBirthDate();
  const age = getAge();
  const death = birth + age;
  updateAgeText(birth, death);
  updateLocationText();
}
updateTreeData();
onLoadedFns.push(function() {
  updateTreeData();
  console.log("init updateTreeData");
});
