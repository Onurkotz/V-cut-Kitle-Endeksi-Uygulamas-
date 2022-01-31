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
    scoreCard.classList.add("list-group-item", "mt-3", "list");
    
    
    if ( whindex < 20 ) {
        scoreCard.innerHTML = `Vücut Kitle Endeksiniz: ${whindex}. ZAYIFSINIZ!`;
        show.append(scoreCard);
    } else if ( 20 < whindex < 25 ) {
        scoreCard.innerHTML = `Vücut Kitle Endeksiniz: ${whindex}. NORMAL`;
        show.append(scoreCard);
    } else if ( 25 < whindex < 30 ) {
        scoreCard.innerHTML = `Bir hekime danışmalısınız: ${whindex}. KİLOLUSUNUZ!`;
        show.append(scoreCard);
    } 

    

    
    


}



/*



if ( 30 < whindex ) {
    scoreCard.innerHTML = `Acilen bir uzmandan destek almalısınız: ${whindex}. OBEZ!!!`;
    show.append(scoreCard);
}*/