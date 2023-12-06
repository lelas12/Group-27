function changeImage(newSrc) {
    document.getElementById('main-img').src = newSrc;
  }

  let getUp = () => window.scrollTo({top:0, behavior:'smooth'});