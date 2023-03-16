
// animation des divs verte et jaune

let divApprov = document.getElementById("approvisionnement"),
  approIni = document.getElementById('appro-ini'),
  approSec = document.getElementById('appro-sec'),
  titreLegende = document.querySelectorAll(".titre-legende"),
  divDevTech = document.getElementById("developpement-technologique"),
  devTechIni = document.getElementById('dev-tech-ini'),
  devTechSec = document.getElementById('dev-tech-sec');

divApprov.addEventListener("click", function () {
  devTechIni.style.display = "flex";
  devTechIni.style.pointerEvents = "auto";
  devTechSec.style.display = "none";

  //add style height 80% to divApprov
  divApprov.style.height = "80%";
  divApprov.style.transition = "all 1s ease-in-out";
  titreLegende[0].style.cursor = "none";


  //remove style height 80% to divDevTech
  divDevTech.style.height = "20%";
  divDevTech.style.transition = "all 1s ease-in-out";
  divDevTech.style.backgroundColor = "#e4a545";


  approIni.style.display = "none";
  approIni.style.pointerEvents = "none";
  approSec.style.display = "block";
  divApprov.style.backgroundColor = "#e1e2e4";


  // markersApprovisionnement.forEach(marker => {
  //   console.log("ici");
  //   marker.remove();
  //   marker.closePopup();
  // });


  // markersApprovisionnement.forEach(marker => {
  //   console.log("ici2");
  //     marker.addTo(map);
  // });
  

});


divDevTech.addEventListener("click", function () {
  approIni.style.display = "flex";
  approIni.style.pointerEvents = "auto";
  approSec.style.display = "none";

  //add style height 80% to divDevTech
  divDevTech.style.height = "80%";
  divDevTech.style.transition = "all 1s ease-in-out";
  titreLegende[1].style.cursor = "none";


  //remove style height 80% to divApprov
  divApprov.style.height = "20%";
  divApprov.style.transition = "all 1s ease-in-out";
  divApprov.style.backgroundColor = "#19966a";
  
  devTechIni.style.display = "none";
  devTechIni.style.pointerEvents = "none";
  devTechSec.style.display = "block";
  divDevTech.style.backgroundColor = "#e1e2e4";

});


// animation de l'ouverture des mini divs

const imgDownUp = document.querySelectorAll('[data-js-img-down-up]'),
      miniDiv = document.querySelectorAll('[data-js-mini-div]'),
      divTexte = document.querySelectorAll('[data-js-div-texte]'),
      flexLogo = document.querySelectorAll('[data-js-flex-logo]'),
      sousCat = document.querySelectorAll('[data-js-sous-cat]');

function animateMiniDivHeight(element, height, duration) {
  let startHeight = element.offsetHeight;
  let distance = height - startHeight;
  let startTime = null;

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }

    let progress = timestamp - startTime;
    let currentHeight = startHeight + (distance * progress) / duration;
    element.style.height = currentHeight + "px";
    element.style.backgroundColor = "white";


    if (progress < duration) {
      requestAnimationFrame(animationStep);
    }
  }

  requestAnimationFrame(animationStep);
}


let iconeMap = document.querySelectorAll('.icone-map')

// animate the icone with zoom 1.1 then 0.9 at the load of the page

function animateIconeMap() {
  for (let i = 0; i < iconeMap.length; i++) {
    iconeMap[i].style.transform = "scale(1.1)";
    iconeMap[i].style.transition = "all 1s ease-in-out";
    setInterval(function () {
      iconeMap[i].style.transform = "scale(0.9)";
      iconeMap[i].style.transition = "all 1s ease-in-out";
      setTimeout(function () {
        iconeMap[i].style.transform = "scale(1.1)";
        iconeMap[i].style.transition = "all 1s ease-in-out";
      }, 1000);
    }, 2000);
  }
}

animateIconeMap();

function toggleMiniDiv(i) {
  // Close any open miniDiv elements
  for (let j = 0; j < miniDiv.length; j++) {
    if (miniDiv[j].style.height != '0px' && j != i) {
      animateMiniDivHeight(miniDiv[j], 84, 500);
      imgDownUp[j].src = "img/icone/down.png";
      for (let k = 0; k < flexLogo.length; k++) {
        flexLogo[k].style.display = "none";
      }
      for (let k = 0; k < sousCat.length; k++) {
        sousCat[k].style.display = "none";
      }
    }
  }

  // Open the clicked miniDiv element
  if (i !== 9) {
    if (imgDownUp[i].src.match("down.png")) {

      flexLogo[i].display = "none";
      imgDownUp[i].src = "img/icone/up.png";
      animateMiniDivHeight(miniDiv[i], 200, 500);
      // wait for the animation to finish before displaying the logo
      setTimeout(function () {
        flexLogo[i].style.display = "flex";
      }, 500);
      // Close the clicked miniDiv element
    } else {
      imgDownUp[i].src = "img/icone/down.png";
      animateMiniDivHeight(miniDiv[i], 84, 500);
      flexLogo[i].style.display = "none";
    }
  }
  else if (i === 9) {
    if (imgDownUp[i].src.match("down.png")) {
      imgDownUp[i].src = "img/icone/up.png";
      animateMiniDivHeight(miniDiv[i], 620, 500);
      // wait for the animation to finish before displaying the logo
      setTimeout(function () {
        for (let k = 9; k < flexLogo.length; k++) {
          flexLogo[k].style.display = "flex";
        }
        for (let k = 0; k < sousCat.length; k++) {
          sousCat[k].style.display = "block";
        }
      }, 500);
      // Close the clicked miniDiv element
    } else {
      imgDownUp[i].src = "img/icone/down.png";
      animateMiniDivHeight(miniDiv[i], 84, 500);
      for (let k = 9; k < flexLogo.length; k++) {
        flexLogo[k].style.display = "none";
      }
      for (let k = 0; k < sousCat.length; k++) {
        sousCat[k].style.display = "none";
      }
    }
  }
}

for (let i = 0; i < miniDiv.length; i++) {

  imgDownUp[i].style.cursor = "pointer";
  divTexte[i].style.cursor = "pointer";

  imgDownUp[i].addEventListener("click", function () {
    toggleMiniDiv(i);
  });
  
  divTexte[i].addEventListener("click", function () {
    toggleMiniDiv(i);
  });
}