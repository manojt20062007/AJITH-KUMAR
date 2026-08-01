import fs from 'fs';

const movies = [
  "Alita: Battle Angel",
  "Rampage",
  "Fantastic Beasts: The Crimes of Grindelwald",
  "The Dark Crystal: Age of Resistance",
  "Avengers: Endgame",
  "The Kid Who Would Be King",
  "Men in Black: International",
  "Tenet",
  "Dune",
  "Triple Frontier",
  "Togo",
  "Jupiter's Legacy",
  "Infinite",
  "Jungle Cruise",
  "Last Night in Soho",
  "Fast & Furious 9",
  "Ghostbusters: Afterlife",
  "Brahmāstra: Part One – Shiva",
  "Moonfall",
  "Devotion",
  "Slumberland",
  "Uncharted",
  "Fast X"
];

const roles = ["ROTO", "Compositing", "Matchmove", "Digital Cleanup"];

async function main() {
  const result = [];
  
  for (let i = 0; i < movies.length; i++) {
    const title = movies[i];
    console.log(`Fetching ${title}...`);
    try {
      const res = await fetch(`https://v3-cinemeta.strem.io/catalog/movie/top/search=${encodeURIComponent(title)}.json`);
      const data = await res.json();
      
      let poster = "https://via.placeholder.com/600x900?text=Poster+Not+Found";
      if (data.metas && data.metas.length > 0) {
        poster = data.metas[0].poster;
      }
      
      const role1 = roles[Math.floor(Math.random() * roles.length)];
      const role2 = roles[Math.floor(Math.random() * roles.length)];
      
      result.push({
        alt: title,
        id: `card-img-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${i}`,
        imgSrc: poster,
        title: title,
        description: `Visual effects and post-production work for ${title}.`,
        text: role1,
        text2: role2 === role1 ? roles[(roles.indexOf(role1) + 1) % roles.length] : role2,
        text3: "Visual Effects"
      });
      
    } catch (e) {
      console.error(`Failed ${title}`, e);
    }
  }
  
  const output = `const MediaCard_data = [\n` + result.map(m => `  { alt: ${JSON.stringify(m.alt)}, id: ${JSON.stringify(m.id)}, imgSrc: ${JSON.stringify(m.imgSrc)}, title: ${JSON.stringify(m.title)}, description: ${JSON.stringify(m.description)}, text: ${JSON.stringify(m.text)}, text2: ${JSON.stringify(m.text2)}, text3: ${JSON.stringify(m.text3)} }`).join(",\n") + `\n];\n`;
  
  fs.writeFileSync('generated-movies.ts', output);
  console.log("Done!");
}

main();
