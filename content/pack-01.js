/* Sapere · paquet 01 · premier lot de test */
window.SAPERE = window.SAPERE || { debut: "2026-10-09", fiches: [], questions: [], breves: [] };
(function (S) {
var KINTSUGI_SVG = '<svg viewBox="0 0 390 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bol réparé à l\'or"><rect width="390" height="240" fill="#17130F"/><path d="M95 78 Q95 208 195 208 Q295 208 295 78 Z" fill="#2B3A42"/><ellipse cx="195" cy="78" rx="100" ry="17" fill="#1B262C"/><rect x="167" y="205" width="56" height="10" rx="3" fill="#23313A"/><path d="M166 94 L181 132 L160 166 L177 205 M181 132 L229 145 L253 121 L286 126 M229 145 L235 192 M126 104 L139 140 L160 166" fill="none" stroke="#E0B04A" stroke-width="3.200" stroke-linecap="round" stroke-linejoin="round"/></svg>';

S.fiches.push(
{
  id: "kintsugi", mot: "Kintsugi", cat: "ailleurs", origine: "Japon",
  pron: { texte: "kine-tsou-gui", ecrit: "金継ぎ", lang: "ja-JP", dire: "金継ぎ" }, svg: KINTSUGI_SVG, cache: "KINTSUGI",
  phrase: "L'art japonais de réparer une céramique cassée en soulignant ses fissures avec de l'or, au lieu de les cacher.",
  court: "Art japonais de réparer une céramique en soulignant ses fissures à l'or.",
  sections: [
    { t: "L'histoire", p: "Le mot vient de <em>kin</em> (or) et <em>tsugi</em> (jointure) : la « jointure en or ». On raconte qu'au XVe siècle, le shogun Ashikaga Yoshimasa a cassé son bol à thé préféré et l'a envoyé en Chine pour le faire réparer. Le bol est revenu rafistolé avec de grosses agrafes en métal, solide mais laid. Des artisans japonais auraient alors cherché une réparation qui soit belle." },
    { t: "Comment ça marche", p: "L'artisan recolle les morceaux avec de la laque <em>urushi</em>, une sève d'arbre, puis saupoudre les jointures de poudre d'or. La laque sèche très lentement : une réparation prend des semaines, parfois des mois." },
    { t: "L'idée derrière", p: "La cassure fait partie de l'histoire de l'objet, donc on ne la cache pas. Un bol réparé au kintsugi est unique, et il vaut souvent plus cher qu'avant d'être cassé." }
  ],
  usage: "Surtout comme métaphore : quelqu'un qui a été brisé, qui s'est reconstruit, et dont les cicatrices font la valeur.",
  exemples: ["« Après sa blessure, il est revenu plus fort. Sa carrière, c'est du kintsugi. »", "« Je cache pas mes échecs, je fais du kintsugi avec. »", "« Ils ont recollé les morceaux façon kintsugi, et c'est plus solide qu'avant. »"],
  piege: "Ce n'est pas un simple « réparer ». Si la réparation est invisible, ce n'est pas du kintsugi : la cassure doit se voir, et être belle.",
  croiser: "Dans le rap et la poésie pour parler de résilience, en décoration, et de plus en plus dans la mode et la joaillerie.",
  cousins: [
    { mot: "Wabi-sabi", court: "Philosophie japonaise de la beauté de l'imparfait et de l'éphémère.", texte: "La philosophie japonaise qui trouve de la beauté dans l'imparfait, l'usé et l'éphémère. Le kintsugi en est l'application à un objet cassé." },
    { mot: "Résilience", court: "Capacité à encaisser un choc et à se reconstruire.", texte: "La capacité à encaisser un choc et à se reconstruire. Le kintsugi en est l'image la plus connue." }
  ],
  situation: "Elle a traversé un burn-out, elle en parle ouvertement et elle dit que ça l'a rendue plus solide. Ses cicatrices font partie de sa force. C'est du…",
  trou: "Au lieu de cacher la fissure du vase, il l'a soulignée à l'or, à la manière du ___."
},
{
  id: "memento-mori", mot: "Memento mori", cat: "latin", origine: "Rome",
  pron: { texte: "mé-mène-to mo-ri", lang: "it-IT", dire: "memento mori" }, cache: "MEMENTO",
  phrase: "« Souviens-toi que tu vas mourir » : un rappel que la vie est courte, pour remettre les choses à leur juste place.",
  court: "« Souviens-toi que tu vas mourir » : rappel que tout est éphémère.",
  sections: [
    { t: "L'histoire", p: "Une tradition romaine raconte que, lors du triomphe d'un général victorieux, un esclave se tenait derrière lui sur le char et lui répétait de se souvenir qu'il n'était qu'un homme. La formule <em>memento mori</em> elle-même s'est surtout répandue au Moyen Âge, dans la pensée chrétienne." },
    { t: "Dans l'art", p: "Au XVIIe siècle, les peintres en font un genre entier : les <em>vanités</em>. Ce sont des natures mortes où l'on voit un crâne, un sablier, une bougie qui s'éteint, des fleurs qui fanent. Tous ces objets disent la même chose : le temps passe, la richesse et la gloire ne durent pas." },
    { t: "L'idée derrière", p: "Ce n'est pas une phrase déprimante. Penser à la fin sert à trier : ce qui compte vraiment, ce qui n'est que du bruit. Les stoïciens s'en servaient comme d'un exercice quotidien." }
  ],
  usage: "Pour désigner un objet ou un moment qui te rappelle que rien ne dure, ou pour justifier de profiter maintenant.",
  exemples: ["« Ce crâne tatoué sur son bras, c'est son memento mori. »", "« L'enterrement de son oncle a été un memento mori : il a démissionné le mois suivant. »", "« Je regarde cette vieille photo comme un memento mori, ça me calme sur mes petits problèmes. »"],
  piege: "Ne le confonds pas avec <em>carpe diem</em>. Carpe diem dit « profite du jour ». Memento mori dit « n'oublie pas la fin », et c'est à toi d'en tirer la conclusion.",
  croiser: "Dans les musées (les vanités), les tatouages, les bijoux à tête de mort, les titres d'albums et de films.",
  cousins: [
    { mot: "Carpe diem", court: "« Cueille le jour » : profite du moment présent.", texte: "« Cueille le jour », formule du poète Horace. C'est la réponse joyeuse au memento mori : puisque le temps file, profite du présent." },
    { mot: "Vanité", court: "Nature morte avec crâne ou sablier, sur le temps qui passe.", texte: "En peinture, une nature morte avec crâne, sablier ou bougie, qui rappelle que les plaisirs et la gloire sont passagers." }
  ],
  situation: "Sur son bureau, il garde un petit crâne en métal. Il dit que ça lui rappelle que le temps est compté et qu'il ne doit pas le gaspiller. Ce crâne, c'est son…",
  trou: "Ce tableau avec un crâne et un sablier est un ___ : il rappelle que tout a une fin."
},
{
  id: "pallier", mot: "Pallier", cat: "soutenu", origine: "",
  phrase: "Compenser un manque ou un problème de façon provisoire, sans le régler vraiment.",
  court: "Compenser un manque de façon provisoire, sans le régler à fond.",
  sections: [
    { t: "L'histoire", p: "Le verbe vient du latin <em>palliare</em>, « couvrir d'un manteau » (le <em>pallium</em>). Au départ, pallier, c'est cacher quelque chose sous une couverture. Le sens a glissé : on ne cache plus le problème, on en limite les effets." },
    { t: "Le sens précis", p: "Pallier, ce n'est pas résoudre. Tu pallies un manque de personnel en faisant des heures supplémentaires : le manque est toujours là, tu en atténues juste les conséquences. C'est la même racine que les soins <em>palliatifs</em>, qui soulagent sans guérir." }
  ],
  usage: "Dans un contexte sérieux, quand tu veux dire que tu as trouvé une solution d'attente.",
  exemples: ["« J'ai pris des fiches en plus pour pallier mon retard sur ce chapitre. »", "« Le prof a envoyé un PDF pour pallier l'annulation du cours. »", "« Ils ont loué un groupe électrogène pour pallier la coupure de courant. »"],
  piege: "On dit « pallier un problème », jamais « pallier <em>à</em> un problème ». Le verbe se construit sans préposition. L'erreur vient de « remédier à », qui lui en demande une.",
  croiser: "Dans la presse, les mails professionnels, les copies bien notées. Et à l'hôpital, avec « palliatif ».",
  cousins: [
    { mot: "Palliatif", court: "Qui soulage sans guérir.", texte: "Ce qui soulage sans guérir. Les soins palliatifs apaisent la douleur quand on ne peut plus traiter la maladie." },
    { mot: "Remédier à", court: "Apporter une vraie solution à un problème.", texte: "Apporter une vraie solution. Plus fort que pallier, et celui-ci prend bien la préposition « à »." }
  ],
  situation: "Le wifi de la résidence est en panne depuis une semaine. En attendant le technicien, il partage la connexion de son téléphone. Il ne règle pas le problème, il cherche juste à le…",
  trou: "Faute de budget, l'association a fait appel à des bénévoles pour ___ le manque de salariés."
},
{
  id: "oxymore", mot: "Oxymore", cat: "style", origine: "Grèce",
  phrase: "Une figure de style qui colle ensemble deux mots de sens opposés pour créer une image forte.",
  court: "Figure de style qui associe deux mots de sens opposés.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du grec <em>oxus</em> (aigu, fin) et <em>môros</em> (émoussé, sot). Autrement dit, « oxymore » veut dire quelque chose comme « finement bête » : le mot est lui-même un oxymore." },
    { t: "Les exemples célèbres", p: "Corneille parle d'une « obscure clarté qui tombe des étoiles » dans <em>Le Cid</em>. Nerval écrit « le soleil noir de la Mélancolie ». Dans les deux cas, les deux mots ne devraient pas aller ensemble, et c'est ce choc qui fait l'image." },
    { t: "Pourquoi ça marche", p: "Le cerveau bute sur la contradiction et doit trouver un sens nouveau. L'oxymore sert à dire ce qui est mélangé ou ambigu : une joie triste, un calme inquiétant." }
  ],
  usage: "Pour nommer la figure quand tu la repères dans un texte, ou pour pointer une contradiction dans une expression.",
  exemples: ["« <em>Silence assourdissant</em>, c'est un oxymore qu'on emploie sans y penser. »", "« Il a appelé son album <em>Douce violence</em> : tout le projet tient dans cet oxymore. »", "« <em>Mort-vivant</em> est un oxymore devenu un mot courant. »"],
  piege: "Dans l'oxymore, les deux mots opposés sont collés dans le même groupe (« soleil noir »). Si l'opposition est répartie dans la phrase, comme chez Louise Labé (« Je vis, je meurs ; je me brûle et me noie »), c'est une <em>antithèse</em>.",
  croiser: "Partout dans le rap et la poésie, dans les titres de films et d'albums, et dans les commentaires de texte.",
  cousins: [
    { mot: "Antithèse", court: "Opposition de deux idées placées à distance dans la phrase.", texte: "Elle oppose deux idées dans une même phrase, mais à distance l'une de l'autre, sans les souder." },
    { mot: "Paradoxe", court: "Idée contraire à la logique apparente, mais qui contient une vérité.", texte: "Une idée qui semble contraire à la logique mais qui contient une vérité, comme « moins on en fait, mieux on travaille »." }
  ],
  situation: "Dans un couplet, le rappeur parle d'une « lumière sombre ». Les deux mots se contredisent mais l'image fonctionne. Cette figure de style s'appelle un…",
  trou: "« Une obscure clarté » : deux mots contraires collés ensemble, c'est un ___."
},
{
  id: "spleen", mot: "Spleen", cat: "litterature", origine: "Baudelaire",
  phrase: "Une mélancolie profonde et sans cause précise, un dégoût de tout, que Baudelaire a rendu célèbre.",
  court: "Mélancolie profonde et sans cause précise, chère à Baudelaire.",
  sections: [
    { t: "L'histoire", p: "<em>Spleen</em> est un mot anglais qui veut dire « rate », l'organe. Dans la médecine ancienne, celle de la théorie des humeurs, la rate produisait la bile noire, responsable de la tristesse. « Mélancolie » vient d'ailleurs du grec <em>melas kholê</em>, « bile noire »." },
    { t: "Chez Baudelaire", p: "En 1857, Charles Baudelaire publie <em>Les Fleurs du mal</em>. La première partie s'appelle « Spleen et Idéal » : d'un côté l'élan vers la beauté, de l'autre la retombée dans l'ennui et l'angoisse. Plusieurs poèmes portent le titre « Spleen ». Après sa mort paraît <em>Le Spleen de Paris</em>, un recueil de petits poèmes en prose." },
    { t: "Ce que c'est vraiment", p: "Le spleen n'est pas un coup de blues passager. C'est un ennui lourd, le sentiment que le temps s'étire et que rien n'a de goût, sans qu'on puisse dire pourquoi." }
  ],
  usage: "Pour parler d'une tristesse diffuse, élégante, un peu littéraire. Le mot s'emploie avec « avoir le » ou tout seul.",
  exemples: ["« Les dimanches soir de novembre, j'ai le spleen. »", "« Tout l'album baigne dans un spleen urbain, entre néons et insomnies. »", "« Ce n'est pas de la déprime, c'est du spleen : il ne sait même pas ce qui lui manque. »"],
  piege: "Le spleen n'a pas de cause identifiable. Si tu es triste parce que tu as raté un examen, c'est de la déception, pas du spleen.",
  croiser: "Dans les cours de français, les chroniques d'albums, et chez tous les artistes qui se réclament de Baudelaire.",
  cousins: [
    { mot: "Mélancolie", court: "Tristesse douce et rêveuse.", texte: "La tristesse douce et rêveuse. Le spleen en est la version plus noire et plus pesante." },
    { mot: "Mal du siècle", court: "Malaise des jeunes romantiques du XIXe siècle, sans but ni gloire.", texte: "Le malaise des jeunes romantiques du début du XIXe siècle, nés trop tard pour la gloire et sans but. L'ancêtre du spleen." }
  ],
  situation: "Il n'a aucune raison précise d'aller mal, mais depuis des semaines tout lui paraît gris et sans goût. Baudelaire avait un mot pour ça : le…",
  trou: "Baudelaire a intitulé la première partie des Fleurs du mal « ___ et Idéal »."
},
{
  id: "amor-fati", mot: "Amor fati", cat: "philo", origine: "Nietzsche",
  pron: { texte: "a-mor fa-ti", lang: "it-IT", dire: "amor fati" }, cache: "AMORFATI",
  phrase: "« L'amour du destin » : vouloir sa vie telle qu'elle est, y compris les galères, au lieu de la subir.",
  court: "« L'amour du destin » : vouloir sa vie telle qu'elle est, galères comprises.",
  sections: [
    { t: "Qui l'a pensé", p: "La formule est du philosophe allemand Friedrich Nietzsche. Il l'écrit dans <em>Le Gai Savoir</em> en 1882, puis y revient dans <em>Ecce Homo</em>, où il en fait sa formule pour la grandeur de l'homme : ne rien vouloir d'autre que ce qui est, ni devant soi, ni derrière soi." },
    { t: "L'idée", p: "Supporter ce qui t'arrive ne suffit pas. Nietzsche demande d'aller plus loin et de l'aimer, parce que chaque événement, même douloureux, a contribué à faire de toi ce que tu es. Retire une épreuve de ton histoire et tu n'es plus la même personne." },
    { t: "D'où ça vient", p: "L'idée a des racines chez les stoïciens, comme Épictète et Marc Aurèle, qui conseillaient d'accepter ce qui ne dépend pas de nous. Nietzsche la pousse d'un cran : de l'acceptation à l'amour." }
  ],
  usage: "Pour dire que tu assumes ton parcours en entier, sans regretter les détours.",
  exemples: ["« J'ai redoublé ma première année, et sans ça je n'aurais pas ma méthode de travail. Amor fati. »", "« Il ne se plaint jamais de son enfance difficile. Il a une forme d'amor fati. »", "« Amor fati : si c'était à refaire, je referais tout pareil, même les erreurs. »"],
  piege: "Ce n'est pas de la résignation ni du fatalisme. Le fataliste dit « c'est comme ça, je n'y peux rien ». L'amor fati dit « c'est comme ça, et je le veux ».",
  croiser: "En tatouage, dans le développement personnel, chez les sportifs, et dans pas mal de textes de rap.",
  cousins: [
    { mot: "Stoïcisme", court: "École antique : ne s'inquiéter que de ce qui dépend de nous.", texte: "L'école de philosophie antique qui apprend à distinguer ce qui dépend de nous de ce qui n'en dépend pas, et à ne s'inquiéter que du premier." },
    { mot: "Éternel retour", court: "Idée de Nietzsche : revivre sa vie à l'identique, à l'infini.", texte: "Une autre idée de Nietzsche : imagine que tu doives revivre ta vie à l'identique, à l'infini. Est-ce que tu dirais oui ?" }
  ],
  situation: "Elle a connu des années très dures, mais elle dit qu'elle ne changerait rien, parce que tout ça l'a construite. Elle ne subit pas son passé, elle l'aime. C'est l'…",
  trou: "Pour Nietzsche, la grandeur consiste à ne rien vouloir d'autre que ce qui est : c'est l'___."
},
{
  id: "damocles", mot: "Épée de Damoclès", cat: "mytho", origine: "Grèce antique", cache: "DAMOCLES", accept: ["Damoclès"],
  phrase: "Un danger qui plane en permanence au-dessus de quelqu'un et qui peut tomber à tout moment.",
  court: "Danger permanent qui plane au-dessus de quelqu'un.",
  sections: [
    { t: "L'histoire", p: "Au IVe siècle avant notre ère, Denys l'Ancien règne en tyran sur Syracuse, en Sicile. Un de ses courtisans, Damoclès, ne cesse de lui répéter qu'il a de la chance d'être si puissant et si riche. Denys lui propose alors de prendre sa place le temps d'un banquet." },
    { t: "Le banquet", p: "Damoclès s'installe sur le lit d'or, entouré de plats et de serviteurs. Puis il lève les yeux : une épée est suspendue juste au-dessus de sa tête, retenue par un seul crin de cheval. Il n'a plus faim du tout et supplie qu'on le laisse partir. L'histoire nous est racontée par Cicéron." },
    { t: "La leçon", p: "Denys voulait montrer que le pouvoir a un prix : celui qui a tout vit dans la peur constante de tout perdre, ou d'être assassiné." }
  ],
  usage: "Pour parler d'une menace qui n'est pas encore tombée mais qui empêche de vivre tranquille.",
  exemples: ["« Le classement du concours, c'est une épée de Damoclès pendant toute l'année. »", "« Avec ce crédit, il a une épée de Damoclès au-dessus de la tête. »", "« La menace de fermeture plane sur l'usine comme une épée de Damoclès. »"],
  piege: "L'épée n'est pas encore tombée. On parle d'un danger qui menace, pas d'une catastrophe qui a déjà eu lieu.",
  croiser: "Dans la presse économique et politique, les commentaires sportifs, et dans la vie de tous les jours.",
  cousins: [
    { mot: "Talon d'Achille", court: "Le seul point faible de quelqu'un de très fort.", texte: "Le seul point faible de quelqu'un de très fort, d'après le héros grec invulnérable sauf au talon." },
    { mot: "Tonneau des Danaïdes", court: "Tâche sans fin, comme remplir un tonneau percé.", texte: "Une tâche sans fin, comme remplir un tonneau percé. C'est la punition des Danaïdes aux Enfers." }
  ],
  situation: "Son contrat peut être rompu à tout moment, sans préavis. Il travaille bien, mais cette menace ne le quitte jamais. Il vit avec une…",
  trou: "Tant que les résultats ne sont pas tombés, cette menace reste suspendue au-dessus de lui comme une ___."
},
{
  id: "clair-obscur", mot: "Clair-obscur", cat: "art", origine: "Italie, vers 1600", cache: "OBSCUR",
  phrase: "Une technique de peinture qui fait surgir les personnages de l'ombre grâce à un contraste très fort entre lumière et obscurité.",
  court: "Technique de peinture au contraste très fort entre lumière et ombre.",
  sections: [
    { t: "L'histoire", p: "Le mot traduit l'italien <em>chiaroscuro</em>. Autour de 1600, à Rome, le peintre Caravage pousse la technique à l'extrême : des fonds presque noirs, et une lumière crue qui tombe de côté sur les visages et les mains, comme un projecteur." },
    { t: "À quoi on le reconnaît", p: "Trois indices. Le fond est sombre, souvent vide. La lumière vient d'une seule direction. Et les corps ont beaucoup de relief, presque comme des sculptures. Après Caravage, Rembrandt aux Pays-Bas et Georges de La Tour en France, célèbre pour ses scènes éclairées à la bougie, reprennent le procédé." },
    { t: "Pourquoi c'est fort", p: "L'ombre cache tout ce qui est secondaire, donc l'œil va directement à l'essentiel. La scène gagne en drame : on dirait un instant saisi en pleine nuit." }
  ],
  usage: "Au sens propre pour une image très contrastée, et au sens figuré pour une situation ou une personne pleine de zones d'ombre.",
  exemples: ["« Le clip est tourné en clair-obscur, on ne voit que la moitié de son visage. »", "« Le film fait un portrait en clair-obscur du président : ni héros ni salaud. »", "« Cette photo à la bougie, c'est du clair-obscur pur. »"],
  piege: "Clair-obscur ne veut pas dire « flou » ni « sombre ». Il faut les deux à la fois : une zone très éclairée contre une zone très noire.",
  croiser: "Dans les musées, les critiques de cinéma et de photo, et pour décrire un personnage ambigu.",
  cousins: [
    { mot: "Sfumato", court: "Contours fondus comme dans une brume, technique de Léonard de Vinci.", texte: "La technique de Léonard de Vinci : des contours fondus, comme dans une légère brume. C'est ce qui donne son flou à la Joconde." },
    { mot: "Ténébrisme", court: "Clair-obscur radical où l'ombre envahit presque tout le tableau.", texte: "La version radicale du clair-obscur, où l'ombre envahit presque tout le tableau. C'est le style de Caravage et de ses suiveurs." }
  ],
  situation: "Sur le tableau, le fond est noir et une lumière violente éclaire seulement un visage et une main. Cette technique rendue célèbre par Caravage s'appelle le…",
  trou: "Caravage est le maître du ___ : des personnages violemment éclairés sur un fond presque noir."
},
{
  id: "millesime", mot: "Millésime", cat: "luxe", origine: "Vin",
  phrase: "L'année de récolte du raisin qui a servi à faire un vin, inscrite sur l'étiquette.",
  court: "Année de récolte du raisin d'un vin, inscrite sur l'étiquette.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du latin <em>millesimus</em>, « millième ». À l'origine, il désigne les chiffres qui indiquent l'année sur une monnaie ou une médaille. Le monde du vin l'a repris pour l'année de la vendange." },
    { t: "Pourquoi ça compte", p: "Le raisin dépend de la météo : une année de gel, de grêle ou de canicule ne donne pas le même vin qu'une année équilibrée. Deux bouteilles du même domaine peuvent donc valoir du simple au triple selon leur millésime. Les connaisseurs retiennent les grandes années par région." },
    { t: "Le cas du champagne", p: "La plupart des champagnes n'ont pas de millésime : ce sont des assemblages de plusieurs années, pour garder le même goût d'une bouteille à l'autre. Une maison ne sort un champagne <em>millésimé</em> que les années qu'elle juge exceptionnelles, et il coûte plus cher." }
  ],
  usage: "Au sens propre pour un vin, et par extension pour toute « cuvée » d'une année : une promo, un modèle de voiture, une saison.",
  exemples: ["« C'est un 2015, un très bon millésime pour les bordeaux. »", "« La promo de cette année est un bon millésime, le niveau est élevé. »", "« Le millésime 2026 du festival est le meilleur depuis longtemps. »"],
  piege: "Un vin plus vieux n'est pas forcément meilleur. Ce qui compte, c'est la qualité de l'année de récolte, pas l'âge de la bouteille.",
  croiser: "Sur les cartes des vins, dans les ventes aux enchères, et dans les textes de rap qui citent des bouteilles.",
  cousins: [
    { mot: "Grand cru", court: "Rang le plus élevé donné à un vignoble.", texte: "Le rang le plus élevé donné à un vignoble ou à un domaine dans certaines régions. Le classement varie de la Bourgogne au Bordelais." },
    { mot: "Cuvée", court: "Lot de vin précis sorti par un domaine.", texte: "Un lot de vin précis sorti par un domaine. Par extension, une édition ou une promotion." }
  ],
  situation: "Sur l'étiquette de la bouteille, il y a écrit « 2010 ». Le sommelier explique que cette année-là, la récolte a été exceptionnelle. Ce chiffre, c'est le…",
  trou: "Ce champagne n'est produit que les années exceptionnelles, et son étiquette porte un ___."
}
);

