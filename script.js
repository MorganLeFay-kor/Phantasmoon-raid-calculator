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
    
    const runCount = Math.floor(totalAP / 40);

    document.getElementById("runCount1").textContent = runCount + "회";

    const bondBonus = Number(document.getElementById("bond1").value);

    const bondPoint = Math.floor(runCount * 2636 * (1 + bondBonus / 100));

    const qp = runCount * 5230000;

     document.getElementById("bondPoint1").textContent =
     bondPoint.toLocaleString() + " pt";

    document.getElementById("qp1").textContent =
    (qp / 100000000).toFixed(2) + "억";
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

    const runCount = Math.floor(totalAP / 40);

    document.getElementById("runCount2").textContent = runCount + "회";

    const bondBonus = Number(document.getElementById("bond1").value);

    const bondPoint = Math.floor(runCount * 2636 * (1 + bondBonus / 100));

    const qp = runCount * 5240000;

     document.getElementById("bondPoint1").textContent =
     bondPoint.toLocaleString() + " pt";

    document.getElementById("qp1").textContent =
    (qp / 100000000).toFixed(2) + "억";
}

function calculateAll() {
    calculateRaid1();
    calculateRaid2();
}

document.addEventListener("input", calculateAll);

window.onload = calculateAll;
