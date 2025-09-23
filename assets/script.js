const jobData = [
  {
    id: "pop-up-cafe",
    title: "ポップアップカフェの接客サポート",
    company: "Blue Bottle Coffee",
    location: "東京・目黒",
    reward: "¥14,000 / 日",
    shift: "10:00 - 18:00",
    startTime: "10:00",
    endTime: "18:00",
    category: "飲食・接客",
    remote: false,
    tags: ["未経験OK", "即日支払い", "制服あり"],
    date: "2025-02-18",
    payment: "即日振込",
    transport: "目黒駅 徒歩5分",
    matchRate: 92,
    slots: 4,
    filled: 3,
    description:
      "期間限定ショップでの接客とレジサポート。注文はタブレットでの簡単操作です。",
  },
  {
    id: "ec-fulfillment",
    title: "アパレルECの発送準備",
    company: "Palette Tokyo",
    location: "東京・品川",
    reward: "¥13,200 / 日",
    shift: "09:00 - 17:00",
    startTime: "09:00",
    endTime: "17:00",
    category: "ロジスティクス",
    remote: false,
    tags: ["はじめて歓迎", "軽作業", "即日支払い"],
    date: "2025-02-19",
    payment: "週次振込",
    transport: "大井町駅 徒歩7分",
    matchRate: 88,
    slots: 6,
    filled: 2,
    description:
      "人気ブランドの新作発送に向けたピッキングと梱包。冷暖房完備のセンターです。",
  },
  {
    id: "remote-cs",
    title: "オンラインショップのカスタマーサポート",
    company: "Glow Commerce",
    location: "リモート",
    reward: "¥1,800 / 時",
    shift: "13:00 - 20:00",
    startTime: "13:00",
    endTime: "20:00",
    category: "カスタマーサポート",
    remote: true,
    tags: ["リモート対応", "チャット対応", "経験者優遇"],
    date: "2025-02-17",
    payment: "翌月15日振込",
    transport: "在宅勤務",
    matchRate: 96,
    slots: 3,
    filled: 1,
    description:
      "チャットとメールでのお問い合わせ対応。マニュアル・テンプレート完備で安心です。",
  },
  {
    id: "expo-staff",
    title: "展示会の受付・誘導スタッフ",
    company: "Connect Events",
    location: "東京ビッグサイト",
    reward: "¥16,500 / 日",
    shift: "08:00 - 17:00",
    startTime: "08:00",
    endTime: "17:00",
    category: "イベント・販促",
    remote: false,
    tags: ["大量募集", "未経験OK", "昼食支給"],
    date: "2025-02-22",
    payment: "イベント終了後即日精算",
    transport: "国際展示場駅 徒歩3分",
    matchRate: 87,
    slots: 20,
    filled: 12,
    description:
      "最新テクノロジー展示会での来場者受付と誘導業務。チームでフォローしながら進めます。",
  },
  {
    id: "data-cleansing",
    title: "スタートアップのデータクレンジング",
    company: "Inspire Analytics",
    location: "リモート / 東京",
    reward: "¥20,000 / 日",
    shift: "10:00 - 19:00",
    startTime: "10:00",
    endTime: "19:00",
    category: "オフィスワーク",
    remote: true,
    tags: ["リモート対応", "Excel", "平日限定"],
    date: "2025-02-19",
    payment: "週次締め・翌週支払い",
    transport: "在宅勤務（オフィス利用可）",
    matchRate: 91,
    slots: 2,
    filled: 1,
    description:
      "CRMデータの整備と重複チェック。オンラインでレクチャーを行うので初日から安心です。",
  },
  {
    id: "photo-assistant",
    title: "写真撮影のアシスタント",
    company: "Studio Daylight",
    location: "東京・渋谷",
    reward: "¥18,000 / 日",
    shift: "11:00 - 19:00",
    startTime: "11:00",
    endTime: "19:00",
    category: "クリエイティブ",
    remote: false,
    tags: ["経験者優遇", "機材サポート", "即日支払い"],
    date: "2025-02-20",
    payment: "翌営業日振込",
    transport: "渋谷駅 徒歩8分",
    matchRate: 94,
    slots: 3,
    filled: 2,
    description:
      "スタジオでの撮影補助とレタッチの簡単な補助業務。機材の扱いを学びたい方におすすめ。",
  },
  {
    id: "coworking-reception",
    title: "コワーキングスペースの受付スタッフ",
    company: "DayBase",
    location: "神奈川・横浜",
    reward: "¥12,000 / 日",
    shift: "09:00 - 15:00",
    startTime: "09:00",
    endTime: "15:00",
    category: "飲食・接客",
    remote: false,
    tags: ["長期歓迎", "シフト調整OK"],
    date: "2025-02-18",
    payment: "翌週払い",
    transport: "横浜駅 徒歩6分",
    matchRate: 85,
    slots: 2,
    filled: 1,
    description:
      "入退室管理とツアー案内、施設内カフェのドリンク提供補助。明るい対応ができる方歓迎。",
  },
  {
    id: "stream-moderator",
    title: "ライブ配信のコメントモデレーター",
    company: "Streamly",
    location: "リモート",
    reward: "¥8,000 / 回",
    shift: "19:00 - 23:00",
    startTime: "19:00",
    endTime: "23:00",
    category: "カスタマーサポート",
    remote: true,
    tags: ["リモート対応", "夜間帯", "即日支払い"],
    date: "2025-02-21",
    payment: "即日振込",
    transport: "在宅勤務",
    matchRate: 93,
    slots: 5,
    filled: 2,
    description:
      "リアルタイム配信でのコメント監視と簡単な翻訳対応。静かな環境での勤務が必要です。",
  },
  {
    id: "warehouse-inventory",
    title: "物流センターの棚卸しサポート",
    company: "LogiShip",
    location: "千葉・船橋",
    reward: "¥15,500 / 日",
    shift: "09:00 - 18:00",
    startTime: "09:00",
    endTime: "18:00",
    category: "ロジスティクス",
    remote: false,
    tags: ["車通勤OK", "未経験OK"],
    date: "2025-02-23",
    payment: "週次振込",
    transport: "南船橋駅 徒歩10分",
    matchRate: 83,
    slots: 10,
    filled: 6,
    description:
      "バーコードリーダーを使用した在庫カウント。チームで動くためフォロー体制も整っています。",
  },
];

