function clock() {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();

    let clockDom = document.querySelector(".watch");

    let cw = `${hour}.${minute}`;

    clockDom.innerHTML = cw;

    setTimeout(clock, 1000)
}

clock()

let formDom = document.querySelector(".form");

formDom.addEventListener("submit", formSubmit);

let show = document.querySelector("#show");

function formSubmit(event){
    event.preventDefault();
    console.log("başarılı");

    let heValue = document.querySelector("#he").value;
    let weValue = document.querySelector("#we").value;

    if (heValue.length<=0 || weValue<=0){
        alert("Boş bırakılamaz.");
        location.reload()
    }

   if (isNaN(heValue) || isNaN(weValue)){
       alert("Numerik değer giriniz.");      
       location.reload()
   }


    let whindex = weValue/(heValue^2);
    console.log(whindex);

    let scoreCard = document.createElement('li');
    
    scoreCard.classList.add("list-group-item", "mt-3", "list",);

    
    ( whindex < 25 ) ? scoreCard.innerHTML = `Vücut Kitle Endeksiniz: ${whindex}. NORMAL.` : scoreCard.innerHTML = `Bir hekime danışmalısınız: ${whindex}. KİLOLUSUNUZ!`;
        
    show.append(scoreCard);

    try {
        if (heValue == ""){
            throw "Doğru değerleri girdiğine emin ol.";
        }
    } catch (error){
        alert(error);
        show.innerHTML = ""
        location.reload()
    };

    

}

let reset = document.querySelector(".reset");

reset.addEventListener("click", zero)

function zero(event) {
    console.log("asdfa")
    show.innerHTML = ""
}

