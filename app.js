(function () {
'use strict';
var C = window.SAPERE;
var CATS = {
  latin: { n: 'Latin', c: '#8A2E2E' }, soutenu: { n: 'Mots soutenus', c: '#1F5E4A' },
  style: { n: 'Figures de style', c: '#6B3FA0' }, litterature: { n: 'Littérature', c: '#7A4A1E' },
  philo: { n: 'Philo', c: '#2D3E8F' }, mytho: { n: 'Mythologie', c: '#0A6C8A' },
  ailleurs: { n: "Concepts d'ailleurs", c: '#17130F' }, art: { n: 'Art', c: '#A8481F' }, luxe: { n: 'Luxe', c: '#26262B' }
};
var byId = {};
C.jour = C.jour || [];
(function () {
  var groups = {}, order = [], out = [], more = true, i = 0;
  C.fiches.forEach(function (f) { if (!groups[f.cat]) { groups[f.cat] = []; order.push(f.cat); } groups[f.cat].push(f); });
  while (more) { more = false; order.forEach(function (c) { if (groups[c][i]) { out.push(groups[c][i]); more = true; } }); i++; }
  C.fiches = out;
})();
var byName = {};
C.fiches.forEach(function (f) { byId[f.id] = f; byName[norm(f.mot)] = f; });

/* ---------- utilitaires ---------- */
function $(s) { return document.querySelector(s); }
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function iso(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function today() { return iso(new Date()); }
function parse(s) { var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
function addDays(s, n) { var d = parse(s); d.setDate(d.getDate() + n); return iso(d); }
function diff(a, b) { return Math.round((parse(a) - parse(b)) / 864e5); }
function monday(s) { var d = parse(s); var k = (d.getDay() + 6) % 7; d.setDate(d.getDate() - k); return iso(d); }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function plural(n, s, p) { return n + ' ' + (n > 1 ? (p || s + 's') : s); }
function ic(d, extra) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + (extra || '') + '</svg>'; }
var I = {
  flame: ic('<path d="M12 3c1 4 5 5.500 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/>'),
  check: ic('<path d="M5 12.500l4.500 4.500L19 7.500"/>'),
  back: ic('<path d="M15 5l-7 7 7 7"/>'), close: ic('<path d="M6 6l12 12M18 6L6 18"/>'),
  sound: ic('<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16.500 8.500a5 5 0 0 1 0 7"/>'),
  heart: ic('<path d="M12 20s-7-4.500-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.500-7 10-7 10z"/>'),
  plus: ic('<path d="M12 5v14M5 12h14"/>'),
  sun: ic('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.500 1.500M17.500 17.500L19 19M5 19l1.500-1.500M17.500 6.500L19 5"/>'),
  news: ic('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>'),
  games: ic('<rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2"/><rect x="3" y="13" width="8" height="8" rx="2"/><rect x="13" y="13" width="8" height="8" rx="2"/>'),
  books: ic('<path d="M5 4h4v16H5zM10 4h4v16h-4zM15.500 5.500l3.500-1 3 14.500-3.500 1z"/>'),
  rings: ic('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/>'),
  q: ic('<path d="M9 9a3 3 0 1 1 4.500 2.600c-1 .600-1.500 1.200-1.500 2.400M12 18h.010"/>'),
  blank: ic('<path d="M3 8h7M14 8h7M3 16h4M11 16h10"/>'),
  link: ic('<circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6l10 12M7 18L17 6"/>'),
  grid: ic('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>'),
  odd: ic('<circle cx="6" cy="12" r="2.500"/><circle cx="12" cy="12" r="2.500"/><path d="M16.500 9.500l4 5M20.500 9.500l-4 5"/>'),
  def: ic('<path d="M5 5h14M5 10h14M5 15h9"/><path d="M16 17l2 2 3-4"/>')
};

/* ---------- état ---------- */
var KEY = 'sapere.v1';
function blank() { return { v: 1, words: {}, notes: {}, skip: {}, day: {}, streak: { count: 0, last: null, jokerWeek: null, days: {} }, q: {}, breves: {}, want: {}, wish: [], best: {}, theme: 'light', avatar: 'chouette', name: '', revs: 0, games: 0, perfect: 0, trophies: {}, t: 0, owner: null, local: false }; }
var S = blank();
function load() { try { var r = localStorage.getItem(KEY); if (r) S = Object.assign(blank(), JSON.parse(r)); } catch (e) { /* stockage indisponible */ } }
function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* idem */ } }
function save() { checkTrophies(); S.t = Date.now(); saveLocal(); cloudPush(); }
function note(id) { if (!S.notes[id]) S.notes[id] = { phrase: '', placed: false }; return S.notes[id]; }

function avail(f) { return f && !S.words[f.id] && !(S.skip[f.id] && S.skip[f.id].t === 'never'); }
function pickFiche() {
  var L = C.fiches, n = L.length, t = today();
  if (!n) return null;
  var start = Math.max(0, diff(t, C.debut)) % n;
  for (var pass = 0; pass < 2; pass++) {
    for (var i = 0; i < n; i++) {
      var f = L[(start + i) % n];
      if (!avail(f)) continue;
      if (pass === 0 && S.skip[f.id] && S.skip[f.id].d === t) continue;
      return f;
    }
  }
  return null;
}
function day() {
  var t = today();
  if (S.day.date !== t) S.day = { date: t, fiche: null, done: false, swapped: false, bonus: null, bonusDone: false, reviewed: [], q: null };
  if (!S.day.done && !avail(byId[S.day.fiche])) { var f = pickFiche(); S.day.fiche = f ? f.id : null; }
  return S.day;
}
function dueList() {
  var t = today(), d = day();
  return Object.keys(S.words).filter(function (id) { var w = S.words[id]; return byId[id] && w.stage < 4 && w.due <= t && d.reviewed.indexOf(id) < 0; })
    .sort(function (a, b) { return S.words[a].due < S.words[b].due ? -1 : 1; })
    .slice(0, Math.max(0, 5 - d.reviewed.length));
}
var GAPS = [1, 2, 4, 23];
function status(id) { var w = S.words[id]; if (!w) return null; return w.stage >= 4 ? ['Acquis', 'ok'] : w.stage >= 1 ? ['En cours', 'warn'] : ['Nouveau', 'new']; }
function markActive() {
  var t = today(), st = S.streak;
  if (st.last === t) return;
  var gap = st.last ? diff(t, st.last) : null;
  if (gap === 1) st.count++;
  else if (gap === 2 && st.jokerWeek !== monday(t)) { st.jokerWeek = monday(t); st.count++; }
  else st.count = 1;
  st.last = t; st.days[t] = 1; st.best = Math.max(st.best || 0, st.count); save();
}
function streakNow() {
  var st = S.streak; if (!st.last) return 0;
  var g = diff(today(), st.last);
  if (g <= 1) return st.count;
  if (g === 2 && st.jokerWeek !== monday(today())) return st.count;
  return 0;
}
function jokerLeft() { return S.streak.jokerWeek !== monday(today()); }
function isWeekend() { var d = new Date().getDay(); return d === 0 || d === 6; }
function starPts(cx, cy, R) {
  var pts = [];
  for (var i = 0; i < 10; i++) { var r = i % 2 ? R * 0.382 : R, a = -Math.PI / 2 + i * Math.PI / 5; pts.push((cx + r * Math.cos(a)).toFixed(2) + ',' + (cy + r * Math.sin(a)).toFixed(2)); }
  return pts.join(' ');
}
function flagSvg(f) {
  var t = f.t, c = f.c, g = '';
  if (t === 'v') c.forEach(function (x, i) { g += '<rect x="' + (90 / c.length * i) + '" y="0" width="' + (90 / c.length) + '" height="60" fill="' + x + '"/>'; });
  else if (t === 'h') c.forEach(function (x, i) { g += '<rect x="0" y="' + (60 / c.length * i) + '" width="90" height="' + (60 / c.length) + '" fill="' + x + '"/>'; });
  else if (t === 'cross') g = '<rect width="90" height="60" fill="' + c[0] + '"/><rect x="26" y="0" width="12" height="60" fill="' + c[1] + '"/><rect x="0" y="24" width="90" height="12" fill="' + c[1] + '"/>';
  else if (t === 'disc') g = '<rect width="90" height="60" fill="' + c[0] + '"/><circle cx="45" cy="30" r="18" fill="' + c[1] + '"/>';
  else if (t === 'swiss') g = '<rect width="90" height="60" fill="' + c[0] + '"/><rect x="39" y="12" width="12" height="36" fill="' + c[1] + '"/><rect x="27" y="24" width="36" height="12" fill="' + c[1] + '"/>';
  if (f.star) g += '<polygon points="' + starPts(f.star[0], f.star[1], f.star[2]) + '" fill="' + f.star[3] + '"/>';
  return '<svg viewBox="0 0 90 60" role="img" aria-label="Drapeau à identifier">' + g + '</svg>';
}
function qVisual(q) {
  if (q.flag) return '<div class="qimg flag">' + flagSvg(q.flag) + '</div>';
  if (q.img) return '<div class="qimg"><img src="' + esc(q.img) + '" alt=""></div>';
  return '';
}
function dailyBank() { return C.jour.length ? C.jour : C.questions; }
function todayQuestion() { var L = dailyBank(), n = L.length; return n ? L[Math.max(0, diff(today(), C.debut)) % n] : null; }

/* ---------- profil : stats, niveaux, trophées, avatars ---------- */
function stats() {
  var ids = Object.keys(S.words), qa = Object.keys(S.q), cats = {};
  ids.forEach(function (i) { if (byId[i]) cats[byId[i].cat] = 1; });
  return {
    fiches: ids.length, acquis: ids.filter(function (i) { return S.words[i].stage >= 4; }).length,
    phrases: Object.keys(S.notes).filter(function (i) { return S.notes[i].phrase; }).length,
    placed: Object.keys(S.notes).filter(function (i) { return S.notes[i].placed; }).length,
    qok: qa.filter(function (k) { return S.q[k] === true; }).length, qtot: qa.length,
    breves: Object.keys(S.breves).length, games: S.games || 0, revs: S.revs || 0, perfect: S.perfect || 0,
    best: Math.max(S.streak.best || 0, S.streak.count || 0), cats: Object.keys(cats).length,
    favs: ids.filter(function (i) { return S.words[i].fav; }).length, bonus: S.bonus || 0, wish: S.wish.length
  };
}
function xp(st) { return st.fiches * 20 + st.revs * 5 + st.qok * 10 + (st.qtot - st.qok) * 3 + st.breves * 5 + st.games * 10 + st.phrases * 5; }
var GOLD = '#E0B04A';
var TIERS = [[1, 'Novice', '#B0B0B8'], [3, 'Curieux', '#B5651D'], [5, 'Apprenti', '#B5651D', '#B5651D'], [8, 'Initié', '#AEB6C2'], [12, 'Lettré', '#AEB6C2', '#AEB6C2'],
  [16, 'Connaisseur', GOLD], [20, 'Érudit', GOLD, GOLD], [25, 'Savant', '#1FA37A', GOLD], [30, 'Sage', '#3A6BE0', GOLD], [40, 'Maître', '#D0314B', GOLD],
  [50, 'Légende', 'conic-gradient(#E0B04A, #D0314B, #6B3FA0, #3A6BE0, #1FA37A, #E0B04A)', GOLD]];
function tierOf(lv) { var t = 0; TIERS.forEach(function (x, i) { if (lv >= x[0]) t = i; }); return t; }
function framed(k, lv, cls) {
  var t = TIERS[tierOf(lv)];
  return '<span class="frame ' + (cls || '') + (t[3] ? ' dbl' : '') + '" style="background:' + t[2] + ';color:' + (t[3] || 'transparent') + '"><span class="frame-in">' + avatar(k) + '</span><span class="lvl">' + lv + '</span></span>';
}
function level(st) {
  var x = xp(st), lv = Math.floor(x / 100) + 1, title = TIERS[tierOf(lv)][1];
  return { lv: lv, title: title, into: x % 100, xp: x };
}
var TROPHIES = [
  ['f1', 'Premier mot', 'Apprendre 1 fiche', function (s) { return s.fiches >= 1; }],
  ['f5', 'Cinq sur cinq', 'Apprendre 5 fiches', function (s) { return s.fiches >= 5; }],
  ['f10', 'Dix de plus', 'Apprendre 10 fiches', function (s) { return s.fiches >= 10; }],
  ['f20', 'Vingt mots', 'Apprendre 20 fiches', function (s) { return s.fiches >= 20; }],
  ['f30', 'Bibliothèque', 'Apprendre 30 fiches', function (s) { return s.fiches >= 30; }],
  ['f50', 'Encyclopédie', 'Apprendre 50 fiches', function (s) { return s.fiches >= 50; }],
  ['acq', 'Gravé', 'Avoir 1 mot acquis', function (s) { return s.acquis >= 1; }],
  ['acq5', 'Mémoire longue', 'Avoir 5 mots acquis', function (s) { return s.acquis >= 5; }],
  ['acq20', 'Indélébile', 'Avoir 20 mots acquis', function (s) { return s.acquis >= 20; }],
  ['rev20', 'Assidu', 'Faire 20 révisions', function (s) { return s.revs >= 20; }],
  ['rev100', 'Métronome', 'Faire 100 révisions', function (s) { return s.revs >= 100; }],
  ['s3', 'Trois jours', 'Série de 3 jours', function (s) { return s.best >= 3; }],
  ['s7', 'Une semaine', 'Série de 7 jours', function (s) { return s.best >= 7; }],
  ['s14', 'Quinzaine', 'Série de 14 jours', function (s) { return s.best >= 14; }],
  ['s30', 'Un mois', 'Série de 30 jours', function (s) { return s.best >= 30; }],
  ['s60', 'Deux mois', 'Série de 60 jours', function (s) { return s.best >= 60; }],
  ['ph', 'Belle plume', 'Écrire 5 phrases', function (s) { return s.phrases >= 5; }],
  ['ph15', 'Styliste', 'Écrire 15 phrases', function (s) { return s.phrases >= 15; }],
  ['pl', 'En situation', 'Placer 1 mot en vrai', function (s) { return s.placed >= 1; }],
  ['pl5', 'Beau parleur', 'Placer 5 mots en vrai', function (s) { return s.placed >= 5; }],
  ['q5', 'Bonne pioche', '5 questions du jour réussies', function (s) { return s.qok >= 5; }],
  ['q10', 'Dix sur dix', '10 questions du jour réussies', function (s) { return s.qok >= 10; }],
  ['q20', 'Champion', '20 questions du jour réussies', function (s) { return s.qok >= 20; }],
  ['q40', 'Maître de midi', '40 questions du jour réussies', function (s) { return s.qok >= 40; }],
  ['b5', 'Curieux de tout', 'Lire 5 Brèves', function (s) { return s.breves >= 5; }],
  ['b15', 'Grand lecteur', 'Lire 15 Brèves', function (s) { return s.breves >= 15; }],
  ['b40', 'Puits de science', 'Lire 40 Brèves', function (s) { return s.breves >= 40; }],
  ['cat', 'Touche-à-tout', 'Apprendre dans 5 catégories', function (s) { return s.cats >= 5; }],
  ['cat9', 'Esprit complet', 'Apprendre dans les 9 catégories', function (s) { return s.cats >= 9; }],
  ['g10', 'Joueur', 'Finir 10 jeux', function (s) { return s.games >= 10; }],
  ['g30', 'Compétiteur', 'Finir 30 jeux', function (s) { return s.games >= 30; }],
  ['perf', 'Sans faute', 'Finir un quiz sans erreur', function (s) { return s.perfect >= 1; }],
  ['perf5', 'Intraitable', 'Finir 5 quiz sans erreur', function (s) { return s.perfect >= 5; }],
  ['fav5', 'Coups de cœur', 'Mettre 5 mots en favori', function (s) { return s.favs >= 5; }],
  ['bonus', 'Gourmand', 'Lire 3 fiches bonus', function (s) { return s.bonus >= 3; }],
  ['lv5', 'Niveau 5', 'Atteindre le niveau 5', function (s) { return Math.floor(xp(s) / 100) + 1 >= 5; }],
  ['lv12', 'Niveau 12', 'Atteindre le niveau 12', function (s) { return Math.floor(xp(s) / 100) + 1 >= 12; }],
  ['lv25', 'Niveau 25', 'Atteindre le niveau 25', function (s) { return Math.floor(xp(s) / 100) + 1 >= 25; }]
];
var quiet = true;
function checkTrophies() {
  var st = stats(), fresh = [];
  TROPHIES.forEach(function (t) { if (!S.trophies[t[0]] && t[3](st)) { S.trophies[t[0]] = today(); fresh.push(t[1]); } });
  if (fresh.length && !quiet) setTimeout(function () { toast('Trophée débloqué : ' + fresh.join(', ')); }, 2700);
}
var AV = {
  chouette: ['Chouette', '#0A6C8A'], renard: ['Renard', '#1F5E4A'], chat: ['Chat', '#6B3FA0'], ours: ['Ours', '#2D3E8F'],
  panda: ['Panda', '#8A2E2E'], lion: ['Lion', '#7A4A1E'], lapin: ['Lapin', '#A8481F'], pingouin: ['Pingouin', '#26262B'],
  h1: ['Court', '#2D3E8F', { skin: '#F2C9A5', hair: '#5A3A1E', style: 'court', top: '#E0B04A' }],
  h2: ['Afro', '#1F5E4A', { skin: '#8A5A36', hair: '#1C1C1E', style: 'afro', top: '#F2F2F7' }],
  h3: ['Long', '#8A2E2E', { skin: '#D9A066', hair: '#1C1C1E', style: 'long', top: '#F2F2F7' }],
  h4: ['Chignon', '#6B3FA0', { skin: '#6B4226', hair: '#1C1C1E', style: 'chignon', top: '#E0B04A' }],
  h5: ['Casquette', '#0A6C8A', { skin: '#A86B3C', hair: '#1C1C1E', style: 'casquette', top: '#F2F2F7' }],
  h6: ['Voile', '#7A4A1E', { skin: '#D9A066', hair: '#1F5E4A', style: 'voile', top: '#1F5E4A' }],
  h7: ['Roux', '#26262B', { skin: '#F2C9A5', hair: '#B5651D', style: 'long', top: '#4B3FD6' }],
  h8: ['Rasé', '#A8481F', { skin: '#6B4226', hair: '#1C1C1E', style: 'rase', top: '#F2F2F7' }]
};
function human(k) {
  var a = AV[k], o = a[2], back = '', front = '';
  if (o.style === 'afro') back = '<circle cx="32" cy="25" r="18" fill="' + o.hair + '"/>';
  else if (o.style === 'long') { back = '<path d="M16 50V28c0-10 7-17 16-17s16 7 16 17v22H38V30H26v20z" fill="' + o.hair + '"/>'; front = '<path d="M19 29c0-9 6-14 13-14s13 5 13 14c-4-4-8-6-13-6s-9 2-13 6z" fill="' + o.hair + '"/>'; }
  else if (o.style === 'court') front = '<path d="M18 30c0-11 6-16 14-16s14 5 14 16c-3-6-8-9-14-9s-11 3-14 9z" fill="' + o.hair + '"/>';
  else if (o.style === 'chignon') { back = '<circle cx="32" cy="11" r="6.500" fill="' + o.hair + '"/>'; front = '<path d="M18 30c0-11 6-15 14-15s14 4 14 15c-3-5-8-8-14-8s-11 3-14 8z" fill="' + o.hair + '"/>'; }
  else if (o.style === 'casquette') front = '<path d="M18 27c0-9 6-13 14-13s14 4 14 13z" fill="#E0B04A"/><path d="M16 26h26a2 2 0 0 1 0 4H16z" fill="#B88A2E"/>';
  else if (o.style === 'rase') front = '<path d="M19 28c0-9 6-13 13-13s13 4 13 13c-4-5-8-7-13-7s-9 2-13 7z" fill="' + o.hair + '" opacity="0.850"/>';
  else if (o.style === 'voile') back = '<path d="M14 31c0-12 8-19 18-19s18 7 18 19c0 13-4 23-18 23S14 44 14 31z" fill="' + o.hair + '"/>';
  var head = o.style === 'voile' ? '<ellipse cx="32" cy="32" rx="10.500" ry="12" fill="' + o.skin + '"/>' : '<circle cx="32" cy="31" r="13.500" fill="' + o.skin + '"/>';
  return '<svg viewBox="0 0 64 64" role="img" aria-label="Personnage ' + a[0] + '"><defs><clipPath id="c-' + k + '"><rect width="64" height="64" rx="32"/></clipPath></defs><g clip-path="url(#c-' + k + ')"><rect width="64" height="64" fill="' + a[1] + '"/>' +
    back + '<path d="M12 66c0-13 9-19 20-19s20 6 20 19z" fill="' + o.top + '"/><rect x="28" y="41" width="8" height="8" rx="3" fill="' + o.skin + '"/>' + head + front +
    '<circle cx="27" cy="31" r="1.900" fill="#1C1C1E"/><circle cx="37" cy="31" r="1.900" fill="#1C1C1E"/><path d="M27.500 36.500q4.500 3.500 9 0" fill="none" stroke="#1C1C1E" stroke-width="1.600" stroke-linecap="round"/></g></svg>';
}
function avatar(k) {
  if (!AV[k]) k = 'chouette';
  if (AV[k][2]) return human(k);
  var eyes = function (y, c) { return '<circle cx="24.500" cy="' + y + '" r="3" fill="' + c + '"/><circle cx="39.500" cy="' + y + '" r="3" fill="' + c + '"/>'; };
  var d = {
    chouette: '<path d="M13 15l11 7-8 8zM51 15l-11 7 8 8z" fill="#C9A27A"/><circle cx="32" cy="35" r="20" fill="#C9A27A"/><circle cx="24" cy="32" r="8.500" fill="#FFFFFF"/><circle cx="40" cy="32" r="8.500" fill="#FFFFFF"/><circle cx="24" cy="32" r="3.500" fill="#1C1C1E"/><circle cx="40" cy="32" r="3.500" fill="#1C1C1E"/><path d="M32 37l-3.500 6h7z" fill="#E0B04A"/>',
    renard: '<path d="M12 11l14 13-12 8zM52 11L38 24l12 8z" fill="#E8772E"/><ellipse cx="32" cy="36" rx="20" ry="17" fill="#E8772E"/><path d="M14 40c6-2 12 2 18 11 6-9 12-13 18-11-2 8-10 13-18 13s-16-5-18-13z" fill="#FFFFFF"/>' + eyes(34, '#1C1C1E') + '<circle cx="32" cy="48" r="2.600" fill="#1C1C1E"/>',
    chat: '<path d="M13 11l13 11-11 9zM51 11L38 22l11 9z" fill="#B8BCC8"/><circle cx="32" cy="36" r="19" fill="#B8BCC8"/>' + eyes(34, '#1C1C1E') + '<path d="M32 42l-3-3.500h6z" fill="#E98A9A"/><path d="M15 40h9M40 40h9M16 45l8-2M48 45l-8-2" stroke="#5F5F66" stroke-width="1.400" stroke-linecap="round" fill="none"/>',
    ours: '<circle cx="16" cy="18" r="7.500" fill="#9A6B43"/><circle cx="48" cy="18" r="7.500" fill="#9A6B43"/><circle cx="32" cy="36" r="20" fill="#9A6B43"/><ellipse cx="32" cy="43" rx="9.500" ry="7.500" fill="#E3C9A6"/>' + eyes(32, '#1C1C1E') + '<ellipse cx="32" cy="40.500" rx="3.200" ry="2.300" fill="#1C1C1E"/>',
    panda: '<circle cx="15" cy="18" r="7.500" fill="#1C1C1E"/><circle cx="49" cy="18" r="7.500" fill="#1C1C1E"/><circle cx="32" cy="36" r="20" fill="#FFFFFF"/><ellipse cx="24" cy="34" rx="6" ry="7.500" fill="#1C1C1E"/><ellipse cx="40" cy="34" rx="6" ry="7.500" fill="#1C1C1E"/>' + eyes(34, '#FFFFFF') + '<ellipse cx="32" cy="44" rx="3" ry="2.200" fill="#1C1C1E"/>',
    lapin: '<ellipse cx="23" cy="14" rx="5.500" ry="13" fill="#F2F2F7"/><ellipse cx="41" cy="14" rx="5.500" ry="13" fill="#F2F2F7"/><ellipse cx="23" cy="15" rx="2.500" ry="9" fill="#E98A9A"/><ellipse cx="41" cy="15" rx="2.500" ry="9" fill="#E98A9A"/><circle cx="32" cy="38" r="18" fill="#F2F2F7"/>' + eyes(36, '#1C1C1E') + '<path d="M32 44l-3-3h6z" fill="#E98A9A"/>',
    pingouin: '<circle cx="32" cy="34" r="22" fill="#3A3A42"/><ellipse cx="32" cy="39" rx="14" ry="15" fill="#FFFFFF"/>' + eyes(31, '#1C1C1E') + '<path d="M32 41l-5-5h10z" fill="#F5A623"/>',
    lion: '<circle cx="32" cy="34" r="25" fill="#B5651D"/><circle cx="32" cy="36" r="17" fill="#F0C27A"/>' + eyes(33, '#1C1C1E') + '<path d="M32 44l-3.500-3.500h7z" fill="#7A4A1E"/>'
  };
  return '<svg viewBox="0 0 64 64" role="img" aria-label="' + AV[k][0] + '"><rect width="64" height="64" rx="32" fill="' + AV[k][1] + '"/>' + d[k] + '</svg>';
}
function avaBtn() { return '<button class="avabtn" data-a="profile" aria-label="Ouvrir mon profil">' + framed(S.avatar, level(stats()).lv) + '</button>'; }
function openProfile() {
  var st = stats(), lv = level(st);
  var h = '<div class="sheet-bar"><span class="eyebrow">Mon profil</span><button class="round" data-a="sheet-close" aria-label="Fermer">' + I.close + '</button></div><div class="sheet-body">' +
    '<div style="display:flex;align-items:center;gap:16px">' + framed(S.avatar, lv.lv, 'big') + '<div><div class="big">' + esc(S.name || 'Sans pseudo') + '</div><div class="muted">Niveau ' + lv.lv + ' · ' + lv.title + '</div></div></div>' +
    '<section class="card"><label class="eyebrow" for="name-in">Ton pseudo</label><input class="field" id="name-in" type="text" maxlength="20" data-in="name" placeholder="Choisis un pseudo" value="' + esc(S.name) + '"></section>' +
    '<section class="card"><div class="eyebrow">Ton personnage</div><div class="avagrid">';
  Object.keys(AV).forEach(function (k) { h += '<button class="avapick" data-a="avatar" data-k="' + k + '" aria-pressed="' + (S.avatar === k ? 'true' : 'false') + '">' + avatar(k) + '</button>'; });
  h += '</div></section>' + accountCard() + '<section class="card"><div class="eyebrow">Réglages</div>' +
    '<button class="btn plain" data-a="theme">' + (S.theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre') + '</button>' +
    '<button class="btn plain" data-a="export-words">Exporter la liste de mes mots</button>' +
    '<button class="btn plain" data-a="backup">Copier ma sauvegarde</button>' +
    '<button class="btn plain" data-a="restore-ask">Restaurer une sauvegarde</button>' +
    '<button class="btn danger" data-a="reset-ask">Tout effacer</button></section></div>';
  openSheet(h);
}

/* ---------- petites briques d'interface ---------- */
var toastTimer;
function toast(msg) { var t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.hidden = true; }, 2600); }
function openModal(html) { $('#modal').innerHTML = '<div class="modal-in" role="dialog" aria-modal="true">' + html + '</div>'; $('#modal').hidden = false; }
function closeModal() { $('#modal').hidden = true; $('#modal').innerHTML = ''; }
function openSheet(html) { var s = $('#sheet'); s.innerHTML = '<div class="sheet-in">' + html + '</div>'; s.hidden = false; s.scrollTop = 0; }
function closeSheet() { $('#sheet').hidden = true; $('#sheet').innerHTML = ''; G = null; R = null; render(); }
function copyText(text, okMsg) {
  var fallback = function () {
    openModal('<h2 class="big">Copie ce texte</h2><p class="muted">La copie automatique est bloquée ici. Sélectionne le texte puis copie-le.</p><textarea class="field" id="copy-box" readonly>' + esc(text) + '</textarea><button class="btn plain" data-a="modal-close">Fermer</button>');
    var b = $('#copy-box'); if (b) { b.focus(); b.select(); }
  };
  try { navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback); } catch (e) { fallback(); }
}
function art(f) {
  var im = (C.imgs && C.imgs[f.id]) || f.img;
  if (im) return '<img src="' + esc(im) + '" alt="">';
  if (f.svg) return f.svg;
  if (C.pics && C.pics[f.id]) return '<svg viewBox="0 0 390 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration"><rect width="390" height="240" fill="' + CATS[f.cat].c + '"/><g transform="translate(108 33) scale(1.450)" fill="none" stroke="#E0B04A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' + C.pics[f.id] + '</g></svg>';
  return '<div class="glyph">' + esc(f.mot.charAt(0)) + '</div>';
}
function catLine(f) { return esc(CATS[f.cat].n) + (f.origine ? ' · ' + esc(f.origine) : ''); }
function coverCard(f, kicker, action) {
  return '<button class="cover" style="background:' + CATS[f.cat].c + '" data-a="' + action + '" data-id="' + f.id + '">' +
    '<span class="art">' + art(f) + '</span><span class="cap"><span class="kicker">' + esc(kicker) + '</span>' +
    '<span class="mot">' + esc(f.mot) + '</span><span class="sub">' + catLine(f) + ' · 3 min de lecture</span><span class="go">Lire</span></span></button>';
}

