const fs = require("fs");

const l = (o) => console.log(JSON.stringify(o, null, 2));

const fileNames = fs.readdirSync(".");
const dataFileNames = fileNames.filter((fileName) =>
  fileName.endsWith(".json")
);

const markdown = dataFileNames
  .map((fileName) => {
    const fileContents = fs.readFileSync(fileName);
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

console.log(markdown);
