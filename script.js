const kerdesek = {
    tortenelem: [
        {
            kerdes: "Melyik évben volt a magyar honfoglalás?",
            valaszok: ["895", "1848", "1526", "1945"],
            helyes: 0
        },
        {
            kerdes: "Ki volt az első magyar király?",
            valaszok: ["Szent István", "Mátyás király", "Károly Róbert", "IV. Béla"],
            helyes: 0
        }
    ],
    allatok: [
        {
            kerdes: "Melyik a legnagyobb szárazföldi állat?",
            valaszok: ["Elefánt", "Oroszlán", "Zebra", "Gorilla"],
            helyes: 0
        },
        {
            kerdes: "Melyik madár nem tud repülni?",
            valaszok: ["Pingvin", "Bagoly", "Sas", "Galamb"],
            helyes: 0
        }
    ],
    technologia: [
        {
            kerdes: "Mi az a HTML?",
            valaszok: ["Programozási nyelv", "Szerkezeti nyelv", "Adatbázis-kezelő", "Képszerkesztő"],
            helyes: 1
        },
        {
            kerdes: "Mit jelent az AI rövidítés?",
            valaszok: ["Automatikus irányítás", "Mesterséges intelligencia", "Adat integráció", "Aszinkron interfész"],
            helyes: 1
        }
    ]
};

let aktualisKerdesek = [];
let aktualisKerdesIndex = 0;
let pontszam = 0;

function kategoriaValaszt(kategoria) {
    aktualisKerdesek = kerdesek[kategoria];
    aktualisKerdesIndex = 0;
    pontszam = 0;
    document.getElementById('pontszam').textContent = pontszam;
    document.getElementById('kategoria-valasztas').style.display = 'none';
    document.getElementById('kviz').style.display = 'block';
    megjelenitKerdes();
}

function megjelenitKerdes() {
    const kerdes = aktualisKerdesek[aktualisKerdesIndex];
    document.getElementById('kerdes').textContent = kerdes.kerdes;
    const valaszokElem = document.getElementById('valaszok');
    valaszokElem.innerHTML = '';
    kerdes.valaszok.forEach((valasz, index) => {
        const li = document.createElement('li');
        li.textContent = valasz;
        li.onclick = () => ellenorizValasz(index);
        valaszokElem.appendChild(li);
    });
    document.getElementById('visszajelzes').textContent = '';
}

function ellenorizValasz(valasztottIndex) {
    const kerdes = aktualisKerdesek[aktualisKerdesIndex];
    if (valasztottIndex === kerdes.helyes) {
        pontszam++;
        document.getElementById('visszajelzes').textContent = "Helyes válasz!";
    } else {
        document.getElementById('visszajelzes').textContent = "Rossz válasz!";
    }
    document.getElementById('pontszam').textContent = pontszam;
    document.getElementById('kovetkezo-kerdes').style.display = 'block';
}

function kovetkezoKerdes() {
    aktualisKerdesIndex++;
    if (aktualisKerdesIndex < aktualisKerdesek.length) {
        megjelenitKerdes();
        document.getElementById('kovetkezo-kerdes').style.display = 'none';
    } else {
        document.getElementById('visszajelzes').textContent = "Vége a kvíznek! Pontszámod: " + pontszam;
        document.getElementById('kovetkezo-kerdes').style.display = 'none';
    }
}