S.questions.push(
  { id: "q-australie", theme: "Géographie", q: "Quelle est la capitale de l'Australie ?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: 2, explain: "C'est <b>Canberra</b>. Sydney et Melbourne se disputaient le titre, alors l'Australie a construit une capitale neuve entre les deux au début du XXe siècle." },
  { id: "q-loire", theme: "Géographie", q: "Quel est le plus long fleuve de France ?", options: ["La Seine", "La Loire", "Le Rhône", "La Garonne"], answer: 1, explain: "<b>La Loire</b>, avec un peu plus de 1 000 km. Elle prend sa source au mont Gerbier-de-Jonc, en Ardèche, et se jette dans l'Atlantique." },
  { id: "q-mur", theme: "Histoire", q: "En quelle année le mur de Berlin est-il tombé ?", options: ["1961", "1979", "1989", "1991"], answer: 2, explain: "Le <b>9 novembre 1989</b>. Le mur avait été construit en 1961. L'Allemagne est réunifiée l'année suivante, en 1990." },
  { id: "q-fuseaux", theme: "Géographie", q: "Quel pays couvre le plus de fuseaux horaires, en comptant ses territoires d'outre-mer ?", options: ["La Russie", "Les États-Unis", "La Chine", "La France"], answer: 3, explain: "<b>La France</b>, avec 12 fuseaux grâce à ses territoires répartis sur tous les océans. La Russie en compte 11, et la Chine un seul malgré sa taille." },
  { id: "q-louis", theme: "Histoire", q: "Qui était roi de France quand la Révolution a éclaté en 1789 ?", options: ["Louis XIV", "Louis XV", "Louis XVI", "Louis XVIII"], answer: 2, explain: "<b>Louis XVI</b>. Il est guillotiné en janvier 1793. Louis XIV, le Roi-Soleil, était mort en 1715." },
  { id: "q-gibraltar", theme: "Géographie", q: "Quel détroit sépare l'Europe de l'Afrique ?", options: ["Le Bosphore", "Gibraltar", "Ormuz", "Messine"], answer: 1, explain: "Le détroit de <b>Gibraltar</b>, entre l'Espagne et le Maroc. À son point le plus étroit, il ne fait qu'environ 14 km de large." },
  { id: "q-byzance", theme: "Histoire", q: "Quelle ville était la capitale de l'Empire byzantin ?", options: ["Athènes", "Rome", "Alexandrie", "Constantinople"], answer: 3, explain: "<b>Constantinople</b>, l'actuelle Istanbul. La ville est prise par les Ottomans en 1453, une date souvent choisie pour marquer la fin du Moyen Âge." },
  { id: "q-vatican", theme: "Géographie", q: "Quel est le plus petit État du monde ?", options: ["Monaco", "Le Vatican", "Saint-Marin", "Le Liechtenstein"], answer: 1, explain: "<b>Le Vatican</b>, avec moins d'un demi-kilomètre carré, enclavé dans Rome. Monaco est le deuxième plus petit." }
);

S.questions.push(
  { id: "q-everest", theme: "Géographie", q: "Quel est le plus haut sommet du monde ?", options: ["Le K2", "L'Everest", "Le mont Blanc", "Le Kilimandjaro"], answer: 1, explain: "<b>L'Everest</b>, dans l'Himalaya, culmine à environ 8 849 m. Le K2 est le deuxième plus haut." },
  { id: "q-machu", theme: "Géographie", q: "Dans quel pays se trouve le Machu Picchu ?", options: ["Le Mexique", "La Bolivie", "Le Pérou", "Le Chili"], answer: 2, explain: "Au <b>Pérou</b>, dans les Andes. Cette cité a été bâtie par les Incas au XVe siècle." },
  { id: "q-nil", theme: "Géographie", q: "Quel fleuve traverse Le Caire ?", options: ["Le Nil", "Le Niger", "L'Euphrate", "Le Congo"], answer: 0, explain: "<b>Le Nil</b>. Il traverse l'Égypte du sud au nord avant de se jeter dans la Méditerranée." },
  { id: "q-ottawa", theme: "Géographie", q: "Quelle est la capitale du Canada ?", options: ["Toronto", "Montréal", "Vancouver", "Ottawa"], answer: 3, explain: "<b>Ottawa</b>, en Ontario. Toronto est la plus grande ville du pays, mais pas sa capitale." },
  { id: "q-pacifique", theme: "Géographie", q: "Quel est le plus grand océan du monde ?", options: ["L'Atlantique", "L'Indien", "Le Pacifique", "L'Arctique"], answer: 2, explain: "<b>Le Pacifique</b>. Il couvre à lui seul environ un tiers de la surface de la Terre." },
  { id: "q-ankara", theme: "Géographie", q: "Quelle est la capitale de la Turquie ?", options: ["Istanbul", "Ankara", "Izmir", "Antalya"], answer: 1, explain: "<b>Ankara</b>, capitale depuis 1923. Istanbul est la plus grande ville, et l'ancienne capitale de l'Empire ottoman." },
  { id: "q-sahara", theme: "Géographie", q: "Quel est le plus grand désert chaud du monde ?", options: ["Le Gobi", "Le Kalahari", "Le Sahara", "L'Atacama"], answer: 2, explain: "<b>Le Sahara</b>, en Afrique du Nord. Sa superficie est comparable à celle des États-Unis." },
  { id: "q-kili", theme: "Géographie", q: "Sur quel continent se trouve le Kilimandjaro ?", options: ["L'Asie", "L'Afrique", "L'Amérique du Sud", "L'Océanie"], answer: 1, explain: "En <b>Afrique</b>, en Tanzanie. Avec 5 895 m, c'est le point culminant du continent." },
  { id: "q-napoleon", theme: "Histoire", q: "Qui a été le premier empereur des Français ?", options: ["Louis XIV", "Charlemagne", "Napoléon Ier", "Napoléon III"], answer: 2, explain: "<b>Napoléon Ier</b>, sacré en 1804 à Notre-Dame de Paris. Charlemagne était empereur d'Occident, bien avant." },
  { id: "q-1914", theme: "Histoire", q: "En quelle année la Première Guerre mondiale a-t-elle commencé ?", options: ["1905", "1914", "1918", "1939"], answer: 1, explain: "En <b>1914</b>. Elle se termine en 1918 avec l'armistice du 11 novembre." },
  { id: "q-joconde", theme: "Histoire", q: "Qui a peint La Joconde ?", options: ["Michel-Ange", "Raphaël", "Léonard de Vinci", "Botticelli"], answer: 2, explain: "<b>Léonard de Vinci</b>, au début du XVIe siècle. Le tableau est exposé au Louvre." },
  { id: "q-colomb", theme: "Histoire", q: "Quel navigateur a atteint l'Amérique en 1492 ?", options: ["Vasco de Gama", "Magellan", "Christophe Colomb", "Jacques Cartier"], answer: 2, explain: "<b>Christophe Colomb</b>. Il cherchait une route vers les Indes par l'ouest, pour le compte de l'Espagne." },
  { id: "q-gizeh", theme: "Histoire", q: "Quelle civilisation a construit les pyramides de Gizeh ?", options: ["Les Romains", "Les Égyptiens", "Les Mayas", "Les Grecs"], answer: 1, explain: "<b>Les Égyptiens</b>, il y a environ 4 500 ans. Les Mayas ont aussi bâti des pyramides, mais en Amérique centrale." },
  { id: "q-liberte", theme: "Histoire", q: "Quel pays a offert la statue de la Liberté aux États-Unis ?", options: ["Le Royaume-Uni", "L'Italie", "L'Espagne", "La France"], answer: 3, explain: "<b>La France</b>. La statue, œuvre du sculpteur Bartholdi, a été inaugurée à New York en 1886." },
  { id: "q-lune", theme: "Histoire", q: "En quelle année un homme a-t-il marché sur la Lune pour la première fois ?", options: ["1961", "1965", "1969", "1972"], answer: 2, explain: "En <b>juillet 1969</b>, avec la mission Apollo 11. Neil Armstrong est le premier à poser le pied sur la Lune." },
  { id: "q-degaulle", theme: "Histoire", q: "Qui a été le premier président de la Ve République ?", options: ["Charles de Gaulle", "Georges Pompidou", "François Mitterrand", "René Coty"], answer: 0, explain: "<b>Charles de Gaulle</b>. La Ve République est fondée en 1958 et il en devient le premier président." },
  { id: "q-groenland", theme: "Géographie", q: "Quelle est la plus grande île du monde ?", options: ["Madagascar", "Bornéo", "Le Groenland", "La Nouvelle-Guinée"], answer: 2, explain: "<b>Le Groenland</b>. L'Australie est plus grande, mais on la compte comme un continent." },
  { id: "q-brasilia", theme: "Géographie", q: "Quelle est la capitale du Brésil ?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"], answer: 2, explain: "<b>Brasília</b>, une ville construite de toutes pièces et inaugurée en 1960. Rio était la capitale avant elle." },
  { id: "q-inde", theme: "Géographie", q: "Quel est le pays le plus peuplé du monde ?", options: ["La Chine", "L'Inde", "Les États-Unis", "L'Indonésie"], answer: 1, explain: "<b>L'Inde</b>, qui a dépassé la Chine en 2023 d'après les Nations unies." },
  { id: "q-ue", theme: "Géographie", q: "Combien de pays compte l'Union européenne ?", options: ["12", "25", "27", "30"], answer: 2, explain: "<b>27</b> pays, depuis la sortie du Royaume-Uni en 2020." },
  { id: "q-pompei", theme: "Histoire", q: "Quelle ville romaine a été ensevelie par l'éruption du Vésuve en 79 ?", options: ["Pompéi", "Carthage", "Ostie", "Syracuse"], answer: 0, explain: "<b>Pompéi</b>, près de Naples. Les cendres ont conservé la ville presque intacte pendant des siècles." },
  { id: "q-sagrada", theme: "Géographie", q: "Dans quelle ville se trouve la Sagrada Família ?", options: ["Madrid", "Séville", "Lisbonne", "Barcelone"], answer: 3, explain: "À <b>Barcelone</b>. La basilique imaginée par l'architecte Gaudí est en chantier depuis 1882." }
);

