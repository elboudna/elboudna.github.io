const apiKey = 'pk.eyJ1IjoiZWxib3VkbmEiLCJhIjoiY2xlcmNtc3k3MHJjdjNwcHZpcXNoejd3ZSJ9.g6IbuC1epVU4KqpaqWoirw';

const map = L.map('map').setView([45.5787780638526, -73.5450793269945], 9);

L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${apiKey}`, {
    maxZoom: 18,
}).addTo(map);


function createIcon(iconUrl) {
    return L.icon({
      iconUrl: iconUrl,
      iconSize: [60, 60],
      iconAnchor: [30, 30],
      popupAnchor: [0, -19]
    });
  }
  
  let marker1 = createIcon('img/iconeMap/map1.png');
  let marker2 = createIcon('img/iconeMap/map2.png');
  let marker3 = createIcon('img/iconeMap/map3.png');
  let marker4 = createIcon('img/iconeMap/map4.png');
  let markerA = createIcon('img/iconeMap/mapA.png');
  let markerB = createIcon('img/iconeMap/mapB.png');
  let markerC = createIcon('img/iconeMap/mapC.png');
  let markerD = createIcon('img/iconeMap/mapD.png');
  let markerE = createIcon('img/iconeMap/mapE.png');
  let markerF = createIcon('img/iconeMap/mapF.png');
  let markerG = createIcon('img/iconeMap/mapG.png');
  let markerH = createIcon('img/iconeMap/mapH.png');
  let markerI = createIcon('img/iconeMap/mapI.png');
  


// ROLE1

// tc packaging : 45.62306097667415, -73.58284014432547
// proAmpac : 45.701837574721466, -73.75424020449023
// St jean : 45.36143507347949, -73.28754397104049


let markerTCPackaging = L.marker([45.62306097667415, -73.58284014432547], { icon: marker1 }).addTo(map);
let templateTCPackaging = `
    <div class="popup">
        <div>
            <img src="img/logo/123/TC-removebg-preview.png" alt="TCPackaging" >
        </div>
        <div class='popup-text'>
            <h3 class='convertisseur'>TC Packaging</h3>
            <p>Convertisseur</p>
        </div>
    </div>
`;
markerTCPackaging.bindPopup(templateTCPackaging);

let markerProAmpac = L.marker([45.701837574721466, -73.75424020449023], { icon: marker1 }).addTo(map);
let templateProAmpac = `
    <div class="popup">
        <div>
            <img src="img/logo/123/ProAmpac-removebg-preview.png" alt="ProAmpac" >
        </div>
        <div class='popup-text'>
            <h3 class='convertisseur'>ProAmpac</h3>
            <p>Convertisseur</p>
        </div>
    </div>
`;
markerProAmpac.bindPopup(templateProAmpac);

let markerStJean = L.marker([45.36143507347949, -73.28754397104049], { icon: marker1 }).addTo(map);
let templateStJean = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Emballage_st-jean.png" alt="St Jean" >
        </div>
        <div class='popup-text'>
            <h3 class='convertisseur'>St Jean</h3>
            <p>Convertisseur</p>
        </div>
    </div>
`;
markerStJean.bindPopup(templateStJean);


const markers1 = [markerTCPackaging, markerProAmpac, markerStJean];

let isMarkerVisible1 = true;
let btn1 = document.querySelector('[data-js-btn1]');

btn1.addEventListener('click', function() {
  isMarkerVisible1 = !isMarkerVisible1;

  markers1.forEach(marker => {
    if (isMarkerVisible1) {
      marker.addTo(map);
    } else {
      marker.remove();
      marker.closePopup();
    }
  });
});


// ROLE 2

// Carrousel : 45.56961302127696, -73.425589
// duropac : 45.37091533159878, -73.52275776932923
// talthi : 45.62733599060354, -72.99022332883959


let markerCarrousel = L.marker([45.56961302127696, -73.425589], { icon: marker2 }).addTo(map);
let templateCarrousel = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Carrousel-removebg-preview.png" alt="Carrousel" >
        </div>
        <div class='popup-text'>
            <h3>Carrousel</h3>
            <p>Company</p>
        </div>
    </div>
