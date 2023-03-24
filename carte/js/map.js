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

function createPopupTemplate(cat, icone, name, logo, adresse, ville, urlsiteweb, siteweb) {
    return `
        <div class='${cat} categorie'>
            <img src="img/iconeMapB/bmap${icone}.png" alt="categorie">
            <h3>${name}</h3>
        </div>
        <div class='flex-adresse-logo'>
            <div>
                <p>${adresse}</p>
                <p>${ville}</p>
                <a target="_blank" href='${urlsiteweb}'>${siteweb}</a>
            </div>
            <div>
                <img src="${logo}" alt="logo" width="100px">
            </div>
        </div>
    `;
}

// ROLE1

let markerTCPackaging = L.marker([45.62152002789094, -73.58301381082575], { icon: marker1 }).addTo(map);
let markerProAmpac = L.marker([45.701837574721466, -73.75424020449023], { icon: marker1 }).addTo(map);
let markerStJean = L.marker([45.36143507347949, -73.28754397104049], { icon: marker1 }).addTo(map);

const templateTCPackaging = createPopupTemplate('div-convertisseurs', '1', 'TC Transcontinental', 'img/logo/123/TC-removebg-preview.png', '11060, bd Parkway', "Anjou (Québec)&nbsp; H1J 1S1", "https://tctranscontinental.com/en-us/packaging", 'tctranscontinental.com');
const templateProAmpac = createPopupTemplate('div-convertisseurs', '1', 'ProAmpac', 'img/logo/123/ProAmpac-removebg-preview.png', '1041, bd des Entreprises', "Terrebonne (Québec)&nbsp; J6Y 1V2", "https://www.proampac.com/", 'proampac.com');
const templateStJean = createPopupTemplate('div-convertisseurs', '1', 'St Jean', 'img/logo/123/Emballage_st-jean.png', '80, rue Moreau', "Saint-Jean-sur-Richelieu (Québec)&nbsp; J2W 2M4", "https://www.sjpack.com/fr/", 'sjpack.com');

markerTCPackaging.bindPopup(templateTCPackaging);
markerProAmpac.bindPopup(templateProAmpac);
markerStJean.bindPopup(templateStJean);

const markers1 = [markerTCPackaging, markerProAmpac, markerStJean];

let isMarkerVisible1 = true;
let btn1 = document.querySelectorAll('[data-js-btn1]');

