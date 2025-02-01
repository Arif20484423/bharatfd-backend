const faq = require("../models/faq");
async function getfaqs(lang) {
  if (lang === "en") {
    const data = await faq.find({}, "question answer");
    return data;
  } else {
    const data = await faq.find();
    const faqs = [];
    data.forEach((d) => {
      if (d.translations && d.translations.get(lang)) {
        faqs.push(d.translations.get(lang));
      }
    });
    return faqs;
  }
}

module.exports = { getfaqs };
