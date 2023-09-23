const range = document.querySelector("#customRange3");
const free = document.querySelector("#free");
const pro = document.querySelector("#pro");
const enterprise = document.querySelector("#enterprise");
const submitButton = document.querySelector("#submit");
const form = document.querySelector(".modal-body")

    
range.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value >= 0 && e.target.value <= 10) {
        enterprise.toggleAttribute("checked", false);
        pro.toggleAttribute("checked", false);
        free.toggleAttribute("checked", true);
    }
    else if (e.target.value >= 11 && e.target.value <= 20) {
        free.toggleAttribute("checked", false);
        enterprise.toggleAttribute("checked", false);
        pro.toggleAttribute("checked", true);
    }
    else if (e.target.value >= 21 && e.target.value <= 30) {
        pro.toggleAttribute("checked", false);
        free.toggleAttribute("checked", false);
        enterprise.toggleAttribute("checked", true);
    }
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log(data);
    const values = [...formData.entries()];
    console.log(values);
    fetch("https://forms.maakeetoo.com/formapi/791", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        AccessCode: "VSCE8U566X7ETPTFNCTN1HAKP",
      },
    });
});

