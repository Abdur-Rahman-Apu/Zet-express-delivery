const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('header nav .container-lg .collapse ul li a').forEach(link => {
    console.log(link);
    if (link.href.includes(`${activePage}`)) {

        link.classList.add('active-menu')
    }
})