/* ---------- onglet Aujourd'hui ---------- */
var tab = 'today';
function viewToday() {
  var d = day(), due = dueList(), f = byId[d.fiche], st = streakNow();
  var date = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  var h = '<header class="head"><div><div class="eyebrow">' + esc(date) + '</div><h1 class="title">Aujourd\'hui</h1></div>' +
    '<div style="display:flex;align-items:center;gap:8px"><div class="pill">' + I.flame + '<span>' + plural(st, 'jour') + '</span></div>' + avaBtn() + '</div></header>';

  if (isWeekend()) {
    h += '<section class="feature" style="background:#2D3E8F"><div class="eyebrow" style="color:#C9D2FF">C\'est le week-end</div>' +
      '<p class="big">Commence par un jeu sur tes mots de la semaine.</p><button class="btn" style="background:#FFFFFF;color:#1F2C6B" data-a="game" data-g="devine">Jouer à Devine le mot</button></section>';
  }

  /* 1. révisions */
  h += '<section class="card"><div class="eyebrow">Révisions</div>';
  if (due.length) {
    h += '<div class="big">' + esc(byId[due[0]].mot) + (due.length > 1 ? ' <span class="muted">et ' + plural(due.length - 1, 'autre') + '</span>' : '') + '</div>' +
      '<p class="muted">Tu te souviens de ce que ça veut dire ? ' + (due.length > 1 ? 'Environ ' + Math.max(1, Math.round(due.length / 2)) + ' min.' : '') + '</p>' +
      '<button class="btn" data-a="review">Commencer</button>';
  } else if (d.reviewed.length) {
    h += '<div class="done">' + I.check + '<span>' + plural(d.reviewed.length, 'mot revu', 'mots revus') + ' aujourd\'hui</span></div>';
  } else {
    h += '<p class="muted">Rien à revoir aujourd\'hui. Les mots que tu apprends reviennent ici à J+1, J+3, J+7 et J+30.</p>';
  }
  h += '</section>';

  /* 2. fiche du jour */
  if (d.done) {
    var lf = byId[d.fiche];
    h += '<section class="card"><div class="eyebrow">Fiche du jour</div><div class="done">' + I.check + '<span>' + esc(lf ? lf.mot : 'Fiche') + ' est dans ta collection</span></div>';
    if (d.bonusDone) h += '<div class="done">' + I.check + '<span>Fiche bonus terminée : ' + esc(byId[d.bonus] ? byId[d.bonus].mot : '') + '</span></div>';
    else if (pickFiche()) h += '<button class="btn soft" data-a="bonus">Lire une fiche bonus</button>';
    h += '</section>';
  } else if (f) {
    if (due.length) {
      h += '<section class="card"><div class="eyebrow">Fiche du jour</div><div class="big">' + esc(f.mot) + '</div><p class="muted">Fais d\'abord tes révisions pour la débloquer.</p></section>';
    } else {
      h += coverCard(f, 'Fiche du jour', 'fiche-learn');
      if (!d.swapped) h += '<button class="link" data-a="swap-ask">Proposer une autre fiche</button>';
    }
  } else {
    h += '<section class="card"><div class="eyebrow">Fiche du jour</div><p class="muted">Tu as lu toutes les fiches disponibles. Il est temps de demander un nouveau paquet.</p></section>';
  }

  /* 3. question du jour */
  var q = todayQuestion();
  if (q) {
    h += '<section class="card"><div class="row"><div class="eyebrow">Question du jour</div><span class="tag">' + esc(q.theme) + '</span></div>' + qVisual(q) + '<p class="big" style="font-size:19px">' + esc(q.q) + '</p><div class="opts">';
    var picked = d.q;
    q.options.forEach(function (o, i) {
      var cls = 'opt';
      if (picked != null) { if (i === q.answer) cls += ' good'; else if (i === picked) cls += ' wrong'; }
      h += '<button class="' + cls + '" data-a="q-pick" data-i="' + i + '"' + (picked != null ? ' disabled' : '') + '>' + esc(o) +
        (picked != null && i === q.answer ? ' · bonne réponse' : '') + (picked != null && i === picked && i !== q.answer ? ' · ta réponse' : '') + '</button>';
    });
    h += '</div>';
    if (picked != null) h += '<p class="note">' + q.explain + '</p>';
    h += '</section>';
  }
  return h;
}

