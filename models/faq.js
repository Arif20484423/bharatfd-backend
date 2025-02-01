const mongoose= require("mongoose")

const faqSchema= mongoose.Schema({
    question:String,
    answer:String,
    translations:{
        type:Map,
        of:{
            question:String,
            answer:String
        }
    }    
},
{
    methods:{
    translatedtext(lang){
        if(lang==="en"){
            return {
                question:this.question,
                answer:this.answer
            }
        }
        else{
            return this.translations.get(lang);
        }
    }
}
}
)


module.exports=mongoose.model("faq",faqSchema)
