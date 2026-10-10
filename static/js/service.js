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
            //const services = document.querySelector('#services');
            
            console.log(getDisplayType());
            if ((getDisplayType() == "Mobile")|| (getDisplayType() == "Tablet")) {
                info.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });                
            } else {
                const service = document.querySelector("#services");
                service.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            /*
            info.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });*/
        });
    });

    

    /*service_cards.addEventListener('mouseover', element => {
        console.log(element);
    });*/
});

function getDisplayType() {
  // Mobile: viewports up to 767px wide
  if (window.matchMedia("(max-width: 767px)").matches) {
    return "Mobile";
  }
  // Tablet: viewports between 768px and 1024px wide
  else if (window.matchMedia("(min-width: 768px) and (max-width: 1024px)").matches) {
    return "Tablet";
  }
  // Desktop: viewports larger than 1024px
  else {
    return "Desktop";
  }
}