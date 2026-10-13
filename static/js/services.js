document.addEventListener('DOMContentLoaded', function () {
    //console.log("===== iTxWave Services js =====");

    // define images path
    //const IMG = "https://www.itxwave.com/static/images/services/"; // Production
    //const IMG = "http://localhost:3000/static/images/services/"; // local
    const IMG = "static/images/services/";

    //Services dictionary
    const DOMAINS = [
    {id:"it", name:"IT & Infrastructure réseau", icon:"IT_Infrastructure_reseau.svg",
    items:["Installation de réseaux LAN/WAN","Câblage structuré","Wi-Fi professionnel","Routing & Switching","Maintenance informatique","Serveurs et équipements réseau","CCTV / vidéosurveillance","Installation et configuration","Support technique"]},
    {id:"fourniture", name:"Fourniture & Procurement", icon:"Fourniture_Procurement.svg",
    items:["Fournitures de bureau","Matériel informatique","Équipements électriques","Équipements solaires","Produits d'entretien","Matériel médical","Équipements de sécurité","Pièces détachées","Fourniture sur spécification technique","Approvisionnement local","Livraison"]},
    {id:"construction", name:"Construction, BTP & Maintenance", icon:"construction_maintenance.svg",
    items:["Construction","Réhabilitation","Rénovation","Aménagement","Électricité","Plomberie","Maintenance technique","Travaux de bâtiment"]},
    {id:"transport", name:"Transport & Logistique", icon:"transport_logistique.svg",
    items:["Transport de marchandises","Livraison","Distribution","Gestion de stocks","Gestion d'entrepôts","Transport d'équipements sensibles","Logistique événementielle"]},
    {id:"impression", name:"Impression & Communication", icon:"impression_communication.svg",
    items:["Impression numérique","Impression grand format","Flyers","Brochures","Affiches","Cartes professionnelles","Supports institutionnels","Conception graphique","Branding","Photographie","Vidéographie"]},
    {id:"hygiene", name:"Hygiène, Assainissement & Pest Control", icon:"Hygiene_Assainissement_Pest_Control.svg",
    items:["Nettoyage professionnel","Désinfection","Fumigation","Dératisation","Gestion des déchets","Entretien des espaces verts","Jardinage"]},
    {id:"placement", name:"Placement & Ressources humaines", icon:"Placement_Ressources_humaines.svg",
    items:["Personnel administratif","Réceptionnistes","Assistants administratifs","Agents de nettoyage","Jardiniers","Techniciens","Personnel logistique","Personnel de soutien","Sélection et présélection","Mise à disposition de personnel","Suivi des missions"]},
    {id:"formation", name:"Formation & Renforcement des capacités", icon:"Formation_Renforcement_des_capacites.svg", single:true,
    items:["Informatique et bureautique : Word, Excel, PowerPoint, outils numériques, gestion documentaire","Communication professionnelle et accueil","Gestion administrative et organisation du travail","Gestion des ressources humaines","Entrepreneuriat et gestion d'entreprise","Leadership et compétences managériales","Travail en équipe et gestion des conflits","Santé, sécurité et bonnes pratiques en milieu professionnel","Hygiène, assainissement et environnement","Formation du personnel nouvellement recruté"]},
    {id:"psychosocial", name:"Accompagnement psychosocial & Bien-être", icon:"Accompagnement_Psychosocial_Bien_etre.svg", single:true,
    items:["Entretiens et consultations individuelles confidentielles","Écoute, orientation et accompagnement psychosocial","Soutien face au stress et aux difficultés personnelles ou professionnelles","Accompagnement dans les situations de deuil et de perte","Gestion du stress et prévention de l'épuisement professionnel","Gestion et prévention des conflits en milieu professionnel","Sessions de soutien et d'écoute en groupe","Sensibilisation à la santé mentale et au bien-être","Ateliers sur la gestion des émotions au travail","Accompagnement dans les situations difficiles ou traumatiques","Orientation vers des professionnels spécialisés si nécessaire"]}
    ];

    const grid = document.getElementById("services-grid");

    // Get services select field in contact form
    const select = document.getElementById("domaine-select");
    select.innerHTML = '<option value="">Plusieurs services / à préciser</option>';

    // Create button for each service and add them to services grid
    DOMAINS.forEach(d=>{
        const short = d.items.slice(0,3).map(x=>x.split(":")[0]);
        const b = document.createElement("button");
        b.className="svc"; b.type="button"; b.dataset.id=d.id;
        b.innerHTML = `<div class="ic"><img src="${IMG+d.icon}" alt=""></div>
            <h3>${d.name}</h3>
            <ul>${short.map(x=>`<li>${x}</li>`).join("")}</ul>
            <span class="more">Voir les ${d.items.length} prestations</span>`;
        grid.appendChild(b);

        // Populate services select field in contact form
        select.insertAdjacentHTML("beforeend",`<option value="${d.id}">${d.name}</option>`);
    });

    // Get dialog element
    const dlg=document.getElementById("dlg");
    let current=null;

    // Add event listener on grid elemments and call dialog box if click
    grid.addEventListener("click",e=>{
        const b=e.target.closest(".svc"); if(!b) return;
        const d=DOMAINS.find(x=>x.id===b.dataset.id); current=d.id;

        // Setup dialog box
        document.getElementById("dlg-title").textContent=d.name;
        document.getElementById("dlg-icon").src=IMG+d.icon;
        document.getElementById("dlg-list").innerHTML=d.items.map(x=>`<li>${x}</li>`).join("");
        document.getElementById("dlg-body").className="dlg-body"+(d.single?" single":"");
        dlg.showModal();
    });

    // Close diaalog box on dlg-close click 
    document.getElementById("dlg-close").addEventListener("click",()=>dlg.close());
    dlg.addEventListener("click",e=>{if(e.target===dlg) dlg.close();});
    document.getElementById("dlg-cta").addEventListener("click",()=>{select.value=current; dlg.close();});

    // Setup menu
    const nav=document.getElementById("nav"), mb=nav.querySelector(".menu-btn");
    mb.addEventListener("click",()=>{const o=nav.classList.toggle("open"); mb.setAttribute("aria-expanded",o);});
    nav.querySelectorAll("#menu a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");mb.setAttribute("aria-expanded",false);}));

    // Setup contact form
    document.getElementById("quote").addEventListener("submit",e=>{
        e.preventDefault();
        const f=e.target, note=document.getElementById("form-note");
        if(!f.nom.value.trim()||!f.email.value.trim()||!f.message.value.trim()||!f.email.checkValidity()){
            note.textContent="Indiquez votre nom, un courriel valide et votre besoin pour envoyer la demande.";
            note.style.color="#A3361F"; return;
        }
        const dom=f.domaine.selectedOptions[0].text;
        const body=`Nom : ${f.nom.value}\nOrganisation : ${f.org.value}\nCourriel : ${f.email.value}\nTéléphone : ${f.tel.value}\nService : ${dom}\n\n${f.message.value}`;
        
        location.href="mailto:info@stageonehaiti.com?subject="+encodeURIComponent("Demande de devis – "+dom)+"&body="+encodeURIComponent(body);
        note.style.color=""; note.textContent="Votre messagerie s'ouvre avec la demande rédigée. Envoyez-la pour la transmettre.";
    });
});