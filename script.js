
const toggleBtn = document.getElementById("toggleBtn");
const navbar = document.getElementById("navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
// Live Date & Time
function updateDateTime() {
  document.querySelector("#datetime").innerText =
    new Date().toLocaleString();
}
setInterval(updateDateTime, 1000);

// Auto slider
let slider = document.querySelector("#slider");
let scrollAmount = 0;
setInterval(() => {
  if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  } else {
    scrollAmount += 120;
  }
  slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
}, 2000);

// Modal functions
function openModal(id) {
  document.getElementById(id).style.display = "flex";
}
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// FAQ Accordion
document.querySelectorAll(".accordion-header").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.style.display =
      btn.nextElementSibling.style.display === "block" ? "none" : "block";
  });
});
// form validation
const username = document.querySelector("#name");
const email= document.querySelector("#email");
const massage=document.querySelector("#message");
const send= document.querySelector("#send");
send.addEventListener("click",e=>
    {
        e.preventDefault();
        
        console.log("form submitted!");
        const url="https://docs.google.com/forms/d/e/1FAIpQLSd_uDrVLFIOtd3sJwOsk492uBBKCuqCOlgfnRGQDYrYe_e81A/formResponse?"
          var form_data= new FormData();
          form_data.append(`entry.2120387921`,username.value)
          form_data.append(`entry.2099853540`,email.value)
          form_data.append(`ntry.159829181`,massage.value)
        
    })
   