/* Drapeaux : dessinés par l'app à partir de ces descriptions (v = bandes verticales, h = horizontales) */
(function () {
  var F = function (id, pays, flag, options, explain) {
    S.questions.push({ id: "f-" + id, theme: "Drapeaux", q: "À quel pays appartient ce drapeau ?", flag: flag, options: options, answer: options.indexOf(pays), explain: "<b>" + pays + "</b>. " + explain });
  };
  F("france", "La France", { t: "v", c: ["#0055A4", "#FFFFFF", "#EF4135"] }, ["Les Pays-Bas", "La France", "La Russie", "Le Luxembourg"], "Le bleu et le rouge sont les couleurs de Paris, le blanc celle de la royauté.");
  F("italie", "L'Italie", { t: "v", c: ["#009246", "#FFFFFF", "#CE2B37"] }, ["L'Irlande", "La Hongrie", "L'Italie", "La Bulgarie"], "Vert, blanc, rouge, en bandes verticales. Il s'inspire du drapeau français.");
  F("belgique", "La Belgique", { t: "v", c: ["#000000", "#FDDA24", "#EF3340"] }, ["L'Allemagne", "La Belgique", "L'Espagne", "La Roumanie"], "Noir, jaune, rouge à la verticale. L'Allemagne a des couleurs proches, mais à l'horizontale.");
  F("irlande", "L'Irlande", { t: "v", c: ["#169B62", "#FFFFFF", "#FF883E"] }, ["La Côte d'Ivoire", "L'Italie", "L'Inde", "L'Irlande"], "Le vert est du côté du mât. La Côte d'Ivoire a les mêmes couleurs dans l'ordre inverse.");
  F("civ", "La Côte d'Ivoire", { t: "v", c: ["#F77F00", "#FFFFFF", "#009E60"] }, ["La Côte d'Ivoire", "L'Irlande", "Le Niger", "L'Inde"], "L'orange est du côté du mât. C'est le drapeau irlandais inversé.");
  F("mali", "Le Mali", { t: "v", c: ["#14B53A", "#FCD116", "#CE1126"] }, ["La Guinée", "Le Sénégal", "Le Mali", "Le Cameroun"], "Vert, jaune, rouge. La Guinée utilise les mêmes couleurs dans l'ordre inverse.");
  F("guinee", "La Guinée", { t: "v", c: ["#CE1126", "#FCD116", "#009460"] }, ["Le Mali", "La Guinée", "Le Ghana", "Le Bénin"], "Rouge, jaune, vert : c'est le drapeau du Mali à l'envers.");
  F("senegal", "Le Sénégal", { t: "v", c: ["#00853F", "#FDEF42", "#E31B23"], star: [45, 30, 9, "#00853F"] }, ["Le Mali", "Le Cameroun", "La Guinée", "Le Sénégal"], "Les couleurs du Mali, avec une étoile verte au centre.");
  F("cameroun", "Le Cameroun", { t: "v", c: ["#007A5E", "#CE1126", "#FCD116"], star: [45, 30, 9, "#FCD116"] }, ["Le Cameroun", "Le Sénégal", "Le Ghana", "Le Togo"], "Vert, rouge, jaune, avec une étoile jaune dans la bande rouge.");
  F("nigeria", "Le Nigeria", { t: "v", c: ["#008751", "#FFFFFF", "#008751"] }, ["L'Arabie saoudite", "Le Pakistan", "Le Nigeria", "L'Algérie"], "Deux bandes vertes pour les richesses naturelles, une bande blanche pour la paix.");
  F("allemagne", "L'Allemagne", { t: "h", c: ["#000000", "#DD0000", "#FFCE00"] }, ["La Belgique", "L'Allemagne", "L'Autriche", "L'Espagne"], "Noir, rouge, or, à l'horizontale.");
  F("paysbas", "Les Pays-Bas", { t: "h", c: ["#AE1C28", "#FFFFFF", "#21468B"] }, ["La France", "La Russie", "Les Pays-Bas", "La Croatie"], "Rouge, blanc, bleu à l'horizontale. C'est l'un des plus anciens drapeaux tricolores.");
  F("russie", "La Russie", { t: "h", c: ["#FFFFFF", "#0039A6", "#D52B1E"] }, ["La Russie", "Les Pays-Bas", "La Serbie", "La Slovaquie"], "Blanc, bleu, rouge à l'horizontale, les mêmes couleurs que les Pays-Bas dans un autre ordre.");
  F("hongrie", "La Hongrie", { t: "h", c: ["#CE2939", "#FFFFFF", "#477050"] }, ["L'Italie", "La Bulgarie", "L'Iran", "La Hongrie"], "Rouge, blanc, vert à l'horizontale. L'Italie a les mêmes couleurs, mais à la verticale.");
  F("autriche", "L'Autriche", { t: "h", c: ["#ED2939", "#FFFFFF", "#ED2939"] }, ["La Pologne", "L'Autriche", "La Lettonie", "Le Danemark"], "Rouge, blanc, rouge. C'est l'un des plus anciens drapeaux nationaux.");
  F("pologne", "La Pologne", { t: "h", c: ["#FFFFFF", "#DC143C"] }, ["Monaco", "L'Indonésie", "La Pologne", "L'Autriche"], "Blanc en haut, rouge en bas. Monaco et l'Indonésie font l'inverse, rouge en haut.");
  F("ukraine", "L'Ukraine", { t: "h", c: ["#0057B7", "#FFD700"] }, ["La Suède", "L'Ukraine", "Le Kazakhstan", "La Roumanie"], "On y voit souvent un ciel bleu au-dessus d'un champ de blé.");
  F("japon", "Le Japon", { t: "disc", c: ["#FFFFFF", "#BC002D"] }, ["La Corée du Sud", "Le Bangladesh", "Le Japon", "La Chine"], "Le disque rouge représente le soleil : le Japon est le pays du Soleil-Levant.");
  F("suisse", "La Suisse", { t: "swiss", c: ["#DA291C", "#FFFFFF"] }, ["Le Danemark", "La Suisse", "La Géorgie", "L'Autriche"], "Une croix blanche sur fond rouge. Le vrai drapeau est carré, comme celui du Vatican.");
  F("suede", "La Suède", { t: "cross", c: ["#006AA7", "#FECC00"] }, ["La Finlande", "La Norvège", "L'Ukraine", "La Suède"], "Une croix jaune sur fond bleu, décalée vers le mât comme sur tous les drapeaux nordiques.");
  F("danemark", "Le Danemark", { t: "cross", c: ["#C8102E", "#FFFFFF"] }, ["Le Danemark", "La Suisse", "La Norvège", "L'Angleterre"], "Le Dannebrog est souvent présenté comme le plus ancien drapeau national encore utilisé.");
  F("finlande", "La Finlande", { t: "cross", c: ["#FFFFFF", "#003580"] }, ["La Suède", "La Grèce", "La Finlande", "L'Islande"], "Une croix bleue sur fond blanc, pour les lacs et la neige.");
  F("vietnam", "Le Viêt Nam", { t: "h", c: ["#DA251D"], star: [45, 30, 15, "#FFFF00"] }, ["La Chine", "Le Viêt Nam", "Le Maroc", "La Turquie"], "Une étoile jaune à cinq branches sur fond rouge.");
})();

