const customerRange = document.querySelector("#numberOfCustomers");
const free = document.querySelector("#free");
const pro = document.querySelector("#pro");
const enterprise = document.querySelector("#enterprise");
const submitButton = document.querySelector("#submit");
const form = document.querySelector("form");

customerRange.addEventListener("change", (e) => {
  document.querySelector(".range-slider__value").innerHTML = e.target.value;
  if (e.target.value >= 0 && e.target.value <= 10) {
    enterprise.toggleAttribute("checked", false);
    pro.toggleAttribute("checked", false);
    free.toggleAttribute("checked", true);
  } else if (e.target.value >= 11 && e.target.value <= 20) {
    free.toggleAttribute("checked", false);
    enterprise.toggleAttribute("checked", false);
    pro.toggleAttribute("checked", true);
  } else if (e.target.value >= 21 && e.target.value <= 30) {
    pro.toggleAttribute("checked", false);
    free.toggleAttribute("checked", false);
    enterprise.toggleAttribute("checked", true);
  }
});

async function sendData(data) {
  const response = await fetch("http://localhost:3000/proxy", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const json = await response.json();
  console.log(json);
  document.querySelector("#formModal").classList.toggle("show");
  document.querySelector(".modal-backdrop").classList.toggle("show");
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log(data);
  sendData(data);
});


