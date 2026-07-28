function calculateRaid1() {

    const maxAP = Number(document.getElementById("ap1").value);
    const gold = Number(document.getElementById("gold1").value);
    const silver = Number(document.getElementById("silver1").value);
    const blue = Number(document.getElementById("blue1").value);
    const bronze = Number(document.getElementById("bronze1").value);

    const totalAP =
        (gold * maxAP) +
        (silver * Math.ceil(maxAP / 2)) +
        (blue * 40) +
        (bronze * 10);

    document.getElementById("totalAP1").textContent = totalAP;
}

function calculateRaid2() {

    const maxAP = Number(document.getElementById("ap2").value);
    const gold = Number(document.getElementById("gold2").value);
    const silver = Number(document.getElementById("silver2").value);
    const blue = Number(document.getElementById("blue2").value);
    const bronze = Number(document.getElementById("bronze2").value);

    const totalAP =
        (gold * maxAP) +
        (silver * Math.ceil(maxAP / 2)) +
        (blue * 40) +
        (bronze * 10);

    document.getElementById("totalAP2").textContent = totalAP;
}

function calculateAll() {
    calculateRaid1();
    calculateRaid2();
}

document.addEventListener("input", calculateAll);

window.onload = calculateAll;
