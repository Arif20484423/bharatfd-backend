const faq = require("../models/faq");
const {translateQnA}= require("../services/translate")
async function getFaqs(lang) {
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
async function createFaq(question,answer){
    const faqCreated=await faq({
        question:question,
        answer:answer,
        translations:{}
    })
    const lang=["hi","bn"]
    for(let i =0; i<lang.length;i++){
        const trans= await translateQnA(question,answer,lang[i]);
        faqCreated.translations.set(lang[i],trans)
    }   
    await faqCreated.save();
    

}
async function getTranslatedFaq(id,lang){
    const f= await faq.findById(id);
    const newfaq=f.translatedtext(lang)
    newfaq._id=f._id
    return newfaq;
}
async function deleteFaq(id){
    await faq.findByIdAndDelete(id);
}

module.exports = { getFaqs, createFaq , getTranslatedFaq, deleteFaq};