for (let i = 0; i < btn1.length; i++) {
    btn1[i].addEventListener('click', function () {
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
}

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

let markerCarrousel = L.marker([45.56961302127696, -73.425589], { icon: marker2 }).addTo(map);
let markerDuropac = L.marker([45.37091533159878, -73.52275776932923], { icon: marker2 }).addTo(map);
let markerTalthi = L.marker([45.62733599060354, -72.99022332883959], { icon: marker2 }).addTo(map);

const templateCarrousel = createPopupTemplate('div-grossistes', '2', 'Carrousel', 'img/logo/123/Carrousel-removebg-preview.png', '1401, rue Ampère', "Boucherville (Québec)&nbsp; J4B 6C5", "https://www.carrousel.ca", 'carrousel.ca');
const templateDuropac = createPopupTemplate('div-grossistes', '2', 'Duropac', 'img/logo/123/Duropac-removebg-preview.png', '305, av Liberté', "Candiac (Québec)&nbsp; J5R 6Z7", "https://www.duropac.com", 'duropac.com');
const templateTalthi = createPopupTemplate('div-grossistes', '2', 'Talthi', 'img/logo/123/Talthi-removebg-preview.png', '4035, imp. Bérard', "Saint-Hyacinthe (Québec)&nbsp; J2S 8Z8", "https://www.talthi.ca", 'talthi.com');

markerCarrousel.bindPopup(templateCarrousel);
markerDuropac.bindPopup(templateDuropac);
markerTalthi.bindPopup(templateTalthi);

const markers2 = [markerCarrousel, markerDuropac, markerTalthi];

let isMarkerVisible2 = true;
let btn2 = document.querySelectorAll('[data-js-btn2]');

for (let i = 0; i < btn2.length; i++) {
    btn2[i].addEventListener('click', function () {
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
}

// ROLE 3

let markerLelys = L.marker([45.59409038967441, -73.73784582884048], { icon: marker3 }).addTo(map);
let markerSteJulie = L.marker([45.57995245855943, -73.32304855613708], { icon: marker3 }).addTo(map);
let markerAlliance = L.marker([45.75411814001102, -73.4472546171883], { icon: marker3 }).addTo(map);

const templateLelys = createPopupTemplate('div-impression', '3', 'Imprimerie Groupe Lelys', 'img/logo/123/Lelys-removebg-preview.png', '3275, av Francis-Hughes 2nd Floor', "Laval (Québec)&nbsp; H7L 5A5", "https://www.lelys.com", 'lelys.com');
const templateSteJulie = createPopupTemplate('div-impression', '3', 'Imprimerie Ste Julie Inc', 'img/logo/123/Imprimerie_Ste-Julie-removebg-preview.png', '1851, rue Nobel', "Sainte-Julie (Québec)&nbsp; J3E 1Z6", "https://www.impsj.com", 'impsj.com');
const templateAlliance = createPopupTemplate('div-impression', '3', 'Alliance Étiquettes et Solutions d&apos;emballage', 'img/logo/123/Alliance-Etiquette_et_solutions_emballage-removebg-preview.png', '114, rue de Normandie', "Repentigny (Québec)&nbsp; J6A 6B9", "https://www.allianceinc.ca", 'allianceinc.ca');

markerLelys.bindPopup(templateLelys);
markerSteJulie.bindPopup(templateSteJulie);
markerAlliance.bindPopup(templateAlliance);

const markers3 = [markerLelys, markerSteJulie, markerAlliance];

let isMarkerVisible3 = true;
let btn3 = document.querySelectorAll('[data-js-btn3]');
for (let i = 0; i < btn3.length; i++) {
    btn3[i].addEventListener('click', function () {
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
}

// ROLE 4

let markerAbeille = L.marker([45.613511790746, -73.59100542208498], { icon: marker4 }).addTo(map);
let markerAxia = L.marker([45.60529091818758, -73.60249939155307], { icon: marker4 }).addTo(map);
let markerSnackdepot = L.marker([46.86838197493369, -71.18200018471804], { icon: marker4 }).addTo(map);

const templateAbeille = createPopupTemplate('div-co-emballage', '4', 'Abeilles Busy Bees', 'img/logo/123/Abeilles_busy_bees-removebg-preview.png', '11100, bd Louis H. La Fontaine', "Anjou (Québec)&nbsp; H1J 2Y5", "https://www.abusy.ca", 'abusy.ca');
const templateAxia = createPopupTemplate('div-co-emballage', '4', 'Axia Services', 'img/logo/123/Axia-removebg-preview.png', '9245, Boul Langelier', "Saint-Léonard (Québec)&nbsp; H1P 3K9", "https://www.axiaservices.com/emballage-1", 'axiaservices.com');
const templateSnackdepot = createPopupTemplate('div-co-emballage', '4', 'Snackdepot', 'img/logo/123/Snack_depot-removebg-preview.png', '95, rue des Passerins', "Québec (Québec)&nbsp; G1E 1Z9", "https://www.snackdepot.ca", 'snackdepot.ca');

markerAbeille.bindPopup(templateAbeille);
markerAxia.bindPopup(templateAxia);
markerSnackdepot.bindPopup(templateSnackdepot);

const markers4 = [markerAbeille, markerAxia, markerSnackdepot];

let isMarkerVisible4 = true;
let btn4 = document.querySelectorAll('[data-js-btn4]');
for (let i = 0; i < btn4.length; i++) {
    btn4[i].addEventListener('click', function () {
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
}

// Role A

let markerItegaA = L.marker([45.578725518839754, -73.54517588465924], { icon: markerA }).addTo(map);

const templateItegaA = createPopupTemplate('div-recherche', 'A', 'Itega', 'img/logo/ABC/ITEGA_CMYK_M-removebg-preview.png', '6220, rue Sherbrooke Est', "Montréal (Québec)&nbsp; H1N 1C1", "https://www.itega.ca", 'itega.ca');
markerItegaA.bindPopup(templateItegaA);

const markersA = [markerItegaA];

let isMarkerVisibleA = true;
let btnA = document.querySelectorAll('[data-js-btnA]');

for (let i = 0; i < btnA.length; i++) {
    btnA[i].addEventListener('click', function () {
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
}

// Role B

let markerEurofins = L.marker([45.56313548065247, -73.45899298824833], { icon: markerB }).addTo(map);
let markerRoundup = L.marker([49.285889177594505, -123.11654623049542], { icon: markerB }).addTo(map);
let markerMicom = L.marker([45.451472831896254, -73.72893229831246], { icon: markerB }).addTo(map);

const templateEurofins = createPopupTemplate('div-analyse-performance', 'B', 'Eurofins', 'img/logo/ABC/Eurofins_Logo-removebg-preview.png', '2325, Bd Fernand-Lafontaine', "Longueuil (Québec)&nbsp; J4N 1N7", "https://www.labenvironex.com/en/", 'labenvironex.com');
const templateRoundup = createPopupTemplate('div-analyse-performance', 'B', 'AME Roundup', 'img/logo/ABC/AME_Roundup_2023-removebg-preview.png', '889 W Pender St #800', "Vancouver (Colombie-Britannique)&nbsp; V6C 3B2", "https://roundup.amebc.ca/", 'roundup.amebc.ca');
const templateMicom = createPopupTemplate('div-analyse-performance', 'B', 'Micom inc', 'img/logo/ABC/Micom-logo-removebg-preview.png', '556 Av. Lépine', "Dorval (Québec)&nbsp; H9P 2V6", "https://www.micomlab.com/fr/", 'micomlab.com');

markerEurofins.bindPopup(templateEurofins);
markerRoundup.bindPopup(templateRoundup);
markerMicom.bindPopup(templateMicom);

const markersB = [markerEurofins, markerRoundup, markerMicom];

let isMarkerVisibleB = true;
let btnB = document.querySelectorAll('[data-js-btnB]');
for (let i = 0; i < btnB.length; i++) {
    btnB[i].addEventListener('click', function () {
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
}

// Role C

let markerItegaC = L.marker([45.578725518839754, -73.54517588465924], { icon: markerC }).addTo(map);
let markerInteretec = L.marker([45.612467111952164, -73.51557249069322], { icon: markerC }).addTo(map);
let markerUq = L.marker([46.813253611872724, -71.22240035206579], { icon: markerC }).addTo(map);

const templateItegaC = createPopupTemplate('div-innocuite', 'C', 'ITEGA', 'img/logo/ABC/ITEGA_CMYK_M-removebg-preview.png', '6220, rue Sherbrooke Est', "Montréal (Québec)&nbsp; H1N 1C1", "https://www.itega.ca", 'itega.ca');
const templateInteretec = createPopupTemplate('div-innocuite', 'C', 'Intertek', 'img/logo/ABC/Intertek-Logo-removebg-preview.png', '2561 av Georges-V', "Montréal-Est (Québec)&nbsp; H1L 6S4", "https://www.intertek.com/canada/", 'intertek.com');
const templateUq = createPopupTemplate('div-innocuite', 'C', 'Université du Québec', 'img/logo/ABC/Universities.png', '475 rue du Parvis', "Québec (Québec)&nbsp; G1K 9H7", "https://reseau.uquebec.ca/fr", 'reseau.uquebec.ca');

markerItegaC.bindPopup(templateItegaC);
markerInteretec.bindPopup(templateInteretec);
markerUq.bindPopup(templateUq);

const markersC = [markerItegaC, markerInteretec, markerUq];

let isMarkerVisibleC = true;
let btnC = document.querySelectorAll('[data-js-btnC]');

for (let i = 0; i < btnC.length; i++) {
    btnC[i].addEventListener('click', function () {
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
}

// Role D

let markerCiraig = L.marker([45.49654272243115, -73.61807158465638], { icon: markerD }).addTo(map);
let markerAgeco = L.marker([45.533762809966454, -73.61575335943122], { icon: markerD }).addTo(map);
let markerEllio = L.marker([45.52715099541855, -73.59714823059552], { icon: markerD }).addTo(map);

const templateCiraig = createPopupTemplate('div-analyse-cycle-vie', 'D', 'CIRAIG', 'img/logo/ABC/CIRAIG_NVID_logo_RGB_no-tagline-1536x873-removebg-preview.png', '3333 Queen Mary st 310', "Montréal (Québec)&nbsp; H3V 1A2", "https://ciraig.org/index.php/fr/accueil/", 'ciraig.org');
const templateAgeco = createPopupTemplate('div-analyse-cycle-vie', 'D', 'Groupe AGECO', 'img/logo/ABC/Ageco_couleur_hautedefinition-removebg-preview.png', '25 av Mozart E bureau 310', "Montréal (Québec)&nbsp; H2S 1B1", "https://groupeageco.ca/", 'groupeageco.ca');
const templateEllio = createPopupTemplate('div-analyse-cycle-vie', 'D', 'ELLIO', 'img/logo/ABC/Ellio_RVB_tagline-removebg-preview.png', '160 rue St Viateur Est bureau 811', "Montréal (Québec)&nbsp; H2J 2V4", "https://www.ellio.ca/", 'ellio.ca');

markerCiraig.bindPopup(templateCiraig);
markerAgeco.bindPopup(templateAgeco);
markerEllio.bindPopup(templateEllio);

const markersD = [markerCiraig, markerAgeco, markerEllio];

let isMarkerVisibleD = true;
let btnD = document.querySelectorAll('[data-js-btnD]');

for (let i = 0; i < btnD.length; i++) {
    btnD[i].addEventListener('click', function () {
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
}

// Role E

let markerEeq = L.marker([45.49349345929512, -73.57507804884581], { icon: markerE }).addTo(map);
let markerCartier = L.marker([45.41341971611436, -73.01844027302089], { icon: markerE }).addTo(map);
let markerBraque = L.marker([45.505540930225855, -73.55490342042299], { icon: markerE }).addTo(map);
let markerPigeon = L.marker([45.50579339931251, -73.55534293510962], { icon: markerE }).addTo(map);

const templateEeq = createPopupTemplate('div-ecoconception', 'E', 'EEQ', 'img/logo/ABC/EEQ_Logo_FR_EnsembleSeul_Avril2022_F-removebg-preview.png', '1600, bd René-Lévesque Blvd W suite 600', "Montréal (Québec)&nbsp; H3H 1P9", "https://www.eeq.ca/", 'eeq.ca');
const templateCartier = createPopupTemplate('div-ecoconception', 'E', 'Cartier', 'img/logo/ABC/Cartier-emballage_logo-removebg-preview.png', '2325, Industriel', "Saint-Césaire (Québec)&nbsp; J0L 1T0", "https://www.emballagecartier.com/", 'emballagecartier.com');
const templateBraque = createPopupTemplate('div-ecoconception', 'E', 'Braque', 'img/logo/ABC/Braque_logo_Final_Black-removebg-preview.png', '19, rue Le Royer Ouest, bureau 200', "Montréal (Québec)&nbsp; H2Y 1W4", "https://www.braque.ca/", 'braque.ca');
const templatePigeon = createPopupTemplate('div-ecoconception', 'E', 'Pigeon', 'img/logo/ABC/Pigeon-Brands.svg', '480, bd Saint-Laurent', "Montréal (Québec)&nbsp; H2Y 3Y7", "https://www.pigeonbrands.com/", 'pigeonbrands.com');

markerEeq.bindPopup(templateEeq);
markerCartier.bindPopup(templateCartier);
markerBraque.bindPopup(templateBraque);
markerPigeon.bindPopup(templatePigeon);

const markersE = [markerEeq, markerCartier, markerBraque, markerPigeon];

let isMarkerVisibleE = true;
let btnE = document.querySelectorAll('[data-js-btnE]');
for (let i = 0; i < btnE.length; i++) {
    btnE[i].addEventListener('click', function () {
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
}

// Role F

let markerMetro = L.marker([45.66753198529027, -73.52999613997528], { icon: markerF }).addTo(map);
let markerLoblaw = L.marker([45.5090540791043, -73.6691895306888], { icon: markerF }).addTo(map);
let markerSobeys = L.marker([45.61267045127222, -73.6056609], { icon: markerF }).addTo(map);

const templateMetro = createPopupTemplate('div-gestion-distribution', 'F', 'Metro', 'img/logo/ABC/Metro_Inc._logo.png', '11555, bd Maurice-Duplessis', "Montréal (Québec)&nbsp; H1C 1V6", "https://www.metro.ca/", 'metro.ca');
const templateLoblaw = createPopupTemplate('div-gestion-distribution', 'F', 'Loblaw', 'img/logo/ABC/Loblaws-removebg-preview.png', '400, av Sainte-Croix', "Saint-Laurent (Québec)&nbsp; H4N 3K4", "https://www.loblaws.ca/", 'loblaws.ca');
const templateSobeys = createPopupTemplate('div-gestion-distribution', 'F', 'Sobeys', 'img/logo/ABC/Sobeys-removebg-preview.png', '11281, bd Albert-Hudon', "Montréal-Nord (Québec)&nbsp; H1G 3J5", "https://www.sobeys.com/", 'sobeys.com');

markerMetro.bindPopup(templateMetro);
markerLoblaw.bindPopup(templateLoblaw);
markerSobeys.bindPopup(templateSobeys);

let markerColabor = L.marker([45.56309100212611, -73.40419000185233], { icon: markerF }).addTo(map);
// 1620 Bd de Montarville, Boucherville, QC J4B 8P4
let markerSysco = L.marker([45.56629351388272, -73.44302092642349], { icon: markerF }).addTo(map);
// 1225 Rue Volta, Boucherville, QC J4B 7M7
let markerGordon = L.marker([45.565936445536785, -73.3991569497242], { icon: markerF }).addTo(map);
// 550 Rue Louis-Pasteur, Boucherville, QC J4B 7Z1
let markerCourchesne = L.marker([45.626109350712994, -73.5525686558714], { icon: markerF }).addTo(map);
// 9761 Bd des Sciences, Anjou, QC H1J 0A6

const templateColabor = createPopupTemplate('div-gestion-distribution', 'F', 'Colabor', 'img/logo/ABC/Colabor-removebg-preview.png', '1620, bd de Montarville', "Boucherville (Québec)&nbsp; J4B 8P4", "https://www.colabor.com/", 'colabor.com');
const templateSysco = createPopupTemplate('div-gestion-distribution', 'F', 'Sysco', 'img/logo/ABC/Sysco-Logo-removebg-preview.png', '1225, rue Volta', "Boucherville (Québec)&nbsp; J4B 7M7", "https://www.sysco.ca/", 'sysco.ca');
const templateGordon = createPopupTemplate('div-gestion-distribution', 'F', 'Gordon', 'img/logo/ABC/Gordon_Service-alimentaire-removebg-preview.png', '550, rue Louis-Pasteur', "Boucherville (Québec)&nbsp; J4B 7Z1", "https://gfs.ca/fr-ca/", 'gfs.ca');
const templateCourchesne = createPopupTemplate('div-gestion-distribution', 'F', 'Courchesne', 'img/logo/ABC/Courschesne-Larose-removebg-preview.png', '9761, bd des Sciences', "Anjou (Québec)&nbsp; H1J 0A6", "https://courchesnelarose.com/", 'courchesnelarose.com');

markerColabor.bindPopup(templateColabor);
markerSysco.bindPopup(templateSysco);
markerGordon.bindPopup(templateGordon);
markerCourchesne.bindPopup(templateCourchesne);

let markerMaturin = L.marker([45.544477857567955, -73.49202986526367], { icon: markerF }).addTo(map);
let markerLufa = L.marker([45.501525587988496, -73.7089643923301], { icon: markerF }).addTo(map);
let markerVoila = L.marker([45.476962335284426, -73.79766461383103], { icon: markerF }).addTo(map);

const templateMaturin = createPopupTemplate('div-gestion-distribution', 'F', 'Maturin', 'img/logo/ABC/Maturin-Logo-removebg-preview.png', '600, bd Roland-Therrien', "Longueuil (Québec)&nbsp; J4H 3V9", "https://www.maturin.ca/", 'maturin.ca');
const templateLufa = createPopupTemplate('div-gestion-distribution', 'F', 'Fermes Lufa', 'img/logo/ABC/Fermes-Lufa_Logo-removebg-preview.png', '3075, bd Thimens', "Saint-Laurent (Québec)&nbsp; H4R 1Y2", "https://montreal.lufa.com/fr", 'lufa.com');
const templateVoila = createPopupTemplate('div-gestion-distribution', 'F', 'Voilà par IGA', 'img/logo/ABC/Voila_par_IGA-removebg-preview.png', '2400, rte Transcanadienne', "Pointe-Claire (Québec)&nbsp; H9R 1B1", "https://www.iga.net/fr/voila", 'iga.net');

markerMaturin.bindPopup(templateMaturin);
markerLufa.bindPopup(templateLufa);
markerVoila.bindPopup(templateVoila);

let markerAda = L.marker([45.53069307910462, -73.5633780306883], { icon: markerF }).addTo(map);
let markerCqcd = L.marker([45.526871883156154, -73.57501417186553], { icon: markerF }).addTo(map);

const templateAda = createPopupTemplate('div-gestion-distribution', 'F', 'ADAQ', 'img/logo/ABC/Association_des_detaillants_en_alimentation_du_Quebec_ADAQ-removebg-preview.png', '2120, rue Sherbrooke E', "Montréal (Québec)&nbsp; H2K 1C3", "https://www.adaq.qc.ca/", 'adaq.qc.ca');
const templateCqcd = createPopupTemplate('div-gestion-distribution', 'F', 'CQCD', 'img/logo/ABC/CQCD-Logo_Crop-removebg-preview.png', '4284, rue de la Roche', "Montréal (Québec)&nbsp; H2J 3H9", "https://www.cqcd.org/", 'cqcd.org');

markerAda.bindPopup(templateAda);
markerCqcd.bindPopup(templateCqcd);

const markersF = [markerSysco, markerGordon, markerCourchesne, markerMaturin, markerLufa, markerVoila, markerAda, markerCqcd, markerLoblaw, markerSobeys, markerMetro, markerColabor];

let isMarkerVisibleF = true;
let btnF = document.querySelectorAll('[data-js-btnF]');

for (let i = 0; i < btnF.length; i++) {
    btnF[i].addEventListener('click', function (e) {
        if (isMarkerVisibleF) {
            for (let i = 0; i < markersF.length; i++) {
                map.removeLayer(markersF[i]);
            }
            isMarkerVisibleF = false;
        } else {
            for (let i = 0; i < markersF.length; i++) {
                map.addLayer(markersF[i]);
            }
            isMarkerVisibleF = true;
        }
    })
}

const markersApprovisionnement = [markerTCPackaging, markerProAmpac, markerStJean, markerCarrousel, markerDuropac, markerTalthi, markerLelys, markerSteJulie, markerAlliance, markerAbeille, markerAxia, markerSnackdepot];

const markersDevTech = [markerItegaA, markerEurofins, markerRoundup, markerMicom, markerItegaC, markerInteretec, markerUq, markerCiraig, markerAgeco, markerEllio, markerEeq, markerCartier, markerBraque, markerPigeon, markerSysco, markerGordon, markerCourchesne, markerMaturin, markerLufa, markerVoila, markerAda, markerCqcd, markerLoblaw, markerSobeys, markerMetro, markerColabor];

let approIni = document.getElementById('appro-ini'),
    devTechIni = document.getElementById('dev-tech-ini'),
    divApprovMobile = document.getElementById('approvisionnement-mobile'),
    divDevTechMobile = document.getElementById('developpement-technologique-mobile');

let cpt = 0;
let cptMobile = 0;

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

divApprovMobile.addEventListener("click", function () {
    if (cptMobile === 0) {
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
    cptMobile++;
});

divDevTechMobile.addEventListener("click", function () {
    if (cptMobile === 0) {
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
    cptMobile++;
});

let markersTout = [markerProAmpac, markerStJean, markerTCPackaging, markerCarrousel, markerDuropac, markerTalthi, markerAlliance, markerLelys, markerSteJulie, markerAbeille, markerAxia, markerSnackdepot, markerItegaA, markerEurofins, markerRoundup, markerMicom, markerItegaC, markerInteretec, markerUq, markerCiraig, markerAgeco, markerEllio, markerEeq, markerCartier, markerBraque, markerPigeon, markerLoblaw, markerSobeys, markerMetro, markerColabor, markerSysco, markerGordon, markerCourchesne, markerMaturin, markerVoila, markerLufa, markerAda, markerCqcd];

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