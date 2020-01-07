{
    const elBurger = document.querySelector(".js-hamburger");
    const elsMenuItems = Array.from(document.querySelectorAll(".js-menu-item"));

    elBurger.addEventListener('click', () => {
        elsMenuItems.forEach(item => {
            if (item.classList.contains("active")) {
                item.classList.add("disable");
                item.classList.remove("active");
            } else if (item.classList.contains("disable")) {
                item.classList.remove("disable");
                item.classList.add("active");
            } else {
                item.classList.add("active");
            }
        })
    })

    console.log(elsMenuItems);
}

$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
});