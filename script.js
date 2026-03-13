// script.js

// Expand/Collapse Sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('collapsed');
}

// Flashcard Flipping
function flipCard(cardId) {
    const card = document.getElementById(cardId);
    card.classList.toggle('flipped');
}

// Quiz Interactions
function submitQuiz(quizId) {
    const quiz = document.getElementById(quizId);
    let score = 0;
    // logic for calculating score
    alert('Your score is: ' + score);
}

// Glossary Search
function searchGlossary(term) {
    const glossary = [...document.querySelectorAll('.glossary-term')];
    glossary.forEach(item => {
        if (item.textContent.toLowerCase().includes(term.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Navigation
function navigateTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}