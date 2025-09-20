
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

    // Form Validation
    function validateForm(){
      let valid=true;
      const name=document.getElementById('name').value.trim();
      const email=document.getElementById('email').value.trim();
      const message=document.getElementById('message').value.trim();

      document.getElementById('nameError').textContent="";
      document.getElementById('emailError').textContent="";
      document.getElementById('messageError').textContent="";

      if(name.length<3){
        document.getElementById('nameError').textContent="Name must be at least 3 characters.";
        valid=false;
      }
      const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)){
        document.getElementById('emailError').textContent="Enter a valid email.";
        valid=false;
      }
      if(message.length<10){
        document.getElementById('messageError').textContent="Message must be at least 10 characters.";
        valid=false;
      }

      return valid;

    }
