const deBtn = document.getElementById("deBtn");
const enBtn = document.getElementById("enBtn");

let language = localStorage.getItem("language") || "de";

const texts = {

    de: {

        // Navigation
        home: "Home",
        derbnes: "Derbnes",
        nerah: "Nerah",
        books: "Bücher",
        videos: "Videos",
        contact: "Kontakt",
        about: "Über",

        // Hero
        title: "DERBNES",
        subtitle: "Wo Gleichgewicht zur Realität wird.",
        enter: "BETRITT DIE WELT",

        // Worlds
        choosePath: "WÄHLE DEINEN PFAD",

        derbnesTitle: "DERBNES",
        derbnesText: "Das Gleichgewicht • Die Ewigen Gesetze",

        nerahTitle: "NERAH",
        nerahText: "Das Erste Opfer • Himmel • Hölle",

        cardButton: "BETRETEN",

        // Gallery
        gallery: "NEUESTE KUNSTWERKE"

    },

    en: {

        // Navigation
        home: "Home",
        derbnes: "Derbnes",
        nerah: "Nerah",
        books: "Books",
        videos: "Videos",
        contact: "Contact",
        about: "About",

        // Hero
        title: "DERBNES",
        subtitle: "Where Balance Becomes Reality",
        enter: "ENTER THE WORLD",

        // Worlds
        choosePath: "CHOOSE YOUR PATH",

        derbnesTitle: "DERBNES",
        derbnesText: "The Balance • The Eternal Laws",

        nerahTitle: "NERAH",
        nerahText: "The First Sacrifice • Heaven • Hell",

        cardButton: "ENTER",

        // Gallery
        gallery: "LATEST ARTWORK"

    }

};

function setText(id, text){

    const element = document.getElementById(id);

    if(element){

        element.textContent = text;

    }

}

function updateLanguage(){

    // Navigation
    setText("nav-home", texts[language].home);
    setText("nav-derbnes", texts[language].derbnes);
    setText("nav-nerah", texts[language].nerah);
    setText("nav-books", texts[language].books);
    setText("nav-videos", texts[language].videos);
    setText("nav-contact", texts[language].contact);
    setText("nav-about", texts[language].about);

    // Hero
    setText("title-main", texts[language].title);
    setText("subtitle-main", texts[language].subtitle);
    setText("enter-world", texts[language].enter);

    // Worlds
    setText("choose-path", texts[language].choosePath);

    setText("card-derbnes-title", texts[language].derbnesTitle);
    setText("card-derbnes-text", texts[language].derbnesText);

    setText("card-nerah-title", texts[language].nerahTitle);
    setText("card-nerah-text", texts[language].nerahText);

    setText("card-derbnes-button", texts[language].cardButton);
    setText("card-nerah-button", texts[language].cardButton);

    // Gallery
    setText("gallery-title", texts[language].gallery);

    localStorage.setItem("language", language);

}

if(deBtn){

    deBtn.addEventListener("click", ()=>{

        language="de";
        updateLanguage();

    });

}

if(enBtn){

    enBtn.addEventListener("click", ()=>{

        language="en";
        updateLanguage();

    });

}
// =========================
// PAGE TRANSLATIONS
// =========================

