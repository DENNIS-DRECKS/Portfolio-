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

// contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbzCI-HD3hXibNmwKn-NjQFlyfMtKTV51evGIiDhCXix-_0h59FtUak1fudXYm74rREj/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('confirm')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message send successfully!"
        setTimeout(function(){
            msg.innerHTML = ""

        },1000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
