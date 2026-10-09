/* Sapere · paquet 02 · latin, mots soutenus, figures de style */
(function (S) {
S.fiches.push(
/* ---------------- LATIN ---------------- */
{
  id: "carpe-diem", mot: "Carpe diem", cat: "latin", origine: "Horace",
  pron: { texte: "kar-pé di-ème", lang: "it-IT", dire: "carpe diem" }, cache: "CARPEDIEM",
  phrase: "« Cueille le jour » : profite du moment présent, parce que demain n'est pas garanti.",
  court: "« Cueille le jour » : profite du moment présent.",
  sections: [
    { t: "L'histoire", p: "La formule vient du poète latin Horace, au Ier siècle avant notre ère. Dans une de ses <em>Odes</em>, il s'adresse à une jeune femme, Leuconoé, qui cherche à connaître l'avenir. Il lui conseille d'arrêter : cueille le jour, lui dit-il, sans trop compter sur le lendemain." },
    { t: "Le vrai sens", p: "Horace est proche de la philosophie d'Épicure. Pour lui, profiter ne veut pas dire faire n'importe quoi. Il s'agit de savourer ce qui est là, simplement, plutôt que de gâcher le présent à s'inquiéter du futur. Le verbe <em>carpere</em> évoque le geste de cueillir un fruit mûr." }
  ],
  usage: "Pour dire qu'on choisit de profiter maintenant, souvent avec un peu d'humour.",
  exemples: ["« Les partiels sont dans deux mois, ce soir je sors. Carpe diem. »", "« Il a tout quitté pour voyager un an : carpe diem. »", "« Carpe diem, d'accord, mais pas la veille du concours. »"],
  piege: "Ce n'est pas une invitation à l'excès. Chez Horace, c'est un appel à la mesure : goûter le présent, pas le brûler.",
  croiser: "En tatouage, dans le film <em>Le Cercle des poètes disparus</em>, dans les textes de rap et sur les réseaux.",
  cousins: [
    { mot: "Memento mori", court: "« Souviens-toi que tu vas mourir » : rappel que tout est éphémère.", texte: "« Souviens-toi que tu vas mourir. » C'est le constat dont le carpe diem tire la conclusion joyeuse." },
    { mot: "Épicurisme", court: "Philosophie du plaisir simple et mesuré, loin des excès.", texte: "La philosophie d'Épicure : chercher les plaisirs simples et éviter ce qui trouble l'esprit. On l'emploie à tort pour parler de gourmandise." }
  ],
  situation: "Il hésite à prendre ce billet d'avion pour le week-end. Puis il se dit que la vie est courte et que l'occasion ne reviendra pas. Sa devise du jour :",
  trou: "Le poète Horace conseille de cueillir le jour sans se fier au lendemain : c'est le ___."
},
{
  id: "sine-qua-non", mot: "Sine qua non", cat: "latin", origine: "Droit",
  pron: { texte: "si-né koua none", lang: "it-IT", dire: "sine qua non" }, cache: "SINEQUANON",
  phrase: "Indispensable : se dit d'une condition sans laquelle rien n'est possible.",
  court: "Se dit d'une condition absolument indispensable.",
  sections: [
    { t: "L'histoire", p: "L'expression complète est <em>condicio sine qua non</em>, littéralement « condition sans laquelle non ». Elle vient du latin des juristes et des philosophes du Moyen Âge, qui s'en servaient pour distinguer ce qui est nécessaire de ce qui est seulement utile." },
    { t: "Le sens précis", p: "Une condition sine qua non n'est pas juste importante. Si elle manque, tout s'arrête, quelles que soient les autres qualités. Avoir la moyenne peut être souhaitable ; valider son stage peut être la condition sine qua non du diplôme." }
  ],
  usage: "Presque toujours après le mot « condition », pour insister sur le caractère non négociable.",
  exemples: ["« La confiance est la condition sine qua non d'une amitié. »", "« Dormir assez, c'est la condition sine qua non pour retenir ses cours. »", "« Son accord est une condition sine qua non : sans lui, on annule. »"],
  piege: "L'expression est invariable et s'écrit en trois mots. On ne dit pas « une condition sinequanone ».",
  croiser: "Dans les contrats, les discours politiques, la presse, et dans la bouche des profs.",
  cousins: [
    { mot: "A priori", court: "Au premier abord, avant d'avoir vérifié.", texte: "« Au premier abord », avant toute vérification. Son contraire est <em>a posteriori</em>, « après coup »." },
    { mot: "De facto", court: "Dans les faits, même si rien ne l'officialise.", texte: "« Dans les faits. » Se dit d'une situation réelle mais pas officielle. Son contraire est <em>de jure</em>, « en droit »." }
  ],
  situation: "Pour partir en échange à l'étranger, il faut avoir validé toutes ses matières. Sans ça, le dossier n'est même pas lu. C'est une condition…",
  trou: "Le permis de conduire est une condition ___ pour ce poste de livreur."
},
{
  id: "casus-belli", mot: "Casus belli", cat: "latin", origine: "Diplomatie",
  pron: { texte: "ka-zus bé-li", lang: "it-IT", dire: "casus belli" }, cache: "CASUSBELLI",
  phrase: "Un acte assez grave pour justifier une déclaration de guerre, ou plus largement un motif de conflit.",
  court: "Acte qui justifie une guerre, ou motif de conflit.",
  sections: [
    { t: "L'histoire", p: "En latin, <em>casus belli</em> veut dire « cas de guerre ». L'expression appartient au vocabulaire de la diplomatie : elle désigne l'événement qu'un pays invoque pour entrer en guerre contre un autre." },
    { t: "L'exemple célèbre", p: "Le 28 juin 1914, l'archiduc François-Ferdinand, héritier de l'empire d'Autriche-Hongrie, est assassiné à Sarajevo. L'Autriche-Hongrie en fait un casus belli contre la Serbie. Par le jeu des alliances, l'Europe entière bascule dans la Première Guerre mondiale." }
  ],
  usage: "Au sens propre en politique, et avec humour dans la vie courante pour une provocation qui met le feu aux poudres.",
  exemples: ["« Finir le dernier yaourt sans prévenir, chez nous, c'est un casus belli. »", "« Le blocus du port a été considéré comme un casus belli. »", "« Il a critiqué sa mère devant tout le monde. Casus belli immédiat. »"],
  piege: "Le casus belli est le prétexte ou le déclencheur, pas la cause profonde. En 1914, les tensions entre grandes puissances existaient bien avant Sarajevo.",
  croiser: "Dans les cours d'histoire, les articles de géopolitique, et au second degré dans les conversations.",
  cousins: [
    { mot: "Ultimatum", court: "Dernière exigence avant de passer à la force.", texte: "Une dernière exigence, avec un délai, avant de passer à la force. Il précède souvent le casus belli." },
    { mot: "Statu quo", court: "L'état actuel des choses, qu'on laisse tel quel.", texte: "« L'état où les choses sont. » Maintenir le statu quo, c'est ne rien changer." }
  ],
  situation: "Son colocataire a prêté sa console sans lui demander. Pour lui, c'est la goutte de trop : il considère que c'est une déclaration de guerre. C'est un…",
  trou: "L'attentat de Sarajevo a servi de ___ à l'Autriche-Hongrie en 1914."
},
{
  id: "persona-non-grata", mot: "Persona non grata", cat: "latin", origine: "Diplomatie",
  pron: { texte: "pèr-so-na none gra-ta", lang: "it-IT", dire: "persona non grata" }, cache: "PERSONA", accept: ["persona non grata"],
  phrase: "Une personne qui n'est plus la bienvenue quelque part.",
  court: "Personne qui n'est plus la bienvenue quelque part.",
  sections: [
    { t: "L'histoire", p: "L'expression signifie « personne non bienvenue ». C'est un terme officiel de diplomatie. Quand un pays ne veut plus d'un diplomate étranger sur son sol, il le déclare persona non grata, et celui-ci doit repartir. La règle est fixée par la convention de Vienne de 1961." },
    { t: "Comment ça marche", p: "Le pays n'a même pas à se justifier. C'est une arme classique dans les crises entre États : on expulse des diplomates, l'autre pays fait pareil en représailles. Le contraire existe aussi : <em>persona grata</em>, une personne bien vue." }
  ],
  usage: "Dans la vie courante, pour quelqu'un qu'on ne veut plus voir dans un groupe, un lieu ou une famille.",
  exemples: ["« Depuis l'histoire de l'argent, il est persona non grata chez ses cousins. »", "« Après son article, la journaliste est devenue persona non grata au club. »", "« Je suis persona non grata dans ce bar depuis que j'ai renversé la table. »"],
  piege: "L'expression reste invariable et ne prend pas d'article : on dit « il est persona non grata », pas « il est un persona non grata ».",
  croiser: "Dans l'actualité internationale, le sport, le show-business, et au quotidien.",
  cousins: [
    { mot: "Paria", court: "Personne rejetée par tout un groupe.", texte: "Une personne mise à l'écart par tout le monde. Le mot vient d'Inde, où il désignait les exclus du système des castes." },
    { mot: "Ostracisme", court: "Mise à l'écart d'une personne par un groupe.", texte: "Le fait d'exclure quelqu'un d'un groupe. À Athènes, on votait pour bannir un citoyen en écrivant son nom sur un tesson, l'<em>ostrakon</em>." }
  ],
  situation: "Il a trahi le groupe d'amis. Depuis, plus personne ne l'invite, et quand il arrive quelque part on lui fait comprendre qu'il doit partir. Il est devenu…",
  trou: "Le diplomate a été déclaré ___ et a dû quitter le pays sous quarante-huit heures."
},
{
  id: "tabula-rasa", mot: "Tabula rasa", cat: "latin", origine: "Philosophie",
  pron: { texte: "ta-bou-la ra-za", lang: "it-IT", dire: "tabula rasa" }, cache: "TABULARASA", accept: ["table rase"],
  phrase: "La « table rase » : un esprit vierge de toute connaissance, ou le fait de tout effacer pour repartir de zéro.",
  court: "La « table rase » : tout effacer pour repartir de zéro.",
  sections: [
    { t: "L'histoire", p: "Les Romains écrivaient sur des tablettes recouvertes de cire. Pour réutiliser la tablette, on raclait la cire : elle redevenait une <em>tabula rasa</em>, une « tablette grattée », prête à recevoir un nouveau texte." },
    { t: "En philosophie", p: "L'image sert à décrire l'esprit à la naissance. Au XVIIe siècle, l'Anglais John Locke défend l'idée que nous naissons sans aucune idée innée, comme une page blanche. Tout ce que nous savons viendrait de l'expérience." }
  ],
  usage: "Surtout dans l'expression « faire table rase » : abandonner tout ce qui existait pour recommencer.",
  exemples: ["« Après la rupture, elle a fait table rase : nouvelle ville, nouveau travail. »", "« Le nouvel entraîneur veut faire tabula rasa du passé. »", "« On ne peut pas faire table rase de ses souvenirs. »"],
  piege: "Faire table rase, c'est tout effacer, pas juste trier. Si tu gardes la moitié, ce n'est plus une table rase.",
  croiser: "En philosophie, en psychologie, en politique, et dans les récits de nouveau départ.",
  cousins: [
    { mot: "Ex nihilo", court: "À partir de rien.", texte: "« À partir de rien. » Bâtir une entreprise ex nihilo, c'est la créer sans aucune base préalable." },
    { mot: "Inné et acquis", court: "Ce qu'on a de naissance face à ce qu'on apprend.", texte: "L'inné est ce qu'on possède à la naissance, l'acquis ce qu'on apprend. La tabula rasa parie tout sur l'acquis." }
  ],
  situation: "Elle a supprimé ses anciens comptes, vendu ses meubles et déménagé à l'autre bout du pays. Elle repart de zéro. Elle a fait…",
  trou: "Pour le philosophe John Locke, l'esprit du nouveau-né est une page blanche, une ___."
},
{
  id: "modus-vivendi", mot: "Modus vivendi", cat: "latin", origine: "Diplomatie",
  pron: { texte: "mo-dus vi-vène-di", lang: "it-IT", dire: "modus vivendi" }, cache: "MODUS", accept: ["modus vivendi"],
  phrase: "Un arrangement qui permet à deux parties en désaccord de cohabiter sans régler le fond du problème.",
  court: "Arrangement qui permet à deux parties en désaccord de cohabiter.",
  sections: [
    { t: "L'histoire", p: "Littéralement, <em>modus vivendi</em> veut dire « manière de vivre ». Mais l'expression ne s'emploie presque jamais dans ce sens. En diplomatie, elle désigne un accord provisoire entre deux États qui ne sont d'accord sur rien, sauf sur le fait qu'il faut bien continuer à vivre côte à côte." },
    { t: "Le sens précis", p: "Un modus vivendi n'est pas une réconciliation. Personne ne change d'avis. On se met simplement d'accord sur des règles pratiques pour éviter le conflit, en attendant mieux." }
  ],
  usage: "Pour un compromis pratique entre des gens qui restent en désaccord : colocataires, collègues, ex-conjoints.",
  exemples: ["« On ne s'aime pas, mais on a trouvé un modus vivendi pour la cuisine. »", "« Les deux pays ont conclu un modus vivendi sur la pêche. »", "« Mes parents divorcés ont un modus vivendi pour les fêtes. »"],
  piege: "Ne le traduis pas par « mode de vie ». Pour ça, on dit simplement « style de vie ». Le modus vivendi suppose toujours un désaccord de départ.",
  croiser: "Dans les articles de politique internationale, et comme titre d'un morceau de Dinos.",
  cousins: [
    { mot: "Modus operandi", court: "La manière de procéder de quelqu'un.", texte: "« La manière d'opérer. » C'est la méthode habituelle de quelqu'un, souvent un criminel dans les séries policières." },
    { mot: "Statu quo", court: "L'état actuel des choses, qu'on laisse tel quel.", texte: "L'état actuel des choses. Un modus vivendi sert souvent à maintenir le statu quo sans se battre." }
  ],
  situation: "Les deux voisins se détestent, mais ils se sont mis d'accord : l'un tond le samedi, l'autre fait ses travaux le dimanche. Ils ne sont pas réconciliés, ils ont juste trouvé un…",
  trou: "Faute de véritable paix, les deux camps ont trouvé un ___ pour partager le territoire."
},

/* ---------------- MOTS SOUTENUS ---------------- */
{
  id: "fustiger", mot: "Fustiger", cat: "soutenu", origine: "",
  phrase: "Critiquer quelqu'un ou quelque chose très durement, en public.",
  court: "Critiquer très durement, en public.",
  sections: [
    { t: "L'histoire", p: "Le verbe vient du latin <em>fustigare</em>, « battre à coups de bâton », formé sur <em>fustis</em>, le bâton. Pendant des siècles, fustiger quelqu'un voulait dire le fouetter ou le bastonner pour le punir." },
    { t: "Le sens actuel", p: "Aujourd'hui, les coups sont devenus des mots. Fustiger, c'est condamner avec violence, sans nuance. Le verbe garde l'idée de punition : celui qui fustige se place en juge." }
  ],
  usage: "Dans un registre soutenu, quand « critiquer » est trop faible et « insulter » trop vulgaire.",
  exemples: ["« Le rapport fustige la gestion de l'hôpital. »", "« Dans ce morceau, il fustige les faux amis. »", "« Elle a fustigé le manque de respect de l'arbitre. »"],
  piege: "On fustige quelque chose ou quelqu'un directement : « fustiger une décision », jamais « fustiger contre une décision ».",
  croiser: "Dans les titres de presse, les débats politiques, les critiques de films.",
  cousins: [
    { mot: "Vilipender", court: "Dénoncer quelqu'un comme méprisable.", texte: "Traiter quelqu'un comme une chose vile, le dénoncer avec mépris. Encore plus soutenu que fustiger." },
    { mot: "Encenser", court: "Couvrir quelqu'un d'éloges.", texte: "Le contraire : couvrir d'éloges, comme on agite l'encens devant un autel." }
  ],
  situation: "Dans son discours, la députée s'en prend violemment à la réforme : elle la qualifie de honte et de scandale. Elle ne la critique pas, elle la…",
  trou: "Dans une tribune au vitriol, l'écrivain n'hésite pas à ___ la lâcheté de ses confrères."
},
{
  id: "prosaique", mot: "Prosaïque", cat: "soutenu", origine: "",
  phrase: "Banal, terre à terre, sans poésie ni élévation.",
  court: "Banal, terre à terre, sans poésie.",
  sections: [
    { t: "L'histoire", p: "Le mot vient de <em>prose</em>, le langage ordinaire, par opposition aux vers de la poésie. Est prosaïque ce qui appartient à la prose : le quotidien, le pratique, le matériel." },
    { t: "Le sens précis", p: "Prosaïque n'est pas forcément une insulte. Le mot oppose le concret à l'idéal. Une raison prosaïque est une raison simple et matérielle, là où on attendait quelque chose de grand." }
  ],
  usage: "Pour ramener une situation à sa réalité concrète, souvent avec une pointe d'ironie.",
  exemples: ["« Il n'a pas quitté la ville par amour, la raison est plus prosaïque : le loyer. »", "« Elle rêvait d'aventure et se retrouve avec des soucis prosaïques de plomberie. »", "« Plus prosaïquement, on n'a plus de budget. »"],
  piege: "Ne confonds pas avec « prosélyte », qui désigne quelqu'un cherchant à convertir les autres à ses idées. Les deux mots n'ont rien à voir.",
  croiser: "Dans les critiques littéraires, les portraits, les articles d'analyse.",
  cousins: [
    { mot: "Trivial", court: "Ordinaire, commun, parfois vulgaire.", texte: "Ordinaire jusqu'à la vulgarité. En maths et en informatique, il veut dire « évident »." },
    { mot: "Lyrique", court: "Plein d'émotion et d'élan poétique.", texte: "L'inverse : plein d'émotion et d'élan, comme un poème qui chante les sentiments." }
  ],
  situation: "On croit qu'il a arrêté le sport à cause d'une grande remise en question. En réalité, la salle a augmenté ses tarifs. La vraie raison est bien plus…",
  trou: "Loin des grands idéaux, ses préoccupations étaient très ___ : payer les factures et remplir le frigo."
},
{
  id: "sibyllin", mot: "Sibyllin", cat: "soutenu", origine: "Antiquité",
  phrase: "Mystérieux, obscur, dont le sens est difficile à percer.",
  court: "Mystérieux, dont le sens est difficile à percer.",
  sections: [
    { t: "L'histoire", p: "Dans l'Antiquité, la Sibylle était une prophétesse inspirée par le dieu Apollon. La plus célèbre vivait à Cumes, près de Naples. Ses prédictions étaient si obscures qu'on pouvait les comprendre de plusieurs façons." },
    { t: "Le sens actuel", p: "Est sibyllin ce qui ressemble à ces oracles : une phrase à double sens, un message volontairement flou, une réponse qui laisse deviner sans rien dire clairement." }
  ],
  usage: "Pour une déclaration ou un message dont on sent qu'il cache quelque chose.",
  exemples: ["« Il a posté un message sibyllin : “Bientôt.” Rien de plus. »", "« La réponse du prof était sibylline, je ne sais toujours pas si j'ai réussi. »", "« Ses textes sont sibyllins, il faut les écouter dix fois. »"],
  piege: "Attention à l'orthographe : le <em>i</em> vient avant le <em>y</em>. On écrit sibyllin, comme la Sibylle.",
  croiser: "Dans les commentaires politiques, les analyses de textes, les critiques d'albums.",
  cousins: [
    { mot: "Énigmatique", court: "Qui ressemble à une énigme.", texte: "Qui pose une énigme. Plus courant et plus neutre que sibyllin." },
    { mot: "Abscons", court: "Très difficile à comprendre, obscur.", texte: "Incompréhensible parce que trop compliqué. Sibyllin suggère un mystère voulu, abscons une obscurité subie." }
  ],
  situation: "L'artiste publie une photo noire avec trois points de suspension. Personne ne sait si c'est un album, une tournée ou une retraite. Son message est…",
  trou: "Personne n'a compris sa remarque ___ : voulait-il nous féliciter ou nous menacer ?"
},
{
  id: "ostentatoire", mot: "Ostentatoire", cat: "soutenu", origine: "",
  phrase: "Qui est montré avec insistance, pour être vu et faire de l'effet.",
  court: "Montré avec insistance, pour être remarqué.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du latin <em>ostentare</em>, « montrer avec insistance ». L'ostentation, c'est l'art d'étaler ce qu'on a : sa richesse, ses relations, sa culture." },
    { t: "Le sens précis", p: "Un luxe ostentatoire est un luxe fait pour le regard des autres : logos géants, montre bien visible, voiture garée devant la terrasse. On l'oppose au luxe discret, celui que seuls les connaisseurs repèrent." }
  ],
  usage: "Pour qualifier une richesse, un signe ou un comportement affiché de manière voyante.",
  exemples: ["« Les vieilles fortunes fuient le luxe ostentatoire. »", "« Il consulte sa montre de façon ostentatoire toutes les deux minutes. »", "« Sa générosité est un peu trop ostentatoire pour être sincère. »"],
  piege: "Ne confonds pas avec « ostensible », qui veut seulement dire « fait sans se cacher ». Ostentatoire ajoute l'idée de frime.",
  croiser: "Dans les articles sur le luxe, la sociologie, et les débats sur les signes religieux à l'école.",
  cousins: [
    { mot: "Ostensible", court: "Fait ouvertement, sans se cacher.", texte: "Fait au grand jour, sans chercher à se cacher. Sans l'idée de vantardise." },
    { mot: "Parvenu", court: "Nouveau riche qui n'a pas les codes de son milieu.", texte: "Quelqu'un devenu riche rapidement et qui n'a pas encore les codes de son nouveau milieu. Le goût de l'ostentatoire le trahit souvent." }
  ],
  situation: "Il porte trois chaînes en or, un logo sur chaque vêtement et pose ses clés de voiture au milieu de la table. Sa richesse est très…",
  trou: "Les grandes familles préfèrent le luxe discret au luxe ___, celui des logos et des dorures."
},
{
  id: "apanage", mot: "Apanage", cat: "soutenu", origine: "Moyen Âge",
  phrase: "Ce qui est réservé à une personne ou à un groupe, son privilège propre.",
  court: "Ce qui est le privilège propre d'une personne ou d'un groupe.",
  sections: [
    { t: "L'histoire", p: "Au Moyen Âge, le fils aîné du roi héritait de la couronne. Pour que ses frères cadets ne manquent de rien, le roi leur donnait des terres : un apanage. Le mot vient d'un vieux verbe qui signifiait « donner du pain », c'est-à-dire de quoi vivre." },
    { t: "Le sens actuel", p: "Le mot a gardé l'idée d'un bien réservé à quelqu'un. Dire qu'une chose est l'apanage d'un groupe, c'est dire qu'elle lui appartient en propre et que les autres n'y ont pas accès." }
  ],
  usage: "Dans la tournure « être l'apanage de », souvent à la forme négative pour contester un monopole.",
  exemples: ["« La culture n'est pas l'apanage des riches. »", "« Le sur-mesure a longtemps été l'apanage d'une élite. »", "« Le doute est l'apanage des gens intelligents. »"],
  piege: "Ne dis pas « l'apanage exclusif » : un apanage est exclusif par définition, c'est un pléonasme. Et le mot est masculin : <em>un</em> apanage.",
  croiser: "Dans les essais, les éditoriaux, les discours.",
  cousins: [
    { mot: "Prérogative", court: "Droit ou avantage attaché à une fonction.", texte: "Un droit attaché à une fonction : nommer les ministres est une prérogative du président." },
    { mot: "Privilège", court: "Avantage accordé à quelques-uns seulement.", texte: "Un avantage accordé à quelques-uns. Le mot vient du latin et signifie « loi privée »." }
  ],
  situation: "Pendant longtemps, seuls les très riches pouvaient voyager en avion. Ce mode de transport leur était réservé : il était leur…",
  trou: "L'élégance n'est pas l'___ des gens fortunés : elle tient au goût, pas au prix."
},
{
  id: "dithyrambique", mot: "Dithyrambique", cat: "soutenu", origine: "Grèce antique", cache: "DITHYRAMBE",
  phrase: "Très élogieux, jusqu'à l'excès.",
  court: "Extrêmement élogieux, jusqu'à l'excès.",
  sections: [
    { t: "L'histoire", p: "En Grèce antique, le dithyrambe était un chant en l'honneur de Dionysos, le dieu du vin et de la fête. Un chœur le chantait et le dansait avec beaucoup d'enthousiasme. C'est de ces chants que serait né le théâtre." },
    { t: "Le sens actuel", p: "Le mot a gardé l'idée d'emportement. Une critique dithyrambique ne se contente pas de dire du bien : elle déborde de compliments, sans aucune réserve." }
  ],
  usage: "Pour des éloges, une critique, un accueil. Parfois avec ironie, pour suggérer que c'est trop.",
  exemples: ["« L'album a reçu des critiques dithyrambiques. »", "« Son chef est dithyrambique à son sujet. »", "« Il a fait un portrait dithyrambique du candidat, c'en était gênant. »"],
  piege: "Dithyrambique ne veut pas juste dire « positif ». Il faut de l'excès : si l'avis est mesuré, on dira simplement « élogieux ».",
  croiser: "Dans les critiques de films, d'albums et de restaurants.",
  cousins: [
    { mot: "Élogieux", court: "Qui fait l'éloge, qui dit du bien.", texte: "Qui dit du bien, avec mesure. C'est le degré raisonnable ; dithyrambique est le degré maximal." },
    { mot: "Panégyrique", court: "Discours entièrement à la gloire de quelqu'un.", texte: "Un discours entièrement à la gloire de quelqu'un, sans la moindre critique." }
  ],
  situation: "Le journaliste écrit que ce film est un chef-d'œuvre absolu, le meilleur de la décennie, une œuvre parfaite de bout en bout. Sa critique est…",
  trou: "La presse a été ___ : cinq étoiles partout et le mot « génie » dans chaque article."
},

/* ---------------- FIGURES DE STYLE ---------------- */
{
  id: "antithese", mot: "Antithèse", cat: "style", origine: "Grèce",
  phrase: "Une figure de style qui met face à face deux idées opposées dans la même phrase.",
  court: "Opposition de deux idées placées à distance dans la phrase.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du grec <em>anti</em> (contre) et <em>thesis</em> (position) : poser une chose contre une autre. C'est l'une des plus anciennes figures de la rhétorique, l'art de convaincre." },
    { t: "Comment ça marche", p: "On rapproche deux termes contraires pour que chacun fasse ressortir l'autre. La poétesse Louise Labé écrit : « Je vis, je meurs ; je me brûle et me noie. » Vivre et mourir, brûler et se noyer : quatre mots, deux oppositions." }
  ],
  usage: "Pour nommer la figure dans un texte, ou pour dire qu'une chose est tout le contraire d'une autre.",
  exemples: ["« “Petit budget, grandes ambitions” : le slogan repose sur une antithèse. »", "« Ce quartier calme est l'antithèse du centre-ville. »", "« Son frère est son antithèse : aussi bavard qu'il est discret. »"],
  piege: "Dans l'antithèse, les deux contraires sont séparés dans la phrase. S'ils sont collés dans le même groupe de mots, comme « soleil noir », c'est un oxymore.",
  croiser: "Dans les discours, les slogans, la poésie et les punchlines.",
  cousins: [
    { mot: "Oxymore", court: "Figure de style qui associe deux mots de sens opposés.", texte: "Deux mots contraires soudés ensemble, comme « silence assourdissant »." },
    { mot: "Chiasme", court: "Figure en croix, sur le schéma A-B-B-A.", texte: "Une construction en croix, où les termes reviennent dans l'ordre inverse." }
  ],
  situation: "« J'ai grandi dans le noir, je vise la lumière. » La phrase oppose deux idées contraires, placées à distance l'une de l'autre. C'est une…",
  trou: "« Je vis, je meurs » : en opposant deux idées dans le même vers, Louise Labé construit une ___."
},
{
  id: "metaphore-filee", mot: "Métaphore filée", cat: "style", origine: "",
  cache: "METAPHORE", accept: ["métaphore"],
  phrase: "Une métaphore qui se prolonge sur plusieurs mots ou plusieurs phrases, en gardant la même image.",
  court: "Métaphore prolongée sur plusieurs phrases autour d'une même image.",
  sections: [
    { t: "Le principe", p: "Une métaphore remplace une chose par une image, sans mot de comparaison : « la vie est un voyage ». Quand l'auteur continue de dérouler cette image, on dit qu'il la <em>file</em>, comme on file la laine pour en tirer un long fil." },
    { t: "Un exemple", p: "« La vie est un voyage : on ne choisit pas la gare de départ, on rate des correspondances, et certains passagers descendent trop tôt. » Gare, correspondances, passagers : tout le vocabulaire appartient au même univers, celui du train." }
  ],
  usage: "Pour décrire un texte où une image est tenue du début à la fin d'un passage.",
  exemples: ["« Tout le couplet file la métaphore du jeu d'échecs. »", "« Il compare son cœur à un chantier, et la métaphore filée dure trois strophes. »", "« Le discours file la métaphore du navire dans la tempête. »"],
  piege: "S'il y a « comme », « tel » ou « pareil à », ce n'est plus une métaphore mais une comparaison.",
  croiser: "Partout dans le rap, la poésie, les discours politiques et les commentaires de texte.",
  cousins: [
    { mot: "Comparaison", court: "Rapprochement de deux choses avec un mot comme « comme ».", texte: "Elle rapproche deux choses avec un outil : comme, tel, semblable à. « Fort comme un lion »." },
    { mot: "Allégorie", court: "Idée abstraite représentée par un personnage ou une scène.", texte: "Une idée abstraite représentée sous une forme concrète, comme la Justice avec son bandeau et sa balance." }
  ],
  situation: "Sur tout un couplet, le rappeur parle de sa carrière comme d'un match de boxe : les rounds, les coups encaissés, le gong, le K.-O. La même image est tenue du début à la fin. C'est une…",
  trou: "Quand une image se prolonge sur plusieurs phrases avec le même champ lexical, on parle de ___ filée."
},
{
  id: "litote", mot: "Litote", cat: "style", origine: "Grèce",
  phrase: "Dire moins pour faire entendre plus.",
  court: "Dire moins pour faire entendre plus.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du grec <em>litotês</em>, « simplicité ». L'exemple le plus célèbre est chez Corneille, dans <em>Le Cid</em>. Chimène aime Rodrigue, mais il a tué son père. Elle ne peut pas lui dire « je t'aime ». Elle lui dit : « Va, je ne te hais point. »" },
    { t: "Comment ça marche", p: "La litote passe souvent par une négation : on nie le contraire de ce qu'on pense. « Ce n'est pas mauvais » pour dire que c'est très bon. La retenue rend l'idée plus forte, parce que c'est à l'autre de faire le chemin." }
  ],
  usage: "On en fait tous les jours sans le savoir. Le mot sert à nommer cette façon de sous-entendre.",
  exemples: ["« “Il n'est pas bête” : belle litote pour dire qu'il est brillant. »", "« Dire que j'étais “un peu fatigué” après la garde, c'est une litote. »", "« “C'est pas donné” est une litote qu'on entend partout. »"],
  piege: "La litote <em>renforce</em> l'idée. L'euphémisme, lui, l'<em>adoucit</em> pour ne pas choquer. « Il nous a quittés » est un euphémisme, pas une litote.",
  croiser: "Dans le théâtre classique, l'humour anglais, et les conversations de tous les jours.",
  cousins: [
    { mot: "Euphémisme", court: "Formule adoucie pour éviter un mot dur.", texte: "Il atténue une réalité désagréable pour ne pas heurter." },
    { mot: "Hyperbole", court: "Exagération pour frapper l'esprit.", texte: "L'inverse de la litote : on exagère pour frapper. « Je meurs de faim »." }
  ],
  situation: "Son ami vient de réussir le concours avec la meilleure note. Il commente simplement : « Pas trop mal. » Il dit moins pour faire comprendre plus. C'est une…",
  trou: "« Va, je ne te hais point » : quand Chimène avoue ainsi son amour, elle emploie une ___."
},
{
  id: "euphemisme", mot: "Euphémisme", cat: "style", origine: "Grèce",
  phrase: "Une formule adoucie, employée pour éviter un mot jugé trop dur ou trop cru.",
  court: "Formule adoucie pour éviter un mot dur.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du grec <em>eu</em> (bien) et <em>phêmê</em> (parole) : « la bonne parole ». Dans l'Antiquité, on évitait de prononcer certains mots de peur d'attirer le malheur, et on les remplaçait par des formules plus douces." },
    { t: "Comment ça marche", p: "L'euphémisme remplace le mot qui fâche par un mot plus acceptable. On ne meurt pas, on « s'éteint ». On n'est pas licencié, on est « remercié ». Les entreprises et la politique en fabriquent beaucoup : un « plan de sauvegarde de l'emploi » est un plan de licenciements." }
  ],
  usage: "Pour pointer une formule qui adoucit la réalité, ou dans l'expression « c'est un euphémisme » pour dire qu'on est en dessous de la vérité.",
  exemples: ["« “Dommages collatéraux” est un euphémisme pour parler des victimes civiles. »", "« Dire qu'il est en retard est un euphémisme : il a trois heures de retard. »", "« “Longue maladie” : l'euphémisme habituel des nécrologies. »"],
  piege: "L'euphémisme adoucit pour ménager. La litote dit moins pour suggérer plus. Le but est opposé, même si la forme se ressemble.",
  croiser: "Dans les communiqués officiels, les nécrologies, la publicité et le langage médical.",
  cousins: [
    { mot: "Litote", court: "Dire moins pour faire entendre plus.", texte: "Elle dit moins pour faire entendre plus : « ce n'est pas mal » pour « c'est très bien »." },
    { mot: "Périphrase", court: "Plusieurs mots à la place d'un seul.", texte: "Plusieurs mots pour en remplacer un seul : « la Ville Lumière » pour Paris." }
  ],
  situation: "Le communiqué ne dit pas que l'usine ferme et licencie tout le monde. Il parle d'une « réorganisation de l'activité ». Cette formule qui adoucit la réalité est un…",
  trou: "Dire « il nous a quittés » plutôt que « il est mort », c'est employer un ___."
},
{
  id: "anaphore", mot: "Anaphore", cat: "style", origine: "Grèce",
  phrase: "La répétition d'un même mot ou d'un même groupe de mots au début de plusieurs phrases ou de plusieurs vers.",
  court: "Répétition des mêmes mots au début de plusieurs phrases.",
  sections: [
    { t: "L'histoire", p: "Le mot vient du grec <em>anaphora</em>, « reprise ». C'est la figure préférée des orateurs. Le 25 août 1944, à la Libération, le général de Gaulle lance : « Paris ! Paris outragé ! Paris brisé ! Paris martyrisé ! Mais Paris libéré ! »" },
    { t: "Pourquoi ça marche", p: "La répétition crée un rythme, presque une musique. Chaque reprise enfonce l'idée un peu plus profond. C'est aussi ce qui rend un discours facile à retenir : on attend le retour de la formule." }
  ],
  usage: "Pour décrire un texte ou un couplet construit sur la reprise d'un même début.",
  exemples: ["« Le refrain repose sur une anaphore : chaque ligne commence par “J'ai vu”. »", "« Son discours enchaîne les anaphores pour faire monter la tension. »", "« “Moi président” est l'anaphore la plus connue de la politique française. »"],
  piege: "La répétition doit être au <em>début</em>. Si les mots reviennent à la fin de chaque phrase, la figure s'appelle une épiphore.",
  croiser: "Dans les grands discours, les refrains de chansons, les couplets de rap.",
  cousins: [
    { mot: "Épiphore", court: "Répétition des mêmes mots à la fin de plusieurs phrases.", texte: "La répétition placée à la fin des phrases plutôt qu'au début." },
    { mot: "Gradation", court: "Suite de mots de force croissante ou décroissante.", texte: "Une suite de termes de plus en plus forts : « va, cours, vole »." }
  ],
  situation: "Dans son couplet, chaque phrase commence par les mêmes mots : « Je me souviens… Je me souviens… Je me souviens… » Cette répétition en début de phrase s'appelle une…",
  trou: "« Paris outragé ! Paris brisé ! Paris martyrisé ! » : la répétition en tête de phrase est une ___."
},
{
  id: "chiasme", mot: "Chiasme", cat: "style", origine: "Grèce",
  pron: { texte: "ki-asm", lang: "fr-FR", dire: "kiasme" },
  phrase: "Une construction en croix, où deux éléments sont repris dans l'ordre inverse : A, B, puis B, A.",
  court: "Figure en croix, sur le schéma A-B-B-A.",
  sections: [
    { t: "L'histoire", p: "Le mot vient de la lettre grecque <em>khi</em>, qui s'écrit comme un X. Si on relie les éléments identiques d'un chiasme, on dessine justement une croix. En anatomie, le chiasma optique est l'endroit où les nerfs optiques se croisent : c'est la même racine." },
    { t: "L'exemple célèbre", p: "Dans <em>L'Avare</em> de Molière : « Il faut manger pour vivre, et non pas vivre pour manger. » Manger, vivre, puis vivre, manger. Le retournement donne à la phrase un air de vérité définitive." }
  ],
  usage: "Pour nommer une formule qui frappe par son effet miroir.",
  exemples: ["« “Tous pour un, un pour tous” : la devise des mousquetaires est un chiasme. »", "« Sa punchline est un chiasme parfait, elle se retient toute seule. »", "« Les slogans adorent le chiasme parce qu'il sonne comme un proverbe. »"],
  piege: "Le « ch » se prononce « k », comme dans « chœur ». Et ne confonds pas avec le parallélisme, où l'ordre reste le même : A, B, puis A, B.",
  croiser: "Dans les proverbes, les slogans, les punchlines et les devises.",
  cousins: [
    { mot: "Parallélisme", court: "Deux phrases construites sur le même schéma A-B, A-B.", texte: "Deux phrases construites de la même façon, dans le même ordre." },
    { mot: "Antithèse", court: "Opposition de deux idées placées à distance dans la phrase.", texte: "Elle oppose deux idées. Un chiasme contient souvent une antithèse." }
  ],
  situation: "« Il faut manger pour vivre et non vivre pour manger. » Les deux mêmes mots reviennent dans l'ordre inverse, comme dans un miroir. Cette figure en croix est un…",
  trou: "« Un pour tous, tous pour un » : la reprise des termes dans l'ordre inverse forme un ___."
}
);
})(window.SAPERE);