function translatePage() {

    const page = window.location.pathname.toLowerCase();

    // -------------------------
    // DERBNES
    // -------------------------

    if (page.includes("derbnes.html")) {

        const h2 = document.querySelectorAll("h2");

        if (language === "en") {

            if (h2[0]) h2[0].textContent = "WHO IS DERBNES?";
            if (h2[1]) h2[1].textContent = "THE THREE PRINCIPLES";
            if (h2[2]) h2[2].textContent = "THE SIX ETERNAL LAWS";
            if (h2[3]) h2[3].textContent = "QUOTE";

        } else {

            if (h2[0]) h2[0].textContent = "WER IST DERBNES?";
            if (h2[1]) h2[1].textContent = "DIE DREI URPRINZIPIEN";
            if (h2[2]) h2[2].textContent = "DIE SECHS EWIGEN GESETZE";
            if (h2[3]) h2[3].textContent = "ZITAT";

        }

    }

    // -------------------------
    // NERAH
    // -------------------------

    if (page.includes("nerah.html")) {

        const h2 = document.querySelectorAll("h2");

        if (language === "en") {

            if (h2[0]) h2[0].textContent = "WHO IS NERAH?";
            if (h2[1]) h2[1].textContent = "HER STORY";
            if (h2[2]) h2[2].textContent = "ABILITIES";
            if (h2[3]) h2[3].textContent = "QUOTE";

        } else {

            if (h2[0]) h2[0].textContent = "WER IST NERAH?";
            if (h2[1]) h2[1].textContent = "IHRE GESCHICHTE";
            if (h2[2]) h2[2].textContent = "FÄHIGKEITEN";
            if (h2[3]) h2[3].textContent = "ZITAT";

        }

    

}    // -------------------------
    // MAGIE
    // -------------------------

    if (page.includes("magie.html")) {

        const h2 = document.querySelectorAll("h2");

        if (language === "en") {

            if (h2[0]) h2[0].textContent = "WHAT IS MAGIC?";
            if (h2[1]) h2[1].textContent = "THE ENERGY TYPES";
            if (h2[2]) h2[2].textContent = "MORE SPECIES";

        } else {

            if (h2[0]) h2[0].textContent = "WAS IST MAGIE?";
            if (h2[1]) h2[1].textContent = "DIE ENERGIEARTEN";
            if (h2[2]) h2[2].textContent = "WEITERE WESENARTEN";

        }

        const h3 = document.querySelectorAll("h3");

        if (language === "en") {

            if (h3[0]) h3[0].textContent = "Balance";
            if (h3[1]) h3[1].textContent = "Red Energy";
            if (h3[2]) h3[2].textContent = "Pure Light";
            if (h3[3]) h3[3].textContent = "Pure Darkness";

        } else {

            if (h3[0]) h3[0].textContent = "Gleichgewicht";
            if (h3[1]) h3[1].textContent = "Rote Energie";
            if (h3[2]) h3[2].textContent = "Reines Licht";
            if (h3[3]) h3[3].textContent = "Reine Dunkelheit";

        }

    }

    // -------------------------
    // VIDEOS
    // -------------------------

    if (page.includes("videos.html")) {

        const h2 = document.querySelectorAll("h2");

        if (language === "en") {

            if (h2[0]) h2[0].textContent = "VIDEOS";
            if (h2[1]) h2[1].textContent = "OFFICIAL PLATFORMS";
            if (h2[2]) h2[2].textContent = "WHY EXTERNAL PLATFORMS?";

        } else {

            if (h2[0]) h2[0].textContent = "VIDEOS";
            if (h2[1]) h2[1].textContent = "OFFIZIELLE PLATTFORMEN";
            if (h2[2]) h2[2].textContent = "WARUM EXTERNE PLATTFORMEN?";

        }

    }

    // -------------------------
    // KONTAKT
    // -------------------------

    if (page.includes("kontakt.html")) {

        const h2 = document.querySelectorAll("h2");

        if (language === "en") {

            if (h2[0]) h2[0].textContent = "CONTACT";
            if (h2[1]) h2[1].textContent = "EMAIL";

        } else {

            if (h2[0]) h2[0].textContent = "KONTAKT";
            if (h2[1]) h2[1].textContent = "E-MAIL";

        }

    }

    // -------------------------
    // ÜBER
    // -------------------------

    if (page.includes("ueber.html")) {

        const h2 = document.querySelectorAll("h2");

        if (language === "en") {

            if (h2[0]) h2[0].textContent = "WHAT IS DERBNES?";
            if (h2[1]) h2[1].textContent = "THE WORLD";
            if (h2[2]) h2[2].textContent = "THE PROJECT";
            if (h2[3]) h2[3].textContent = "THE JOURNEY BEGINS";

        } else {

            if (h2[0]) h2[0].textContent = "WAS IST DERBNES?";
            if (h2[1]) h2[1].textContent = "DIE WELT";
            if (h2[2]) h2[2].textContent = "DAS PROJEKT";
            if (h2[3]) h2[3].textContent = "DIE REISE BEGINNT";

        }

    }    // -------------------------
    // BÜCHER
    // -------------------------

    if (page.includes("buecher.html")) {

        const h2 = document.querySelectorAll("h2");

        if(language==="en"){

            if(h2[0]) h2[0].textContent="BOOKS";
            if(h2[1]) h2[1].textContent="COMING SOON";

        }else{

            if(h2[0]) h2[0].textContent="BÜCHER";
            if(h2[1]) h2[1].textContent="BALD VERFÜGBAR";

        }

    }

    // -------------------------
    // IMPRESSUM
    // -------------------------

    if(page.includes("impressum.html")){

        const h2=document.querySelectorAll("h2");

        if(language==="en"){

            if(h2[0]) h2[0].textContent="LEGAL NOTICE";
            if(h2[1]) h2[1].textContent="COPYRIGHT";

        }else{

            if(h2[0]) h2[0].textContent="IMPRESSUM";
            if(h2[1]) h2[1].textContent="URHEBERRECHT";

        }

    }

    // -------------------------
    // DATENSCHUTZ
    // -------------------------

    if(page.includes("datenschutz.html")){

        const h2=document.querySelectorAll("h2");

        if(language==="en"){

            if(h2[0]) h2[0].textContent="PRIVACY POLICY";
            if(h2[1]) h2[1].textContent="RESPONSIBLE PERSON";
            if(h2[2]) h2[2].textContent="HOSTING";
            if(h2[3]) h2[3].textContent="COOKIES";
            if(h2[4]) h2[4].textContent="EXTERNAL LINKS";
            if(h2[5]) h2[5].textContent="YOUR RIGHTS";

        }else{

            if(h2[0]) h2[0].textContent="DATENSCHUTZ";
            if(h2[1]) h2[1].textContent="VERANTWORTLICHER";
            if(h2[2]) h2[2].textContent="HOSTING";
            if(h2[3]) h2[3].textContent="COOKIES";
            if(h2[4]) h2[4].textContent="EXTERNE LINKS";
            if(h2[5]) h2[5].textContent="DEINE RECHTE";

        }

    }

    // -------------------------
    // LICHT / DUNKELHEIT / GLEICHGEWICHT
    // -------------------------

    if(page.includes("licht.html")){

        const hero=document.querySelector("h1");

        if(hero){

            hero.textContent=(language==="en")
            ? "PURE LIGHT"
            : "REINES LICHT";

        }

    }

    if(page.includes("dunkelheit.html")){

        const hero=document.querySelector("h1");

        if(hero){

            hero.textContent=(language==="en")
            ? "PURE DARKNESS"
            : "REINE DUNKELHEIT";

        }

    }

    if(page.includes("gleichgewicht.html")){

        const hero=document.querySelector("h1");

        if(hero){

            hero.textContent=(language==="en")
            ? "BALANCE"
            : "GLEICHGEWICHT";

        }

    }

    // -------------------------
    // GESETZE
    // -------------------------
    if(page.includes("gesetz")){

        const btn=document.querySelectorAll(".btn");

        if(language==="en"){

            btn.forEach(b=>{

                b.innerHTML=b.innerHTML
                    .replace("Übersicht","Overview")
                    .replace("Zur Übersicht","Overview")
                    .replace("Gesetz","Law");

            });

        }else{

            btn.forEach(b=>{

                b.innerHTML=b.innerHTML
                    .replace("Overview","Übersicht")
                    .replace("Law","Gesetz");

            });

        }

    }

}

if(deBtn){

    deBtn.addEventListener("click",()=>{

        language="de";
        updateLanguage();
        translatePage();

    });

}

if(enBtn){

    enBtn.addEventListener("click",()=>{

        language="en";
        updateLanguage();
        translatePage();

    });

}

updateLanguage();
translatePage();
    
