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

function createPopupTemplate(cat ,logo, name, adresse) {
    return `
        <div class='${cat} categorie'>
            <h3>${name}</h3>
        </div>
        <div>
            <img src="${logo}" alt="logo" width="100px">
        </div>
        <div>
            <p>${adresse}</p>
        </div>
    `;
}

// ROLE1

// tc packaging : 45.62306097667415, -73.58284014432547
// proAmpac : 45.701837574721466, -73.75424020449023
// St jean : 45.36143507347949, -73.28754397104049


let markerTCPackaging = L.marker([45.62306097667415, -73.58284014432547], { icon: marker1 }).addTo(map);
let markerProAmpac = L.marker([45.701837574721466, -73.75424020449023], { icon: marker1 }).addTo(map);
let markerStJean = L.marker([45.36143507347949, -73.28754397104049], { icon: marker1 }).addTo(map);

const templateTCPackaging = createPopupTemplate('cat-conv','img/logo/123/TC-removebg-preview.png', 'TC Packaging', '2525 av aird');
const templateProAmpac = createPopupTemplate('cat-conv', 'ProAmpac', 'Montréal', 'img/logo/123/ProAmpac-removebg-preview.png');
const templateStJean = createPopupTemplate('cat-conv', 'St Jean', 'Montréal', 'img/logo/123/Emballage_st-jean.png');

markerTCPackaging.bindPopup(templateTCPackaging);
markerProAmpac.bindPopup(templateProAmpac);
markerStJean.bindPopup(templateStJean);

const markers1 = [markerTCPackaging, markerProAmpac, markerStJean];

let isMarkerVisible1 = true;
let btn1 = document.querySelector('[data-js-btn1]');

