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