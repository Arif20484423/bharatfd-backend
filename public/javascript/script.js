let questionField;
let answerField;

ClassicEditor.create(document.getElementById("question"))
  .then((editor) => {
    questionField = editor;
  })
  .catch((error) => {
    console.log(error);
  });
ClassicEditor.create(document.getElementById("answer"))
  .then((editor) => {
    answerField = editor;
  })
  .catch((error) => {
    console.log(error);
  });
function stripHTML(html) {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
function create() {
    const question= stripHTML(questionField.getData());
    const answer= stripHTML(answerField.getData());
    const data=JSON.stringify({question:question,answer:answer});
    console.log(data)
    fetch("http://localhost:3000/api/createfaq",{
        method:"POST",
        body:data,
        headers:{
            "Content-Type":"application/json",
        }
    }).then((res)=>{
        addfaqs()
    })  
}

async function addfaqs() {
    console.log("adding")
  const faqdoc = document.getElementById("faqlist");
  const resen = await fetch("http://localhost:3000/api/faqs");
  const dataen = await resen.json();
  const reshi = await fetch("http://localhost:3000/api/faqs?lang=hi");
  const datahi = await reshi.json();
  const resbn = await fetch("http://localhost:3000/api/faqs?lang=bn");
  const databn = await resbn.json();
  let html=""
  dataen.forEach((d)=>{
    html+=`<div class='faq'>${d.question}<div>${d.answer}</div></div>`
  })
  datahi.forEach((d)=>{
    html+=`<div class='faq'>${d.question}<div>${d.answer}</div></div>`
  })
  databn.forEach((d)=>{
    html+=`<div class='faq'>${d.question}<div>${d.answer}</div></div>`
  })
  faqdoc.innerHTML=html
  console.log("added");
}

addfaqs();
