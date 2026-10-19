(() => {
  const toggle = document.querySelector('.language-toggle');
  const saved = localStorage.getItem('radio4eb-language');
  let language = saved === 'zh' ? 'zh' : 'en';

  function setLanguage(next) {
    language = next;
    document.documentElement.lang = next === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
      const value = element.dataset[next];
      if (value !== undefined) element.innerHTML = value;
    });
    toggle.textContent = 'EN / ZH';
    toggle.setAttribute('aria-label', next === 'en' ? 'Switch to Chinese' : 'Switch to English');
    toggle.setAttribute('aria-pressed', String(next === 'zh'));
    document.title = next === 'en'
      ? 'Radio 4EB — Strategy Portfolio | Jason Ni'
      : 'Radio 4EB — 策略作品集 | 倪嘉翔';
    localStorage.setItem('radio4eb-language', next);
  }

  toggle.addEventListener('click', () => setLanguage(language === 'en' ? 'zh' : 'en'));
  setLanguage(language);

  const frame = document.querySelector('.pdf-frame');
  const pdfPath = 'assets/Radio4EB_Final_Report.pdf';
  fetch(pdfPath, { method: 'HEAD' }).then((response) => {
    if (!response.ok) return;
    frame.src = `${pdfPath}#view=FitH`;
    frame.hidden = false;
    document.querySelector('[data-pdf-fallback]').hidden = true;
  }).catch(() => {});
})();
