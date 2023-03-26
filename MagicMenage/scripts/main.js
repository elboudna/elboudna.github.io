// windows on load
window.onload = function () {

    let main = document.querySelector("main");
    let mainId = main.getAttribute("id");

    if (mainId == "mainEstimation") {

        let typeMaison = document.getElementById("type_maison"),
            sectionChambres = document.getElementById("chambres"),
            sectionPieces = document.getElementById("pieces"),
            sectionExtras = document.getElementById("extras"),
            chambresImg = document.getElementById("chambres").querySelectorAll("img"),
            piecesImg = document.getElementById("pieces").querySelectorAll("img"),
            extrasImg = document.getElementById("extras").querySelectorAll("img"),
            suivant = document.getElementById("suivant"),
            form1 = document.getElementById("formulaire1"),
            form2 = document.getElementById("formulaire2"),
            retour = document.getElementById("retour"),
            submit = document.getElementById("submit"),
            nombreChambres,
            nombrePieces,
            extras = [];


        typeMaison.addEventListener("change", function () {
            let typeMaisonValue = typeMaison.value;
            if (typeMaisonValue == "maison") {
                sectionChambres.style.display = "block";
                sectionPieces.style.display = "none";
                sectionExtras.style.display = "none";
                suivant.style.display = "none";
            }
            else if (typeMaisonValue == "appartement") {
                sectionPieces.style.display = "block";
                sectionChambres.style.display = "none";
                sectionExtras.style.display = "none";
                suivant.style.display = "none";
            }
            else {
                for (let i = 0; i < chambresImg.length; i++) {
                    chambresImg[i].classList.remove("selected");
                }
                for (let i = 0; i < piecesImg.length; i++) {
                    piecesImg[i].classList.remove("selected");
                }
                sectionExtras.style.display = "none";
                sectionChambres.style.display = "none";
                sectionPieces.style.display = "none";
                suivant.style.display = "none";
            }
        });


        for (let i = 0; i < chambresImg.length; i++) {
            chambresImg[i].addEventListener("click", function () {
                for (let j = 0; j < chambresImg.length; j++) {
                    chambresImg[j].classList.remove("selected");
                }
                chambresImg[i].classList.toggle("selected");
                sectionExtras.style.display = "block";
                suivant.style.display = "block";
                nombreChambres = chambresImg[i].getAttribute("data-nombre");
            });
        }

        for (let i = 0; i < piecesImg.length; i++) {
            piecesImg[i].addEventListener("click", function () {
                for (let j = 0; j < piecesImg.length; j++) {
                    piecesImg[j].classList.remove("selected");
                }
                piecesImg[i].classList.toggle("selected");
                sectionExtras.style.display = "block";
                suivant.style.display = "block";
                nombrePieces = piecesImg[i].alt;
            });
        }

        for (let i = 0; i < extrasImg.length; i++) {
            extrasImg[i].addEventListener("click", function () {
                extrasImg[i].classList.toggle("selected");
                if (extrasImg[i].classList.contains("selected")) {
                    extras.push(extrasImg[i].alt);
                }
                else {
                    extras.splice(extras.indexOf(extrasImg[i].alt), 1);
                }
            });
        }

        suivant.addEventListener("click", function () {
            recapitulatif();

            form1.style.display = "none";
            form2.style.display = "block";
        });


        function recapitulatif() {

            let recapTypeMaison = document.getElementById("recap_type_maison"),
                recapMaison = document.getElementById("recap_maison"),
                recapAppartement = document.getElementById("recap_appartement"),
                recapChambres = document.getElementById("recap_nombre_chambres"),
                recapPieces = document.getElementById("recap_nombre_pieces"),
                texteExtras = document.getElementById("texte_extras"),
                recapExtras = document.getElementById("recap_extras");

            if (typeMaison.value == "maison") {
                recapTypeMaison.innerHTML = "une Maison";
                if (nombreChambres == 1) {
                    recapChambres.innerHTML = nombreChambres + " chambre";
                }
                else {
                    recapChambres.innerHTML = nombreChambres + " chambres";
                }
                recapPieces.style.display = "none";
                recapAppartement.style.display = "none";

            }
            else if (typeMaison.value == "appartement") {
                recapTypeMaison.innerHTML = "un Appartement, ";
                recapPieces.innerHTML = nombrePieces;
                recapChambres.style.display = "none";
                recapMaison.style.display = "none";
            }

            if (extras.length == 0) {
                texteExtras.innerHTML = "Aucun extra n'a été sélectionné";
            }
            else {
                for (let i = 0; i < extras.length; i++) {
                    let li = document.createElement("li");
                    li.innerHTML = extras[i];
                    recapExtras.appendChild(li);
                }
            }
        }

        retour.addEventListener("click", function () {
            form1.style.display = "block";
            form2.style.display = "none";
        });

        submit.addEventListener("click", function (event) {
            event.preventDefault();

            let code_postal = document.getElementById("code_postal").value,
                telephone = document.getElementById("telephone").value,
                courriel = document.getElementById("courriel").value,
                nom = document.getElementById("nom").value,
                messageErreur = document.getElementById("message_erreur");

            if (!code_postal || !telephone || !courriel || !nom) {
                messageErreur.innerHTML = "Veuillez remplir les champs avec une étoile";
            }
            else {
                alert("Formulaire soumis avec succès");
            }
        });
    }

    else if (mainId == "mainAccueil") {


        let counterAns = document.getElementById('counterAns');
        let counterClient = document.getElementById('counterClient');
        let counterMaison = document.getElementById('counterMaison');
        let flexAnimation = document.querySelector('.flexAnimation');

        let countAns = 0;
        let countClient = 0;
        let countMaison = 0;
        let intervalAns;
        let intervalClient;
        let intervalMaison;

        // Calculate maximum count for each counter
        let maxCountAns = 11;
        let maxCountClient = 427;
        let maxCountMaison = 413;

        function updateClients() {
            countClient++;
            counterClient.innerHTML = countClient;

            if (countClient >= maxCountClient) {
                clearInterval(intervalClient);
            }
        }

        function updateAns() {
            countAns++;
            counterAns.innerHTML = countAns;


            if (countAns >= maxCountAns) {
                clearInterval(intervalAns);
            }

        }

        function updateMaison() {
            countMaison++;
            counterMaison.innerHTML = countMaison;

            if (countMaison >= maxCountMaison) {
                clearInterval(intervalMaison);
            }
        }

        // Set interval duration to 2/maximum_count seconds
        const intervalDuration = 4 / Math.max(maxCountAns, maxCountClient, maxCountMaison) * 1000;

        // Start interval when div is shown
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                intervalAns = setInterval(updateAns, intervalDuration * 5);
                intervalClient = setInterval(updateClients, intervalDuration * 2);
                intervalMaison = setInterval(updateMaison, intervalDuration * 2);

                observer.disconnect(); // Disconnect the observer to prevent multiple triggers
            }
        });

        observer.observe(flexAnimation);


        const mediaQuery960 = window.matchMedia('(max-width: 960px)');
        const mediaQuery450 = window.matchMedia('(max-width: 450px)');

        if (mediaQuery960.matches) {


            let dots = document.querySelectorAll('.dot-container span');
            let divs = document.querySelectorAll('.flexCustomer > div');
            let currentDiv = 0, startXClient = 0, endXClient = 0;

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    dots[currentDiv].classList.remove('active');
                    divs[currentDiv].style.display = 'none';

                    currentDiv = index;
                    dots[currentDiv].classList.add('active');
                    divs[currentDiv].style.display = 'flex';
                });
            });

            divs.forEach((div, index) => {
                div.addEventListener('touchstart', (event) => {
                    startXClient = event.touches[0].clientX;
                });

                div.addEventListener('touchend', (event) => {
                    endXClient = event.changedTouches[0].clientX;

                    if (startXClient > endXClient) {
                        dots[currentDiv].classList.remove('active');
                        divs[currentDiv].style.display = 'none';

                        currentDiv = (currentDiv + 1) % divs.length;
                        dots[currentDiv].classList.add('active');
                        divs[currentDiv].style.display = 'flex';
                    }
                    else if (startXClient < endXClient) {
                        dots[currentDiv].classList.remove('active');
                        divs[currentDiv].style.display = 'none';

                        currentDiv = (currentDiv - 1 + divs.length) % divs.length;
                        dots[currentDiv].classList.add('active');
                        divs[currentDiv].style.display = 'flex';
                    }
                });
            });
        }



        if (mediaQuery450.matches) {

            let dotService = document.querySelectorAll('.dot span');
            let services = document.querySelectorAll('.flexServices > div');
            let index = 0, startX = 0, endX = 0;

            for (let i = 0; i < dotService.length; i++) {
                dotService[i].addEventListener('click', () => {
                    dotService[index].classList.remove('active');
                    services[index].style.display = 'none';
                    index = i;
                    dotService[index].classList.add('active');
                    services[index].style.display = 'flex';
                });
            }

            for (let i = 0; i < services.length; i++) {
                services[i].addEventListener('touchstart', (event) => {
                    startX = event.touches[0].clientX;
                });

                services[i].addEventListener('touchend', (event) => {
                    endX = event.changedTouches[0].clientX;

                    if (startX > endX) {
                        dotService[index].classList.remove('active');
                        services[index].style.display = 'none';
                        index = (index + 1) % services.length;
                        dotService[index].classList.add('active');
                        services[index].style.display = 'flex';
                    }
                    else if (startX < endX) {
                        dotService[index].classList.remove('active');
                        services[index].style.display = 'none';
                        index = (index - 1 + services.length) % services.length;
                        dotService[index].classList.add('active');
                        services[index].style.display = 'flex';
                    }
                });
            }
        }
    }
}    