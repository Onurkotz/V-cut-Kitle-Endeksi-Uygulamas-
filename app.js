let formDom = document.querySelector(".form");

formDom.addEventListener("submit", formSubmit);



function formSubmit(event){
    event.preventDefault();
    console.log("başarılı");

    let heValue = document.querySelector("#he").value;
    let weValue = document.querySelector("#we").value;


    let whindex = weValue/(heValue^2);
    console.log(whindex);

    let scoreCard = document.createElement('li');
    let show = document.querySelector("#show");
    scoreCard.classList.add("list-group-item", "mt-3", "list", "mb-5");
    
    

    
    ( whindex < 25 ) ? scoreCard.innerHTML = `Vücut Kitle Endeksiniz: ${whindex}. NORMAL.` : scoreCard.innerHTML = `Bir hekime danışmalısınız: ${whindex}. KİLOLUSUNUZ!`;
        show.append(scoreCard);


}

