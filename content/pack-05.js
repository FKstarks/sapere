/* Sapere · paquet 05 · Brèves */
(function (S) {
var n = 0;
function B(theme, titre, accroche, texte, retenir) { n++; S.breves.push({ id: "b5-" + n, theme: theme, titre: titre, accroche: accroche, texte: texte, retenir: retenir }); }

/* ---------- Parfum ---------- */
B("Parfum", "L'eau de Cologne est née… à Cologne", "Et son inventeur était italien.",
  ["Au début du XVIIIe siècle, un parfumeur italien, Jean-Marie Farina, s'installe à Cologne, en Allemagne. Il y crée une eau légère aux agrumes, qui lui rappelle, écrit-il, un matin de printemps en Italie après la pluie. Il la baptise du nom de sa ville d'adoption.", "À l'époque, les parfums sont lourds et capiteux. Cette fraîcheur fait sensation dans toutes les cours d'Europe. Aujourd'hui, « eau de Cologne » désigne un parfum très peu concentré, qui tient peu de temps sur la peau."],
  "L'eau de Cologne a été créée à Cologne par un Italien, au début du XVIIIe siècle.");
B("Parfum", "Grasse doit ses parfums à l'odeur du cuir", "La capitale mondiale du parfum était d'abord une ville de tanneurs.",
  ["Au Moyen Âge, Grasse, dans l'arrière-pays de Cannes, vit du travail du cuir. Le problème : le tannage sent très mauvais, et les gants qui en sortent aussi. Au XVIe siècle, les gantiers ont l'idée de parfumer leurs gants avec les fleurs de la région.", "La mode des gants parfumés gagne la cour. Peu à peu, le parfum rapporte plus que le cuir, et les tanneries disparaissent. Les champs de jasmin et de rose de Grasse fournissent encore certaines grandes maisons."],
  "Grasse est devenue la ville du parfum parce que ses gantiers voulaient masquer l'odeur du cuir.");
B("Parfum", "Pourquoi le N°5 s'appelle N°5", "Le parfum le plus célèbre du monde porte le numéro d'un échantillon.",
  ["En 1921, Gabrielle Chanel demande au parfumeur Ernest Beaux un parfum de femme qui sente la femme, et non une fleur précise. Il lui présente une série d'échantillons numérotés. Elle choisit le cinquième, et garde le numéro comme nom.", "Le chiffre 5 était aussi son porte-bonheur. La formule fait un usage inédit des aldéhydes, des molécules de synthèse qui donnent une impression de propre et de pétillant. Le flacon, très sobre pour l'époque, a peu changé depuis."],
  "Le N°5 doit son nom au cinquième échantillon présenté à Coco Chanel en 1921.");
B("Parfum", "L'oud, le bois malade qui vaut de l'or", "L'un des ingrédients les plus chers de la parfumerie naît d'une infection.",
  ["L'oud vient d'un arbre d'Asie du Sud-Est. Tant que l'arbre est sain, son bois est clair et sans odeur. Mais quand il est attaqué par un champignon, il se défend en produisant une résine sombre et très parfumée.", "Seule une petite partie des arbres en produit, ce qui explique son prix. Son odeur est chaude, boisée, presque animale. Très prisé au Moyen-Orient depuis des siècles, l'oud est devenu une vedette de la parfumerie de niche."],
  "L'oud est une résine produite par un arbre pour se défendre contre un champignon.");
B("Parfum", "Tête, cœur, fond : un parfum en trois temps", "Ce que tu sens en premier n'est pas ce qui restera.",
  ["Un parfum ne sent pas la même chose pendant toute la journée. Les notes de tête sont celles qu'on perçoit tout de suite : agrumes, herbes fraîches. Elles s'évaporent en quelques minutes. Viennent ensuite les notes de cœur, souvent fleuries ou épicées, qui durent quelques heures.", "Les notes de fond, les plus lourdes, tiennent jusqu'au soir : bois, musc, vanille, ambre. C'est pourquoi il ne faut pas juger un parfum sur la mouillette au bout de dix secondes. Le créateur de parfums est surnommé le « nez »."],
  "Un parfum évolue en trois étapes : les notes de tête, de cœur, puis de fond.");

/* ---------- Lieux ---------- */
B("Lieux", "Venise tient debout sur une forêt", "Sous les palais, il y a des millions d'arbres.",
  ["Venise est construite sur une lagune, c'est-à-dire sur de la vase. Pour bâtir dessus, les Vénitiens ont enfoncé des millions de pieux en bois, serrés les uns contre les autres, jusqu'à atteindre une couche d'argile dure. Puis ils ont posé des plateformes et des pierres par-dessus.", "Le bois aurait dû pourrir depuis longtemps. Mais sous l'eau et la boue, il n'y a pas d'oxygène : les champignons ne peuvent pas se développer. Avec le temps, les minéraux de la lagune ont même durci les pieux."],
  "Venise repose sur des millions de pieux en bois, conservés parce qu'ils sont privés d'air.");
B("Lieux", "Wall Street doit son nom à un vrai mur", "Avant les banques, il y avait une palissade.",
  ["Au XVIIe siècle, New York s'appelle La Nouvelle-Amsterdam et appartient aux Hollandais. Pour se protéger d'une attaque par le nord, les colons construisent une palissade en bois qui barre l'île de Manhattan d'un bord à l'autre.", "Le mur a été démoli à la fin du siècle, mais la rue qui le longeait a gardé le nom de « rue du mur ». C'est là que des marchands ont pris l'habitude de se retrouver pour échanger des titres, à l'origine de la Bourse de New York."],
  "Wall Street suit le tracé d'une palissade construite par les colons hollandais.");
B("Lieux", "Las Vegas veut dire « les prairies »", "Difficile à croire en plein désert.",
  ["Au XIXe siècle, des voyageurs venus du Mexique traversent le désert du Nevada et tombent sur une vallée étonnamment verte, alimentée par des sources souterraines. Ils l'appellent <em>Las Vegas</em>, « les prairies » en espagnol.", "L'oasis devient une étape pour les caravanes, puis une gare. La ville grandit vraiment à partir des années 1930, quand le Nevada légalise les jeux d'argent et que la construction d'un immense barrage voisin attire des milliers d'ouvriers."],
  "Las Vegas signifie « les prairies » : c'était une oasis au milieu du désert.");
B("Lieux", "Istanbul, un pied en Europe, un pied en Asie", "On peut y changer de continent en prenant le bateau.",
  ["Istanbul est traversée par le Bosphore, un détroit qui relie la mer Noire à la mer de Marmara. La rive ouest est en Europe, la rive est en Asie. Des habitants franchissent chaque jour la frontière entre deux continents pour aller travailler.", "La ville a porté trois noms : Byzance dans l'Antiquité grecque, Constantinople à partir de l'empereur romain Constantin, puis Istanbul. Elle a été la capitale de l'Empire romain d'Orient puis de l'Empire ottoman."],
  "Istanbul est à cheval sur deux continents, séparés par le Bosphore.");
B("Lieux", "Monaco tiendrait dans un grand parc", "C'est le deuxième plus petit État du monde.",
  ["La principauté de Monaco couvre environ deux kilomètres carrés, moins que Central Park à New York. Seul le Vatican est plus petit. C'est aussi le pays le plus densément peuplé de la planète.", "Faute de place, Monaco s'agrandit en gagnant du terrain sur la mer. La famille Grimaldi y règne depuis la fin du XIIIe siècle. Selon la tradition, le premier Grimaldi s'est emparé de la forteresse déguisé en moine."],
  "Monaco mesure environ deux kilomètres carrés et gagne du terrain sur la mer.");
B("Lieux", "Pétra, la ville taillée dans la roche", "Ses façades n'ont pas été construites, elles ont été sculptées.",
  ["Pétra se trouve dans le désert de Jordanie. Il y a environ deux mille ans, les Nabatéens, un peuple de marchands caravaniers, en ont fait leur capitale. Ses monuments les plus célèbres sont taillés directement dans des falaises de grès rose.", "On y entre par un défilé étroit, long de plus d'un kilomètre, entre deux parois très hautes. Oubliée des Européens pendant des siècles, la cité a été redécouverte en 1812 par un explorateur suisse qui voyageait déguisé."],
  "Pétra, en Jordanie, a été sculptée dans la falaise par les Nabatéens.");

/* ---------- Cultures ---------- */
B("Cultures", "Les Sapeurs du Congo, l'élégance comme art de vivre", "À Brazzaville et Kinshasa, on s'habille comme on monte sur scène.",
  ["La Sape, c'est la Société des ambianceurs et des personnes élégantes. Ses membres, les sapeurs, portent des costumes de grands couturiers aux couleurs éclatantes, des chaussures cirées, parfois une canne ou un cigare. Ils défilent dans la rue et s'affrontent lors de joutes d'élégance.", "Le mouvement plonge ses racines dans l'époque coloniale. Il a ses règles : harmonie des couleurs, propreté parfaite, bonnes manières. Beaucoup de sapeurs ont des revenus modestes ; le costume est pour eux une affaire de dignité."],
  "La Sape est un mouvement congolais où l'élégance vestimentaire est un art et un code d'honneur.");
B("Cultures", "Au Japon, ne plante jamais tes baguettes dans le riz", "Ce geste banal rappelle un rite funéraire.",
  ["Dans un bol de riz, des baguettes plantées à la verticale ressemblent aux bâtons d'encens qu'on brûle pour les morts. C'est aussi ainsi qu'on présente le riz offert aux défunts. Le faire à table est donc de très mauvais augure.", "Autre geste à éviter : se passer un aliment de baguettes à baguettes. Il évoque une cérémonie où la famille recueille ainsi les os du défunt après la crémation. Entre deux bouchées, on pose ses baguettes à plat."],
  "Au Japon, des baguettes plantées dans le riz évoquent les offrandes faites aux morts.");
B("Cultures", "Holi, la fête où l'on se lance des couleurs", "En Inde, le printemps commence par une bataille de poudres.",
  ["Holi se célèbre chaque année vers le mois de mars, en Inde et au Népal. Dans la rue, tout le monde se jette des poudres colorées et de l'eau teintée. Pendant quelques heures, les différences d'âge, de richesse et de caste sont censées s'effacer sous la couleur.", "La fête marque l'arrivée du printemps et la victoire du bien sur le mal. La veille, on allume de grands feux en souvenir d'une légende où une démone, Holika, périt dans les flammes."],
  "Holi est la fête indienne du printemps, célébrée en se lançant des poudres de couleur.");
B("Cultures", "Le maté, une boisson qui se partage", "En Argentine, on boit tous à la même paille.",
  ["Le maté est une infusion de feuilles d'un arbuste d'Amérique du Sud. On le prépare dans une petite calebasse et on le boit avec une paille en métal qui filtre les feuilles, la <em>bombilla</em>. Il contient de la caféine.", "C'est surtout un rituel. Une personne prépare le maté, le boit, le remplit d'eau chaude et le passe à son voisin, et ainsi de suite. Tout le monde utilise la même paille. Refuser le maté qu'on te tend peut passer pour un manque de politesse."],
  "Le maté se boit à plusieurs, dans la même calebasse et avec la même paille.");
B("Cultures", "Hanami, quand le Japon s'arrête pour des fleurs", "Chaque printemps, tout un pays guette les cerisiers.",
  ["<em>Hanami</em> signifie « regarder les fleurs ». Quand les cerisiers fleurissent, familles, amis et collègues s'installent dans les parcs pour pique-niquer sous les arbres. La météo nationale publie même des prévisions de floraison, région par région.", "Les fleurs ne durent qu'une semaine ou deux avant de tomber. C'est justement ce qui touche les Japonais : la beauté est d'autant plus précieuse qu'elle ne dure pas."],
  "Le hanami est la coutume japonaise d'aller admirer les cerisiers en fleur.");
B("Cultures", "Les enveloppes rouges du Nouvel An chinois", "On n'offre pas un cadeau, on offre de la chance.",
  ["Pour le Nouvel An lunaire, les adultes offrent aux enfants et aux jeunes non mariés de petites enveloppes rouges contenant de l'argent. Le rouge est la couleur de la chance et de la prospérité : c'est l'enveloppe qui porte bonheur, autant que son contenu.", "Le montant suit des règles. On évite le chiffre quatre, dont la prononciation ressemble au mot « mort ». On préfère le huit, associé à la richesse. Aujourd'hui, beaucoup d'enveloppes s'envoient par téléphone."],
  "Au Nouvel An chinois, on offre de l'argent dans des enveloppes rouges, couleur de la chance.");
B("Cultures", "Le haka n'est pas qu'une danse de rugby", "Bien avant les All Blacks, il servait à accueillir et à honorer.",
  ["Le haka est une danse chantée des Maoris, le peuple autochtone de Nouvelle-Zélande. Les danseurs frappent des pieds, se tapent sur le corps, tirent la langue et écarquillent les yeux. L'équipe nationale de rugby l'exécute avant ses matchs depuis plus d'un siècle.", "On le croit toujours guerrier. En réalité, il existe de nombreux haka : pour accueillir un invité, célébrer un mariage, rendre hommage à un mort. C'est une manière d'exprimer la force et l'unité d'un groupe."],
  "Le haka est une danse maorie qui sert aussi à accueillir, célébrer et rendre hommage.");
B("Cultures", "Pourquoi les Britanniques roulent à gauche", "Et pourquoi la plupart du monde fait l'inverse.",
  ["L'explication la plus souvent avancée remonte au temps des cavaliers. La plupart des gens étant droitiers, on tenait sa gauche pour garder la main de l'épée du côté de celui qu'on croisait. La Grande-Bretagne a conservé l'habitude et l'a transmise à ses colonies.", "En Europe continentale, la circulation à droite s'est imposée à la fin du XVIIIe siècle, et les conquêtes de Napoléon l'ont répandue. Aujourd'hui, environ un tiers de la population mondiale roule à gauche, notamment en Inde, au Japon et en Australie."],
  "Rouler à gauche viendrait des cavaliers droitiers, qui gardaient ainsi leur main armée du bon côté.");
B("Cultures", "La cérémonie du thé, quatre heures pour un bol", "Au Japon, préparer le thé est un art qui s'apprend pendant des années.",
  ["La cérémonie du thé japonaise consiste à préparer et à servir du matcha, un thé vert en poudre, selon des gestes précis. Chaque mouvement est codifié : la façon de plier le linge, de tenir la louche, de tourner le bol avant de boire.", "Le but n'est pas de se désaltérer. Il s'agit d'être entièrement présent, avec ses invités, à un moment qui ne se reproduira jamais. Une cérémonie complète, avec repas, peut durer près de quatre heures."],
  "La cérémonie du thé japonaise fait d'un geste simple un exercice d'attention.");

/* ---------- Mode ---------- */
B("Mode", "Les talons hauts étaient des chaussures d'homme", "Et même des chaussures de guerre.",
  ["À l'origine, le talon sert aux cavaliers perses : il cale le pied dans l'étrier et permet de se tenir debout pour tirer à l'arc. La mode arrive en Europe vers 1600, et les aristocrates l'adoptent comme signe de virilité et de rang.", "Louis XIV, plutôt petit, portait des talons rouges et en avait réservé la couleur à sa cour. Ce n'est qu'au XVIIIe siècle que les hommes les abandonnent et que le talon devient un attribut féminin."],
  "Les talons hauts ont d'abord été portés par des cavaliers, puis par les hommes de la noblesse.");
B("Mode", "La semelle rouge est née d'un vernis à ongles", "La signature de Louboutin tient à un geste improvisé.",
  ["En 1993, Christian Louboutin regarde un prototype d'escarpin et le trouve moins réussi que son dessin. La semelle noire alourdit la chaussure. À côté de lui, son assistante se vernit les ongles en rouge. Il lui prend le flacon et peint la semelle.", "L'effet est immédiat. Depuis, toutes ses chaussures portent cette semelle rouge, visible seulement quand la personne marche. La marque a mené plusieurs procès pour faire protéger cette couleur."],
  "La semelle rouge de Louboutin vient d'un flacon de vernis à ongles, en 1993.");
B("Mode", "Le trench-coat sort des tranchées", "Son nom le dit : c'est un manteau de soldat.",
  ["<em>Trench</em> veut dire « tranchée » en anglais. Pendant la Première Guerre mondiale, les officiers britanniques portent un imperméable léger en gabardine, un tissu serré qui résiste à la pluie. Il remplace les lourds manteaux de laine.", "Chaque détail avait une fonction : les pattes d'épaule tenaient les insignes de grade, les anneaux de la ceinture servaient à accrocher du matériel, le rabat sur la poitrine empêchait l'eau de s'infiltrer. Après la guerre, les civils l'ont adopté, puis le cinéma en a fait un classique."],
  "Le trench-coat est l'imperméable des officiers britanniques de la Première Guerre mondiale.");
B("Mode", "La cravate vient des Croates", "Les deux mots ont la même origine.",
  ["Au XVIIe siècle, des cavaliers croates servent comme mercenaires dans l'armée française. Ils portent autour du cou un foulard noué qui intrigue les Parisiens. On parle d'une mode « à la croate », et le mot se déforme en « cravate ».", "La cour l'adopte, et Louis XIV en porte de dentelle. Pendant trois siècles, le nœud change de forme, jusqu'à la longue cravate moderne, apparue au début du XXe siècle."],
  "Le mot « cravate » est une déformation de « croate », d'après le foulard des cavaliers croates.");
B("Mode", "La petite poche du jean avait une vraie utilité", "Elle n'a pas été conçue pour les pièces de monnaie.",
  ["Tu l'as forcément remarquée : cette minuscule poche cousue dans la poche avant droite de ton jean. Elle date du XIXe siècle. À l'époque, les ouvriers et les cow-boys portaient une montre à gousset, au bout d'une chaîne.", "Cette poche servait à la ranger, bien à l'abri des chocs. Les montres à gousset ont disparu, mais la poche est restée sur presque tous les jeans, par tradition."],
  "La petite poche du jean servait à ranger une montre à gousset.");
B("Mode", "Le logo de Nike a coûté 35 dollars", "L'une des images les plus connues du monde a été payée à l'heure.",
  ["En 1971, le fondateur de Nike cherche un logo pour ses chaussures. Il s'adresse à Carolyn Davidson, une étudiante en graphisme. Elle propose une virgule qui évoque le mouvement et l'aile de la déesse grecque de la victoire, Niké.", "Il n'est pas emballé, mais il n'a plus le temps. Elle facture trente-cinq dollars. Des années plus tard, l'entreprise lui a offert des actions pour la remercier."],
  "Le logo de Nike a été dessiné en 1971 par une étudiante, payée 35 dollars.");
B("Mode", "Le crocodile de Lacoste était un surnom", "Avant d'être un logo, c'était celui d'un joueur de tennis.",
  ["Dans les années 1920, le champion de tennis René Lacoste est surnommé « le Crocodile » par la presse, en raison, dit-on, d'un pari portant sur une valise en peau de crocodile et de sa ténacité sur le court. Un ami lui dessine un crocodile, qu'il fait broder sur ses vestes.", "En 1933, il lance une chemise de tennis en maille légère, avec le crocodile sur la poitrine. C'est l'un des tout premiers logos affichés à l'extérieur d'un vêtement."],
  "Le crocodile de Lacoste vient du surnom du champion de tennis René Lacoste.");
B("Mode", "Le T-shirt était un sous-vêtement", "Il a fallu Hollywood pour qu'on ose le montrer.",
  ["Au début du XXe siècle, la marine américaine distribue à ses marins un maillot de corps en coton à manches courtes, à porter sous l'uniforme. Sa forme en T lui donne son nom. Il reste longtemps caché sous la chemise.", "Dans les années 1950, des acteurs comme Marlon Brando et James Dean apparaissent à l'écran en simple T-shirt blanc. Le sous-vêtement devient un symbole de jeunesse et de rébellion, puis le vêtement le plus porté de la planète."],
  "Le T-shirt était un maillot de corps de marin avant que le cinéma en fasse un vêtement.");

/* ---------- Histoire ---------- */
B("Histoire", "Napoléon n'était pas petit", "Sa taille était dans la moyenne de son époque.",
  ["Napoléon mesurait environ un mètre soixante-neuf, ce qui était plutôt au-dessus de la moyenne des Français de son temps. La légende vient en partie d'une confusion : sa taille était notée en pieds et pouces français, plus grands que les pouces anglais.", "Les caricaturistes britanniques ont fait le reste, en le dessinant en petit personnage colérique. Et il apparaissait souvent entouré des soldats de sa garde, choisis pour leur haute taille."],
  "Napoléon mesurait environ 1,69 m : l'idée d'un homme très petit vient surtout des caricatures anglaises.");
B("Histoire", "Cléopâtre est plus proche de nous que des pyramides", "Le temps de l'Égypte ancienne donne le vertige.",
  ["La grande pyramide de Gizeh a été construite il y a environ 4 500 ans. Cléopâtre, la dernière reine d'Égypte, est morte en 30 avant notre ère. Il s'est donc écoulé près de 2 500 ans entre les deux.", "Or, de Cléopâtre à aujourd'hui, il y a un peu plus de 2 000 ans. La reine a vécu plus près des premiers pas sur la Lune que de la construction des pyramides. Pour elle, c'étaient déjà des monuments très anciens."],
  "Cléopâtre a vécu plus près de notre époque que de la construction des pyramides.");
B("Histoire", "La tour Eiffel devait être démontée", "Elle a été sauvée par une antenne.",
  ["La tour est construite pour l'Exposition universelle de 1889. Gustave Eiffel obtient le droit de l'exploiter pendant vingt ans, après quoi elle doit être démolie. Beaucoup d'artistes de l'époque la trouvent d'ailleurs affreuse et le font savoir.", "Pour la sauver, Eiffel lui cherche une utilité scientifique. Il y installe un laboratoire de météorologie, puis une antenne de télégraphie sans fil. L'armée la juge alors trop utile pour la détruire."],
  "Prévue pour vingt ans, la tour Eiffel a été conservée grâce à son rôle d'antenne radio.");
B("Histoire", "Les Vikings ne portaient pas de casques à cornes", "L'image vient de l'opéra, pas de l'archéologie.",
  ["Aucun casque viking à cornes n'a jamais été retrouvé. Les rares casques connus sont de simples calottes de fer. Des cornes auraient d'ailleurs été très gênantes au combat.", "L'idée s'est imposée au XIXe siècle, quand des peintres et des costumiers ont imaginé des guerriers nordiques spectaculaires. Les costumes créés dans les années 1870 pour les opéras de Richard Wagner ont fixé l'image pour de bon."],
  "Les casques à cornes des Vikings sont une invention du XIXe siècle.");
B("Histoire", "Pourquoi un marathon fait 42,195 km", "Les derniers mètres sont dus à la famille royale britannique.",
  ["La course rappelle la légende d'un messager grec qui aurait couru de Marathon à Athènes pour annoncer une victoire, avant de mourir d'épuisement. Aux premiers Jeux olympiques modernes, la distance tournait autour de quarante kilomètres, sans plus de précision.", "Aux Jeux de Londres, en 1908, le parcours est tracé pour partir du château de Windsor et finir devant la loge royale du stade. Cela donne 42,195 kilomètres. La distance est devenue officielle quelques années plus tard."],
  "La distance du marathon a été fixée par le parcours des Jeux olympiques de Londres en 1908.");
B("Histoire", "Octobre devrait être le huitième mois", "Son nom le dit, et il a raison.",
  ["Septembre, octobre, novembre, décembre : on y entend sept, huit, neuf et dix. Pourtant ce sont les mois neuf à douze. Ce décalage vient des Romains.", "Leur année commençait en mars, au retour du printemps et de la saison des guerres. Septembre était donc bien le septième mois. Quand le début de l'année a été déplacé au 1er janvier, les noms sont restés. Juillet et août, eux, honorent Jules César et l'empereur Auguste."],
  "L'année romaine commençait en mars : octobre était alors bien le huitième mois.");
B("Histoire", "La guerre de Cent Ans a duré 116 ans", "Et personne ne l'appelait ainsi à l'époque.",
  ["Le conflit oppose les rois de France et d'Angleterre de 1337 à 1453. À l'origine, une querelle de succession : le roi d'Angleterre estime avoir des droits sur la couronne de France. Ce n'est pas une guerre continue, mais une suite de batailles entrecoupées de longues trêves et d'épidémies de peste.", "C'est pendant cette période qu'apparaît Jeanne d'Arc. Le nom de « guerre de Cent Ans » a été donné bien plus tard par les historiens."],
  "La guerre de Cent Ans a duré de 1337 à 1453, soit 116 ans, trêves comprises.");
B("Histoire", "L'université d'Oxford est plus vieille que l'Empire aztèque", "Certaines dates ne semblent pas appartenir au même monde.",
  ["On enseignait déjà à Oxford, en Angleterre, à la fin du XIe siècle. La capitale des Aztèques, Tenochtitlan, à l'emplacement de l'actuelle Mexico, n'a été fondée qu'au début du XIVe siècle.", "Quand l'Empire aztèque atteint son apogée, des étudiants passent donc des examens à Oxford depuis plus de trois cents ans. L'empire s'effondre en 1521, face aux Espagnols."],
  "On enseignait à Oxford plus de deux siècles avant la fondation de la capitale aztèque.");
B("Histoire", "Louis XIV a régné 72 ans", "Il est monté sur le trône à quatre ans.",
  ["Louis XIV devient roi en 1643, à la mort de son père. Il a quatre ans. Sa mère gouverne à sa place avec le cardinal Mazarin. Il ne prend vraiment le pouvoir qu'à vingt-deux ans, et règne jusqu'à sa mort en 1715.", "Soixante-douze ans : c'est le plus long règne de l'histoire de France. Il a survécu à son fils et à son petit-fils, si bien que c'est son arrière-petit-fils, âgé de cinq ans, qui lui succède sous le nom de Louis XV."],
  "Louis XIV a régné de 1643 à 1715, le plus long règne de l'histoire de France.");

/* ---------- Mots ---------- */
B("Mots", "La poubelle porte le nom d'un préfet", "Monsieur Poubelle a vraiment existé.",
  ["En 1884, le préfet de la Seine, Eugène Poubelle, oblige les propriétaires parisiens à fournir à leurs locataires des récipients fermés pour les ordures. Jusque-là, on les jetait dans la rue. Il impose même plusieurs boîtes, pour trier.", "Les Parisiens, mécontents de cette contrainte, baptisent les boîtes du nom du préfet pour se moquer de lui. Le mot est entré dans le dictionnaire quelques années plus tard."],
  "La poubelle doit son nom au préfet Eugène Poubelle, qui l'a imposée à Paris en 1884.");
B("Mots", "Silhouette était un ministre", "Et ce n'était pas un compliment.",
  ["En 1759, Étienne de Silhouette devient contrôleur général des finances de Louis XV. Pour remplir les caisses, il veut taxer les riches et réduire les dépenses. Il devient très vite impopulaire et quitte son poste au bout de quelques mois.", "Son nom sert alors à désigner tout ce qui est fait à l'économie, et notamment des portraits bon marché, de simples profils découpés dans du papier noir. Le mot est resté pour désigner un contour."],
  "Le mot « silhouette » vient d'un ministre de Louis XV, moqué pour son goût des économies.");
B("Mots", "« Robot » veut dire travail forcé", "Le mot vient d'une pièce de théâtre tchèque.",
  ["En 1920, l'écrivain tchèque Karel Čapek écrit une pièce où une usine fabrique des ouvriers artificiels. Pour les nommer, il utilise un mot suggéré par son frère : <em>robot</em>, tiré de <em>robota</em>, qui désigne en tchèque la corvée, le travail forcé.", "Dans la pièce, les robots finissent par se révolter contre les humains. Le mot a fait le tour du monde en quelques années et s'est imposé dans presque toutes les langues."],
  "Le mot « robot » vient du tchèque et désignait le travail forcé.");
B("Mots", "Le boycott est le nom d'une victime", "Charles Boycott a été le premier boycotté.",
  ["En 1880, en Irlande, Charles Boycott gère les terres d'un riche propriétaire anglais. Il refuse de baisser les loyers des paysans après de mauvaises récoltes et veut les expulser. La communauté décide alors de l'isoler complètement.", "Plus personne ne travaille pour lui, ne lui vend quoi que ce soit, ni ne lui adresse la parole. Même le facteur cesse de lui porter son courrier. Les journaux racontent l'affaire, et son nom devient un verbe."],
  "Le boycott vient de Charles Boycott, un intendant mis à l'écart par toute une région d'Irlande.");
B("Mots", "Le vaccin doit son nom à la vache", "La première vaccination utilisait une maladie de bovins.",
  ["À la fin du XVIIIe siècle, le médecin anglais Edward Jenner remarque que les femmes qui traient les vaches attrapent une maladie bénigne, la variole de la vache, et ne contractent jamais la variole humaine, qui est souvent mortelle.", "En 1796, il inocule à un enfant du pus prélevé sur une trayeuse, puis constate qu'il est protégé. En latin, vache se dit <em>vacca</em> : la maladie s'appelait la vaccine, et la méthode est devenue la vaccination."],
  "« Vaccin » vient du latin « vacca », la vache, d'après l'expérience d'Edward Jenner en 1796.");
B("Mots", "La quarantaine durait vraiment quarante jours", "Le mot vient des ports de l'Adriatique.",
  ["Au XIVe siècle, la peste ravage l'Europe. Pour se protéger, des ports comme Raguse puis Venise obligent les navires venant de zones touchées à attendre au large avant de débarquer. L'isolement est fixé à quarante jours.", "En vénitien, on parle de <em>quaranta giorni</em>. Le mot est resté, même quand la durée a changé. Le chiffre quarante avait aussi une valeur symbolique, liée aux quarante jours du Carême."],
  "La quarantaine vient des quarante jours d'attente imposés aux navires pendant la peste.");
B("Mots", "Le cappuccino doit son nom à des moines", "C'est une histoire de couleur de robe.",
  ["Les Capucins sont un ordre de moines catholiques fondé au XVIe siècle. Ils portent une robe d'un brun clair bien reconnaissable, avec une grande capuche pointue, le <em>cappuccio</em> en italien.", "Quand on ajoute du lait à un café, il prend justement cette teinte. La boisson a donc été nommée d'après la couleur de leur habit. Le singe capucin doit son nom à la même ressemblance."],
  "Le cappuccino tire son nom de la couleur de la robe des moines capucins.");
B("Mots", "« Candidat » veut dire vêtu de blanc", "À Rome, on faisait campagne en toge immaculée.",
  ["Dans la Rome antique, celui qui se présentait à une élection portait une toge blanchie à la craie, pour symboliser la pureté de ses intentions. En latin, « blanc éclatant » se dit <em>candidus</em>, et l'homme en toge blanche était le <em>candidatus</em>.", "La même racine a donné « candide », qui désigne quelqu'un d'innocent et de naïf. Tous les candidats ne le sont pas forcément."],
  "« Candidat » vient de la toge blanche que portaient les Romains en campagne électorale.");
B("Mots", "L'avocat vient d'une langue aztèque", "Le fruit, pas le juriste.",
  ["Les Aztèques cultivaient l'avocat bien avant l'arrivée des Européens. Dans leur langue, le nahuatl, ils l'appelaient <em>ahuacatl</em>. Les Espagnols ont déformé le mot en <em>aguacate</em>, puis en un terme qui ressemblait à leur mot pour « avocat ».", "Le nahuatl nous a laissé d'autres mots du quotidien : tomate, chocolat, cacao. Quant à l'avocat du tribunal, il vient du latin et désigne celui qu'on appelle à l'aide."],
  "Le nom du fruit vient du nahuatl, la langue des Aztèques, comme tomate et chocolat.");

/* ---------- Luxe ---------- */
B("Luxe", "Hermès a commencé par les chevaux", "Avant les sacs, la maison fabriquait des harnais.",
  ["En 1837, Thierry Hermès ouvre à Paris un atelier de harnais et de selles pour les chevaux. Ses clients sont les propriétaires des plus belles voitures à cheval de la capitale. La couture utilisée, le point sellier, est réputée indestructible.", "Quand l'automobile remplace le cheval, la maison se tourne vers les bagages, puis les sacs, toujours cousus de la même façon. Le logo montre encore une calèche et son cheval."],
  "Hermès était à l'origine un fabricant de harnais et de selles, fondé en 1837.");
B("Luxe", "Le sac Birkin est né dans un avion", "Tout a commencé par un panier renversé.",
  ["Au début des années 1980, l'actrice et chanteuse Jane Birkin se retrouve assise dans un avion à côté du patron d'Hermès. Son panier en osier se renverse et tout son contenu se répand. Elle se plaint de ne trouver aucun sac assez grand et pratique.", "Ils en dessinent un ensemble pendant le vol. Le sac sort en 1984 et porte son nom. Chaque exemplaire est cousu à la main par un seul artisan, et il faut parfois attendre longtemps pour en obtenir un."],
  "Le sac Birkin a été imaginé dans un avion par Jane Birkin et le patron d'Hermès.");
B("Luxe", "Le cheval de Ferrari vient d'un avion de chasse", "Avant d'orner des voitures, il volait.",
  ["Pendant la Première Guerre mondiale, le pilote italien Francesco Baracca fait peindre un cheval cabré sur son avion. Il devient un héros national avant d'être abattu en 1918.", "Quelques années plus tard, sa mère rencontre un jeune pilote de course, Enzo Ferrari, et lui suggère de reprendre l'emblème pour lui porter chance. Ferrari y ajoute un fond jaune, la couleur de sa ville natale, Modène."],
  "Le cheval cabré de Ferrari était l'emblème d'un pilote de chasse italien de la Grande Guerre.");
B("Luxe", "Dom Pérignon n'a pas inventé les bulles", "Il aurait même préféré s'en débarrasser.",
  ["Dom Pérignon était un moine de l'abbaye d'Hautvillers, en Champagne, à la fin du XVIIe siècle. La légende en fait l'inventeur du champagne. En réalité, à son époque, les bulles étaient un défaut : elles faisaient exploser les bouteilles dans les caves.", "Ce qu'on lui doit vraiment, c'est l'art d'assembler des raisins de différentes parcelles pour obtenir un vin plus équilibré. Les bulles ne sont devenues à la mode que plus tard."],
  "Dom Pérignon a surtout perfectionné l'assemblage des vins, pas inventé les bulles.");
B("Luxe", "La première montre étanche a traversé la Manche", "Rolex a prouvé son invention à la nage.",
  ["En 1926, Rolex met au point un boîtier de montre hermétique, fermé comme un bocal. La marque l'appelle <em>Oyster</em>, « huître » en anglais. Reste à convaincre le public qu'une montre peut vraiment aller dans l'eau.", "L'année suivante, une jeune nageuse anglaise, Mercedes Gleitze, tente la traversée de la Manche avec la montre au cou. Après plus de dix heures dans l'eau froide, la montre fonctionne toujours. Rolex l'annonce en première page d'un grand journal."],
  "La Rolex Oyster de 1926 a prouvé son étanchéité lors d'une tentative de traversée de la Manche.");
B("Luxe", "Le safran vaut plus cher que l'or", "Il faut un champ de fleurs pour remplir un petit pot.",
  ["Le safran vient d'une fleur violette, un crocus. Chaque fleur ne contient que trois petits filaments rouges : ce sont eux qu'on récolte. Tout se fait à la main, à l'aube, pendant les quelques semaines de floraison.", "Il faut environ cent cinquante fleurs pour obtenir un seul gramme de safran sec. C'est ce qui en fait l'épice la plus chère du monde. L'Iran en est de loin le premier producteur."],
  "Il faut environ 150 fleurs de crocus pour produire un gramme de safran.");

/* ---------- Art ---------- */
B("Art", "La Joconde est devenue célèbre parce qu'on l'a volée", "Avant 1911, c'était un tableau parmi d'autres.",
  ["Le 21 août 1911, un ouvrier italien qui avait travaillé au Louvre, Vincenzo Peruggia, décroche la Joconde et sort du musée avec le tableau caché sous sa blouse. Le vol fait la une des journaux du monde entier pendant des semaines.", "Des foules viennent regarder l'emplacement vide. Le tableau est retrouvé deux ans plus tard à Florence : le voleur voulait, disait-il, le rendre à l'Italie. À son retour, la Joconde est devenue l'œuvre la plus connue de la planète."],
  "Le vol de 1911 a transformé la Joconde en tableau le plus célèbre du monde.");
B("Art", "Les statues grecques étaient en couleur", "Le marbre blanc est un malentendu.",
  ["On imagine la Grèce antique toute blanche. En réalité, les statues et les temples étaient peints de couleurs vives : rouge, bleu, jaune, vert. Les yeux, les cheveux, les vêtements, tout était coloré.", "Les pigments ont disparu au fil des siècles, usés par la pluie et la terre. À la Renaissance, les artistes ont découvert des marbres nus et ont cru que c'était voulu. Aujourd'hui, des analyses à la lumière ultraviolette permettent de retrouver les traces de peinture."],
  "Les statues antiques étaient peintes : leur blancheur vient de la disparition des pigments.");
B("Art", "Monet a peint avec des yeux malades", "Sa cataracte se voit dans ses derniers tableaux.",
  ["À partir de la soixantaine, Claude Monet souffre de cataracte : le cristallin de l'œil s'opacifie et jaunit. Sa vision devient floue, et il perçoit de moins en moins bien les bleus et les violets. Il se plaint de voir tout comme à travers un brouillard.", "Ses toiles de cette période tirent vers le rouge, l'orangé et le brun, avec des formes presque méconnaissables. Il finit par se faire opérer d'un œil en 1923, et retouche ensuite certains tableaux."],
  "La cataracte de Monet a modifié les couleurs de ses dernières toiles, plus rouges et plus floues.");
B("Art", "Un tableau de Banksy s'est détruit en pleine vente", "Et il a pris de la valeur.",
  ["En octobre 2018, à Londres, une œuvre de l'artiste de rue Banksy, une petite fille lâchant un ballon rouge, est adjugée plus d'un million de livres. Au moment où le marteau tombe, une alarme retentit et la toile glisse hors de son cadre.", "Une déchiqueteuse cachée dans le cadre la découpe en lamelles, avant de se bloquer à mi-course. Banksy voulait se moquer du marché de l'art. L'œuvre à moitié détruite a été revendue quelques années plus tard bien plus cher."],
  "En 2018, une œuvre de Banksy s'est en partie déchiquetée juste après avoir été vendue aux enchères.");
B("Art", "Yves Klein a déposé un bleu", "Une couleur peut avoir un auteur.",
  ["Dans les années 1950, le peintre français Yves Klein cherche un bleu outremer aussi intense sur la toile qu'en poudre. Avec un marchand de couleurs parisien, il met au point un liant qui ne ternit pas le pigment.", "En 1960, il fait enregistrer la formule sous le nom d'International Klein Blue. Il peint ensuite des tableaux entièrement bleus, sans aucun motif : pour lui, cette couleur suffit à évoquer l'infini."],
  "Le bleu Klein est un outremer très intense dont l'artiste a fait enregistrer la formule en 1960.");
B("Art", "Van Gogh n'a presque rien vendu de son vivant", "L'un des peintres les plus chers du monde est mort pauvre.",
  ["Vincent van Gogh a peint environ neuf cents tableaux en dix ans à peine. On dit souvent qu'il n'en a vendu qu'un seul de son vivant ; il en a sans doute cédé quelques autres, mais pour presque rien. Il vivait grâce à l'argent que lui envoyait son frère Théo.", "Il meurt en 1890, à trente-sept ans. C'est la femme de Théo, Johanna, qui passe ensuite des années à organiser des expositions et à publier ses lettres. Sans elle, il serait peut-être resté inconnu."],
  "Van Gogh n'a presque rien vendu de son vivant, et doit sa gloire au travail de sa belle-sœur.");
})(window.SAPERE);
