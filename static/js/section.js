document.addEventListener('DOMContentLoaded', function () { 
    const apropos = document.querySelectorAll(".apropos");
    const sections_link = document.querySelectorAll(".section-link");

    apropos.forEach(element => { 
        element.addEventListener('click', element => {
            //const myelement = element.target;
            console.log("A propos cliked");
            const sections = document.querySelectorAll(".default-section");
            sections.forEach(section => {section.style.display = "none";});

            const apropos_section = document.querySelector(".apropos-section")
            apropos_section.style.display = "block";

            const page_top = document.querySelector("#page-top");
            page_top.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        })
    })

    sections_link.forEach(element => {
        element.addEventListener('click', element =>{
            //const apropos_section = document.querySelector(".apropos-section")
            //apropos_section.style.display = "none";

            const sections = document.querySelectorAll(".default-section");
            sections.forEach(section => {section.style.display = "block";});

            const apropos_section = document.querySelector(".apropos-section")
            apropos_section.style.display = "none";
            console.log(element.target.innerHTML);
        })
    })
})

