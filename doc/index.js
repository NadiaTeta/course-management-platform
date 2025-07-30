const form = document.getElementById('reflectionForm');
const langEnBtn = document.getElementById('lang-en');
const langFrBtn = document.getElementById('lang-fr');

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.getElementById('title').innerText = t.title;
  document.getElementById('greeting').innerText = t.greeting;

  document.querySelector('label[for="q1"]').innerText = t.q1;
  document.querySelector('label[for="q2"]').innerText = t.q2;
  document.querySelector('label[for="q3"]').innerText = t.q3;

  form.querySelector('button[type="submit"]').innerText = t.submit;
}

langEnBtn.addEventListener('click', () => setLanguage('en'));
langFrBtn.addEventListener('click', () => setLanguage('fr'));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Reflection submitted! (Demo)');
  form.reset();
});

setLanguage(currentLang);