btn1.addEventListener('click', function () {
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

// btn1.addEventListener('click', function () {
//     // remove all markers from the map
//     map.eachLayer(function (layer) {
//         if (layer instanceof L.Marker) {
//             map.removeLayer(layer);
//         }
//     });

//     // add only markersApprovisionnement to the map
//     markers1.forEach(function (marker) {
//         marker.addTo(map);
//     });
// });

// ROLE 2

// Carrousel : 45.56961302127696, -73.425589
// duropac : 45.37091533159878, -73.52275776932923
// talthi : 45.62733599060354, -72.99022332883959


let markerCarrousel = L.marker([45.56961302127696, -73.425589], { icon: marker2 }).addTo(map);
let markerDuropac = L.marker([45.37091533159878, -73.52275776932923], { icon: marker2 }).addTo(map);
let markerTalthi = L.marker([45.62733599060354, -72.99022332883959], { icon: marker2 }).addTo(map);

const templateCarrousel = createPopupTemplate('cat-gros', 'Carrousel', 'Montréal', 'img/logo/123/Carrousel-removebg-preview.png');
const templateDuropac = createPopupTemplate('cat-gros', 'Duropac', 'Montréal', 'img/logo/123/Duropac-removebg-preview.png');
const templateTalthi = createPopupTemplate('cat-gros', 'Talthi', 'Montréal', 'img/logo/123/Talthi-removebg-preview.png');


markerCarrousel.bindPopup(templateCarrousel);
markerDuropac.bindPopup(templateDuropac);
markerTalthi.bindPopup(templateTalthi);

const markers2 = [markerCarrousel, markerDuropac, markerTalthi];

let isMarkerVisible2 = true;
let btn2 = document.querySelector('[data-js-btn2]');

btn2.addEventListener('click', function () {
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
let markerSteJulie = L.marker([45.57995245855943, -73.32304855613708], { icon: marker3 }).addTo(map);
let markerAlliance = L.marker([45.75411814001102, -73.4472546171883], { icon: marker3 }).addTo(map);

const templateLelys = createPopupTemplate('Lelys', 'Montréal', 'img/logo/123/Lelys-removebg-preview.png');
const templateSteJulie = createPopupTemplate('Ste-Julie', 'Montréal', 'img/logo/123/Imprimerie_Ste-Julie-removebg-preview.png');
const templateAlliance = createPopupTemplate('Alliance', 'Montréal', 'img/logo/123/Alliance-Etiquette_et_solutions_emballage-removebg-preview.png');

markerLelys.bindPopup(templateLelys);
markerSteJulie.bindPopup(templateSteJulie);
markerAlliance.bindPopup(templateAlliance);


const markers3 = [markerLelys, markerSteJulie, markerAlliance];

let isMarkerVisible3 = true;
let btn3 = document.querySelector('[data-js-btn3]');
btn3.addEventListener('click', function () {
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
let markerAxia = L.marker([45.60529091818758, -73.60249939155307], { icon: marker4 }).addTo(map);
let markerSnackdepot = L.marker([46.868472634771464, -71.1820438171603], { icon: marker4 }).addTo(map);

const templateAbeille = createPopupTemplate('Abeille', 'Montréal', 'img/logo/123/Abeilles_busy_bees-removebg-preview.png');
const templateAxia = createPopupTemplate('Axia', 'Montréal', 'img/logo/123/Axia-removebg-preview.png');
const templateSnackdepot = createPopupTemplate('Snackdepot', 'Montréal', 'img/logo/123/Snackdepot-removebg-preview.png');

markerAbeille.bindPopup(templateAbeille);
markerAxia.bindPopup(templateAxia);
markerSnackdepot.bindPopup(templateSnackdepot);

const markers4 = [markerAbeille, markerAxia, markerSnackdepot];

let isMarkerVisible4 = true;
let btn4 = document.querySelector('[data-js-btn4]');
btn4.addEventListener('click', function () {
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

const templateItegaA = createPopupTemplate('Itega', 'Montréal', 'img/logo/ABC/ITEGA_CMYK_M-removebg-preview.png');

markerItegaA.bindPopup(templateItegaA);

const markersA = [markerItegaA];

let isMarkerVisibleA = true;
let btnA = document.querySelector('[data-js-btnA]');

btnA.addEventListener('click', function () {
    isMarkerVisibleA = !isMarkerVisibleA;

    markersA.forEach(marker => {
        if (isMarkerVisibleA) {
            marker.addTo(map);
        } else {
            marker.remove();
            marker.closePopup();
        }
    });
});

// btn1.addEventListener('click', function () {
//     isMarkerVisible1 = !isMarkerVisible1;
  
//     markers1.forEach(marker => {
//       if (!isMarkerVisible1) {
//         // Make marker bigger
//         marker.options.icon.options.iconSize = [70, 70];
//         marker.options.icon.options.iconAnchor = [35, 35];
//       } else {
//         // Make marker smaller
//         marker.options.icon.options.iconSize = [60, 60];
//         marker.options.icon.options.iconAnchor = [30, 30];
//       }
//       marker.setIcon(marker.options.icon);
//       marker.update();
//     });
//   });
  

// Role B

//eurofins : 45.56313548065247, -73.45899298824833
//ame roundup : 49.285889177594505, -123.11654623049542
//micom : 45.451575269772604, -73.72897711534362

let markerEurofins = L.marker([45.56313548065247, -73.45899298824833], { icon: markerB }).addTo(map);
let markerRoundup = L.marker([49.285889177594505, -123.11654623049542], { icon: markerB }).addTo(map);
let markerMicom = L.marker([45.451575269772604, -73.72897711534362], { icon: markerB }).addTo(map);

const templateEurofins = createPopupTemplate('Eurofins', 'Montréal', 'img/logo/ABC/Eurofins_Logo-removebg-preview.png');
const templateRoundup = createPopupTemplate('Roundup', 'Montréal', 'img/logo/ABC/AME_Roundup_2023-removebg-preview.png');
const templateMicom = createPopupTemplate('Micom', 'Montréal', 'img/logo/ABC/Micom-logo-removebg-preview.png');

markerEurofins.bindPopup(templateEurofins);
markerRoundup.bindPopup(templateRoundup);
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
let markerInteretec = L.marker([45.6131639803758, -73.51578349825002], { icon: markerC }).addTo(map);
let markerUq = L.marker([46.81326391387531, -71.2224014], { icon: markerC }).addTo(map);

const templateItegaC = createPopupTemplate('Itega', 'Montréal', 'img/logo/ABC/ITEGA_CMYK_M-removebg-preview.png');
const templateInteretec = createPopupTemplate('Interetec', 'Montréal', 'img/logo/ABC/Intertek-Logo-removebg-preview.png');
const templateUq = createPopupTemplate('Uq', 'Montréal', 'img/logo/ABC/Universities.png');

markerItegaC.bindPopup(templateItegaC);
markerInteretec.bindPopup(templateInteretec);
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
let markerAgeco = L.marker([45.533762809966454, -73.61575335943122], { icon: markerD }).addTo(map);
let markerEllio = L.marker([45.52715099541855, -73.59714823059552], { icon: markerD }).addTo(map);

const templateCiraig = createPopupTemplate('Ciraig', 'Montréal', 'img/logo/ABC/CIRAIG_NVID_logo_RGB_no-tagline-1536x873-removebg-preview.png');
const templateAgeco = createPopupTemplate('Ageco', 'Montréal', 'img/logo/ABC/Ageco_couleur_hautedefinition-removebg-preview.png');
const templateEllio = createPopupTemplate('Ellio', 'Montréal', 'img/logo/ABC/Ellio_RVB_tagline-removebg-preview.png');

markerCiraig.bindPopup(templateCiraig);
markerAgeco.bindPopup(templateAgeco);
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
let markerCartier = L.marker([45.41341971611436, -73.01844027302089], { icon: markerE }).addTo(map);
let markerBraque = L.marker([45.505540930225855, -73.55490342042299], { icon: markerE }).addTo(map);
let markerPigeon = L.marker([45.50579339931251, -73.55534293510962], { icon: markerE }).addTo(map);

const templateEeq = createPopupTemplate('EEQ', 'Montréal', 'img/logo/ABC/EEQ_Logo_FR_EnsembleSeul_Avril2022_F-removebg-preview.png');
const templateCartier = createPopupTemplate('Cartier', 'Montréal', 'img/logo/ABC/Cartier-emballage_logo-removebg-preview.png');
const templateBraque = createPopupTemplate('Braque', 'Montréal', 'img/logo/ABC/Braque_logo_Final_Black-removebg-preview.png');
const templatePigeon = createPopupTemplate('Pigeon', 'Montréal', 'img/logo/ABC/Pigeon-Brands.svg');

markerEeq.bindPopup(templateEeq);
markerCartier.bindPopup(templateCartier);
markerBraque.bindPopup(templateBraque);
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

const templateMetro = createPopupTemplate('Metro', 'Montréal', 'img/logo/ABC/Metro_Inc._logo.png');
const templateLoblaw = createPopupTemplate('Loblaw', 'Montréal', 'img/logo/ABC/Loblaws-removebg-preview.png');
const templateSobeys = createPopupTemplate('Sobeys', 'Montréal', 'img/logo/ABC/Sobeys-removebg-preview.png');

markerMetro.bindPopup(templateMetro);
markerLoblaw.bindPopup(templateLoblaw);
markerSobeys.bindPopup(templateSobeys);

// Colabor : 45.56309100212611, -73.40419000185233
// sysco : 45.56629351388272, -73.44302092642349
// service alimentaire gordon : 45.565936445536785, -73.3991569497242
// courchesne Larose : 45.626109350712994, -73.5525686558714

let markerColabor = L.marker([45.56309100212611, -73.40419000185233], { icon: markerF }).addTo(map);
let markerSysco = L.marker([45.56629351388272, -73.44302092642349], { icon: markerF }).addTo(map);
let markerGordon1 = L.marker([45.565936445536785, -73.3991569497242], { icon: markerF }).addTo(map);
let markerCourchesne1 = L.marker([45.626109350712994, -73.5525686558714], { icon: markerF }).addTo(map);


const templateColabor = createPopupTemplate('Colabor', 'City', 'img/logo/ABC/Colabor-removebg-preview.png');
const templateSysco = createPopupTemplate('Sysco', 'City', 'img/logo/ABC/Sysco-Logo-removebg-preview.png');
const templateGordon1 = createPopupTemplate('Service Alimentaire Gordon (Montreal)', 'City', 'img/logo/ABC/Gordon_Service-alimentaire-removebg-preview.png');

const templateCourchesne1 = createPopupTemplate('Courchesne Larose (Montreal)', 'City', 'img/logo/ABC/Courschesne-Larose-removebg-preview.png');


markerColabor.bindPopup(templateColabor);
markerSysco.bindPopup(templateSysco);
markerGordon1.bindPopup(templateGordon1);
markerCourchesne1.bindPopup(templateCourchesne1);


// Maturin : 45.544598202940534, -73.49200964418236
// Fermes lufa : 45.50160373678727, -73.70900492671767
// Voila par iga : 45.476962335284426, -73.79766461383103

let markerMaturin = L.marker([45.544598202940534, -73.49200964418236], { icon: markerF }).addTo(map);
let markerLufa = L.marker([45.50160373678727, -73.70900492671767], { icon: markerF }).addTo(map);
let markerVoila = L.marker([45.476962335284426, -73.79766461383103], { icon: markerF }).addTo(map);

const templateMaturin = createPopupTemplate('Maturin', 'City', 'img/logo/ABC/Maturin-Logo-removebg-preview.png');
const templateLufa = createPopupTemplate('Fermes Lufa', 'City', 'img/logo/ABC/Fermes-Lufa_Logo-removebg-preview.png');
const templateVoila = createPopupTemplate('Voila par IGA', 'City', 'img/logo/ABC/Voila_par_IGA-removebg-preview.png');

markerMaturin.bindPopup(templateMaturin);
markerLufa.bindPopup(templateLufa);
markerVoila.bindPopup(templateVoila);


// ADA : 45.53069307910462, -73.5633780306883
// CQCD : 45.526871883156154, -73.57501417186553

let markerAda = L.marker([45.53069307910462, -73.5633780306883], { icon: markerF }).addTo(map);
let markerCqcd = L.marker([45.526871883156154, -73.57501417186553], { icon: markerF }).addTo(map);

const templateAda = createPopupTemplate('ADA', 'City', 'img/logo/ABC/Association_des_detaillants_en_alimentation_du_Quebec_ADAQ-removebg-preview.png');
const templateCqcd = createPopupTemplate('CQCD', 'City', 'img/logo/ABC/CQCD-Logo_Crop-removebg-preview.png');

markerAda.bindPopup(templateAda);
markerCqcd.bindPopup(templateCqcd);

const markersF = [markerSysco, markerGordon1, markerCourchesne1, markerMaturin, markerLufa, markerVoila, markerAda, markerCqcd, markerLoblaw, markerSobeys, markerMetro, markerColabor];

let isMarkerVisibleF = true;
let btnF = document.querySelector('[data-js-btnF]');

btnF.addEventListener('click', function () {
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

const markersApprovisionnement = [markerTCPackaging, markerProAmpac, markerStJean, markerCarrousel, markerDuropac, markerTalthi, markerLelys, markerSteJulie, markerAlliance, markerAbeille, markerAxia, markerSnackdepot];


const markersDevTech = [markerItegaA, markerEurofins, markerRoundup, markerMicom, markerItegaC, markerInteretec, markerUq, markerCiraig, markerAgeco, markerEllio, markerEeq, markerCartier, markerBraque, markerPigeon, markerSysco, markerGordon1, markerCourchesne1, markerMaturin, markerLufa, markerVoila, markerAda, markerCqcd, markerLoblaw, markerSobeys, markerMetro, markerColabor];


let approIni = document.getElementById('appro-ini'),
    devTechIni = document.getElementById('dev-tech-ini');

let cpt = 0;

approIni.addEventListener("click", function () {
    if (cpt === 0) {
        markersDevTech.forEach(marker => {
            marker.remove();
            marker.closePopup();
        });
    } else {
        markersApprovisionnement.forEach(marker => {
            marker.addTo(map);
        });

        markersDevTech.forEach(marker => {
            marker.remove();
            marker.closePopup();
        });
    }
    cpt++;
});

devTechIni.addEventListener("click", function () {
    if (cpt === 0) {
        markersApprovisionnement.forEach(marker => {
            marker.remove();
            marker.closePopup();
        });
    } else {
        markersDevTech.forEach(marker => {
            marker.addTo(map);
        });

        markersApprovisionnement.forEach(marker => {
            marker.remove();
            marker.closePopup();
        });
    }
    cpt++;
});

let markersTout = [markerProAmpac, markerStJean, markerTCPackaging, markerCarrousel, markerDuropac, markerTalthi, markerAlliance, markerLelys, markerSteJulie, markerAbeille, markerAxia, markerSnackdepot, markerItegaA, markerEurofins, markerRoundup, markerMicom, markerItegaC, markerInteretec, markerUq, markerCiraig, markerAgeco, markerEllio, markerEeq, markerCartier, markerBraque, markerPigeon, markerLoblaw, markerSobeys, markerMetro, markerColabor, markerSysco, markerGordon1, markerCourchesne1, markerMaturin, markerVoila, markerLufa, markerAda, markerCqcd];

//38

let divLogos = document.querySelectorAll('[data-js-flex-logo]');
let tabLogos = [];
for (let i = 0; i < divLogos.length; i++) {
    let logos = divLogos[i].querySelectorAll('img');
    for (let j = 0; j < logos.length; j++) {
        tabLogos.push(logos[j]);
    }
}

for (let i = 0; i < tabLogos.length; i++) {
    //when mouseover, open popup
    tabLogos[i].addEventListener('mouseover', function () {
        markersTout[i].openPopup();
    });

    //when mouseout, close popup
    tabLogos[i].addEventListener('mouseout', function () {
        markersTout[i].closePopup();
    });
}