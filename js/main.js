function changeImage(newSrc) {
    document.getElementById('main-img').src = newSrc;
  }

  let getUp = () => window.scrollTo({top:0, behavior:'smooth'});


  
  let popup = document.getElementById("popup-box");
 
  function openPopup(){
    popup.classList.add("open-popup");
  }
  function closePopup(){
    popup.classList.remove("open-popup");
  }



  
  const textElement = document.getElementById("changeTitle");

textElement.addEventListener("mouseover", function() {
    textElement.innerText = "BECOME A MEMBER - GET BENEFITS!";
});

textElement.addEventListener("mouseout", function() {
    textElement.innerText = "Jewlery of Sweden";
});

