const openModal = () => {
    const modal = document.querySelector('.modal');

    modal.classList.remove('hide');
    document.body.classList.add('lock');

    modal.addEventListener('click', e => {
        const target = e.target;

        if (target === modal || target.closest('.modal__close')) {
            modal.classList.add('hide');
            document.body.classList.remove('lock');
        }
    });
};

export default openModal;