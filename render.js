const pug = require("pug");
const cats = require("./src/cats");
const path = require("path");
const fs = require("fs");

const overviewTemplate = pug.renderFile(path.resolve(__dirname, "src", "views", "cat-overview.pug"), { cats });
fs.writeFileSync(path.resolve(__dirname, "src", "views", `overview.html`), overviewTemplate);

cats.forEach(cat => {
  const catTemplate = pug.renderFile(path.resolve(__dirname, "src", "views", "cat.pug"), { cat });
  fs.writeFileSync(path.resolve(__dirname, "src", "views", `${cat.name}.html`), catTemplate);
});
