const path= require("path")

const {Translate}= require("@google-cloud/translate").v2

const translate= new Translate({keyFilename:path.join(__dirname+"/config/translatekey.json")})


async function translateText(text,lang){
    const [translations]=await translate.translate(text,"hi")
    console.log(translations)
    return translations
}
module.exports= {translateText}