`;
markerCarrousel.bindPopup(templateCarrousel);

let markerDuropac = L.marker([45.37091533159878, -73.52275776932923], { icon: marker2 }).addTo(map);
let templateDuropac = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Duropac-removebg-preview.png" alt="Duropac" >
        </div>
        <div class='popup-text'>
            <h3>Duropac</h3>
            <p>City</p>
        </div>
    </div>
`;
markerDuropac.bindPopup(templateDuropac);

let markerTalthi = L.marker([45.62733599060354, -72.99022332883959], { icon: marker2 }).addTo(map);
let templateTalthi = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Talthi-removebg-preview.png" alt="Talthi" >
        </div>
        <div class='popup-text'>
            <h3>Talthi</h3>
            <p>City</p>
        </div>
    </div>
`;
markerTalthi.bindPopup(templateTalthi);

const markers2 = [markerCarrousel, markerDuropac, markerTalthi];

let isMarkerVisible2 = true;
let btn2 = document.querySelector('[data-js-btn2]');

btn2.addEventListener('click', function() {
  isMarkerVisible2 = !isMarkerVisible2;

  markers2.forEach(marker => {
    if (isMarkerVisible2) {
      marker.addTo(map);
    } else {
      marker.remove();
      marker.closePopup();
    }
  });
});



// ROLE 3

// lelys : 45.59409038967441, -73.73784582884048
// ste julie : 45.57995245855943, -73.32304855613708    
// alliance : 45.75411814001102, -73.4472546171883


let markerLelys = L.marker([45.59409038967441, -73.73784582884048], { icon: marker3 }).addTo(map);
let templateLelys = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Lelys-removebg-preview.png" alt="Lelys" >
        </div>
        <div class='popup-text'>
            <h3>Lelys</h3>
            <p>City</p>
        </div>
    </div>
`;
markerLelys.bindPopup(templateLelys);

let markerSteJulie = L.marker([45.57995245855943, -73.32304855613708], { icon: marker3 }).addTo(map);
let templateSteJulie = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Imprimerie_Ste-Julie-removebg-preview.png" alt="Ste-Julie" >
        </div>
        <div class='popup-text'>
            <h3>Ste-Julie</h3>
            <p>City</p>
        </div>
    </div>
`;
markerSteJulie.bindPopup(templateSteJulie);

let markerAlliance = L.marker([45.75411814001102, -73.4472546171883], { icon: marker3 }).addTo(map);
let templateAlliance = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Alliance-Etiquette_et_solutions_emballage-removebg-preview.png" alt="Alliance" >
        </div>
        <div class='popup-text'>
            <h3>Alliance</h3>
            <p>City</p>
        </div>
    </div>
`;
markerAlliance.bindPopup(templateAlliance);

const markers3 = [markerLelys, markerSteJulie, markerAlliance];

