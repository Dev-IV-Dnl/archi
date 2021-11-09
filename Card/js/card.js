let card = document.querySelectorAll('.imgCard');

card.forEach(element => {
    element.addEventListener('mouseover', e => {
        card.forEach(elementHover => {
            elementHover.classList.add('imgHover');
        })
        if (e.target.classList.contains('imgHover')) {
            e.target.classList.remove('imgHover');
            console.log(e.target.classList);
        }
    })
    element.addEventListener('mouseout', e => {
        card.forEach(elementUnHover => {
            elementUnHover.classList.remove('imgHover');
        });
    });
});