/* ---------- fiche ---------- */
var cur = null;
function sec(t, body) { return body ? '<section class="sec"><h2>' + t + '</h2>' + body + '</section>' : ''; }
function openFiche(id, mode) {
  var f = byId[id]; if (!f) return;
  cur = { id: id, mode: mode };
  var n = note(id), w = S.words[id], canSpeak = f.pron && f.pron.lang && ('speechSynthesis' in window);
  var h = '<div class="fiche-hero" style="background:' + CATS[f.cat].c + '"><div class="art">' + art(f) + '</div><div class="bar">' +
    '<button class="round" data-a="sheet-close" aria-label="Retour">' + I.back + '</button><div style="display:flex;gap:10px">' +
    (canSpeak ? '<button class="round" data-a="speak" aria-label="Écouter la prononciation">' + I.sound + '</button>' : '') +
    (w ? '<button class="round' + (w.fav ? ' on' : '') + '" data-a="fav" aria-pressed="' + (w.fav ? 'true' : 'false') + '" aria-label="Favori">' + I.heart + '</button>' : '') +
    '</div></div><div class="cap"><div class="eyebrow" style="color:#E0B04A">' + catLine(f) + '</div><h1>' + esc(f.mot) + '</h1>' +
    (f.pron ? '<div style="opacity:0.85">' + (f.pron.ecrit ? esc(f.pron.ecrit) + ' · ' : '') + '« ' + esc(f.pron.texte) + ' »</div>' : '') + '</div></div>';
  h += '<div class="fiche-body"><p class="lead">' + f.phrase + '</p>';
  (f.sections || []).forEach(function (s) { h += sec(esc(s.t), '<p>' + s.p + '</p>'); });
  h += sec('Comment l\'utiliser', (f.usage ? '<p>' + f.usage + '</p>' : '') + (f.exemples || []).map(function (x) { return '<div class="quote">' + x + '</div>'; }).join(''));
  if (f.piege) h += '<section class="sec trap"><h2>Le piège</h2><p>' + f.piege + '</p></section>';
  h += sec('Où tu vas le croiser', f.croiser ? '<p>' + f.croiser + '</p>' : '');
  if (f.cousins && f.cousins.length) {
    h += '<section class="sec"><h2>Mots cousins</h2>';
    f.cousins.forEach(function (c) {
      var cf = byName[norm(c.mot)], known = cf && S.words[cf.id];
      var inner = '<span class="row"><span class="n">' + esc(c.mot) + '</span>' + (cf ? '<span class="tag' + (known ? ' ok' : '') + '">' + (known ? 'Dans ta collection' : 'Fiche à venir') + '</span>' : '') + '</span><span class="muted">' + c.texte + '</span>';
      h += known ? '<button class="cousin" data-a="fiche-read" data-id="' + cf.id + '">' + inner + '</button>' : '<div class="cousin">' + inner + '</div>';
    });
    h += '</section>';
  }
  h += '<section class="defi"><h2 class="eyebrow">Ton défi</h2><p style="font-weight:600;font-size:18px;line-height:1.4">Écris une phrase avec « ' + esc(f.mot) + ' ». Tu peux aussi l\'envoyer ou placer le mot en vrai.</p>' +
    '<label class="small" for="phrase-' + id + '" style="color:rgba(255,255,255,0.8)">Ta phrase</label>' +
    '<textarea id="phrase-' + id + '" data-in="phrase" placeholder="Écris ta phrase ici">' + esc(n.phrase) + '</textarea>' +
    '<div class="grid2"><button class="btn" data-a="send-phrase">Copier pour l\'envoyer</button>' +
    '<button class="btn' + (n.placed ? ' on' : '') + '" data-a="placed" aria-pressed="' + (n.placed ? 'true' : 'false') + '">' + (n.placed ? 'Placé en vrai' : 'Je l\'ai placé en vrai') + '</button></div></section>';
  if (C.imgs && C.imgs[id]) h += '<p class="credit">Image : Wikimedia Commons, via Wikipédia.</p>';
  h += mode === 'learn' ? '<button class="btn" data-a="learn">Terminer la fiche</button>' : '<button class="btn plain" data-a="sheet-close">Fermer</button>';
  h += '</div>';
  openSheet(h);
}
function learn() {
  var id = cur.id, d = day(), t = today();
  if (!S.words[id]) S.words[id] = { learned: t, stage: 0, due: addDays(t, GAPS[0]), fav: false };
  if (d.fiche === id) d.done = true;
  if (d.bonus === id && !d.bonusDone) { d.bonusDone = true; S.bonus = (S.bonus || 0) + 1; }
  markActive(); save(); closeSheet(); toast(byId[id].mot + ' rejoint ta collection');
}

