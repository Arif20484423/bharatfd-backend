const express = require("express");
const router = express.Router();
const {
  getFaqs,
  createFaq,
  getTranslatedFaq,
  deleteFaq
} = require("../controllers/faqcontroller");
const faq = require("../models/faq");
router.get("/", async (req, res) => {
  res.render("user");
});
router.get("/admin", async (req, res) => {
  res.render("admin");
});

router.get("/api/faqs", async (req, res) => {
  const params = req.query;
  let data;
  if (params.lang) {
    data = await getFaqs(params.lang);
  } else {
    data = await getFaqs("en");
  }
  
  res.send(data)
});
router.post("/api/createfaq", async (req, res) => {
  const { question, answer } = req.body;
  await createFaq(question, answer);
  res.status(200).send({ status: 200, message: "created" });
});

router.post("/api/gettranslation", async (req, res) => {
  const { id, lang } = req.body;
  const data = await getTranslatedFaq(id, lang);
  res.status(200).send({ status: 200, data: data });
});

router.delete("/api/deletefaq", async (req, res) => {
    const { id } = req.body;
    await deleteFaq(id)
    res.status(200).send({ status: 200,message:"faq deleted" });
  });
  
module.exports = router;
