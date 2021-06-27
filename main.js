document.addEventListener("DOMContentLoaded", function (event) {

    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener('click', () => {
                // show navbar
                nav.classList.toggle('show')
                // change icon
                toggle.classList.toggle('bx-x')
                // add padding to body
                bodypd.classList.toggle('body-pd')
                // add padding to header
                headerpd.classList.toggle('body-pd')
            })
        }
    }

    showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'))
            this.classList.add('active')
        }
    }
    linkColor.forEach(l => l.addEventListener('click', colorLink))

    // Your code to run since DOM is loaded and ready
});

// let Nagpur = ['Suritex EWaste Collector, Nagpur', 'Nagaraj E-Waste Collectors, Nagpur', 'Eco-Centric Management pvt ltd., Nagpur']

// //Searching the website
// let search = document.getElementById('Search');
//     search.addEventListener("input", function(){
    
//         let inputVal = search.value.toLowerCase();
//         // console.log('Input event fired!', inputVal);
//         // let noteCards = document.getElementsByClassName('noteCard');
//         Array.from(Nagpur).forEach(function(element){
//             let cardTxt = element.getElementsByTagName("p")[0].innerText;
//             if(cardTxt.includes(inputVal)){
//                 element.style.display = "block";
//             }
//             else{
//                 element.style.display = "none";
//             }
//             // console.log(cardTxt);
//         })
//     })