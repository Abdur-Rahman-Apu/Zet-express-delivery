const activePage = window.location.pathname;

const navLinks = document.querySelectorAll('header nav .container .collapse ul li a').forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.add('active-menu')
    }
})


