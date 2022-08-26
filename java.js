const url = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const options = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};
async function hentData() {
  const respons = await fetch(url, options);
  const json = await respons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  console.log(json);
  json.forEach((person) => {
    const klon = template.cloneNode(true);

    klon.querySelector("img").src = "faces/" + person.billede;
    klon.querySelector("h2").textContent = person.fornavn;
    klon.querySelector("p").textContent = person.fødselsdag.slice(0, 10);
    klon.querySelector("article").style.borderRadius = "lem";
    main.appendChild(klon);
  });
}

hentData();
