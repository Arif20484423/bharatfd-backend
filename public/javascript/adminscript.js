async function addfaqs() {
  const faqdoc = document.getElementById("faqlist");
  const resen = await fetch("http://localhost:3000/api/faqs");
  const dataen = await resen.json();

  let html = "";
  dataen.forEach((d) => {
    html += `<div class='faq' id=${d._id}>${d.question}<div>${d.answer}</div><button onclick="gettranslation('hi','${d._id}')">hindi</button><button onclick="gettranslation('bn','${d._id}')">bengal</button><button onclick="deletefaq('${d._id}')">delete</button> </div>`;
  });

  faqdoc.innerHTML = html;
}

function gettranslation(lang, id) {
  fetch("http://localhost:3000/api/gettranslation", {
    method: "POST",
    body: JSON.stringify({ id: id, lang: lang }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const d = data.data;

      html = `${d.question}<div>${d.answer}</div><button onclick="gettranslation('hi','${d._id}')">hindi</button><button onclick="gettranslation('bn','${d._id}')">bengal</button><button onclick="deletefaq('${d._id}')">delete</button> `;
      document.getElementById(id).innerHTML = html;
    });
}
function deletefaq(id) {
  fetch("http://localhost:3000/api/deletefaq", {
    method: "DELETE",
    body: JSON.stringify({ id: id }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    addfaqs();
  });
}

addfaqs();
