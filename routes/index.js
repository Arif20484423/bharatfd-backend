const express = require("express");
const router = express.Router();
const { getFaqs, createFaq } = require("../controllers/faqcontroller");
const faq = require("../models/faq");
router.get("/", async (req, res) => {
  res.render("user");
});

router.get("/api/faqs", async (req, res) => {
  const params = req.query;
  let data;
  if (params.lang) {
    data = await getFaqs(params.lang);
  } else {
    data = await getFaqs("en");
  }
  res.send(data);
});
router.post("/api/createfaq",async (req, res) => {
    const {question,answer}=req.body;
    await createFaq(question,answer)
  res.status(200).send({status:200,message:"created"});
});

module.exports = router;
