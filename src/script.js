(function () {
  // Card theme switcher
  var pass = document.getElementById('livepass');
  var names = { cafe: 'Kopi Senja', salon: 'Salon Mawar', bakery: 'Roti Pagi' };
  var initials = { cafe: 'K', salon: 'M', bakery: 'R' };
  document.querySelectorAll('.theme').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.getAttribute('data-set');
      pass.setAttribute('data-theme', k);
      document.getElementById('passname').textContent = names[k];
      pass.querySelector('.pass-logo').textContent = initials[k];
      document.querySelectorAll('.theme').forEach(function (x) { x.classList.toggle('active', x === b); });
    });
  });

  // Lead form: DESIGN PREVIEW ONLY. Backend (PL-6) not wired yet; nothing is sent.
  var form = document.getElementById('lead');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    document.getElementById('thanks').hidden = false;
    form.querySelector('button').disabled = true;
  });

  // WhatsApp button placeholder until a number is configured
  document.querySelectorAll('[data-wa-missing]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('contact').scrollIntoView();
    });
  });
})();
