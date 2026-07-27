/* ============================================================================
   Cayuga County IDA — Concept Site
   Renders every section from window.CCIDA_KB, drives motion, search, modals,
   and the on-page assistant.
   ========================================================================== */
(function () {
  "use strict";
  const KB = window.CCIDA_KB;
  const $ = (s, r) => (r || document).querySelector(s);
  const el = (t, c, h) => { const n = document.createElement(t); if (c) n.className = c; if (h != null) n.innerHTML = h; return n; };
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const flag = (o) => (o && o.confirm ? ' <span title="Requires CCIDA confirmation" style="color:#C8901A;font-weight:900">⚑</span>' : "");

  /* -------------------------------------------------------------- icons */
  const ICONS = {
    milk: '<path d="M8 2h8M9 2v3.2L6.4 9.6A4 4 0 0 0 6 11.4V19a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-7.6a4 4 0 0 0-.4-1.8L15 5.2V2"/><path d="M6.3 13h11.4"/>',
    layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
    pulse: '<path d="M2 12h4l2.5-7 4 14 3-9 1.8 2H22"/>',
    route: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h5.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H15"/>',
    chat: '<path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.9-.9L3 21l1.9-4.1A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4Z"/>'
  };
  const icon = (k) => '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[k] || ICONS.bolt) + "</svg>";

  /* ------------------------------------------------------------- render */
  // Stats
  const sg = $("#statgrid");
  KB.stats.forEach((s) => {
    const d = el("div", "stat");
    const pre = s.prefix || "", suf = s.suffix || "";
    // Render the FINAL value up front so the correct number shows even if the
    // count-up never runs (no IntersectionObserver, reduced motion, JS timing).
    const final = pre + (s.value >= 1000 ? s.value.toLocaleString() : s.value) + suf;
    d.innerHTML = "<b" + (s.static ? "" : ' data-target="' + s.value + '" data-prefix="' + pre + '" data-suffix="' + suf + '"') + ">" +
      final + "</b><span>" + s.label + "</span><small>" + s.note + "</small>";
    sg.appendChild(d);
  });

  // Industries
  const ig = $("#indGrid");
  KB.industries.forEach((ind) => {
    const c = el("article", "card rv");
    c.innerHTML = '<span class="ico">' + icon(ind.icon) + "</span><h3>" + ind.name + "</h3><p>" + ind.blurb +
      '</p><button class="more" data-ind="' + ind.id + '">Learn More <span>→</span></button>';
    ig.appendChild(c);
  });
  // filler card -> chat
  const filler = el("article", "card rv");
  filler.style.cssText = "background:linear-gradient(155deg,#0B5222,#073D16);border:0;color:#fff";
  filler.innerHTML = '<span class="ico" style="background:rgba(255,255,255,.14);color:#8FE3AC">' + icon("chat") +
    '</span><h3 style="color:#fff">Something else?</h3><p style="color:rgba(255,255,255,.82)">If your operation does not fit neatly into one of these five, that is not a problem — it is a conversation. Tell us what you make and what you need.</p>' +
    '<a class="more" style="color:#8FE3AC" href="#ask">Ask the team <span>→</span></a>';
  ig.appendChild(filler);

  // Sites
  $("#sitesNote").textContent = KB.sitesNote;
  const sgrid = $("#siteGrid");
  KB.sites.forEach((s) => {
    const c = el("article", "card site-card rv");
    c.innerHTML = '<span class="badge ' + (s.sample ? "b-sample" : "b-live") + '">' + (s.sample ? "Sample record" : "Public information") + "</span>" +
      "<h3>" + s.name + "</h3><p>" + s.notes + "</p>" +
      '<dl style="margin:0"><div class="kv"><dt>Type</dt><dd>' + s.type + "</dd></div>" +
      '<div class="kv"><dt>Size</dt><dd>' + s.acres + "</dd></div>" +
      '<div class="kv"><dt>Zoning</dt><dd>' + s.zoning + "</dd></div></dl>";
    sgrid.appendChild(c);
  });

  // Distances
  const dl = $("#distList");
  const max = Math.max.apply(null, KB.distances.map((d) => d.miles));
  KB.distances.forEach((d) => {
    const li = el("li");
    li.innerHTML = '<span class="c">' + d.city + '</span><span class="bar"><i data-w="' + Math.round((d.miles / max) * 100) + '"></i></span><span class="m">' + d.miles + " mi</span>";
    dl.appendChild(li);
  });
  $("#distNote").textContent = KB.distancesNote;

  // Workforce
  const wg = $("#wfGrid");
  KB.workforce.forEach((w) => {
    wg.appendChild(el("div", "", "<b>" + w.value + "</b><span>" + w.label + "</span><small>" + w.note + "</small>"));
  });

  // Incentives
  const acc = $("#incAcc");
  KB.incentives.forEach((i, n) => {
    const d = el("details");
    if (n === 0) d.open = true;
    d.innerHTML = "<summary><span>" + i.name + flag(i) + '</span></summary><div class="body">' + i.body + "</div>";
    acc.appendChild(d);
  });

  // Employers
  const eg = $("#empGrid");
  KB.employers.forEach((e) => {
    eg.appendChild(el("div", "", "<b>" + e.name + "</b><span>" + e.sector + "</span>" + (e.note ? "<small>" + e.note + "</small>" : "")));
  });

  // Footer contacts
  const fc = $("#footContacts");
  KB.contacts.forEach((c) => {
    fc.appendChild(el("li", "", "<strong style='color:#fff'>" + c.name + "</strong><br>" + c.title + "<br><a href='mailto:" + c.email + "'>" + c.email + "</a>"));
  });

  /* -------------------------------------------------------------- motion
     Motion is strictly additive: the page is fully readable with correct
     numbers before any of this runs. We only opt into the hidden-then-reveal
     state once IntersectionObserver is confirmed available. */
  const CAN_ANIMATE = typeof IntersectionObserver === "function" && !REDUCED;

  // Distance bars fill on load rather than on observe, so they are never stuck at 0.
  const fillBars = () => document.querySelectorAll(".bar i").forEach((b) => { b.style.width = b.dataset.w + "%"; });

  if (CAN_ANIMATE) {
    document.documentElement.classList.add("js-motion");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("revealed");
        io.unobserve(en.target);
        en.target.querySelectorAll("b[data-target]").forEach(countUp);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".rv, .maparea, .stat").forEach((n) => io.observe(n));
    // setTimeout rather than rAF: rAF is throttled in backgrounded/non-compositing
    // tabs, which would leave the bars stuck at zero width.
    setTimeout(fillBars, 80);
    // Safety net: if anything is still unrevealed after 4s, show it.
    setTimeout(() => {
      document.querySelectorAll(".rv, .maparea").forEach((n) => n.classList.add("revealed"));
      document.querySelectorAll("b[data-target]").forEach(countUp);
      fillBars();
    }, 4000);
  } else {
    document.querySelectorAll(".rv, .maparea, .stat").forEach((n) => n.classList.add("revealed"));
    fillBars();
  }

  function countUp(node) {
    const target = parseFloat(node.dataset.target);
    const pre = node.dataset.prefix || "", suf = node.dataset.suffix || "";
    const fmt = (v) => pre + (target >= 1000 ? Math.round(v).toLocaleString() : Math.round(v)) + suf;
    if (REDUCED || node.dataset.counted) { node.textContent = fmt(target); return; }
    node.dataset.counted = "1"; // never run twice — the safety net may re-trigger
    const dur = 1500;
    let t0 = null;
    // Both t0 and t come from the rAF clock. The rAF timestamp origin is not
    // guaranteed to match performance.now(); mixing the two yields a negative
    // progress ratio and negative displayed numbers. If rAF never fires, the
    // element keeps the final value it was rendered with.
    requestAnimationFrame(function step(t) {
      if (t0 === null) t0 = t;
      const p = Math.max(0, Math.min((t - t0) / dur, 1));
      node.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
      else node.textContent = fmt(target); // land exactly on the value
    });
  }

  /* --------------------------------------------------------------- modal */
  const modal = $("#modal");
  function openModal(title, html) {
    $("#modalTitle").innerHTML = title;
    $("#modalBody").innerHTML = html;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    $("#modalX").focus();
  }
  function closeModal() { modal.classList.remove("open"); document.body.style.overflow = ""; }
  $("#modalX").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closeSearch(); } });

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-ind]");
    if (!b) return;
    const ind = KB.industries.find((i) => i.id === b.dataset.ind);
    if (!ind) return;
    openModal(ind.name,
      ind.body.map((p) => "<p>" + p + "</p>").join("") +
      "<h4>Company profiles we are targeting</h4><ul>" + ind.lookingFor.map((l) => "<li>" + l + "</li>").join("") + "</ul>" +
      '<div style="margin-top:28px" class="cta-center"><a class="btn" href="#ask" onclick="document.getElementById(\'modal\').classList.remove(\'open\');document.body.style.overflow=\'\'">Talk to us about ' + ind.name + "</a></div>");
  });

  /* -------------------------------------------------------------- search */
  const searchIndex = [];
  KB.industries.forEach((i) => searchIndex.push({ kind: "Industry", title: i.name, text: i.blurb + " " + i.body.join(" ") + " " + i.lookingFor.join(" "), act: () => document.querySelector('[data-ind="' + i.id + '"]').click() }));
  KB.incentives.forEach((i) => searchIndex.push({ kind: "Incentive", title: i.name, text: i.body, act: () => { location.hash = "#incentives"; } }));
  KB.sites.forEach((s) => searchIndex.push({ kind: "Site", title: s.name, text: s.notes + " " + s.type + " " + s.zoning, act: () => { location.hash = "#sites"; } }));
  KB.employers.forEach((e) => searchIndex.push({ kind: "Employer", title: e.name, text: e.sector + " " + (e.note || ""), act: () => { location.hash = "#top"; } }));
  KB.faq.forEach((f) => searchIndex.push({ kind: "Answer", title: f.q, text: f.a, act: () => { location.hash = "#ask"; ask(f.q); } }));

  const pop = $("#searchPop"), sInput = $("#searchInput"), sRes = $("#searchRes");
  function closeSearch() { pop.classList.remove("open"); $("#searchBtn").setAttribute("aria-expanded", "false"); }
  $("#searchBtn").addEventListener("click", (e) => {
    e.stopPropagation();
    const open = pop.classList.toggle("open");
    $("#searchBtn").setAttribute("aria-expanded", String(open));
    if (open) sInput.focus();
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".search-wrap")) closeSearch(); });
  sInput.addEventListener("input", () => {
    const q = sInput.value.trim().toLowerCase();
    sRes.innerHTML = "";
    if (q.length < 2) return;
    const hits = searchIndex
      .map((r) => {
        const t = r.title.toLowerCase(), x = r.text.toLowerCase();
        let sc = 0;
        if (t.includes(q)) sc += 12;
        if (x.includes(q)) sc += 4;
        q.split(/\s+/).forEach((w) => { if (w.length > 2) { if (t.includes(w)) sc += 3; if (x.includes(w)) sc += 1; } });
        return { r: r, sc: sc };
      })
      .filter((h) => h.sc > 0).sort((a, b) => b.sc - a.sc).slice(0, 7);
    if (!hits.length) { sRes.innerHTML = '<p style="padding:12px;color:#5A6B62;font-size:.88rem;margin:0">No match. Try asking the assistant instead.</p>'; return; }
    hits.forEach((h) => {
      const b = el("button", "", '<span class="r-kind">' + h.r.kind + "</span>" + h.r.title);
      b.addEventListener("click", () => { closeSearch(); sInput.value = ""; sRes.innerHTML = ""; h.r.act(); });
      sRes.appendChild(b);
    });
  });

  $("#burger").addEventListener("click", () => { location.hash = "#industries"; });

  /* ------------------------------------------------------------- the bot */
  // Retrieval corpus: every KB fact the assistant is permitted to state.
  const CORPUS = [];
  KB.faq.forEach((f) => CORPUS.push({ key: f.q + " " + (f.aliases || ""), body: f.a, w: 1.25 }));
  KB.industries.forEach((i) => CORPUS.push({
    key: i.name + " industry sector target " + i.lookingFor.join(" "),
    body: i.body.join("\n\n") + "\n\nCompany profiles we are targeting: " + i.lookingFor.join("; ") + ".", w: 1
  }));
  KB.incentives.forEach((i) => CORPUS.push({ key: i.name + " incentive benefit financing tax", body: i.name + " — " + i.body, w: 1 }));
  KB.sites.forEach((s) => CORPUS.push({
    key: s.name + " site building property land acreage " + s.type + " " + s.zoning,
    body: s.name + " (" + s.type + ", " + s.acres + ", zoned " + s.zoning + "). " + s.notes, w: .95
  }));
  CORPUS.push({
    key: "employers companies who is here largest manufacturers",
    body: "Major employers in Cayuga County: " + KB.employers.map((e) => e.name + " (" + e.sector + ")").join(", ") + ". Auburn Community Hospital is the largest employer in the county.", w: 1
  });
  CORPUS.push({
    key: "distance miles far location logistics highway interstate airport drive travel",
    body: "Approximate driving distances from Auburn: " + KB.distances.map((d) => d.city + " " + d.miles + " miles").join(", ") +
      ". Interstate 90 — the New York State Thruway — runs through Cayuga County, and Syracuse Hancock International Airport is about a 30-minute drive.", w: 1
  });
  CORPUS.push({
    key: "workforce labor population employees hiring training college skills",
    body: KB.workforce.map((w) => w.label + ": " + w.value + " (" + w.note + ")").join(". ") + ".", w: 1
  });
  CORPUS.push({
    key: "contact call email phone talk reach speak person staff director address office",
    body: "Reach " + KB.contacts.map((c) => c.name + ", " + c.title + " (" + c.email + ")").join("; ") +
      ". The office is at " + KB.meta.address + ", phone " + KB.meta.phone + ".", w: 1.1
  });

  const STOP = new Set("a an the is are was were do does did of in on at to for with and or my our your i we you it its this that there here how what when where who which can could would should will need want get got have has about please tell me any".split(" "));
  // Light stemmer so "incentives" matches "incentive", "buildings" matches "building".
  const stem = (w) => w.replace(/ies$/, "y").replace(/(ches|shes|sses|xes|zes)$/, "").replace(/s$/, "");
  const toks = (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w)).map(stem);

  function retrieve(q) {
    const qt = Array.from(new Set(toks(q)));
    if (!qt.length) return null;
    let best = null;
    CORPUS.forEach((c) => {
      if (!c._k) { c._k = new Set(toks(c.key)); c._b = new Set(toks(c.body)); }
      let sc = 0, matched = 0;
      qt.forEach((w) => {
        let hit = 0;
        if (c._k.has(w)) hit = 3;
        else { for (const k of c._k) { if (k.startsWith(w) || w.startsWith(k)) { hit = 1.5; break; } } }
        if (c._b.has(w)) hit += 0.8;
        if (hit > 0) matched++;
        sc += hit;
      });
      sc *= c.w;
      if (!best || sc > best.sc) best = { sc: sc, cov: matched / qt.length, c: c };
    });
    // Coverage guard: a question mostly about something we don't cover (e.g. tax
    // rates in another state) must fall through rather than answer with whatever
    // single word happened to match.
    return best && best.cov >= 0.5 && best.sc >= 2.8 ? best.c.body : null;
  }

  const FALLBACK = "I don't have that in my notes, and I would rather not guess at it. Michael Miller, our CEO and Executive Director, can answer directly — director@cayugacountyida.org or (315) 612-7775. What else can I tell you about sites, incentives, workforce or our target industries?";
  const GREET = "Hi — I'm the Cayuga County IDA assistant. Ask me about incentives, available sites, workforce, or the industries we're targeting.\n\nOne note up front: this is a demonstration page, and on the live site a copy of our conversation goes to CCIDA staff so a real person can follow up.";

  function reply(q) {
    const s = q.toLowerCase().trim();
    if (/^(hi|hello|hey|good (morning|afternoon|evening))\b/.test(s)) return "Hello. What are you looking to build, and where are you in the process?";
    if (/thank|thanks|appreciate/.test(s)) return "Any time. If you want to take it further, Michael Miller (director@cayugacountyida.org, 315-612-7775) handles project conversations directly.";
    if (/confidential|nda|private|anonym/.test(s)) return KB.faq.find((f) => /confidential/i.test(f.q)).a;
    if (/^who are you|^what are you|^who am i (talking|speaking)/.test(s) ||
        /\b(are you|you a|is this a)\b.*\b(bot|ai|robot|human|real|person)\b/.test(s) || /^(bot|ai)\?$/.test(s))
      return "I'm an AI assistant for the Cayuga County IDA — not a person. I answer from CCIDA's own material, and anything I can't confirm goes to Michael Miller, our Executive Director.";
    return retrieve(q) || FALLBACK;
  }

  const SUGGESTIONS = ["What incentives can I get?", "Do you have available buildings?", "How far is Syracuse?", "Tell me about the dairy sector", "What's the workforce like?", "Who do I talk to?"];

  function makeChat(logId, formId, inputId, withChips) {
    const log = document.getElementById(logId);
    const form = document.getElementById(formId);
    const input = document.getElementById(inputId);
    let started = false;

    function push(text, cls) {
      const m = el("div", "msg " + cls);
      m.textContent = text;
      log.appendChild(m);
      log.scrollTop = log.scrollHeight;
      return m;
    }
    function boot() {
      if (started) return; started = true;
      push(GREET, "bot");
    }
    function send(q) {
      boot();
      push(q, "me");
      if (withChips) $("#chips").innerHTML = "";
      const t = el("div", "msg bot typing", "<i></i><i></i><i></i>");
      log.appendChild(t); log.scrollTop = log.scrollHeight;
      setTimeout(() => { t.remove(); push(reply(q), "bot"); }, REDUCED ? 120 : 520 + Math.random() * 420);
    }
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (!v) return;
      input.value = "";
      send(v);
    });
    boot();
    if (withChips) {
      const chips = $("#chips");
      SUGGESTIONS.forEach((s) => {
        const b = el("button", "chip", s);
        b.type = "button";
        b.addEventListener("click", () => send(s));
        chips.appendChild(b);
      });
    }
    return send;
  }

  const ask = makeChat("log", "chatForm", "chatInput", true);
  const ask2 = makeChat("log2", "chatForm2", "chatInput2", false);
  window.__ask = ask;

  /* --------------------------------------------------------------- fab */
  const fab = $("#fab"), panel = $("#fabPanel");
  fab.addEventListener("click", () => {
    const open = panel.classList.toggle("open");
    fab.setAttribute("aria-label", open ? "Close chat" : "Open chat");
    if (open) $("#chatInput2").focus();
  });
})();
