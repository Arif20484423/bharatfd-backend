let question;
let answer;

ClassicEditor.create(document.getElementById("question"))
  .then((editor) => {
    question = editor;
  })
  .catch((error) => {
    console.log(error);
  });
ClassicEditor.create(document.getElementById("answer"))
  .then((editor) => {
    answer = editor;
  })
  .catch((error) => {
    console.log(error);
  });
function stripHTML(html) {
  let doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
function create() {
  console.log(stripHTML(question.getData()));
}

async function addfaqs() {
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
