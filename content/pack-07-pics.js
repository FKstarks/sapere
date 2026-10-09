/* Sapere · illustrations dessinées pour les notions abstraites (boîte de 120 x 120, trait doré) */
(function (S) {
function star(cx, cy, R) { var p = []; for (var i = 0; i < 10; i++) { var r = i % 2 ? R * 0.42 : R, a = -Math.PI / 2 + i * Math.PI / 5; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '"/>'; }
var W = ' fill="#FFFFFF" stroke="none"', G = ' fill="#E0B04A" stroke="none"';
S.pics = {
  "memento-mori": '<path d="M60 12a38 38 0 0 0-38 38c0 13 6 23 15 28v16h46V78c9-5 15-15 15-28a38 38 0 0 0-38-38z"/><circle cx="45" cy="52" r="9"' + G + '/><circle cx="75" cy="52" r="9"' + G + '/><path d="M60 62l-5 10h10z"' + G + '/><path d="M49 94V82M60 94V82M71 94V82"/><path d="M26 112h68"/>',
  "carpe-diem": '<circle cx="60" cy="64" r="22"/><path d="M60 22v12M60 94v12M18 64h12M90 64h12M30 34l9 9M81 85l9 9M30 94l9-9M81 43l9-9"/>',
  "sine-qua-non": '<circle cx="36" cy="60" r="18"/><circle cx="36" cy="60" r="5"' + G + '/><path d="M54 60h54M90 60v16M104 60v11"/>',
  "casus-belli": '<path d="M24 20l62 62M96 20L34 82"/><path d="M76 92l16-16M44 92L28 76"/><path d="M82 86l14 14M38 86l-14 14"/>',
  "persona-non-grata": '<circle cx="60" cy="60" r="44"/><path d="M29 29l62 62"/><circle cx="60" cy="48" r="11"/><path d="M38 86a22 22 0 0 1 44 0"/>',
  "tabula-rasa": '<rect x="24" y="16" width="72" height="90" rx="8"/><path d="M38 38h44M38 54h30" stroke-dasharray="2 9"/><rect x="62" y="68" width="30" height="18" rx="4" transform="rotate(-25 77 77)"' + G + '/>',
  "modus-vivendi": '<circle cx="44" cy="60" r="30"/><circle cx="76" cy="60" r="30"/><path d="M60 35a30 30 0 0 1 0 50a30 30 0 0 1 0-50z"' + G + ' opacity="0.550"/>',
  "pallier": '<rect x="14" y="42" width="92" height="36" rx="18" transform="rotate(-32 60 60)"/><rect x="44" y="44" width="32" height="32" rx="4" transform="rotate(-32 60 60)"' + G + ' opacity="0.550"/><path d="M26 86l.010 0M34 94l.010 0M86 26l.010 0M94 34l.010 0" stroke-width="6"/>',
  "fustiger": '<path d="M70 8L28 66h26l-8 46 46-64H64z"/>',
  "prosaique": '<path d="M12 30h96v20H12zM12 50h96v20H12zM12 70h96v20H12z"/><path d="M44 30v20M80 30v20M28 50v20M62 50v20M96 50v20M44 70v20M80 70v20"/>',
  "sibyllin": '<path d="M8 60c16-24 33-34 52-34s36 10 52 34c-16 24-33 34-52 34S24 84 8 60z"/><circle cx="60" cy="60" r="16"/><circle cx="60" cy="60" r="6"' + G + '/>',
  "ostentatoire": '<path d="M26 44l16-22h36l16 22-34 60z"/><path d="M26 44h68M42 22l18 82 18-82M50 44l10-22 10 22"/>',
  "apanage": '<path d="M18 86l-8-48 26 20 24-36 24 36 26-20-8 48z"/><path d="M18 100h84"/><circle cx="60" cy="68" r="5"' + G + '/>',
  "dithyrambique": '<g' + G + '>' + star(60, 40, 26) + star(28, 88, 15) + star(92, 88, 15) + '</g>',
  "oxymore": '<circle cx="60" cy="60" r="42"/><path d="M60 18a42 42 0 0 1 0 84z"' + G + '/><path d="M60 6v8M60 106v8M6 60h8M106 60h8"/>',
  "antithese": '<path d="M12 42h82M80 26l18 16-18 16"/><path d="M108 78H26M40 62L22 78l18 16"/>',
  "metaphore-filee": '<path d="M8 66c14-44 28-44 42 0s28 44 42 0"/><path d="M92 66l18-40"/><circle cx="108" cy="30" r="3"' + G + '/>',
  "litote": '<path d="M16 22h88a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8H56l-22 20V82H16a8 8 0 0 1-8-8V30a8 8 0 0 1 8-8z"/><path d="M44 52h32"/>',
  "euphemisme": '<path d="M100 14C62 20 30 50 22 90l-4 18 18-8c36-12 64-44 64-86z"/><path d="M22 104l56-62"/>',
  "anaphore": '<path d="M12 28h20v14H12zM12 54h20v14H12zM12 80h20v14H12z"' + G + '/><path d="M44 35h64M44 61h46M44 87h56"/>',
  "chiasme": '<path d="M26 26l68 68M94 26L26 94"/><circle cx="22" cy="22" r="8"' + G + '/><circle cx="98" cy="98" r="8"' + G + '/><circle cx="98" cy="22" r="8"/><circle cx="22" cy="98" r="8"/>',
  "amor-fati": '<path d="M60 102S14 74 14 44a23 23 0 0 1 46-10 23 23 0 0 1 46 10c0 30-46 58-46 58z"/><g' + G + '>' + star(60, 54, 14) + '</g>',
  "stoicisme": '<path d="M26 18h68M32 18v12h56V18M40 30v58M60 30v58M80 30v58M30 88h60M22 102h76"/>',
  "ockham": '<path d="M14 34h74l10 12v14H14z"/><path d="M98 60l14 44"/><path d="M26 46h50"/>',
  "sisyphe": '<path d="M6 106L114 34"/><circle cx="56" cy="46" r="20"/><circle cx="26" cy="74" r="6"' + G + '/><path d="M28 80l6 14M30 80l10-12"/>',
  "caverne": '<path d="M8 106V62a52 52 0 0 1 104 0v44"/><path d="M60 100c-10 0-16-7-16-15 0-9 8-13 10-22 3 6 6 7 7 3 1-5 0-10 1-14 3 12 14 18 14 33 0 8-6 15-16 15z"' + G + '/>',
  "cogito": '<circle cx="66" cy="46" r="34"/><circle cx="30" cy="92" r="8"/><circle cx="14" cy="108" r="4"/><path d="M50 46l.010 0M66 46l.010 0M82 46l.010 0" stroke-width="8"/>',
  "maieutique": '<path d="M38 40a22 22 0 1 1 34 18c-8 6-12 10-12 22"/><circle cx="60" cy="100" r="5"' + G + '/>',
  "ikigai": '<circle cx="60" cy="40" r="26"/><circle cx="60" cy="80" r="26"/><circle cx="40" cy="60" r="26"/><circle cx="80" cy="60" r="26"/><circle cx="60" cy="60" r="7"' + G + '/>',
  "schadenfreude": '<circle cx="60" cy="60" r="44"/><path d="M38 46l14 6M82 46l-14 6"/><path d="M40 74q26 22 42-10"/>',
  "millesime": '<path d="M50 6h20v24c12 7 16 16 16 28v54H34V58c0-12 4-21 16-28z"/><rect x="42" y="64" width="36" height="30" rx="3"' + G + ' opacity="0.550"/><path d="M50 16h20"/>',
  "complication": '<circle cx="60" cy="60" r="26"/><circle cx="60" cy="60" r="8"' + G + '/><path d="M60 22v12M60 86v12M22 60h12M86 60h12M33 33l9 9M78 78l9 9M33 87l9-9M78 42l9-9" stroke-width="10" stroke-linecap="butt"/>',
  "cubisme": '<path d="M30 16l34 10-14 30z"' + G + ' opacity="0.850"/><path d="M64 26l30 6-10 34-34-10z"' + W + ' opacity="0.850"/><path d="M50 56l34 10-22 40-30-18z"' + G + ' opacity="0.500"/><path d="M30 16l34 10 30 6-10 34-22 40-30-18 18-32z"/><path d="M62 106l8 8M24 60l-12-6"/>',
  "surrealisme": '<path d="M16 40c0-14 20-24 44-24s44 10 44 24-16 22-36 24c-6 1-8 6-8 14v20a8 8 0 0 1-16 0V74c0-6-4-9-10-10-12-3-18-12-18-24z"/><path d="M60 40V26M60 40l14 6"/><circle cx="60" cy="40" r="3"' + G + '/>'
};
})(window.SAPERE);