let isMarkerVisible3 = true;
let btn3 = document.querySelector('[data-js-btn3]');
btn3.addEventListener('click', function() {
    isMarkerVisible3 = !isMarkerVisible3;

    markers3.forEach(marker => {
        if (isMarkerVisible3) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});

// ROLE 4

// abeille : 45.6143100245516, -73.5911116443582
// axia : 45.60529091818758, -73.60249939155307
// snackdepot : 46.868472634771464, -71.1820438171603

let markerAbeille = L.marker([45.6143100245516, -73.5911116443582], { icon: marker4 }).addTo(map);
let templateAbeille = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Abeilles_busy_bees-removebg-preview.png" alt="Abeille" >
        </div>
        <div class='popup-text'>
            <h3>Abeille</h3>
            <p>City</p>
        </div>
    </div>
`;
markerAbeille.bindPopup(templateAbeille);

let markerAxia = L.marker([45.60529091818758, -73.60249939155307], { icon: marker4 }).addTo(map);
let templateAxia = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Axia-removebg-preview.png" alt="Axia" >
        </div>
        <div class='popup-text'>
            <h3>Axia</h3>
            <p>City</p>
        </div>
    </div>
`;
markerAxia.bindPopup(templateAxia);

let markerSnackdepot = L.marker([46.868472634771464, -71.1820438171603], { icon: marker4 }).addTo(map);
let templateSnackdepot = `
    <div class="popup">
        <div>
            <img src="img/logo/123/Snack_depot-removebg-preview.png" alt="Snackdepot" >
        </div>
        <div class='popup-text'>
            <h3>Snackdepot</h3>
            <p>City</p>
        </div>
    </div>
`;
markerSnackdepot.bindPopup(templateSnackdepot);

const markers4 = [markerAbeille, markerAxia, markerSnackdepot];

let isMarkerVisible4 = true;
let btn4 = document.querySelector('[data-js-btn4]');
btn4.addEventListener('click', function() {
    isMarkerVisible4 = !isMarkerVisible4;

    markers4.forEach(marker => {
        if (isMarkerVisible4) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});

// Role A

// itega : 45.578725518839754, -73.54517588465924

let markerItegaA = L.marker([45.578725518839754, -73.54517588465924], { icon: markerA }).addTo(map);
let templateItegaA = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/ITEGA_CMYK_M-removebg-preview" alt="Itega" >
        </div>
        <div class='popup-text'>
            <h3>Itega</h3>
            <p>City</p>
        </div>
    </div>
`;
markerItegaA.bindPopup(templateItegaA);

let isMarkerVisibleA = true;
let btnA = document.querySelector('[data-js-btnA]');

btnA.addEventListener('click', function () {
    isMarkerVisibleA = !isMarkerVisibleA;
    // Show or hide the marker based on the current visibility state
    if (isMarkerVisibleA) {
        markerItegaA.addTo(map);
    }
    else {
        markerItegaA.remove();
        markerItegaA.closePopup();
    }
});

// Role B

//eurofins : 45.56313548065247, -73.45899298824833
//ame roundup : 49.285889177594505, -123.11654623049542
//micom : 45.451575269772604, -73.72897711534362

let markerEurofins = L.marker([45.56313548065247, -73.45899298824833], { icon: markerB }).addTo(map);
let templateEurofins = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Eurofins_Logo-removebg-preview.png" alt="Eurofins" >
        </div>
        <div class='popup-text'>
            <h3>Eurofins</h3>
            <p>City</p>
        </div>
    </div>
`;
markerEurofins.bindPopup(templateEurofins);

let markerRoundup = L.marker([49.285889177594505, -123.11654623049542], { icon: markerB }).addTo(map);
let templateRoundup = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/AME_Roundup_2023-removebg-preview.png" alt="Roundup" >
        </div>
        <div class='popup-text'>
            <h3>Roundup</h3>
            <p>City</p>
        </div>
    </div>
`;
markerRoundup.bindPopup(templateRoundup);

let markerMicom = L.marker([45.451575269772604, -73.72897711534362], { icon: markerB }).addTo(map);
let templateMicom = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Micom-logo-removebg-preview.png" alt="Micom" >
        </div>
        <div class='popup-text'>
            <h3>Micom</h3>
            <p>City</p>
        </div>
    </div>
`;
markerMicom.bindPopup(templateMicom);

const markersB = [markerEurofins, markerRoundup, markerMicom];

let isMarkerVisibleB = true;
let btnB = document.querySelector('[data-js-btnB]');
btnB.addEventListener('click', function () {
    isMarkerVisibleB = !isMarkerVisibleB;

    markersB.forEach(marker => {
        if (isMarkerVisibleB) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});

// Role C

// itega : 45.578725518839754, -73.54517588465924
// interetec : 45.6131639803758, -73.51578349825002
// université de quebec : 46.81326391387531, -71.2224014

let markerItegaC = L.marker([45.578725518839754, -73.54517588465924], { icon: markerC }).addTo(map);
let templateItegaC = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/ITEGA_CMYK_M-removebg-preview" alt="Itega" >
        </div>
        <div class='popup-text'>
            <h3>Itega</h3>
            <p>City</p>
        </div>
    </div>
`;
markerItegaC.bindPopup(templateItegaC);


let markerInteretec = L.marker([45.6131639803758, -73.51578349825002], { icon: markerC }).addTo(map);
let templateInteretec = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Intertek-Logo-removebg-preview.png" alt="Interetec" >
        </div>
        <div class='popup-text'>
            <h3>Interetec</h3>
            <p>City</p>
        </div>
    </div>
`;
markerInteretec.bindPopup(templateInteretec);

let markerUq = L.marker([46.81326391387531, -71.2224014], { icon: markerC }).addTo(map);
let templateUq = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Universities.png" alt="UQ" >
        </div>
        <div class='popup-text'>
            <h3>Université du Quebec</h3>
            <p>City</p>
        </div>
    </div>
`;
markerUq.bindPopup(templateUq);


const markersC = [markerItegaC, markerInteretec, markerUq];

let isMarkerVisibleC = true;
let btnC = document.querySelector('[data-js-btnC]');
btnC.addEventListener('click', function () {
    isMarkerVisibleC = !isMarkerVisibleC;

    markersC.forEach(marker => {
        if (isMarkerVisibleC) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});

// Role D

//ciraig : 45.49654272243115, -73.61807158465638
//ageco : 45.533762809966454, -73.61575335943122
//ellio  : 45.52715099541855, -73.59714823059552


let markerCiraig = L.marker([45.49654272243115, -73.61807158465638], { icon: markerD }).addTo(map);
let templateCiraig = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/CIRAIG_NVID_logo_RGB_no-tagline-1536x873-removebg-preview.png" alt="Ciraig" >
        </div>
        <div class='popup-text'>
            <h3>Ciraig</h3>
            <p>City</p>
        </div>
    </div>
`;
markerCiraig.bindPopup(templateCiraig);

let markerAgeco = L.marker([45.533762809966454, -73.61575335943122], { icon: markerD }).addTo(map);
let templateAgeco = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Ageco_couleur_hautedefinition-removebg-preview.png" alt="Ageco" >
        </div>
        <div class='popup-text'>
            <h3>Ageco</h3>
            <p>City</p>
        </div>
    </div>
`;
markerAgeco.bindPopup(templateAgeco);

let markerEllio = L.marker([45.52715099541855, -73.59714823059552], { icon: markerD }).addTo(map);
let templateEllio = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Ellio_RVB_tagline-removebg-preview.png" alt="Ellio" >
        </div>
        <div class='popup-text'>
            <h3>Ellio</h3>
            <p>City</p>
        </div>
    </div>
`;
markerEllio.bindPopup(templateEllio);

const markersD = [markerCiraig, markerAgeco, markerEllio];

let isMarkerVisibleD = true;
let btnD = document.querySelector('[data-js-btnD]');

btnD.addEventListener('click', function () {
    isMarkerVisibleD = !isMarkerVisibleD;

    markersD.forEach(marker => {
        if (isMarkerVisibleD) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});

// Role E

// EEQ : 45.49349345929512, -73.57507804884581
// cartier : 45.41341971611436, -73.01844027302089
// braque : 45.505540930225855, -73.55490342042299
// pigeon : 45.50579339931251, -73.55534293510962

let markerEeq = L.marker([45.49349345929512, -73.57507804884581], { icon: markerE }).addTo(map);
let templateEeq = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/EEQ_Logo_FR_EnsembleSeul_Avril2022_F-removebg-preview.png" alt="EEQ" >
        </div>
        <div class='popup-text'>
            <h3>EEQ</h3>
            <p>City</p>
        </div>
    </div>
`;
markerEeq.bindPopup(templateEeq);

let markerCartier = L.marker([45.41341971611436, -73.01844027302089], { icon: markerE }).addTo(map);
let templateCartier = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Cartier-emballage_logo-removebg-preview.png" alt="Cartier" >
        </div>
        <div class='popup-text'>
            <h3>Cartier</h3>
            <p>City</p>
        </div>
    </div>
`;
markerCartier.bindPopup(templateCartier);

let markerBraque = L.marker([45.505540930225855, -73.55490342042299], { icon: markerE }).addTo(map);
let templateBraque = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Braque_logo_Final_Black-removebg-preview.png" alt="Braque" >
        </div>
        <div class='popup-text'>
            <h3>Braque</h3>
            <p>City</p>
        </div>
    </div>
`;
markerBraque.bindPopup(templateBraque);

let markerPigeon = L.marker([45.50579339931251, -73.55534293510962], { icon: markerE }).addTo(map);
let templatePigeon = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Pigeon-Brands.svg" alt="Pigeon" >
        </div>
        <div class='popup-text'>
            <h3>Pigeon</h3>
            <p>City</p>
        </div>
    </div>
`;
markerPigeon.bindPopup(templatePigeon);

const markersE = [markerEeq, markerCartier, markerBraque, markerPigeon];

let isMarkerVisibleE = true;
let btnE = document.querySelector('[data-js-btnE]');
btnE.addEventListener('click', function () {
    isMarkerVisibleE = !isMarkerVisibleE;

    markersE.forEach(marker => {
        if (isMarkerVisibleE) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});


// Role F

// metro : 45.66607777683485, -73.53240565952018
// Loblaw: 45.5090540791043, -73.6691895306888
// Sobey's : 45.61267045127222, -73.6056609

let markerMetro = L.marker([45.66607777683485, -73.53240565952018], { icon: markerF }).addTo(map);
let markerLoblaw = L.marker([45.5090540791043, -73.6691895306888], { icon: markerF }).addTo(map);
let markerSobeys = L.marker([45.61267045127222, -73.6056609], { icon: markerF }).addTo(map);

let templateMetro = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Metro_Inc._logo.png" alt="Metro" >
        </div>
        <div class='popup-text'>
            <h3>Metro</h3>
            <p>City</p>
        </div>
    </div>
`;
markerMetro.bindPopup(templateMetro);

let templateLoblaw = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Loblaws-removebg-preview.png" alt="Loblaw" >
        </div>
        <div class='popup-text'>
            <h3>Loblaw</h3>
            <p>City</p>
        </div>
    </div>
`;
markerLoblaw.bindPopup(templateLoblaw);

let templateSobeys = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Sobeys-removebg-preview.png" alt="Sobey" >
        </div>
        <div class='popup-text'>
            <h3>Sobey</h3>
            <p>City</p>
        </div>
    </div>
`;
markerSobeys.bindPopup(templateSobeys);

// Colabor : 45.56309100212611, -73.40419000185233
// sysco : 45.56629351388272, -73.44302092642349
// service alimentaire gordon : 45.565936445536785, -73.3991569497242
// service alimentaire gordon Quebec : 46.824130693260116, -71.34847288015727
// courchesne Larose : 45.626109350712994, -73.5525686558714
// courchesne Larose : 45.53558555444583, -73.6449954965504

let markerColabor = L.marker([45.56309100212611, -73.40419000185233], { icon: markerF }).addTo(map);
let markerSysco = L.marker([45.56629351388272, -73.44302092642349], { icon: markerF }).addTo(map);
let markerGordon1 = L.marker([45.565936445536785, -73.3991569497242], { icon: markerF }).addTo(map);
let markerGordon2 = L.marker([46.824130693260116, -71.34847288015727], { icon: markerF }).addTo(map);
let markerCourchesne1 = L.marker([45.626109350712994, -73.5525686558714], { icon: markerF }).addTo(map);
let markerCourchesne2 = L.marker([45.53558555444583, -73.6449954965504], { icon: markerF }).addTo(map);

let templateColabor = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Colabor-removebg-preview.png" alt="Colabor" >
        </div>
        <div class='popup-text'>
            <h3>Colabor</h3>
            <p>City</p>
        </div>
    </div>
`;
markerColabor.bindPopup(templateColabor);

let templateSysco = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Sysco-Logo-removebg-preview.png" alt="Sysco" >
        </div>
        <div class='popup-text'>
            <h3>Sysco</h3>
            <p>City</p>
        </div>
    </div>
`;
markerSysco.bindPopup(templateSysco);

let templateGordon1 = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Gordon_Service-alimentaire-removebg-preview.png" alt="Gordon" >
        </div>
        <div class='popup-text'>
            <h3>Service Alimentaire Gordon (Montreal)</h3>
            <p>City</p>
        </div>
    </div>
`;
markerGordon1.bindPopup(templateGordon1);

let templateGordon2 = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Gordon_Service-alimentaire-removebg-preview.png" alt="Gordon" >
        </div>
        <div class='popup-text'>
            <h3>Service Alimentaire Gordon (Quebec)</h3>
            <p>City</p>
        </div>
    </div>
`;
markerGordon2.bindPopup(templateGordon2);

let templateCourchesne1 = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Courschesne-Larose-removebg-preview.png" alt="Courchesne" >
        </div>
        <div class='popup-text'>
            <h3>Courchesne Larose (Montreal)</h3>
            <p>City</p>
        </div>
    </div>
`;

markerCourchesne1.bindPopup(templateCourchesne1);

let templateCourchesne2 = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Courschesne-Larose-removebg-preview.png" alt="Courchesne" >
        </div>
        <div class='popup-text'>
            <h3>Courchesne Larose (Laval)</h3>
            <p>City</p>
        </div>
    </div>
`;

markerCourchesne2.bindPopup(templateCourchesne2);

// Maturin : 45.544598202940534, -73.49200964418236
// Fermes lufa : 45.50160373678727, -73.70900492671767
// Voila par iga : 45.476962335284426, -73.79766461383103

let markerMaturin = L.marker([45.544598202940534, -73.49200964418236], { icon: markerF }).addTo(map);
let markerLufa = L.marker([45.50160373678727, -73.70900492671767], { icon: markerF }).addTo(map);
let markerVoila = L.marker([45.476962335284426, -73.79766461383103], { icon: markerF }).addTo(map);

let templateMaturin = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Maturin-Logo-removebg-preview.png" alt="Maturin" >
        </div>
        <div class='popup-text'>
            <h3>Maturin</h3>
            <p>City</p>
        </div>
    </div>
`;

markerMaturin.bindPopup(templateMaturin);

let templateLufa = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Fermes-Lufa_Logo-removebg-preview.png" alt="Lufa" >
        </div>
        <div class='popup-text'>
            <h3>Fermes Lufa</h3>
            <p>City</p>
        </div>
    </div>
`;

markerLufa.bindPopup(templateLufa);

let templateVoila = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Voila_par_IGA-removebg-preview.png" alt="Voila" >
        </div>
        <div class='popup-text'>
            <h3>Voila par IGA</h3>
            <p>City</p>
        </div>
    </div>
`;

markerVoila.bindPopup(templateVoila);


// ADA : 45.53069307910462, -73.5633780306883
// CQCD : 45.526871883156154, -73.57501417186553

let markerAda = L.marker([45.53069307910462, -73.5633780306883], { icon: markerF }).addTo(map);
let markerCqcd = L.marker([45.526871883156154, -73.57501417186553], { icon: markerF }).addTo(map);

let templateAda = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/Association_des_detaillants_en_alimentation_du_Quebec_ADAQ-removebg-preview.png" alt="Ada" >
        </div>
        <div class='popup-text'>
            <h3>ADA</h3>
            <p>City</p>
        </div>
    </div>
`;

markerAda.bindPopup(templateAda);

let templateCqcd = `
    <div class="popup">
        <div>
            <img src="img/logo/ABC/CQCD-Logo_Crop-removebg-preview.png" alt="Cqcd" >
        </div>
        <div class='popup-text'>
            <h3>CQCD</h3>
            <p>City</p>
        </div>
    </div>
`;

markerCqcd.bindPopup(templateCqcd);

const markersF = [markerSysco, markerGordon1, markerGordon2, markerCourchesne1, markerCourchesne2, markerMaturin, markerLufa, markerVoila, markerAda, markerCqcd, markerLoblaw, markerSobeys, markerMetro, markerColabor];

let isMarkerVisibleF = true;
let btnF = document.querySelector('[data-js-btnF]');

btnF.addEventListener('click', function() {
  isMarkerVisibleF = !isMarkerVisibleF;

  markersF.forEach(marker => {
    if (isMarkerVisibleF) {
      marker.addTo(map);
    } else {
      marker.remove();
      marker.closePopup();
    }
  });
});


