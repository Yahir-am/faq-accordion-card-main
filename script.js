const questions = document.querySelectorAll('.faq__section');
const arrows = document.querySelectorAll('.arrow');

questions.forEach((q => {
    q.addEventListener('click', () => {
        q.classList.toggle('active');
    });
}));