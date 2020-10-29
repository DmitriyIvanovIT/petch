const generateColor = () => {
    const dyesCard = document.querySelectorAll('.dyes__card');

    dyesCard.forEach(item => {
        const dyesImg = item.querySelector('.dyes__img');

        dyesImg.style.background = `${item.dataset.color}`;
    });
};

export default generateColor;