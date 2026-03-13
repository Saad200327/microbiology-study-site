// ===== SIDEBAR TOGGLE =====
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
if (hamburger && sidebar) {
  hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
  document.addEventListener('click', e => {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
}

// ===== MARK ACTIVE NAV =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.sidebar a').forEach(a => {
  if (a.getAttribute('href') === currentPage || a.getAttribute('href') === '../' + currentPage) {
    a.classList.add('active');
  }
});

// ===== EXPAND / COLLAPSE =====
document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    const target = document.getElementById(btn.dataset.target);
    if (target) target.classList.toggle('open');
  });
});

// ===== FLASHCARDS =====
document.querySelectorAll('.flashcard').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});

// ===== QUIZ ENGINE =====
function initQuiz(quizId) {
  const container = document.getElementById(quizId);
  if (!container) return;
  const submitBtn = container.querySelector('.quiz-submit');
  const scoreEl = container.querySelector('.quiz-score');
  if (!submitBtn) return;
  submitBtn.addEventListener('click', () => {
    let score = 0, total = 0;
    container.querySelectorAll('.quiz-q').forEach(qEl => {
      total++;
      const selected = qEl.querySelector('input[type=radio]:checked');
      const feedback = qEl.querySelector('.q-feedback');
      const correct = qEl.dataset.correct;
      if (!selected) { if(feedback) { feedback.className='q-feedback incorrect'; feedback.textContent='Please select an answer.'; } return; }
      if (selected.value === correct) {
        score++;
        if(feedback) { feedback.className='q-feedback correct'; feedback.innerHTML='✅ Correct! ' + (qEl.dataset.explanation||''); }
      } else {
        if(feedback) { feedback.className='q-feedback incorrect'; feedback.innerHTML='❌ Incorrect. Correct answer: <strong>' + correct + '</strong>. ' + (qEl.dataset.explanation||''); }
      }
    });
    if(scoreEl) { scoreEl.style.display='block'; scoreEl.textContent=`Score: ${score} / ${total} (${Math.round(score/total*100)}%)`; }
  });
}
// auto-init all quizzes on page
document.querySelectorAll('.quiz-container').forEach(c => { if(c.id) initQuiz(c.id); });

// ===== GLOBAL SEARCH (top nav) =====
const searchInput = document.getElementById('global-search');
if (searchInput) {
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const q = searchInput.value.trim();
      if (q) window.location.href = 'glossary.html?q=' + encodeURIComponent(q);
    }
  });
}

// ===== GLOSSARY SEARCH =====
const glossaryInput = document.getElementById('glossary-search-input');
if (glossaryInput) {
  glossaryInput.addEventListener('input', () => {
    const q = glossaryInput.value.toLowerCase();
    document.querySelectorAll('.glossary-item').forEach(item => {
      item.classList.toggle('hidden', !item.textContent.toLowerCase().includes(q));
    });
    document.querySelectorAll('.glossary-letter').forEach(hdr => {
      const nextItems = [];
      let el = hdr.nextElementSibling;
      while(el && !el.classList.contains('glossary-letter')) {
        if(el.classList.contains('glossary-item')) nextItems.push(el);
        el = el.nextElementSibling;
      }
      hdr.classList.toggle('hidden', nextItems.every(i => i.classList.contains('hidden')));
    });
  });
  // pre-fill from URL param
  const params = new URLSearchParams(window.location.search);
  if(params.get('q')) { glossaryInput.value = params.get('q'); glossaryInput.dispatchEvent(new Event('input')); }
}
