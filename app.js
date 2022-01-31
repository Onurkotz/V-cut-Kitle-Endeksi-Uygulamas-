let formDom = document.querySelector(".form");

formDom.addEventListener("submit", formSubmit);

let scoreCard = ``

function formSubmit(event){
    event.preventDefault();
    console.log("başarılı");

    let heValue = document.querySelector("#he").value;
    let weValue = document.querySelector("#we").value;

    let whindex = weValue/(heValue^2);
    console.log(whindex);

}