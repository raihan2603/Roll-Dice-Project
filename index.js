let images=["Dice img1.png","Dice img2.png","Dice img3.png","Dice img4.png","Dice img5.png","Dice img6.png"];

let Dice=document.querySelectorAll("img");
let p=document.querySelector("p");

function roll(){
    Dice.forEach((dic)=>{
        dic.classList.add("shake");
    })
    setTimeout(() => {
        Dice.forEach((dic)=>{
            dic.classList.remove("shake");
        })
    },1000);
    let dieOneValue=Math.floor(Math.random()*6);
    let dieTwoValue=Math.floor(Math.random()*6);

    document.querySelector("#dice1").setAttribute("src",images[dieOneValue]);
    document.querySelector("#dice2").setAttribute("src",images[dieTwoValue]);

    p.innerHTML="Your Roll Dice is"+" "+((dieOneValue+1)+(dieTwoValue+1));
    console.log(dieOneValue,dieTwoValue);
}