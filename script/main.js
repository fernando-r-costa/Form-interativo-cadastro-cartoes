let nameCard = document.getElementById("input-name");
let numCard = document.getElementById("input-num");
let mmExp = document.getElementById("input-mm");
let aaExp = document.getElementById("input-aa");
let cvv = document.getElementById("input-cvv");
let confirmar = document.getElementById("confirm");
let painelNumCard = document.getElementById("num-card-front");
let painelName = document.getElementById("name-card-front");
let painelExp = document.getElementById("exp-card-front");
let painelCvv = document.getElementById("cvv-card-back");
let form = document.getElementById("form");
let complete = document.getElementById("complete");
let continuar = document.getElementById("continue");
let erroName = document.getElementById("error-name");
let erroNum = document.getElementById("error-num");
let erroExp = document.getElementById("error-exp");
let erroCvv = document.getElementById("error-cvv");

complete.style.visibility = "hidden";

function contorna_esconde_name_card() {
    nameCard.style.outline = "1px solid hsl(0, 100%, 66%)";
    numCard.style.outline = "";
    mmExp.style.outline = "";
    aaExp.style.outline = "";
    cvv.style.outline = "";
    erroName.hidden = false;
    erroNum.hidden = true;
    erroExp.hidden = true;
    erroCvv.hidden = true;
}

function contorna_esconde_num_card() {
    numCard.style.outline = "1px solid hsl(0, 100%, 66%)";
    nameCard.style.outline = "";
    mmExp.style.outline = "";
    aaExp.style.outline = "";
    cvv.style.outline = "";
    erroNum.hidden = false;
    erroName.hidden = true;
    erroExp.hidden = true;
    erroCvv.hidden = true;
}

function contorna_esconde_mm_exp() {
    mmExp.style.outline = "1px solid hsl(0, 100%, 66%)";
    nameCard.style.outline = "";
    numCard.style.outline = "";
    aaExp.style.outline = "";
    cvv.style.outline = "";
    erroExp.hidden = false;
    erroName.hidden = true;
    erroNum.hidden = true;
    erroCvv.hidden = true;
}

function contorna_esconde_aa_exp() {
    aaExp.style.outline = "1px solid hsl(0, 100%, 66%)";
    nameCard.style.outline = "";
    numCard.style.outline = "";
    mmExp.style.outline = "";
    cvv.style.outline = "";
    erroExp.hidden = false;
    erroName.hidden = true;
    erroNum.hidden = true;
    erroCvv.hidden = true;
}

function contorna_esconde_cvv() {
    cvv.style.outline = "1px solid hsl(0, 100%, 66%)";
    nameCard.style.outline = "";
    numCard.style.outline = "";
    mmExp.style.outline = "";
    aaExp.style.outline = "";
    erroCvv.hidden = false;
    erroName.hidden = true;
    erroNum.hidden = true;
    erroExp.hidden = true;
}

function verifica() {
    if (nameCard.value == '') {
        erroName.innerText = "Campo obrigatório";
        contorna_esconde_name_card()
    } else if (nameCard.value.length <=2) {
        erroName.innerText = "Nome pequeno";
        contorna_esconde_name_card()
    } else if (numCard.value == '') {
        erroNum.innerText = "Campo obrigatório";
        contorna_esconde_num_card()
    } else if (isNaN(numCard.value)) {
        erroNum.innerText = "Obrigatório só números";
        contorna_esconde_num_card()
    } else if (numCard.value.length != 16) {
        erroNum.innerText = "Verificar número";
        contorna_esconde_num_card()
    } else if (mmExp.value == '') {
        erroExp.innerText = "Campo obrigatório";
        contorna_esconde_mm_exp()
    } else if (isNaN(mmExp.value)) {
        erroExp.innerText = "Obrigatório só números";
        contorna_esconde_mm_exp()
    } else if (mmExp.value.length != 2) {
        erroExp.innerText = "Verificar número";
        contorna_esconde_mm_exp()
    } else if (aaExp.value == '') {
        erroExp.innerText = "Campo obrigatório";
        contorna_esconde_aa_exp()
    } else if (isNaN(aaExp.value)) {
        erroExp.innerText = "Obrigatório só números";
        contorna_esconde_aa_exp()
    } else if (aaExp.value.length != 2) {
        erroExp.innerText = "Verificar número";
        contorna_esconde_aa_exp()
    } else if (cvv.value == '') {
        erroCvv.innerText = "Campo obrigatório";
        contorna_esconde_cvv()
    } else if (isNaN(cvv.value)) {
        erroCvv.innerText = "Obrigatório só números";
        contorna_esconde_cvv()
    } else if (cvv.value.length != 3) {
        erroCvv.innerText = "Verificar número";
        contorna_esconde_cvv()
    } else {
        erroName.hidden = true;
        erroNum.hidden = true;
        erroExp.hidden = true;
        erroCvv.hidden = true;
        nameCard.style.outline = "";
        numCard.style.outline = "";
        mmExp.style.outline = "";
        aaExp.style.outline = "";
        cvv.style.outline = "";
        painelNumCard.innerText = `${numCard.value}`;
        painelName.innerText = `${nameCard.value}`;
        painelExp.innerText = `${mmExp.value}/${aaExp.value}`;
        painelCvv.innerText = `${cvv.value}`;
        form.style.visibility = "hidden";
        complete.style.visibility = "visible";
    }
}

function reinicio() {
    window.location.reload();
}

confirmar.onclick = verifica;
continuar.onclick = reinicio;