document.addEventListener('DOMContentLoaded', function() {
    
    const localContentLabel = document.querySelector('#local-content-label');
    const localContent = document.querySelector('#local-content');
    const countryListLabel = document.querySelector('#country-list-lebel');
    const countryList = document.querySelector('#country-list');

    const all_close = document.querySelectorAll('.close');

    if (localContentLabel || countryListLabel){

        localContentLabel.style.cursor = 'pointer';
        countryListLabel.style.cursor = 'pointer';

        localContentLabel.addEventListener('click', () => {show_element(localContent)});
        countryListLabel.addEventListener('click', () => show_element(countryList));
        
        all_close[0].addEventListener('click', () => close_element(localContent));
        all_close[1].addEventListener('click', () => close_element(countryList));
        //all_close[all_close.length -1].addEventListener('click', () => close_element(countryList));
    }

    document.querySelector('.sidebar-nav').addEventListener('click', () => hideSidebar());

});

function show_element(element) {
    element.style.display = 'block';
}

function close_element(element) {
    element.style.display = 'none';
}
//hide sidebar wrapper
function hideSidebar() {
    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    const menuToggle = document.body.querySelector('.menu-toggle');
    const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');

    sidebarWrapper.classList.remove('active');
    menuToggleTimes.classList.remove('fa-xmark');
    menuToggleTimes.classList.add('fa-bars');
    menuToggle.classList.add('active');   
}