const weekday = ["日", "月", "火", "水", "木", "金", "土"];

const elements = {
  results: document.getElementById("jobResults"),
  resultsCount: document.getElementById("resultsCount"),
  searchForm: document.getElementById("searchForm"),
  keyword: document.getElementById("keyword"),
  location: document.getElementById("location"),
  category: document.getElementById("category"),
  date: document.getElementById("date"),
  remoteOnly: document.getElementById("remoteOnly"),
  reset: document.getElementById("resetFilters"),
  quickFilters: document.getElementById("quickFilters"),
  sortButton: document.getElementById("sortByDate"),
  header: document.querySelector("[data-header]"),
};

let activeQuickFilter = "";
let sortAscending = true;
let searchTimeoutId;
let spotlightIndex = 0;

const spotlightElements = {
  container: document.querySelector("[data-spotlight]"),
  title: document.querySelector("[data-spotlight-title]"),
  company: document.querySelector("[data-spotlight-company]"),
  reward: document.querySelector("[data-spotlight-reward]"),
  shift: document.querySelector("[data-spotlight-shift]"),
  category: document.querySelector("[data-spotlight-category]"),
  match: document.querySelector("[data-spotlight-match]"),
  time: document.querySelector("[data-spotlight-time]"),
};

function normalise(value) {
  return value ? value.toString().trim().toLowerCase() : "";
}

