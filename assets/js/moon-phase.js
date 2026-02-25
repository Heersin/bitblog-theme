(function () {
  const moon = document.querySelector('[data-moon-phase]');
  if (!moon) return;

  const synodicMonth = 29.53058867;
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);
  const now = Date.now();
  const daysSince = (now - knownNewMoon) / 86400000;
  const lunarAge = ((daysSince % synodicMonth) + synodicMonth) % synodicMonth;
  const phase = lunarAge / synodicMonth;

  let offset = 0;
  let label = '满月';

  if (phase < 0.125 || phase >= 0.875) {
    offset = 100;
    label = '新月';
  } else if (phase < 0.375) {
    offset = 40;
    label = '上弦月';
  } else if (phase < 0.625) {
    offset = 0;
    label = '满月';
  } else {
    offset = -40;
    label = '下弦月';
  }

  moon.style.setProperty('--phase-offset', `${offset}%`);
  moon.setAttribute('aria-label', label);
  const text = document.querySelector('.moon-label');
  if (text) text.textContent = label;
})();
