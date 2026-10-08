document.addEventListener('DOMContentLoaded', function () { 
    //console.log("test");
    const it = document.querySelector("#IT-Infrastructure");
    it.style.display = "block";

    const informations_list = document.querySelectorAll(".info-list");
    // set all informations  llis display to none
    //informations_list.forEach(element => {melement.style.display = "none";})
    
    const service_cards = document.querySelectorAll(".service-card");
    service_cards.forEach(element => {
        element.addEventListener('click', element => {
            // get element
            //const myelement = element.target;
            // get innehtml
            //const innerhtml = myelement.innerHTML;
            console.log(element.target.dataset.info);
            
            informations_list.forEach(ele => {ele.style.display = "none";})
            const info = document.querySelector("#" + element.target.dataset.info);
            info.style.display = "block";
            info.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    /*service_cards.addEventListener('mouseover', element => {
        console.log(element);
    });*/
});