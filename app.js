const NOW = new Date();
const SAVE_KEY = "arch-eng-board-saves";
let LAST_UPDATED = "";
let ITEMS = [];

const state = {
  kind: "all",
  query: "",
  chip: "all",
  sort: "deadline",
  selected: null
};

function parseDate(value) {
  return value ? new Date(value) : null;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date || Number.isNaN(date.getTime())) return "일정 확인";
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}.${m}.${d}`;
}

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function diffDays(deadline) {
  const end = parseDate(deadline);
  if (!end) return null;
  return Math.round((startOfDay(end) - startOfDay(NOW)) / 86400000);
}

function statusOf(item) {
  const days = diffDays(item.deadline);
  const extras = item.extraDates || [];
  const lastExtra = extras.reduce((latest, row) => {
    const date = parseDate(row.date);
    return !latest || date > latest ? date : latest;
  }, null);

  if (item.tags.includes("상시·연례") || item.tags.includes("연례")) {
    if (days !== null && days < 0) return "annual";
  }
  if (days === null) return "annual";
  if (days < 0) {
    if (lastExtra && lastExtra >= startOfDay(NOW)) return "review";
    return "closed";
  }
  if (days <= 3) return "closing";
  return "open";
}

function statusLabel(status, days) {
  const map = {
    open: days === 0 ? "오늘 마감" : `D-${days}`,
    closing: days === 0 ? "오늘 마감" : `마감임박 D-${days}`,
    review: "진행·발표 대기",
    closed: "마감",
    annual: "연례·차기 공고"
  };
  return map[status];
}

function loadSaves() {
  try {
    return JSON.parse(localStorage.getItem(SAVE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveSaves(ids) {
  localStorage.setItem(SAVE_KEY, JSON.stringify(ids));
}

function matchesChip(item, chip) {
  if (chip === "all") return true;
  if (chip === "fit") return item.tags.includes("건축공학 적합");
  if (chip === "open") return ["open", "closing"].includes(statusOf(item));
  if (chip === "undergrad") return item.grade.includes("학부");
  if (chip === "saved") return loadSaves().includes(item.id);
  return true;
}

function filtered() {
  const q = state.query.trim().toLowerCase();
  return ITEMS.filter((item) => {
    if (state.kind !== "all" && item.kind !== state.kind) return false;
    if (!matchesChip(item, state.chip)) return false;
    if (!q) return true;
    const blob = [item.title, item.host, item.theme, item.tags.join(" "), item.eligibility]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  }).sort((a, b) => {
    if (state.sort === "name") return a.title.localeCompare(b.title, "ko");
    const da = parseDate(a.deadline)?.getTime() || 0;
    const db = parseDate(b.deadline)?.getTime() || 0;
    const sa = statusOf(a);
    const sb = statusOf(b);
    const rank = { closing: 0, open: 1, review: 2, annual: 3, closed: 4 };
    if (rank[sa] !== rank[sb]) return rank[sa] - rank[sb];
    return da - db;
  });
}

function renderStats() {
  const open = ITEMS.filter((i) => ["open", "closing"].includes(statusOf(i))).length;
  const contests = ITEMS.filter((i) => i.kind === "contest").length;
  const scholarships = ITEMS.filter((i) => i.kind === "scholarship").length;
  const saved = loadSaves().length;
  document.getElementById("stat-open").textContent = open;
  document.getElementById("stat-contest").textContent = contests;
  document.getElementById("stat-scholar").textContent = scholarships;
  document.getElementById("stat-saved").textContent = saved;
}

function renderUrgent() {
  const closing = ITEMS.filter((i) => statusOf(i) === "closing");
  const box = document.getElementById("urgent");
  if (!closing.length) {
    box.classList.remove("show");
    return;
  }
  box.classList.add("show");
  box.innerHTML = `<strong>지금 볼 것.</strong> ${closing
    .map((i) => `${i.title} (${formatDate(i.deadline)})`)
    .join(" · ")}`;
}

function renderCards() {
  const list = filtered();
  const root = document.getElementById("cards");
  if (!list.length) {
    root.innerHTML = `<p class="empty">조건에 맞는 항목이 없습니다. 검색어나 필터를 바꿔 보세요.</p>`;
    return;
  }
  root.innerHTML = list
    .map((item) => {
      const status = statusOf(item);
      const days = diffDays(item.deadline);
      return `
        <button class="card" data-open="${item.id}" type="button">
          <div class="card-top">
            <span class="kind ${item.kind}">${item.kind === "contest" ? "공모전" : "장학금"}</span>
            <span class="status ${status}">${statusLabel(status, days)}</span>
          </div>
          <h2>${item.title}</h2>
          <div class="meta">
            <span>${item.host}</span>
            <span class="dday">마감 ${formatDate(item.deadline)}</span>
          </div>
          <p>${item.summary}</p>
          <div class="tags">${item.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        </button>`;
    })
    .join("");
}

function renderTimeline() {
  const rows = [];
  ITEMS.forEach((item) => {
    rows.push({ date: item.deadline, title: `${item.title} 마감`, id: item.id });
    (item.extraDates || []).forEach((extra) => {
      rows.push({ date: extra.date, title: `${item.title} · ${extra.label}`, id: item.id });
    });
  });
  const upcoming = rows
    .filter((row) => parseDate(row.date) >= startOfDay(NOW))
    .sort((a, b) => parseDate(a.date) - parseDate(b.date))
    .slice(0, 6);
  document.getElementById("timeline").innerHTML = upcoming.length
    ? upcoming
        .map(
          (row) =>
            `<li><time>${formatDate(row.date)}</time><button type="button" data-open="${row.id}">${row.title}</button></li>`
        )
        .join("")
    : "<li>앞으로 잡힌 공개 일정이 없습니다.</li>";
}

function renderSaved() {
  const ids = loadSaves();
  const items = ITEMS.filter((i) => ids.includes(i.id));
  const root = document.getElementById("saved-list");
  if (!items.length) {
    root.innerHTML = "<li>아직 저장한 항목이 없습니다. 카드에서 자세히 본 뒤 저장하세요.</li>";
    return;
  }
  root.innerHTML = items
    .map((i) => `<li><button type="button" data-open="${i.id}">${i.title}</button></li>`)
    .join("");
}

function openModal(id) {
  const item = ITEMS.find((i) => i.id === id);
  if (!item) return;
  state.selected = id;
  const status = statusOf(item);
  const days = diffDays(item.deadline);
  const saved = loadSaves().includes(id);
  const extras = (item.extraDates || [])
    .map((row) => `<li>${row.label}: ${formatDate(row.date)}</li>`)
    .join("");
  document.getElementById("modal-body").innerHTML = `
    <span class="kind ${item.kind}">${item.kind === "contest" ? "공모전" : "장학금"}</span>
    <span class="status ${status}">${statusLabel(status, days)}</span>
    <h2>${item.title}</h2>
    <p><strong>${item.host}</strong> · ${item.theme}</p>
    <p>${item.summary}</p>
    <ul>
      <li>대상: ${item.eligibility}</li>
      <li>지원 규모: ${item.amount}</li>
      <li>접수: ${formatDate(item.applyStart)} ~ ${formatDate(item.deadline)}</li>
      <li>방법: ${item.method}</li>
      <li>참가비: ${item.fee}</li>
      ${extras}
    </ul>
    <ul>${item.notes.map((n) => `<li>${n}</li>`).join("")}</ul>
    <div class="actions">
      <a class="primary" href="${item.url}" target="_blank" rel="noopener">공식 안내 열기</a>
      <button class="ghost ${saved ? "saved-on" : ""}" type="button" data-save="${item.id}">${
        saved ? "저장 해제" : "관심 저장"
      }</button>
    </div>
  `;
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  state.selected = null;
}

function toggleSave(id) {
  const ids = loadSaves();
  const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
  saveSaves(next);
  renderStats();
  renderSaved();
  if (state.chip === "saved") renderCards();
  if (state.selected === id) openModal(id);
}

function bind() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      state.kind = tab.dataset.kind;
      document.querySelectorAll(".tab").forEach((t) => t.setAttribute("aria-selected", t === tab));
      renderCards();
    });
  });
  document.querySelectorAll("[data-chip]").forEach((chip) => {
    chip.addEventListener("click", () => {
      state.chip = chip.dataset.chip;
      document.querySelectorAll("[data-chip]").forEach((c) => c.classList.toggle("active", c === chip));
      renderCards();
    });
  });
  document.getElementById("search").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderCards();
  });
  document.getElementById("sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderCards();
  });
  document.body.addEventListener("click", (e) => {
    const open = e.target.closest("[data-open]");
    if (open) openModal(open.dataset.open);
    const save = e.target.closest("[data-save]");
    if (save) toggleSave(save.dataset.save);
  });
  document.getElementById("close-modal").addEventListener("click", closeModal);
  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

async function boot() {
  const response = await fetch("/api/board");
  if (!response.ok) {
    document.getElementById("cards").innerHTML =
      '<p class="empty">로컬 서버에서 실행해야 합니다. start.bat 또는 python server.py 를 켜세요.</p>';
    return;
  }
  const payload = await response.json();
  LAST_UPDATED = payload.lastUpdated;
  ITEMS = payload.items;
  document.getElementById("updated").textContent = LAST_UPDATED.replaceAll("-", ".");
  renderStats();
  renderUrgent();
  renderCards();
  renderTimeline();
  renderSaved();
  bind();
}

boot();
