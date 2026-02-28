(function () {
  const moon = document.querySelector('[data-moon-phase]');
  if (!moon) return;

  const gregorianText = document.querySelector('[data-gregorian-datetime]');
  const lunarText = document.querySelector('[data-lunar-datetime]');
  const text = document.querySelector('.moon-label');

  const synodicMonth = 29.53058867;
  const knownNewMoon = Date.UTC(2000, 0, 6, 18, 14, 0);

  const gregorianFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  const lunarFormatter = new Intl.DateTimeFormat('zh-CN-u-ca-chinese', {
    month: 'long',
    day: 'numeric'
  });

  const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

  function getMoonPhaseLabel(phase) {
    if (phase < 0.0625 || phase >= 0.9375) return '新月';
    if (phase < 0.1875) return '娥眉月';
    if (phase < 0.3125) return '上弦月';
    if (phase < 0.4375) return '盈凸月';
    if (phase < 0.5625) return '满月';
    if (phase < 0.6875) return '亏凸月';
    if (phase < 0.8125) return '下弦月';
    return '残月';
  }

  function render(nowMs) {
    const daysSince = (nowMs - knownNewMoon) / 86400000;
    const lunarAge = ((daysSince % synodicMonth) + synodicMonth) % synodicMonth;
    const phase = lunarAge / synodicMonth;

    // 亮暗分界沿着朔望周期平滑变化：
    // - 新月 (0.0 / 1.0) -> 0%
    // - 满月 (0.5)       -> ±100%
    // 这样接近农历十五时月盘以白色为主。
    const waxingOffset = (phase / 0.5) * 100;
    const waningOffset = -((1 - phase) / 0.5) * 100;
    const offset = phase < 0.5 ? waxingOffset : waningOffset;
    const label = getMoonPhaseLabel(phase);

    moon.style.setProperty('--phase-offset', `${offset}%`);
    moon.setAttribute('aria-label', label);
    if (text) text.textContent = label;

    if (!gregorianText || !lunarText) return;

    const nowDate = new Date(nowMs);
    const hourIndex = Math.floor((nowDate.getHours() + 1) / 2) % 12;
    const branchHour = `${earthlyBranches[hourIndex]}时`;

    gregorianText.textContent = gregorianFormatter.format(nowDate);
    lunarText.textContent = `${lunarFormatter.format(nowDate)} ${branchHour}`;
  }

  render(Date.now());
  window.setInterval(() => render(Date.now()), 1000);
})();
