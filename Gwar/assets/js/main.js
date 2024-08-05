// Mobile Menu
console.clear();

const hamIcon = document.getElementById('ham');
const navExpand = document.querySelectorAll('.nav-expand');
const backLink = `<li class="nav-item"><a href="javascript:;" class="nav-link nav-back-link"><i class="fas fa-caret-left"></i></a></li>`;

hamIcon.addEventListener('click', () => {
    document.body.classList.toggle('nav-is-toggled');
    hamIcon.innerHTML = (hamIcon.innerHTML === `<i class="fas fa-bars"></i>`) ? `<i class="fas fa-times"></i>` : `<i class="fas fa-bars"></i>`;
});

navExpand.forEach(item => {
    const expandContent = item.querySelector('.nav-expand-content');
    expandContent.insertAdjacentHTML('afterbegin', backLink);

    const navLink = item.querySelector('.nav-link');
    const navBackLink = item.querySelector('.nav-back-link');

    navLink.addEventListener('click', () => {
        item.classList.toggle('active');
    });

    navBackLink.addEventListener('click', () => {
        item.classList.remove('active');
    });
});


// Sticky Menu
document.addEventListener("DOMContentLoaded", function(){
    var header = document.querySelector(".header");
    var container = document.querySelector(".header .navigation");


    checkScroll();
    window.addEventListener("resize", checkScroll);

    window.addEventListener("scroll", function(){
        checkScroll();
    });

    function checkScroll() {
        var scrollPosition = window.pageXOffset || document.documentElement.scrollTop;

        var scrollThreshold = 100;

        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var isWideScreen = windowWidth > 768;

        if (isWideScreen && scrollPosition > scrollThreshold) {
            header.classList.add("fixed");
        }else{
            header.classList.remove("fixed");
        }
    }
});


// Popup
document.getElementById('playIcon').addEventListener('click', function() {
    document.getElementById('videoPopupContainer').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('videoPopupContainer').style.display = 'none';
});