const openModal = () => {
    const modal = document.querySelector('.modal');

    modal.classList.remove('hide');

    modal.addEventListener('click', e => {
        const target = e.target;

        if (target === modal || target.closest('.modal__close')) {
            modal.classList.add('hide');
        }
    });
};

export default openModal;