S.breves.push(
  { id: "b-ambre", retenir: "L'ambre gris vient du cachalot et sert à faire tenir un parfum sur la peau.", theme: "Parfum", titre: "Le parfum qui vient du ventre d'un cachalot", accroche: "Pendant des siècles, l'ingrédient le plus cher de la parfumerie se ramassait sur les plages.",
    texte: ["L'ambre gris est une matière cireuse qui se forme dans l'intestin du cachalot, autour des becs de calamars que l'animal n'arrive pas à digérer. Une fois rejeté, le bloc flotte parfois pendant des années. Le sel et le soleil le transforment, et son odeur, d'abord repoussante, devient douce et chaude.", "Les parfumeurs l'ont longtemps utilisé comme fixateur : il fait tenir les autres senteurs sur la peau pendant des heures. Un morceau trouvé sur une plage peut valoir une fortune.", "Aujourd'hui, la plupart des parfums utilisent une version de synthèse, qui évite de dépendre du hasard et protège l'animal."] },
  { id: "b-courchevel", retenir: "Le « 1850 » de Courchevel était un argument de vente plus qu'une altitude.", theme: "Lieux", titre: "Courchevel 1850 n'est pas à 1 850 mètres", accroche: "Le chiffre le plus célèbre des Alpes est un petit arrangement avec la réalité.",
    texte: ["La station la plus chic des Alpes françaises s'est longtemps appelée Courchevel 1850, un nombre censé indiquer son altitude. En réalité, le centre du village se trouve environ cent mètres plus bas, autour de 1 750 mètres.", "On raconte que le chiffre a été choisi pour faire aussi bien que la station rivale, Val d'Isère, située elle à 1 850 mètres. Dans un monde où l'altitude est un argument de vente, cent mètres de plus sur la brochure comptent.", "Depuis 2011, la station a officiellement abandonné le chiffre et s'appelle simplement Courchevel."] },
  { id: "b-muertos", retenir: "Au Mexique, le jour des morts est une fête où l'on accueille ses défunts à la maison.", theme: "Cultures", titre: "Au Mexique, on dîne avec ses morts", accroche: "Début novembre, les familles dressent la table pour ceux qui ne sont plus là.",
    texte: ["Les 1er et 2 novembre, le Mexique célèbre le Día de los Muertos, le jour des morts. Ce n'est pas une fête triste. Les familles pensent que les âmes des proches reviennent leur rendre visite, et elles les accueillent comme des invités.", "Dans chaque maison, on monte un autel appelé <em>ofrenda</em>, avec des photos, des bougies, et les plats et boissons que le défunt préférait. On y dépose des œillets d'Inde orange, dont la couleur et le parfum sont censés guider les âmes jusqu'à la maison.", "La fête mêle des traditions préhispaniques et catholiques. Elle est inscrite au patrimoine culturel immatériel de l'Unesco."] },
  { id: "b-jean", retenir: "Denim vient de Nîmes, jean vient de Gênes, et le pantalon à rivets date de 1873.", theme: "Mode", titre: "Le jean vient de Gênes, le denim de Nîmes", accroche: "Le vêtement le plus américain du monde porte deux noms de villes européennes.",
    texte: ["« Denim » est la contraction de « de Nîmes » : la ville du sud de la France produisait une toile solide appelée serge de Nîmes. « Jean » vient de Gênes, le port italien d'où partait un tissu de coton apprécié des marins.", "Le pantalon tel qu'on le connaît naît aux États-Unis. En 1873, le marchand Levi Strauss et le tailleur Jacob Davis déposent un brevet pour des pantalons de travail renforcés par des rivets en cuivre aux endroits qui craquent, comme les poches.", "Ils étaient destinés aux ouvriers et aux chercheurs d'or. Il a fallu près d'un siècle pour qu'ils deviennent un vêtement de mode."] },
  { id: "b-boutons", retenir: "Les boutons des femmes sont à gauche, sans doute parce qu'une domestique les fermait.", theme: "Mode", titre: "Pourquoi les chemises d'homme et de femme ne se boutonnent pas du même côté", accroche: "Regarde ta chemise : les boutons sont à droite ou à gauche ?",
    texte: ["Sur une chemise d'homme, les boutons sont cousus à droite. Sur un chemisier de femme, ils sont à gauche. La règle date de plusieurs siècles et personne ne l'a jamais changée.", "L'explication la plus répandue remonte à l'époque où les boutons étaient un luxe. Les hommes s'habillaient seuls, et la plupart étant droitiers, les boutons à droite étaient plus pratiques. Les femmes riches, elles, étaient habillées par une domestique placée face à elles : les boutons étaient donc cousus de l'autre côté, pour sa main droite à elle.", "Les historiens ne sont pas tous d'accord sur cette origine, mais l'habitude, elle, est restée."] },
  { id: "b-versailles", retenir: "Au XVIIe siècle, on se méfiait de l'eau : on se nettoyait au linge et on se parfumait.", theme: "Histoire", titre: "À Versailles, on se lavait sans eau", accroche: "Au XVIIe siècle, prendre un bain passait pour dangereux.",
    texte: ["À l'époque de Louis XIV, les médecins pensaient que l'eau chaude ouvrait les pores de la peau et laissait entrer les maladies. Depuis les grandes épidémies de peste, les bains publics avaient mauvaise réputation. On évitait donc de se tremper.", "À la place, on pratiquait la « toilette sèche ». On se frottait le corps avec un linge propre et on changeait de chemise plusieurs fois par jour : le linge blanc était censé absorber la saleté. Avoir du linge impeccable était le vrai signe de propreté.", "Pour couvrir les odeurs, on utilisait beaucoup de parfum, sur la peau, les gants, les perruques et même les meubles. C'est en partie ce qui a fait la fortune des parfumeurs français."] }
);
})(window.SAPERE);
