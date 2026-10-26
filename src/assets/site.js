(() => {
  const reel = document.querySelector(".reel");
  if (!reel) return;
  document.documentElement.classList.add("is-enhanced");
  const cards = [...reel.querySelectorAll(".case-card")];
  const links = [...document.querySelectorAll("[data-case-link]")];
  const previous = document.querySelector("[data-reel-prev]");
  const next = document.querySelector("[data-reel-next]");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  let current = 1;
  let ready = false;
  let scrollFrame = 0;

  const mark = (index) => {
    current = index;
    const id = cards[index].id;
    links.forEach((link) => link.setAttribute("aria-current", String(link.dataset.caseLink === id)));
    cards.forEach((card, position) => card.classList.toggle("is-current", position === index));
    previous.disabled = index === 0;
    next.disabled = index === cards.length - 1;
    document.querySelectorAll(".primary-nav a").forEach((link) => {
      link.setAttribute("aria-current", String(link.dataset.section === (index === 0 ? "top" : "work")));
    });
  };

  const center = (index, smooth = false) => {
    const card = cards[index];
    mark(index);
    reel.scrollTo({
      left: card.offsetLeft - (reel.clientWidth - card.offsetWidth) / 2,
      behavior: smooth && !reduced.matches ? "smooth" : "instant",
    });
  };

  const navigate = (index) => {
    const bounded = Math.max(0, Math.min(cards.length - 1, index));
    const hash = "#" + cards[bounded].id;
    if (location.hash !== hash) history.pushState(null, "", hash);
    center(bounded, true);
  };

  const readLocation = () => {
    const index = cards.findIndex((card) => "#" + card.id === location.hash);
    if (index !== -1 || !location.hash || location.hash === "#work") {
      center(index === -1 ? 1 : index);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  previous.addEventListener("click", () => navigate(current - 1));
  next.addEventListener("click", () => navigate(current + 1));
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.origin !== location.origin || link.pathname !== location.pathname) return;
    const index = cards.findIndex((card) => "#" + card.id === link.hash);
    if (index === -1) return;
    event.preventDefault();
    navigate(index);
    window.scrollTo({ top: 0, behavior: reduced.matches ? "instant" : "smooth" });
  });
  reel.addEventListener("keydown", (event) => {
    if (event.target !== reel) return;
    const index = { ArrowLeft: current - 1, ArrowRight: current + 1, Home: 0, End: cards.length - 1 }[event.key];
    if (index === undefined) return;
    event.preventDefault();
    navigate(index);
  });
  reel.addEventListener("focusin", (event) => {
    const card = event.target.closest(".case-card");
    if (card) center(cards.indexOf(card));
  });
  reel.addEventListener("scroll", () => {
    cancelAnimationFrame(scrollFrame);
    scrollFrame = requestAnimationFrame(() => {
      const middle = reel.scrollLeft + reel.clientWidth / 2;
      const index = cards.reduce((best, card, position) =>
        Math.abs(card.offsetLeft + card.offsetWidth / 2 - middle) <
        Math.abs(cards[best].offsetLeft + cards[best].offsetWidth / 2 - middle) ? position : best, 0);
      if (index === current) return;
      mark(index);
      if (ready && reel.getBoundingClientRect().bottom > 0) {
        history.replaceState(null, "", "#" + cards[index].id);
      }
    });
  }, { passive: true });
  window.addEventListener("hashchange", readLocation);
  window.addEventListener("popstate", readLocation);
  window.addEventListener("resize", () => center(current));
  const initial = cards.findIndex((card) => "#" + card.id === location.hash);
  center(initial === -1 ? 1 : initial);
  requestAnimationFrame(() => { ready = true; });
})();
