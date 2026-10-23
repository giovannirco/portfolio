(() => {
  const root = document.documentElement;
  const screens = [...document.querySelectorAll(".screen[id]")];
  const plates = new Map([...document.querySelectorAll(".rail a")].map((a) => [a.hash.slice(1), a]));

  const fit = () => {
    const tall = screens.some((s) => s.scrollHeight > window.innerHeight + 2);
    root.classList.toggle("loose", tall);
  };
  fit();
  window.addEventListener("resize", fit, { passive: true });

  let current = "";
  const mark = (id) => {
    if (id === current) return;
    current = id;
    plates.forEach((a, key) => a.setAttribute("aria-current", key === id ? "true" : "false"));
    const hash = id === screens[0].id ? "" : "#" + id;
    if (location.hash !== hash) history.replaceState(null, "", location.pathname + hash);
  };

  const seen = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) mark(e.target.id);
  }, { rootMargin: "-45% 0px -45% 0px" });
  screens.forEach((s) => seen.observe(s));
})();