/* ---------- révisions ---------- */
var R = null;
function startReview() { R = { list: dueList(), i: 0, flipped: false, ok: 0, answer: '' }; if (R.list.length) drawReview(); }
function drawReview() {
  if (R.i >= R.list.length) {
    openSheet('<div class="sheet-bar"><span></span><button class="round" data-a="sheet-close" aria-label="Fermer">' + I.close + '</button></div><div class="sheet-body"><h1 class="title">Révisions terminées</h1><p class="lead">' + R.ok + ' sur ' + R.list.length + ' retrouvés.</p><p class="muted">Les mots oubliés reviennent demain, les autres plus tard.</p><button class="btn" data-a="sheet-close">Continuer</button></div>');
    return;
  }
  var id = R.list[R.i], f = byId[id], n = note(id);
  var h = '<div class="sheet-bar"><span class="eyebrow">Révision ' + (R.i + 1) + ' sur ' + R.list.length + '</span><button class="round" data-a="sheet-close" aria-label="Fermer">' + I.close + '</button></div><div class="sheet-body">' +
    '<div class="eyebrow">' + catLine(f) + '</div><h1 class="title">' + esc(f.mot) + '</h1>';
  if (!R.flipped) {
    h += '<p class="lead">Tu te souviens de ce que ça veut dire ?</p><label class="small" for="rev-answer">Écris ta réponse si tu as le temps, sinon réfléchis puis retourne la carte.</label>' +
      '<textarea class="field" id="rev-answer" data-in="rev" placeholder="Ta réponse (facultatif)"></textarea><button class="btn" data-a="rev-flip">Retourner la carte</button>';
  } else {
    if (R.answer) h += '<div class="note"><b>Ta réponse</b><br>' + esc(R.answer) + '</div>';
    h += '<section class="card"><div class="eyebrow">La réponse</div><p class="lead">' + f.phrase + '</p>' + (f.exemples && f.exemples[0] ? '<div class="quote">' + f.exemples[0] + '</div>' : '') +
      (n.phrase ? '<div class="quote"><b>Ta phrase</b><br>' + esc(n.phrase) + '</div>' : '') + '</section>' +
      '<div class="grid2"><button class="btn danger" data-a="rev-no">J\'avais oublié</button><button class="btn" data-a="rev-yes">Je m\'en souvenais</button></div>';
  }
  openSheet(h + '</div>');
}
function reviewResult(ok) {
  var id = R.list[R.i], w = S.words[id], t = today();
  if (ok) { w.stage++; if (w.stage < 4) w.due = addDays(t, GAPS[w.stage]); R.ok++; }
  else { w.stage = 0; w.due = addDays(t, 1); }
  day().reviewed.push(id); S.revs = (S.revs || 0) + 1; markActive(); save();
  R.i++; R.flipped = false; R.answer = ''; drawReview();
}

/* ---------- Brèves ---------- */
var BT = {
  'Parfum': ['#7A2E5A', '<path d="M10 3h4v3h-4zM8 9a4 4 0 0 1 8 0v9a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3z"/><path d="M8 13h8"/>'],
  'Lieux': ['#0A6C8A', '<path d="M3 19l6-10 4 6 2-3 6 7z"/><circle cx="17" cy="6" r="2"/>'],
  'Cultures': ['#A8481F', '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>'],
  'Mode': ['#26262B', '<path d="M12 8a2 2 0 1 0-2-2M12 8v2l9 6a1 1 0 0 1-.500 2h-17a1 1 0 0 1-.500-2l9-6"/>'],
  'Mots': ['#1F5E4A', '<path d="M4 6h16M4 11h16M4 16h10"/><path d="M17 15l3 3-3 3"/>'],
  'Luxe': ['#17130F', '<path d="M6 4h12l3 5-9 11L3 9z"/><path d="M3 9h18M9 4l3 5 3-5"/>'],
  'Art': ['#6B3FA0', '<path d="M12 3a9 9 0 1 0 0 18c1.500 0 2-1 2-2s-1-1.500-1-2.500S14 15 15 15h2a4 4 0 0 0 4-4c0-4.500-4-8-9-8z"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7.500" r="1"/><circle cx="16" cy="10" r="1"/>'],
  'Histoire': ['#7A4A1E', '<path d="M5 5h14M6 19h12M8 5v14M12 5v14M16 5v14M4 21h16"/>']
};
function bt(b) { return BT[b.theme] || ['#2D3E8F', '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>']; }
function viewBreves() {
  var read = Object.keys(S.breves).length;
  var h = '<header class="head"><div><div class="eyebrow">À lire · ' + read + ' sur ' + C.breves.length + ' lues</div><h1 class="title">Brèves</h1></div></header>';
  if (!C.breves.length) return h + '<section class="card"><p class="muted">Aucune brève pour le moment.</p></section>';
  C.breves.forEach(function (b) {
    var t = bt(b);
    h += '<button class="bcard" data-a="breve" data-id="' + b.id + '"><span class="btop" style="background:' + t[0] + '">' + ic(t[1]) + '<span class="bth">' + esc(b.theme) + '</span>' +
      '<span class="tag ' + (S.breves[b.id] ? 'ok' : 'new') + '">' + (S.breves[b.id] ? 'Lu' : '1 min') + '</span></span>' +
      '<span class="bbody"><span class="big">' + esc(b.titre) + '</span><span class="muted">' + esc(b.accroche) + '</span></span></button>';
  });
  return h;
}
function openBreve(id) {
  var i = C.breves.findIndex(function (b) { return b.id === id; }), b = C.breves[i]; if (!b) return;
  S.breves[id] = 1; save();
  var next = C.breves[(i + 1) % C.breves.length], t = bt(b);
  openSheet('<div class="bhero" style="background:' + t[0] + '"><div class="bar"><span class="eyebrow" style="color:#FFFFFF">' + esc(b.theme) + ' · Brève ' + (i + 1) + ' sur ' + C.breves.length + '</span><button class="round" data-a="sheet-close" aria-label="Fermer">' + I.close + '</button></div>' +
    '<div class="bicon">' + ic(t[1]) + '</div><h1>' + esc(b.titre) + '</h1></div><div class="fiche-body">' +
    b.texte.map(function (p, n) { return '<p class="' + (n === 0 ? 'lead' : '') + '" style="max-width:65ch">' + p + '</p>'; }).join('') +
    (b.retenir ? '<section class="sec trap"><h2>En une phrase</h2><p>' + b.retenir + '</p></section>' : '') +
    '<button class="btn soft" data-a="want" data-id="' + id + '" aria-pressed="' + (S.want[id] ? 'true' : 'false') + '">' + (S.want[id] ? 'Fiche demandée' : 'J\'en veux une fiche') + '</button>' +
    (next && next.id !== id ? '<button class="btn" data-a="breve" data-id="' + next.id + '">Brève suivante</button>' : '') + '</div>');
}

