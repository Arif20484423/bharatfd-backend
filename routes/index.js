const express = require("express");
const router = express.Router();
const {getfaqs}= require("../controllers/faqcontroller")
const faq= require("../models/faq")
router.get("/", async (req, res) => {
  res.render("user");
});

router.get("/api/faqs",async (req,res)=>{
    const params= req.query;
    let data;
    if(params.lang){
        data=await getfaqs(params.lang);
    }
    else{
        data=await getfaqs("en");
    }
    res.send(data)
})

module.exports = router;
