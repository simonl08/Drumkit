const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const pressLetterA = document.getElementById("pressA")
const pressLetterS = document.getElementById("pressS")
const pressLetterD = document.getElementById("pressD")
const pressLetterF = document.getElementById("pressF")
const pressLetterG = document.getElementById("pressG")
const pressLetterH = document.getElementById("pressH")
const pressLetterJ = document.getElementById("pressJ")
const pressLetterK = document.getElementById("pressK")
const pressLetterL = document.getElementById("pressL")



document.addEventListener('keypress',(keyValue) => {
    if (keyValue.keyCode == 97) {
        boom.currentTime = 0
        boom.play();
        pressLetterA.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterA.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 115) {
        clap.currentTime = 0
        clap.play();
        pressLetterS.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterS.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 100) {
        hihat.currentTime = 0
        hihat.play();
        pressLetterD.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterD.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 102) {
        kick.currentTime = 0
        kick.play();
        pressLetterF.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterF.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 103) {
        openhat.currentTime = 0
        openhat.play();
        pressLetterG.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterG.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 104) {
        ride.currentTime = 0
        ride.play();
        pressLetterH.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterH.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 106) {
        snare.currentTime = 0
        snare.play();
        pressLetterJ.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterJ.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 107) {
        tink.currentTime = -1
        tink.play();
        pressLetterK.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterK.style.backgroundColor = "";
    }
    } else if (keyValue.keyCode == 108) {
        tom.currentTime = 0
        tom.play();
        pressLetterL.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterL.style.backgroundColor = "";
    }
    }
  })

