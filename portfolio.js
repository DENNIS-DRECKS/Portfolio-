/*Skills and experience functionality */
var tablinks = document.getElementsByClassName('tab-links');
var tabtexts = document.getElementsByClassName('tab-text');

function pagedisplay(event ,tabname){
    for (let tabtext of tabtexts){
        tabtext.classList.remove("active-tab");
    }
    for (let tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
    

}

var openmenu = document.getElementById("menu");
const closemenu = document.getElementById("menu");

function openMenu(){
    openmenu.style.display = "block";
}
function closeMenu(){
    openmenu.style.display= "none";
}