/* ---------- Jeux ---------- */
var G = null;
function pool() { var l = C.fiches.filter(function (f) { return S.words[f.id]; }); return l.length >= 4 ? l : C.fiches; }
function choice(f, prompt, field) {
  var others = shuffle(C.fiches.filter(function (x) { return x.id !== f.id; })).slice(0, 3), opts = shuffle([f].concat(others));
  return { prompt: prompt, options: opts.map(function (o) { return field ? o[field] : o.mot; }), answer: opts.indexOf(f), explain: '<b>' + esc(f.mot) + '</b> : ' + f.court };
}
function intrusRounds() {
  var groups = {}; C.fiches.forEach(function (f) { (groups[f.cat] = groups[f.cat] || []).push(f); });
  var cats = Object.keys(groups).filter(function (c) { return groups[c].length >= 3; }), out = [];
  shuffle(cats).slice(0, 5).forEach(function (c) {
    var odd = shuffle(C.fiches.filter(function (f) { return f.cat !== c; }))[0]; if (!odd) return;
    var opts = shuffle(shuffle(groups[c]).slice(0, 3).concat([odd]));
    out.push({ prompt: 'Trois de ces mots sont dans « ' + CATS[c].n + ' ». Lequel n\'en fait pas partie ?', options: opts.map(function (o) { return o.mot; }), answer: opts.indexOf(odd), explain: '<b>' + esc(odd.mot) + '</b> est dans « ' + esc(CATS[odd.cat].n) + ' ».' });
  });
  return out;
}
var GAMES = {
  culture: { n: 'Quiz culture', s: 'Histoire, géo et drapeaux', c: '#B4500F', i: 'q' },
  devine: { n: 'Devine le mot', s: 'Une situation, un mot', c: '#2D3E8F', i: 'q' },
  trous: { n: 'Phrases à trous', s: 'Écris le mot manquant', c: '#8A2E2E', i: 'blank' },
  def: { n: 'La bonne définition', s: 'Un mot, quatre sens', c: '#6B3FA0', i: 'def' },
  relier: { n: 'Relier', s: 'Des mots proches à ne pas confondre', c: '#A8481F', i: 'link' },
  caches: { n: 'Mots cachés', s: 'Devine les mots, puis trouve-les', c: '#1F5E4A', i: 'grid' },
  intrus: { n: 'L\'intrus', s: 'Trouve celui qui cloche', c: '#26262B', i: 'odd' },
  rates: { n: 'Questions ratées', s: 'Deuxième chance', c: '#0A6C8A', i: 'q' }
};
function failedQuestions() { return dailyBank().filter(function (q) { return S.q[q.id] === false; }); }
function viewJeux() {
  var learned = C.fiches.filter(function (f) { return S.words[f.id]; }).length;
  var h = '<header><div class="eyebrow">' + (learned >= 4 ? 'Avec tes ' + learned + ' mots' : 'Avec tous les mots, en attendant ta collection') + '</div><h1 class="title">Jeux</h1></header><div class="tiles">';
  Object.keys(GAMES).forEach(function (k) {
    if (k === 'intrus' && !intrusRounds().length) return;
    if (k === 'rates' && !failedQuestions().length) return;
    var g = GAMES[k], best = S.best[k];
    h += '<button class="tile" style="background:' + g.c + '" data-a="game" data-g="' + k + '">' + I[g.i] + '<span><b>' + g.n + '</b><span>' + (best != null ? 'Record : ' + esc(best) : g.s) + '</span></span></button>';
  });
  return h + '</div>';
}
function startGame(k) {
  var p = shuffle(pool()).slice(0, 5), rounds;
  if (k === 'relier') return startRelier();
  if (k === 'caches') return startCaches();
  if (k === 'trous') return startTrous();
  if (k === 'culture') rounds = shuffle(C.questions).slice(0, 7).map(function (q) {
    var order = shuffle(q.options.map(function (o, n) { return n; }));
    return { prompt: esc(q.q), options: order.map(function (n) { return esc(q.options[n]); }), answer: order.indexOf(q.answer), explain: q.explain, visual: qVisual(q) };
  });
  else if (k === 'devine') rounds = p.map(function (f) { return choice(f, f.situation); });
  else if (k === 'def') rounds = p.map(function (f) { return choice(f, 'Que veut dire « ' + f.mot + ' » ?', 'court'); });
  else if (k === 'intrus') rounds = intrusRounds();
  else if (k === 'rates') rounds = shuffle(failedQuestions()).slice(0, 5).map(function (q) { return { prompt: q.q, options: q.options, answer: q.answer, explain: q.explain, qid: q.id, visual: qVisual(q) }; });
  if (!rounds || !rounds.length) return;
  G = { k: k, type: 'quiz', rounds: rounds, i: 0, score: 0, pick: null };
  drawQuiz();
}
function gameBar(label) { return '<div class="sheet-bar"><span class="eyebrow">' + esc(label) + '</span><button class="round" data-a="sheet-close" aria-label="Fermer">' + I.close + '</button></div>'; }
function endGame(scoreText, better) {
  var k = G.k; S.games = (S.games || 0) + 1; markActive();
  if (better) S.best[k] = scoreText;
  save();
  openSheet(gameBar(GAMES[k].n) + '<div class="sheet-body"><h1 class="title">Terminé</h1><p class="lead">' + esc(scoreText) + '</p>' + (better ? '<p class="muted">C\'est ton nouveau record.</p>' : '') +
    '<button class="btn" data-a="game" data-g="' + k + '">Rejouer</button><button class="btn plain" data-a="sheet-close">Retour aux jeux</button></div>');
}
function drawQuiz() {
  var r = G.rounds[G.i];
  var h = gameBar(GAMES[G.k].n + ' · ' + (G.i + 1) + ' sur ' + G.rounds.length) + '<div class="sheet-body">' + (r.visual || '') + '<p class="lead">' + r.prompt + '</p><div class="opts">';
  r.options.forEach(function (o, i) {
    var cls = 'opt';
    if (G.pick != null) { if (i === r.answer) cls += ' good'; else if (i === G.pick) cls += ' wrong'; }
    h += '<button class="' + cls + '" data-a="quiz-pick" data-i="' + i + '"' + (G.pick != null ? ' disabled' : '') + '>' + o + (G.pick != null && i === r.answer ? ' · bonne réponse' : '') + '</button>';
  });
  h += '</div>';
  if (G.pick != null) h += '<p class="note"><b>' + (G.pick === r.answer ? 'Bien vu.' : 'Raté.') + '</b> ' + r.explain + '</p><button class="btn" data-a="quiz-next">' + (G.i + 1 < G.rounds.length ? 'Suivant' : 'Voir mon score') + '</button>';
  openSheet(h + '</div>');
}
function quizNext() {
  G.i++; G.pick = null;
  if (G.i < G.rounds.length) return drawQuiz();
  var prev = S.best[G.k], prevN = prev ? parseInt(prev, 10) : -1;
  if (G.score === G.rounds.length) S.perfect = (S.perfect || 0) + 1;
  endGame(G.score + ' sur ' + G.rounds.length, G.score > prevN);
}
/* phrases à trous : réponse écrite, correction tolérante */
function lev(a, b) {
  var m = [], i, j;
  for (i = 0; i <= a.length; i++) { m[i] = [i]; }
  for (j = 1; j <= b.length; j++) m[0][j] = j;
  for (i = 1; i <= a.length; i++) for (j = 1; j <= b.length; j++) m[i][j] = Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return m[a.length][b.length];
}
function judge(input, f) {
  var a = norm(input), best = 'no';
  if (!a) return 'no';
  [f.mot].concat(f.accept || []).forEach(function (t) {
    var b = norm(t), d = lev(a, b), tol = b.length >= 9 ? 2 : (b.length >= 5 ? 1 : 0);
    if (d === 0) best = 'ok'; else if (d <= tol && best !== 'ok') best = 'close';
  });
  return best;
}
function startTrous() { G = { k: 'trous', type: 'trous', rounds: shuffle(pool()).slice(0, 5), i: 0, score: 0, res: null, typed: '' }; drawTrous(); }
function drawTrous() {
  var f = G.rounds[G.i];
  var h = gameBar('Phrases à trous · ' + (G.i + 1) + ' sur ' + G.rounds.length) + '<div class="sheet-body"><p class="lead">' + f.trou + '</p>';
  if (!G.res) {
    h += '<label class="small" for="trou-in">Le mot manquant. Les accents, les tirets et les majuscules ne comptent pas.</label><input class="field" id="trou-in" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Ta réponse"><button class="btn" data-a="trou-ok">Valider</button><button class="btn plain" data-a="trou-skip">Je ne sais pas</button>';
  } else {
    var msg = G.res === 'ok' ? '<b>Bien vu.</b>' : G.res === 'close' ? '<b>Accepté, à une lettre près.</b> L\'orthographe exacte : ' + esc(f.mot) + '.' : '<b>Raté.</b> La réponse était « ' + esc(f.mot) + ' ».';
    if (G.typed) h += '<div class="opt ' + (G.res === 'no' ? 'wrong' : 'good') + '">' + esc(G.typed) + '</div>';
    h += '<p class="note">' + msg + ' ' + f.court + '</p><button class="btn" data-a="trou-next">' + (G.i + 1 < G.rounds.length ? 'Suivant' : 'Voir mon score') + '</button>';
  }
  openSheet(h + '</div>');
  var inp = $('#trou-in'); if (inp) inp.focus();
}
function trouOk(skip) {
  if (G.res) return;
  var v = skip ? '' : ($('#trou-in').value || '').trim();
  if (!skip && !v) return toast('Écris ta réponse');
  G.typed = v; G.res = skip ? 'no' : judge(v, G.rounds[G.i]);
  if (G.res !== 'no') G.score++;
  drawTrous();
}
function trouNext() {
  G.i++; G.res = null; G.typed = '';
  if (G.i < G.rounds.length) return drawTrous();
  var prev = S.best.trous, prevN = prev ? parseInt(prev, 10) : -1;
  endGame(G.score + ' sur ' + G.rounds.length, G.score > prevN);
}
/* relier : des familles de mots proches (une fiche et un de ses cousins) */
function startRelier() {
  var items = [], fs = shuffle(pool());
  for (var i = 0; i < fs.length && items.length < 6; i++) {
    var f = fs[i]; items.push({ id: f.id, mot: f.mot, court: f.court });
    var cs = (f.cousins || []).filter(function (c) { return c.court; });
    if (cs.length && items.length < 6) { var c = shuffle(cs)[0]; items.push({ id: f.id + '~' + c.mot, mot: c.mot, court: c.court }); }
  }
  G = { k: 'relier', type: 'relier', left: shuffle(items), right: shuffle(items), sel: null, done: {}, errors: 0, n: items.length };
  drawRelier();
}
function drawRelier() {
  var h = gameBar('Relier · ' + plural(G.errors, 'erreur')) + '<div class="sheet-body"><p class="muted">Touche un mot, puis sa définition. Attention, certains mots sont proches.</p>';
  for (var i = 0; i < G.n; i++) {
    var a = G.left[i], b = G.right[i];
    h += '<div class="pairs"><button class="pair' + (G.done[a.id] ? ' ok' : '') + (G.sel === a.id ? ' sel' : '') + '" data-a="rel-word" data-id="' + esc(a.id) + '"' + (G.done[a.id] ? ' disabled' : '') + ' aria-pressed="' + (G.sel === a.id ? 'true' : 'false') + '">' + esc(a.mot) + (G.done[a.id] ? ' · trouvé' : '') + '</button>' +
      '<button class="pair' + (G.done[b.id] ? ' ok' : '') + '" data-a="rel-def" data-id="' + esc(b.id) + '"' + (G.done[b.id] ? ' disabled' : '') + '>' + b.court + '</button></div>';
  }
  var keep = $('#sheet').scrollTop;
  openSheet(h + '</div>');
  $('#sheet').scrollTop = keep;
}
function relDef(id) {
  if (!G.sel) return toast('Choisis d\'abord un mot');
  if (G.sel === id) { G.done[id] = 1; G.sel = null; }
  else { G.errors++; G.sel = null; toast('Ce n\'est pas la bonne définition'); }
  if (Object.keys(G.done).length === G.n) {
    var prev = S.best.relier, prevN = prev ? parseInt(prev, 10) : 99;
    return endGame(plural(G.errors, 'erreur'), G.errors < prevN);
  }
  drawRelier();
}
/* mots cachés */
function norm(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z]/g, '').toUpperCase(); }
function startCaches() {
  var N = 12, cand = [], seen = {};
  shuffle(pool()).forEach(function (f) { var w = norm(f.cache || f.mot); if (w.length >= 3 && w.length <= N && !seen[w] && cand.length < 8) { seen[w] = 1; cand.push({ w: w, f: f }); } });
  var grid = [], r, c, placed = [];
  for (r = 0; r < N; r++) { grid.push([]); for (c = 0; c < N; c++) grid[r].push(''); }
  var dirs = [[0, 1], [1, 0], [1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1], [-1, 1]];
  cand.forEach(function (it) {
    var w = it.w;
    for (var t = 0; t < 400; t++) {
      var d = dirs[Math.floor(Math.random() * dirs.length)], r0 = Math.floor(Math.random() * N), c0 = Math.floor(Math.random() * N);
      var r1 = r0 + d[0] * (w.length - 1), c1 = c0 + d[1] * (w.length - 1);
      if (r1 >= N || c1 >= N || r1 < 0 || c1 < 0) continue;
      var ok = true, i;
      for (i = 0; i < w.length; i++) { var ch = grid[r0 + d[0] * i][c0 + d[1] * i]; if (ch && ch !== w[i]) { ok = false; break; } }
      if (!ok) continue;
      for (i = 0; i < w.length; i++) grid[r0 + d[0] * i][c0 + d[1] * i] = w[i];
      placed.push(it); return;
    }
  });
  var A = 'AAEEEIIOOUBCDFGHJLMNPQRSTTVXYZ';
  for (r = 0; r < N; r++) for (c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = A[Math.floor(Math.random() * A.length)];
  G = { k: 'caches', type: 'caches', N: N, grid: grid, items: placed, words: placed.map(function (x) { return x.w; }), found: {}, hit: {}, start: null, t0: Date.now() };
  drawCaches();
}
function drawCaches() {
  var h = gameBar('Mots cachés · ' + Object.keys(G.found).length + ' sur ' + G.words.length) + '<div class="sheet-body"><p class="muted">Les mots ne sont pas donnés : devine-les grâce aux définitions, puis touche leur première et leur dernière lettre. Ils sont écrits sans accent ni espace, dans tous les sens. Pour une expression longue, cherche son mot principal.</p><div class="grid-wrap"><div class="wgrid">';
  for (var r = 0; r < G.N; r++) for (var c = 0; c < G.N; c++) {
    var k = r + '-' + c, cls = G.hit[k] ? 'hit' : (G.start && G.start[0] === r && G.start[1] === c ? 'sel' : '');
    h += '<button class="' + cls + '" data-a="cell" data-r="' + r + '" data-c="' + c + '" aria-label="' + G.grid[r][c] + ', ligne ' + (r + 1) + ', colonne ' + (c + 1) + '">' + G.grid[r][c] + '</button>';
  }
  h += '</div></div><div class="clues">';
  G.items.forEach(function (it) { h += '<div class="clue' + (G.found[it.w] ? ' ok' : '') + '"><b>' + (G.found[it.w] ? it.w : plural(it.w.length, 'lettre')) + '</b>' + it.f.court + '</div>'; });
  var keep = $('#sheet').scrollTop;
  openSheet(h + '</div></div>');
  $('#sheet').scrollTop = keep;
}
function cell(r, c) {
  if (!G.start) { G.start = [r, c]; return drawCaches(); }
  var r0 = G.start[0], c0 = G.start[1], dr = r - r0, dc = c - c0, len = Math.max(Math.abs(dr), Math.abs(dc));
  G.start = null;
  if (len > 0 && (dr === 0 || dc === 0 || Math.abs(dr) === Math.abs(dc))) {
    var sr = Math.sign(dr), sc = Math.sign(dc), s = '', cells = [];
    for (var i = 0; i <= len; i++) { s += G.grid[r0 + sr * i][c0 + sc * i]; cells.push((r0 + sr * i) + '-' + (c0 + sc * i)); }
    var rev = s.split('').reverse().join(''), w = G.words.indexOf(s) >= 0 ? s : (G.words.indexOf(rev) >= 0 ? rev : null);
    if (w && !G.found[w]) { G.found[w] = 1; cells.forEach(function (k) { G.hit[k] = 1; }); }
  }
  if (Object.keys(G.found).length === G.words.length) {
    var secs = Math.round((Date.now() - G.t0) / 1000), prev = S.best.caches, prevN = prev ? parseInt(prev, 10) : 1e9;
    return endGame(secs + ' secondes', secs < prevN);
  }
  drawCaches();
}

/* ---------- Collection ---------- */
var colFilter = 'all', colSearch = '';
function colItems() {
  var s = norm(colSearch);
  return C.fiches.filter(function (f) { return S.words[f.id] && (colFilter === 'all' || (colFilter === 'fav' ? S.words[f.id].fav : f.cat === colFilter)) && (!s || norm(f.mot).indexOf(s) >= 0); })
    .sort(function (a, b) { return S.words[a.id].learned < S.words[b.id].learned ? 1 : -1; });
}
function colList() {
  var items = colItems();
  if (!Object.keys(S.words).length) return '<section class="card"><p class="big">Ta collection est vide</p><p class="muted">Termine ta première fiche du jour et elle apparaîtra ici.</p><button class="btn" data-a="tab" data-t="today">Aller à la fiche du jour</button></section>';
  if (!items.length) return '<section class="card"><p class="muted">Aucun mot ne correspond.</p></section>';
  return '<div class="list">' + items.map(function (f) {
    var st = status(f.id);
    return '<button class="item" data-a="fiche-read" data-id="' + f.id + '"><span class="sw" style="background:' + CATS[f.cat].c + '">' + art(f) + '</span><span class="tx"><b>' + esc(f.mot) + '</b><span class="small">' + catLine(f) + '</span></span><span class="tag ' + st[1] + '">' + st[0] + '</span></button>';
  }).join('') + '</div>';
}
function viewCollection() {
  var n = Object.keys(S.words).length, cats = {};
  C.fiches.forEach(function (f) { if (S.words[f.id]) cats[f.cat] = 1; });
  var h = '<header class="head"><div><div class="eyebrow">' + plural(n, 'mot') + '</div><h1 class="title">Collection</h1></div><button class="round" style="background:var(--accent);color:var(--accent-fg)" data-a="wish-ask" aria-label="Noter un mot à demander">' + I.plus + '</button></header>' +
    '<label class="small" for="col-search">Rechercher un mot</label><input class="field" id="col-search" type="search" data-in="search" placeholder="Rechercher" value="' + esc(colSearch) + '"><div class="chips">';
  [['all', 'Tous'], ['fav', 'Favoris']].concat(Object.keys(cats).map(function (c) { return [c, CATS[c].n]; })).forEach(function (x) {
    h += '<button class="chip" data-a="col-filter" data-f="' + x[0] + '" aria-pressed="' + (colFilter === x[0] ? 'true' : 'false') + '">' + esc(x[1]) + '</button>';
  });
  h += '</div><div id="col-list">' + colList() + '</div>';
  if (S.wish.length) {
    h += '<section class="card"><div class="eyebrow">Mots à demander</div><p class="muted">' + S.wish.map(esc).join(', ') + '</p><div class="grid2"><button class="btn soft" data-a="wish-copy">Copier la liste</button><button class="btn plain" data-a="wish-clear">Vider</button></div></section>';
  }
  return h;
}

/* ---------- Bilan ---------- */
function gauge(label, val, max, text) {
  var pct = max ? Math.min(100, Math.round(100 * val / max)) : 0;
  return '<div><div class="row"><span style="font-weight:600;font-size:15px">' + label + '</span><span class="small">' + text + '</span></div><div class="meter"><i style="width:' + pct + '%;background:var(--accent)"></i></div></div>';
}
function viewBilan() {
  var st = stats(), lv = level(st), sn = streakNow(), mon = monday(today()), names = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  var h = '<header class="head"><div><div class="eyebrow">Niveau ' + lv.lv + ' · ' + lv.title + '</div><h1 class="title">Bilan</h1></div>' + avaBtn() + '</header>';

  h += '<section class="card"><div style="display:flex;align-items:center;gap:14px">' + framed(S.avatar, lv.lv, 'big') + '<div style="flex:1;min-width:0"><div class="big">' + esc(S.name || 'Choisis ton pseudo') + '</div>' +
    '<div class="small">' + lv.xp + ' points · encore ' + (100 - lv.into) + ' pour le niveau ' + (lv.lv + 1) + '</div><div class="meter" style="margin-top:8px"><i style="width:' + lv.into + '%;background:var(--gold)"></i></div></div></div></section>';

  h += '<section class="card"><div class="row"><div class="big" style="color:var(--flame);font-size:26px">' + plural(sn, 'jour') + ' d\'affilée</div><span class="small">' + (jokerLeft() ? '1 joker cette semaine' : 'Joker utilisé') + '</span></div><div class="week">';
  for (var i = 0; i < 7; i++) { var dte = addDays(mon, i); h += '<div><span>' + names[i] + '</span><i class="' + (S.streak.days[dte] ? 'on' : (dte === today() ? 'now' : '')) + '"></i></div>'; }
  h += '</div></section>';

  h += '<section class="card"><div class="eyebrow">Palmarès</div>' +
    gauge('Questions du jour réussies', st.qok, st.qtot, st.qok + ' sur ' + st.qtot) +
    gauge('Fiches apprises', st.fiches, C.fiches.length, st.fiches + ' sur ' + C.fiches.length) +
    gauge('Mots acquis', st.acquis, Math.max(1, st.fiches), st.acquis + ' sur ' + st.fiches) +
    gauge('Brèves lues', st.breves, C.breves.length, st.breves + ' sur ' + C.breves.length) +
    '<div class="stats"><div><b>' + st.best + '</b><span>meilleure série</span></div><div><b>' + st.games + '</b><span>jeux finis</span></div><div><b>' + st.phrases + '</b><span>phrases</span></div><div><b>' + st.placed + '</b><span>placés</span></div></div>' +
    '</section>' + friendsCard();

  h += '<section class="card"><div class="eyebrow">Ton cadre évolue avec ton niveau</div><div class="cadres">';
  var cur = tierOf(lv.lv);
  TIERS.forEach(function (t, n) { h += '<div class="cadre' + (n === cur ? ' now' : '') + '">' + framed(S.avatar, t[0]) + '<b>' + t[1] + '</b><span>' + (n === cur ? 'Ton cadre' : 'Niveau ' + t[0]) + '</span></div>'; });
  h += '</div></section>';

  h += '<section class="card"><div class="eyebrow">Comment gagner des points</div><div class="pts">' +
    [['Une fiche apprise', 20], ['Une question du jour réussie', 10], ['Un jeu terminé', 10], ['Une révision', 5], ['Une Brève lue', 5], ['Une phrase écrite', 5], ['Une question du jour ratée', 3]].map(function (x) { return '<div class="row"><span>' + x[0] + '</span><b>+' + x[1] + '</b></div>'; }).join('') +
    '</div><p class="small">100 points font un niveau.</p></section>';

  var got = TROPHIES.filter(function (t) { return S.trophies[t[0]]; }).length;
  h += '<section class="card"><div class="row"><div class="eyebrow">Trophées</div><span class="small">' + got + ' sur ' + TROPHIES.length + '</span></div><div class="trophies">';
  TROPHIES.forEach(function (t) {
    var on = !!S.trophies[t[0]];
    h += '<div class="trophy' + (on ? ' on' : '') + '"><span class="cup">' + ic('<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4"/>') + '</span><span><b>' + t[1] + '</b><span>' + (on ? 'Débloqué' : t[2]) + '</span></span></div>';
  });
  h += '</div></section>';

  h += '<section class="card"><div class="eyebrow">Par catégorie</div>';
  Object.keys(CATS).forEach(function (c) {
    var tot = C.fiches.filter(function (f) { return f.cat === c; }).length; if (!tot) return;
    var n = C.fiches.filter(function (f) { return f.cat === c && S.words[f.id]; }).length;
    h += '<div><div class="row"><span style="font-weight:600;font-size:15px">' + esc(CATS[c].n) + '</span><span class="small">' + n + ' sur ' + tot + '</span></div><div class="meter"><i style="width:' + Math.round(100 * n / tot) + '%;background:' + (c === 'ailleurs' || c === 'luxe' ? 'var(--gold)' : CATS[c].c) + '"></i></div></div>';
  });
  h += '</section>';
  return h;
}

/* ---------- comptes, sauvegarde cloud et amis (version en ligne uniquement) ---------- */
var CLOUD = { site: !!window.SAPERE_SITE, on: false, user: null, db: null, friends: [], timer: null, sync: '' };
var LOGO = '<svg viewBox="0 0 160 160" width="84" height="84" role="img" aria-label="Sapere"><rect width="160" height="160" rx="36" fill="#14463A"/><text x="80" y="116" text-anchor="middle" font-family="\'New York\', \'Iowan Old Style\', Georgia, serif" font-size="110" font-weight="700" fill="#FFFFFF">S</text><circle cx="120" cy="42" r="7" fill="#E0B04A"/></svg>';
function cloudInit() {
  var cfg = window.SAPERE_FIREBASE;
  if (!(window.firebase && cfg && cfg.apiKey)) return;
  try {
    window.firebase.initializeApp(cfg);
    CLOUD.db = window.firebase.firestore();
    CLOUD.on = true;
    window.firebase.auth().onAuthStateChanged(function (u) {
      CLOUD.user = u || null;
      if (u) { S.local = false; hideGate(); cloudPull(); cloudFriends(); }
      else { CLOUD.friends = []; if (CLOUD.unsub) { CLOUD.unsub(); CLOUD.unsub = null; } if (!S.local) showGate(); }
      render();
    });
    document.addEventListener('visibilitychange', function () { if (!document.hidden && CLOUD.user) cloudPull(); });
  } catch (e) { CLOUD.on = false; }
}
function profileDoc() {
  var st = stats(), lv = level(st), d = day(), q = todayQuestion();
  return { name: S.name || '', avatar: S.avatar, lv: lv.lv, title: lv.title, xp: lv.xp, streak: streakNow(), trophies: Object.keys(S.trophies).length, stats: st,
    day: today(), dayFiche: !!d.done, dayQ: (d.q != null && q) ? (d.q === q.answer ? 1 : 0) : -1, t: S.t };
}
function cloudPush() {
  if (!CLOUD.on || !CLOUD.user) return;
  clearTimeout(CLOUD.timer);
  CLOUD.timer = setTimeout(function () {
    var uid = CLOUD.user.uid; S.owner = uid;
    CLOUD.sync = 'envoi';
    Promise.all([
      CLOUD.db.collection('etats').doc(uid).set({ json: JSON.stringify(S), t: S.t }),
      CLOUD.db.collection('profils').doc(uid).set(profileDoc())
    ]).then(function () { CLOUD.sync = 'ok'; }, function () { CLOUD.sync = 'erreur'; });
  }, 1500);
}
function cloudPull() {
  if (!CLOUD.on || !CLOUD.user) return;
  var uid = CLOUD.user.uid;
  CLOUD.db.collection('etats').doc(uid).get().then(function (doc) {
    var R = null;
    if (doc.exists) { try { R = JSON.parse(doc.data().json); } catch (e) { R = null; } }
    if (R && (S.owner !== uid || (R.t || 0) > (S.t || 0))) {
      quiet = true; var th = S.theme; S = Object.assign(blank(), R); S.owner = uid; S.local = false; if (!R.theme) S.theme = th;
      day(); saveLocal(); quiet = false; applyTheme(); CLOUD.sync = 'ok';
      if ($('#sheet').hidden) render();
    } else if (!R && S.owner && S.owner !== uid) {
      quiet = true; var t2 = S.theme; S = blank(); S.theme = t2; S.owner = uid; day(); quiet = false; save(); render();
    } else { S.owner = uid; save(); }
  }, function () { CLOUD.sync = 'erreur'; });
}
function cloudFriends() {
  if (CLOUD.unsub) CLOUD.unsub();
  CLOUD.unsub = CLOUD.db.collection('profils').limit(20).onSnapshot(function (snap) {
    var l = [];
    snap.forEach(function (d) { if (CLOUD.user && d.id !== CLOUD.user.uid) { var x = d.data(); x.id = d.id; l.push(x); } });
    CLOUD.friends = l;
    if (tab === 'bilan' && $('#sheet').hidden) render();
  }, function () { /* lecture refusée ou hors ligne */ });
}
function showGate(msg) {
  var g = $('#gate'); if (!g) return;
  g.innerHTML = '<div class="gate-in">' + LOGO + '<h1 class="title">Sapere</h1><p class="muted">Connecte-toi pour retrouver ta progression sur tous tes appareils.</p>' +
    '<label class="small" for="gate-mail">Adresse e-mail</label><input class="field" id="gate-mail" type="email" autocomplete="email" autocapitalize="off" placeholder="toi@exemple.com">' +
    '<label class="small" for="gate-pass">Mot de passe</label><input class="field" id="gate-pass" type="password" autocomplete="current-password" placeholder="6 caractères minimum">' +
    '<p class="gate-msg" id="gate-msg" role="alert">' + esc(msg || '') + '</p>' +
    '<button class="btn" data-a="gate-in">Se connecter</button><button class="btn soft" data-a="gate-up">Créer mon compte</button>' +
    '<button class="link" data-a="gate-reset">Mot de passe oublié</button><button class="link" data-a="gate-skip">Continuer sans compte</button></div>';
  g.hidden = false;
}
function hideGate() { var g = $('#gate'); if (g) { g.hidden = true; g.innerHTML = ''; } }
function gateErr(e) {
  var c = (e && e.code) || '', m = 'Ça n\'a pas marché. Réessaie dans un instant.';
  if (/invalid-credential|wrong-password|user-not-found|invalid-login/.test(c)) m = 'E-mail ou mot de passe incorrect.';
  else if (/email-already-in-use/.test(c)) m = 'Un compte existe déjà avec cet e-mail. Utilise « Se connecter ».';
  else if (/weak-password/.test(c)) m = 'Mot de passe trop court : 6 caractères minimum.';
  else if (/invalid-email|missing-email/.test(c)) m = 'Cette adresse e-mail n\'est pas valide.';
  else if (/network-request-failed/.test(c)) m = 'Pas de connexion internet.';
  else if (/operation-not-allowed|admin-restricted/.test(c)) m = 'La création de compte est fermée sur cette app.';
  else if (/too-many-requests/.test(c)) m = 'Trop d\'essais. Attends quelques minutes.';
  else if (/api-key/.test(c)) m = 'La clé Firebase de l\'app est incorrecte (code : ' + c + ').';
  else if (/unauthorized-domain/.test(c)) m = 'Ce site n\'est pas encore autorisé dans Firebase (domaines autorisés).';
  else if (c) m = 'Ça n\'a pas marché (code : ' + c + ').';
  var el = $('#gate-msg'); if (el) el.textContent = m;
}
function gateDo(kind) {
  var mail = ($('#gate-mail').value || '').trim(), pass = $('#gate-pass').value || '', a = window.firebase.auth(), el = $('#gate-msg');
  if (kind === 'reset') {
    if (!mail) { el.textContent = 'Écris d\'abord ton adresse e-mail.'; return; }
    a.sendPasswordResetEmail(mail).then(function () { el.textContent = 'E-mail envoyé. Regarde ta boîte de réception.'; }, gateErr); return;
  }
  if (!mail || !pass) { el.textContent = 'Remplis l\'e-mail et le mot de passe.'; return; }
  el.textContent = 'Un instant…';
  (kind === 'up' ? a.createUserWithEmailAndPassword(mail, pass) : a.signInWithEmailAndPassword(mail, pass)).then(function () {}, gateErr);
}
function accountCard() {
  if (!CLOUD.on) return '';
  if (CLOUD.user) return '<section class="card"><div class="eyebrow">Mon compte</div><p class="muted">' + esc(CLOUD.user.email || '') + '</p><p class="small">' +
    (CLOUD.sync === 'erreur' ? 'La sauvegarde en ligne a échoué. Elle reprendra à la prochaine connexion.' : 'Ta progression est sauvegardée en ligne et suit sur tes appareils.') + '</p><button class="btn plain" data-a="logout">Se déconnecter</button></section>';
  return '<section class="card"><div class="eyebrow">Mon compte</div><p class="muted">Tu utilises l\'app sans compte : ta progression reste sur cet appareil.</p><button class="btn" data-a="gate-open">Créer un compte ou se connecter</button></section>';
}
function friendsCard() {
  if (!CLOUD.on) return CLOUD.site ? '' : '<section class="card"><div class="eyebrow">Amis</div><p class="small">Dans la version en ligne, tu verras ici le profil de ta sœur et votre duel.</p></section>';
  var h = '<section class="card"><div class="eyebrow">Amis</div>';
  if (!CLOUD.user) return h + '<p class="small">Connecte-toi pour voir les autres joueurs.</p></section>';
  if (!CLOUD.friends.length) return h + '<p class="small">Personne d\'autre pour l\'instant. Dès qu\'un autre compte sera créé sur cette app, il apparaîtra ici.</p></section>';
  CLOUD.friends.forEach(function (f) {
    var same = f.day === today(), q = same ? f.dayQ : -1;
    h += '<button class="friend" data-a="friend" data-id="' + esc(f.id) + '">' + framed(f.avatar, f.lv || 1) + '<span class="tx"><b>' + esc(f.name || 'Sans pseudo') + '</b><span class="small">' + esc(f.title || 'Novice') + ' · ' + plural(f.streak || 0, 'jour') + ' d\'affilée</span>' +
      '<span class="small">Aujourd\'hui : ' + (same && f.dayFiche ? 'fiche faite' : 'pas encore de fiche') + ', question ' + (q === 1 ? 'réussie' : q === 0 ? 'ratée' : 'pas encore faite') + '</span></span></button>';
  });
  return h + '</section>';
}
function duel(label, me, them) {
  var max = Math.max(1, me, them);
  return '<div class="duel"><div class="row"><b>' + me + '</b><span class="small">' + label + '</span><b>' + them + '</b></div><div class="duel-bars"><div class="meter left"><i style="width:' + Math.round(100 * me / max) + '%;background:var(--accent)"></i></div><div class="meter"><i style="width:' + Math.round(100 * them / max) + '%;background:var(--flame)"></i></div></div></div>';
}
function openFriend(id) {
  var f = CLOUD.friends.filter(function (x) { return x.id === id; })[0]; if (!f) return;
  var me = stats(), lv = level(me), fs = f.stats || {}, n = function (k) { return fs[k] || 0; };
  openSheet('<div class="sheet-bar"><span class="eyebrow">Duel</span><button class="round" data-a="sheet-close" aria-label="Fermer">' + I.close + '</button></div><div class="sheet-body">' +
    '<div class="versus"><div>' + framed(S.avatar, lv.lv, 'big') + '<b>' + esc(S.name || 'Toi') + '</b><span class="small">' + lv.title + '</span></div><span class="vs">VS</span><div>' + framed(f.avatar, f.lv || 1, 'big') + '<b>' + esc(f.name || 'Sans pseudo') + '</b><span class="small">' + esc(f.title || 'Novice') + '</span></div></div>' +
    '<section class="card">' + duel('Questions du jour réussies', me.qok, n('qok')) + duel('Fiches apprises', me.fiches, n('fiches')) + duel('Mots acquis', me.acquis, n('acquis')) + duel('Brèves lues', me.breves, n('breves')) +
    duel('Jeux finis', me.games, n('games')) + duel('Meilleure série', me.best, n('best')) + duel('Phrases écrites', me.phrases, n('phrases')) + duel('Trophées', Object.keys(S.trophies).length, f.trophies || 0) + duel('Points', lv.xp, f.xp || 0) + '</section></div>');
}

/* ---------- rendu et navigation ---------- */
var VIEWS = { today: viewToday, breves: viewBreves, jeux: viewJeux, collection: viewCollection, bilan: viewBilan };
function render() {
  $('#view').innerHTML = VIEWS[tab]();
  Array.prototype.forEach.call(document.querySelectorAll('#tabs button'), function (b) { if (b.dataset.t === tab) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
}
function go(t) { tab = t; render(); $('#view').scrollTop = 0; }
function applyTheme() { if (S.theme === 'dark') document.documentElement.setAttribute('data-sapere', 'dark'); else document.documentElement.removeAttribute('data-sapere'); }

var ACT = {
  'tab': function (el) { go(el.dataset.t); },
  'sheet-close': function () { closeSheet(); },
  'modal-close': function () { closeModal(); },
  'fiche-learn': function (el) { openFiche(el.dataset.id, 'learn'); },
  'fiche-read': function (el) { openFiche(el.dataset.id, S.words[el.dataset.id] ? 'read' : 'learn'); },
  'learn': learn,
  'bonus': function () { var d = day(), f = byId[d.bonus] && avail(byId[d.bonus]) ? byId[d.bonus] : pickFiche(); if (!f) return; d.bonus = f.id; save(); openFiche(f.id, 'learn'); },
  'swap-ask': function () { openModal('<h2 class="big">Une autre fiche ?</h2><p class="muted">Tu peux changer une fois par jour.</p><button class="btn" data-a="swap" data-k="later">Plus tard, propose-la un autre jour</button><button class="btn soft" data-a="swap" data-k="never">Pas pour moi, ne la propose plus</button><button class="btn plain" data-a="modal-close">Garder cette fiche</button>'); },
  'swap': function (el) { var d = day(); S.skip[d.fiche] = el.dataset.k === 'never' ? { t: 'never' } : { t: 'later', d: today() }; d.swapped = true; var f = pickFiche(); d.fiche = f ? f.id : null; save(); closeModal(); render(); },
  'speak': function () { var f = byId[cur.id]; try { var u = new SpeechSynthesisUtterance(f.pron.dire || f.mot); u.lang = f.pron.lang; u.rate = 0.85; window.speechSynthesis.cancel(); window.speechSynthesis.speak(u); } catch (e) { toast('La lecture audio n\'est pas disponible ici'); } },
  'fav': function (el) { var w = S.words[cur.id]; w.fav = !w.fav; save(); el.classList.toggle('on', w.fav); el.setAttribute('aria-pressed', w.fav ? 'true' : 'false'); toast(w.fav ? 'Ajouté aux favoris' : 'Retiré des favoris'); },
  'send-phrase': function () { var n = note(cur.id); if (!n.phrase.trim()) return toast('Écris d\'abord ta phrase'); var txt = n.phrase.trim() + '\n(Mot du jour : ' + byId[cur.id].mot + ')'; if (navigator.share && CLOUD.site) { try { navigator.share({ text: txt }).catch(function () {}); return; } catch (e) { /* on retombe sur la copie */ } } copyText(txt, 'Phrase copiée, colle-la dans un message'); },
  'placed': function (el) { var n = note(cur.id); n.placed = !n.placed; save(); el.classList.toggle('on', n.placed); el.setAttribute('aria-pressed', n.placed ? 'true' : 'false'); el.textContent = n.placed ? 'Placé en vrai' : 'Je l\'ai placé en vrai'; },
  'review': startReview,
  'rev-flip': function () { var a = $('#rev-answer'); R.answer = a ? a.value.trim() : ''; R.flipped = true; drawReview(); },
  'rev-yes': function () { reviewResult(true); },
  'rev-no': function () { reviewResult(false); },
  'q-pick': function (el) { var d = day(), q = todayQuestion(), i = +el.dataset.i; if (d.q != null) return; d.q = i; S.q[q.id] = i === q.answer; markActive(); save(); render(); },
  'breve': function (el) { openBreve(el.dataset.id); },
  'want': function (el) { var id = el.dataset.id; if (S.want[id]) delete S.want[id]; else { S.want[id] = 1; var b = C.breves.filter(function (x) { return x.id === id; })[0]; if (b && S.wish.indexOf(b.titre) < 0) S.wish.push(b.titre); } save(); el.setAttribute('aria-pressed', S.want[id] ? 'true' : 'false'); el.textContent = S.want[id] ? 'Fiche demandée' : 'J\'en veux une fiche'; },
  'game': function (el) { startGame(el.dataset.g); },
  'quiz-pick': function (el) { if (G.pick != null) return; var r = G.rounds[G.i]; G.pick = +el.dataset.i; if (G.pick === r.answer) { G.score++; if (r.qid) { S.q[r.qid] = true; save(); } } drawQuiz(); },
  'quiz-next': quizNext,
  'rel-word': function (el) { G.sel = el.dataset.id; drawRelier(); },
  'rel-def': function (el) { relDef(el.dataset.id); },
  'trou-ok': function () { trouOk(false); },
  'trou-skip': function () { trouOk(true); },
  'trou-next': trouNext,
  'cell': function (el) { cell(+el.dataset.r, +el.dataset.c); },
  'col-filter': function (el) { colFilter = el.dataset.f; render(); },
  'wish-ask': function () { openModal('<h2 class="big">Un mot à demander</h2><p class="muted">Note un mot ou une réf croisée dans un son. Tu enverras ta liste pour recevoir les fiches.</p><label class="small" for="wish-in">Le mot</label><input class="field" id="wish-in" type="text" placeholder="Par exemple : sprezzatura"><button class="btn" data-a="wish-add">Ajouter</button><button class="btn plain" data-a="modal-close">Annuler</button>'); var i = $('#wish-in'); if (i) i.focus(); },
  'wish-add': function () { var v = ($('#wish-in').value || '').trim(); if (!v) return; if (S.wish.indexOf(v) < 0) S.wish.push(v); save(); closeModal(); render(); toast('Noté'); },
  'wish-copy': function () { copyText('Mots à transformer en fiches Sapere : ' + S.wish.join(', '), 'Liste copiée'); },
  'wish-clear': function () { S.wish = []; S.want = {}; save(); render(); },
  'gate-in': function () { gateDo('in'); },
  'gate-up': function () { gateDo('up'); },
  'gate-reset': function () { gateDo('reset'); },
  'gate-skip': function () { S.local = true; saveLocal(); hideGate(); render(); },
  'gate-open': function () { closeSheet(); showGate(); },
  'logout': function () { closeSheet(); window.firebase.auth().signOut(); },
  'friend': function (el) { openFriend(el.dataset.id); },
  'theme': function () { S.theme = S.theme === 'dark' ? 'light' : 'dark'; save(); applyTheme(); openProfile(); },
  'profile': openProfile,
  'avatar': function (el) { S.avatar = el.dataset.k; save(); openProfile(); },
  'export-words': function () { var l = C.fiches.filter(function (f) { return S.words[f.id]; }).map(function (f) { return f.mot; }); copyText('Mots déjà dans Sapere (' + C.fiches.length + ' fiches au total) : ' + C.fiches.map(function (f) { return f.mot; }).join(', ') + '\nDéjà appris : ' + (l.join(', ') || 'aucun'), 'Liste copiée'); },
  'backup': function () { copyText(JSON.stringify(S), 'Sauvegarde copiée'); },
  'restore-ask': function () { openModal('<h2 class="big">Restaurer une sauvegarde</h2><p class="muted">Colle ici le texte copié avec « Copier ma sauvegarde ». Il remplacera ta progression actuelle.</p><label class="small" for="restore-in">Sauvegarde</label><textarea class="field" id="restore-in"></textarea><button class="btn" data-a="restore">Restaurer</button><button class="btn plain" data-a="modal-close">Annuler</button>'); },
  'restore': function () { try { var o = JSON.parse($('#restore-in').value); if (!o || typeof o !== 'object' || !o.words) throw 0; quiet = true; S = Object.assign(blank(), o); S.owner = CLOUD.user ? CLOUD.user.uid : null; save(); quiet = false; applyTheme(); closeModal(); closeSheet(); toast('Sauvegarde restaurée'); } catch (e) { toast('Ce texte n\'est pas une sauvegarde valide'); } },
  'reset-ask': function () { openModal('<h2 class="big">Tout effacer ?</h2><p class="muted">Ta collection, ta série et tes phrases seront supprimées de cet appareil.</p><button class="btn danger" data-a="reset">Oui, tout effacer</button><button class="btn plain" data-a="modal-close">Annuler</button>'); },
  'reset': function () { var th = S.theme, ow = S.owner, lo = S.local; S = blank(); S.theme = th; S.owner = ow; S.local = lo; save(); closeModal(); closeSheet(); go('today'); toast('Progression effacée'); }
};
document.addEventListener('click', function (ev) {
  if (ev.target.id === 'modal') return closeModal();
  var el = ev.target.closest('[data-a]'); if (!el || el.disabled) return;
  var fn = ACT[el.dataset.a]; if (fn) fn(el);
});
document.addEventListener('input', function (ev) {
  var k = ev.target.dataset && ev.target.dataset.in;
  if (k === 'phrase' && cur) { note(cur.id).phrase = ev.target.value; save(); }
  else if (k === 'search') { colSearch = ev.target.value; $('#col-list').innerHTML = colList(); }
  else if (k === 'name') { S.name = ev.target.value.trim(); save(); }
});

document.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' && ev.target.id === 'trou-in') { ev.preventDefault(); trouOk(false); } });
load(); applyTheme(); day(); saveLocal(); quiet = false; cloudInit();
if (isWeekend() && location.hash === '#jeux') tab = 'jeux';
render();
window.SapereDebug = { covers: function () { return C.fiches.map(function (f) { return '<div style="width:130px;text-align:center"><div style="height:80px;border-radius:8px;overflow:hidden;background:' + CATS[f.cat].c + '">' + art(f).replace('<svg ', '<svg style="width:100%;height:100%;display:block" ') + '</div>' + f.mot + '</div>'; }).join(''); }, sheet: function () { return Object.keys(AV).map(function (k) { return '<div style="width:72px;text-align:center">' + avatar(k) + AV[k][0] + '</div>'; }).join('') + C.questions.filter(function (q) { return q.flag; }).map(function (q) { return '<div style="width:100px;text-align:center">' + flagSvg(q.flag) + q.options[q.answer] + '</div>'; }).join(''); }, judge: judge, state: function () { return S; }, set: function (o) { S = Object.assign(blank(), o); save(); render(); } };
})();
