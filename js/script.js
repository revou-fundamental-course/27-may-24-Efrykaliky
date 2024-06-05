// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};
navSlide();


//form 
function inputForm() {
  const nameInput    = document.forms["myform"]["name"].value;
  const dateInput    = document.forms["myform"]["date"].value;
  const genderInput  = document.forms["myform"]["gender"].value;
  const messageInput = document.forms["myform"]["message"].value;

  if (nameInput == "" || dateInput == "" || genderInput == "" || messageInput == ""){
    alert("Data tidak boleh ada yang kosong");
    return false;
  }

  setSenderUI(nameInput, dateInput, genderInput, messageInput);
  return false;
}

  function setSenderUI(nameInput, dateInput, genderInput, messageInput) {
  document.getElementById('sender-name').innerHTML = nameInput;
  document.getElementById('sender-date').innerHTML = dateInput;
  document.getElementById('sender-gender').innerHTML = genderInput;
  document.getElementById('sender-message').innerHTML = messageInput;
}
