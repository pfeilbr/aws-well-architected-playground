const fs = require("fs");
const Mustache = require("mustache");

const l = (o) => console.log(JSON.stringify(o, null, 2));

const dataDirectory = "./data";
const fileNames = fs.readdirSync("./data");
const dataFileNames = fileNames.filter((fileName) =>
  fileName.endsWith(".json")
);

const mustacheTemplate = `
{{#lenses}}

# {{name}}

    {{#pillars}}

---

## {{pillarName}}

    {{#AnswerSummaries}}
### {{QuestionTitle}}

        {{#Choices}}
{{Title}}
> {{choiceDescription}}

        {{/Choices}}

    {{/AnswerSummaries}}

---

    {{/pillars}}

{{/lenses}}
`;

const lenses = dataFileNames.map((fileName) => {
  const fileContents = fs.readFileSync(`${dataDirectory}/${fileName}`);
  return { name: fileName, pillars: JSON.parse(fileContents) };
});

const view = {
  lenses,
  pillarName: function () {
    return this.AnswerSummaries[0].PillarId;
  },
  choiceDescription: function () {
    return this.Description.trim().length > 0
      ? `*${this.Description.trim()}*`
      : "";
  },
};

const markdown = dataFileNames
  .map((fileName) => {
    const fileContents = fs.readFileSync(`${dataDirectory}/${fileName}`);
    const pillars = JSON.parse(fileContents);

    return (
      `# ${fileName}\n\n` +
      pillars
        .map((pillar) => {
          return (
            `## ${pillar.LensAlias}\n\n` +
            pillar.AnswerSummaries.map((answerSummary) => {
              return (
                `**${
                  answerSummary.PillarId
                }: ${answerSummary.QuestionTitle.trim()}**\n\n` +
                answerSummary.Choices.map((choice) => {
                  return (
                    (choice.Title.trim().length > 0
                      ? `${choice.Title.trim()}\n\n`
                      : "") +
                    (choice.Description.trim().length > 0
                      ? `*${choice.Description.trim()}*\n`
                      : `\n`)
                  );
                }).join("\n")
              );
            }).join("\n --- \n")
          );
        })
        .join("\n")
    );
  })
  .join("\n\n");

//console.log(markdown);

const output = Mustache.render(mustacheTemplate, view);
console.log(output);
