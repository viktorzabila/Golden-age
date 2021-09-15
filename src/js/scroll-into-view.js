// //============== ScrollIntoView ============================//
const headerLink = document.querySelectorAll('a[href*="#')

for (let clickLink of headerLink) {
    clickLink.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = clickLink.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