function formatDateLabel(value) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return "-";
  }
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayName = weekday[date.getDay()];
  return `${month}/${day} (${dayName})`;
}

function createJobCard(job) {
  const remaining = Math.max(job.slots - job.filled, 0);
  const fillPercent = job.slots > 0 ? Math.min(100, Math.round((job.filled / job.slots) * 100)) : 0;
  const badgeTags = job.tags
    .map((tag) => `<span class="badge">${tag}</span>`)
    .join("");
  const remoteBadge = job.remote ? '<span class="badge is-remote">リモートOK</span>' : "";

  return `
    <article class="job-card" data-category="${job.category}">
      <div class="job-header">
        <div>
          <h3>${job.title}</h3>
          <p class="job-company">${job.company} · ${job.location}</p>
        </div>
        <span class="job-reward">${job.reward}</span>
      </div>
      <div class="job-badges">
        <span class="badge is-category">${job.category}</span>
        ${remoteBadge}
        ${badgeTags}
      </div>
      <p class="job-description">${job.description}</p>
      <ul class="job-meta">
        <li>
          <span>勤務日</span>
          <strong>${formatDateLabel(job.date)}</strong>
        </li>
        <li>
          <span>シフト</span>
          <strong>${job.shift}</strong>
        </li>
        <li>
          <span>報酬</span>
          <strong>${job.payment}</strong>
        </li>
        <li>
          <span>アクセス</span>
          <strong>${job.transport}</strong>
        </li>
      </ul>
      <div class="job-footer">
        <div class="availability">
          <span class="availability-label">残り${remaining}枠 / 定員${job.slots}</span>
          <div class="availability-bar">
            <span style="width: ${fillPercent}%"></span>
          </div>
        </div>
        <button class="btn secondary" type="button">今すぐ応募</button>
      </div>
    </article>
  `;
}

function renderJobs(list) {
  if (!elements.results) return;

  if (!list.length) {
    elements.results.innerHTML = `
      <div class="job-card">
        <h3>条件に合う案件が見つかりませんでした</h3>
        <p class="job-description">
          条件を少し広げて再検索するか、クイックフィルターで人気のタグから探してみましょう。
        </p>
      </div>
    `;
  } else {
    elements.results.innerHTML = list.map((job) => createJobCard(job)).join("");
  }

  if (elements.resultsCount) {
    elements.resultsCount.textContent = list.length.toString();
  }
}

function matchesKeyword(job, keyword) {
  if (!keyword) return true;
  const target = `${job.title} ${job.company} ${job.description} ${job.tags.join(" ")}`;
  return normalise(target).includes(keyword);
}

function matchesLocation(job, location) {
  if (!location) return true;
  return normalise(job.location).includes(location);
}

function matchesCategory(job, category) {
  if (!category || category === "all") return true;
  return job.category === category;
}

function matchesDate(job, dateValue) {
  if (!dateValue) return true;
  const selected = new Date(`${dateValue}T00:00:00`);
  const jobDate = new Date(`${job.date}T00:00:00`);
  return jobDate.getTime() >= selected.getTime();
}

function matchesRemote(job, remoteOnly) {
  return !remoteOnly || job.remote;
}

function matchesQuickFilter(job, tag) {
  if (!tag) return true;
  return job.tags.some((value) => value.includes(tag));
}

function applyFilters() {
  const keyword = normalise(elements.keyword?.value || "");
  const location = normalise(elements.location?.value || "");
  const category = elements.category?.value || "all";
  const dateValue = elements.date?.value || "";
  const remoteOnly = Boolean(elements.remoteOnly?.checked);

  let filtered = jobData.filter(
    (job) =>
      matchesKeyword(job, keyword) &&
      matchesLocation(job, location) &&
      matchesCategory(job, category) &&
      matchesDate(job, dateValue) &&
      matchesRemote(job, remoteOnly) &&
      matchesQuickFilter(job, activeQuickFilter)
  );

  filtered = filtered.sort((a, b) => {
    const first = new Date(`${a.date}T${a.startTime}:00`).getTime();
    const second = new Date(`${b.date}T${b.startTime}:00`).getTime();
    return sortAscending ? first - second : second - first;
  });

  renderJobs(filtered);
}

