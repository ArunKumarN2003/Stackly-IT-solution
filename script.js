
  const cards = document.querySelectorAll(".service-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));


const counters = document.querySelectorAll('.stat-box');

const observers = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      startCounting(entry.target);
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => observers.observe(counter));
function startCounting(box) {
  const target = +box.dataset.target;
  const numberEl = box.querySelector('.stat-number');

  const duration = 2000; 
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // calculate current value
    const value = Math.floor(progress * target);
    numberEl.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      numberEl.textContent = target; 
      box.classList.add('active');  
    }
  }

  requestAnimationFrame(update);
}


  const navbar = document.getElementById('mainNav'); // ✅ FIXED

  navbar.addEventListener('show.bs.collapse', () => {
    if (window.innerWidth <= 991) {
      document.body.classList.add('nav-open');
    }
  });

  navbar.addEventListener('hidden.bs.collapse', () => {
    document.body.classList.remove('nav-open');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 991) {
      document.body.classList.remove('nav-open');
    }
  });


