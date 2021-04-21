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



document.addEventListener("keypress", (e) => {
    if (e.key === "a" || e.key === "A")  {
        boom.pause();
        boom.currentTime = 0
        boom.play();
        pressLetterA.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterA.style.backgroundColor = "";
    }
    } else if (e.key === "s" || e.key === "S") {
        clap.currentTime = 0
        clap.play();
        pressLetterS.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterS.style.backgroundColor = "";
    }
    } else if (e.key === "d" || e.key === "D") {
        hihat.currentTime = 0
        hihat.play();
        pressLetterD.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterD.style.backgroundColor = "";
    }
    } else if (e.key === "f" || e.key === "F") {
        kick.currentTime = 0
        kick.play();
        pressLetterF.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterF.style.backgroundColor = "";
    }
    } else if (e.key === "g" || e.key === "G") {
        openhat.currentTime = 0
        openhat.play();
        pressLetterG.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterG.style.backgroundColor = "";
    }
    } else if (e.key === "h" || e.key === "H") {
        ride.currentTime = 0
        ride.play();
        pressLetterH.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterH.style.backgroundColor = "";
    }
    } else if (e.key === "j" || e.key === "J") {
        snare.currentTime = 0
        snare.play();
        pressLetterJ.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterJ.style.backgroundColor = "";
    }
    } else if (e.key === "k" || e.key === "K"){
        tink.currentTime = 0
        tink.play();
        pressLetterK.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterK.style.backgroundColor = "";
    }
    } else if (e.key === "l" || e.key === "L") {
        tom.currentTime = 0
        tom.play();
        pressLetterL.style.backgroundColor = "yellow";
        onkeyup = () => {
        pressLetterL.style.backgroundColor = "";
    }
    }
  })

