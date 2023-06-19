  const hamburgerContainer = document.querySelector('#hamburgerContainer');
  const nav =document.querySelector('nav')
  const navigationLinks = document.querySelector('.navigationLinks');
  const hamburgerBar = document.querySelectorAll(".hamburgerBar")
  const closebutton = document.querySelector("#closebutton")

  hamburgerContainer.addEventListener('click', function() {
    if (navigationLinks.classList.contains("onlyDesktop")){
      navigationLinks.classList.remove("onlyDesktop")
      nav.classList.add("navMobile")
      for (let i=0; i< hamburgerBar.length; i++) {
        console.log(hamburgerBar[i].classList)
        hamburgerBar[i].classList.add("hidden")
      }
      closebutton.classList.remove("hidden")
    }else {
      nav.classList.remove("navMobile")
      navigationLinks.classList.add("onlyDesktop")
      for (let i=0; i< hamburgerBar.length; i++) {
        hamburgerBar[i].classList.remove("hidden")
      }
      closebutton.classList.add("hidden")
    }
  });

  function closewindow() {
    nav.classList.remove("navMobile")
      navigationLinks.classList.add("onlyDesktop")
      for (let i=0; i< hamburgerBar.length; i++) {
        hamburgerBar[i].classList.remove("hidden")
      }
    closebutton.classList.add("hidden");
  }

  navigationLinks.addEventListener('click', closewindow);