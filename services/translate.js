const path = require("path");

const { Translate } = require("@google-cloud/translate").v2;

const translate = new Translate({
  keyFilename: path.join(__dirname + "/config/translatekey.json"),
});

async function translateText(text, lang) {
  const [translations] = await translate.translate(text, lang);
  return translations;
}
async function translateQnA(question,answer, lang) {
    question = await translateText(question, lang);
    answer = await translateText(answer, lang);
    return {question:question,answer:answer};
  }
module.exports = { translateQnA };
