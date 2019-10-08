/* Tabs */

let info = document.querySelector(".info-header"),
tab = document.querySelectorAll(".info-header-tab"),
tabContent = document.querySelectorAll(".info-tabcontent");

function hideTabContent(a){
    for (let i = a; i<tabContent.length; i++){
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
        tab[i].classList.remove("tab-active");
    }
}
hideTabContent(1);

function showTabContent(b){
    if(tabContent[b].classList.contains("hide")){
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
        tab[b].classList.add("tab-active");   
    }
}

info.addEventListener("click", function(event){
    let target = event.target;
    if(target && target.classList.contains("info-header-tab")){
        for(let i=0; i<tab.length; i++){
            if(target == tab[i]){
                hideTabContent(0);
                showTabContent(i);
                break;
            }
        }
    }
});