function resetFilters() {
  if (!elements.searchForm) return;
  elements.searchForm.reset();
  activeQuickFilter = "";
  document.querySelectorAll(".chip.is-active").forEach((chip) => chip.classList.remove("is-active"));
  sortAscending = true;
  if (elements.sortButton) {
    elements.sortButton.textContent = "新着順に切り替え";
  }
  applyFilters();
}

function updateSpotlight(job) {
  if (!spotlightElements.container || !job) return;
  spotlightElements.title.textContent = job.title;
  spotlightElements.company.textContent = `${job.company} / ${job.location}`;
  spotlightElements.reward.textContent = job.reward;
  spotlightElements.shift.textContent = job.shift;
  spotlightElements.category.textContent = job.category;
  spotlightElements.match.textContent = `${job.matchRate}%`;
  spotlightElements.time.textContent = calcTimeUntil(job);
}

function calcTimeUntil(job) {
  const now = new Date();
  const target = new Date(`${job.date}T${job.startTime}:00`);
  const diff = target.getTime() - now.getTime();
  if (Number.isNaN(diff)) {
    return "スケジュール確認中";
  }
  if (diff <= 0) {
    return "まもなく開始";
  }
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const days = Math.floor(diff / dayMs);
  const hours = Math.floor((diff % dayMs) / hourMs);
  const minutes = Math.floor((diff % hourMs) / 60000);

  const parts = [];
  if (days > 0) parts.push(`${days}日`);
  if (hours > 0) parts.push(`${hours}時間`);
  if (days === 0 && minutes > 0) parts.push(`${minutes}分`);
  return `開始まで ${parts.join(" ") || "あと少し"}`;
}

function rotateSpotlight() {
  spotlightIndex = (spotlightIndex + 1) % jobData.length;
  updateSpotlight(jobData[spotlightIndex]);
}

function setupHeader() {
  const header = elements.header;
  if (!header) return;
  const menuToggle = header.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-navigation");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 8) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  });

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-question");
    if (!button) return;
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      item.classList.toggle("is-open", !expanded);
    });
  });
}

function setupSearchInteractions() {
  if (!elements.searchForm) return;

  const handleInput = () => {
    clearTimeout(searchTimeoutId);
    searchTimeoutId = setTimeout(applyFilters, 200);
  };

  elements.keyword?.addEventListener("input", handleInput);
  elements.location?.addEventListener("input", handleInput);
  elements.category?.addEventListener("change", applyFilters);
  elements.date?.addEventListener("change", applyFilters);
  elements.remoteOnly?.addEventListener("change", applyFilters);

  elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });

  elements.reset?.addEventListener("click", resetFilters);

  if (elements.quickFilters) {
    elements.quickFilters.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const value = chip.dataset.filter || "";
        if (chip.classList.contains("is-active")) {
          chip.classList.remove("is-active");
          activeQuickFilter = "";
        } else {
          elements.quickFilters
            .querySelectorAll(".chip")
            .forEach((item) => item.classList.remove("is-active"));
          chip.classList.add("is-active");
          activeQuickFilter = value;
        }
        applyFilters();
      });
    });
  }

  if (elements.sortButton) {
    elements.sortButton.addEventListener("click", () => {
      sortAscending = !sortAscending;
      elements.sortButton.textContent = sortAscending
        ? "新着順に切り替え"
        : "勤務日が近い順に戻す";
      applyFilters();
    });
  }
}

function init() {
  setupHeader();
  setupFaq();
  setupSearchInteractions();
  applyFilters();
  updateSpotlight(jobData[spotlightIndex]);
  setInterval(rotateSpotlight, 7000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
