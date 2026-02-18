//vyhledávání
async function hledat() {
    document.getElementById("error").innerText = "něco se pokazilo, vyzkoušejte to prosím znovu";
    await new Promise(resolve => setTimeout(resolve, 5000));
    /* 
    async řekne že funkce nebude hotová hned po spuštění
    await řekne tady se zastav a počkej
    promise reprezentuje nezadanou hodnotu
    1. resolve udává, že funkce bude říkat resolve (řešení)
    2. resolve ríká počkej čas (ms)
    */
    document.getElementById("error").innerText = "";
}


//mizení

document.getElementById("activity-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("dostihy-a-sazky-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("scrabble-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("monopoly-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("dixit-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("carcassonne-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("bang-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("kryci-jmena-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("karak-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("vybusna-kotatka-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("ubongo-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("ticket-to-ride-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("7-divu-sveta-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("jizdenky-prosim-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

//###########################################################xx

document.getElementById("duch-kosik").addEventListener("click", function () {
    const produkt = this.closest(".produkt");
    produkt.style.transition = "opacity 0.3s ease";
    produkt.style.opacity = "0";
    setTimeout(() => {
        produkt.style.display = "none";
    }, 300);
});

function activity() {
    document.getElementById("activity-karta").style.display = "block";
}

function dostihyasazky() {
    document.getElementById("dostihyasazky-karta").style.display = "block";
}

function scrabble() {
    document.getElementById("scrabble-karta").style.display = "block";
}

function monopoly() {
    document.getElementById("monopoly-karta").style.display = "block";
}

function dixit() {
    document.getElementById("dixit-karta").style.display = "block";
}

function carcassonne() {
    document.getElementById("carcassonne-karta").style.display = "block";
}

function bang() {
    document.getElementById("bang-karta").style.display = "block";
}

function krycijmena() {
    document.getElementById("krycijmena-karta").style.display = "block";
}

function karak() {
    document.getElementById("karak-karta").style.display = "block";
}

function vybusnekocky() {
    document.getElementById("vybusnekocky-karta").style.display = "block";
}

function ubongo() {
    document.getElementById("ubongo-karta").style.display = "block";
}

function tickettoride() {
    document.getElementById("tickettoride-karta").style.display = "block";
}

function sedmdivusveta() {
    document.getElementById("divu-sveta-karta").style.display = "block";
}

function jizdenkyprosim() {
    document.getElementById("jizdenky-prosim-karta").style.display = "block";
}

function duch() {
    document.getElementById("duch-karta").style.display = "block";
}

//odebrání z košíku

//################################################## Rezerva 2,0

//vyhledávání
async function hledat() {
    document.getElementById("error").innerText = "něco se pokazilo, vyzkoušejte to prosím znovu";
    await new Promise(resolve => setTimeout(resolve, 5000));
    /* 
    async řekne že funkce nebude hotová hned po spuštění
    await řekne tady se zastav a počkej
    promise reprezentuje nezadanou hodnotu
    1. resolve udává, že funkce bude říkat resolve (řešení)
    2. resolve ríká počkej čas (ms)
    */
    document.getElementById("error").innerText = "";
}

//funkce na odebrání z obchodu a přídání do košíku

function activity() {
    document.getElementById("activity-karta").style.display = "block";
    document.getElementById("activityobchod").style.display = "none";
}

function dostihyasazky() {
    document.getElementById("dostihyasazky-karta").style.display = "block";
    document.getElementById("dostihyasazkyobchod").style.display = "none";
}

function scrabble() {
    document.getElementById("scrabble-karta").style.display = "block";
}

function monopoly() {
    document.getElementById("monopoly-karta").style.display = "block";
}

function dixit() {
    document.getElementById("dixit-karta").style.display = "block";
}

function carcassonne() {
    document.getElementById("carcassonne-karta").style.display = "block";
}

function bang() {
    document.getElementById("bang-karta").style.display = "block";
}

function krycijmena() {
    document.getElementById("krycijmena-karta").style.display = "block";
}

function karak() {
    document.getElementById("karak-karta").style.display = "block";
}

function vybusnekocky() {
    document.getElementById("vybusnekocky-karta").style.display = "block";
}

function ubongo() {
    document.getElementById("ubongo-karta").style.display = "block";
}

function tickettoride() {
    document.getElementById("tickettoride-karta").style.display = "block";
}

function sedmdivusveta() {
    document.getElementById("divu-sveta-karta").style.display = "block";
}

function jizdenkyprosim() {
    document.getElementById("jizdenky-prosim-karta").style.display = "block";
}

function duch() {
    document.getElementById("duch-karta").style.display = "block";
}

//funkce na odebrání z košíku a dání zpět do obchodu

function activitykosik() {
    document.getElementById("activity-karta").style.display = "none";
}

function dostihyasazkykosik() {
    document.getElementById("dostihyasazky-karta").style.display = "none";
}

function scrabblekosik() {
    document.getElementById("scrabble-karta").style.display = "none";
}

function monopolykosik() {
    document.getElementById("monopoly-karta").style.display = "none";
}

function dixitkosik() {
    document.getElementById("dixit-karta").style.display = "none";
}

function carcassonnekosik() {
    document.getElementById("carcassonne-karta").style.display = "none";
}

function bangkosik() {
    document.getElementById("bang-karta").style.display = "none";
}

function krycijmenakosik() {
    document.getElementById("krycijmena-karta").style.display = "none";
}

function karakkosik() {
    document.getElementById("karak-karta").style.display = "none";
}

function vybusnekockykosik() {
    document.getElementById("vybusnekocky-karta").style.display = "none";
}

function ubongokosik() {
    document.getElementById("ubongo-karta").style.display = "none";
}

function tickettoridekosik() {
    document.getElementById("tickettoride-karta").style.display = "none";
}

function sedmdivusvetakosik() {
    document.getElementById("divu-sveta-karta").style.display = "none";
}

function jizdenkyprosimkosik() {
    document.getElementById("jizdenky-prosim-karta").style.display = "none";
}

function duchkosik() {
    document.getElementById("duch-karta").style.display = "none";
}