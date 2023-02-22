export {QUESTION}

const QUESTION = [
    {
    1: {
        question: "Quelle balise doit-être intégrée une seule fois sur une page ?",
        dificulté: 1,
        réponse: "H1",
        explication: "La balise H1 correspond au titre qui sera visible sur votre page. Elle n'apparaît donc qu'une seule fois !",
    }, 
    2: {
        question: "Quel algorithme apporte plus de qualité et de pertinence au référencement local ?",
        dificulté: 3,
        réponse: "Google Pigeon",
        explication: "Google Pigeon permet d'améliorer le système de classement des résultats Google sur des requêtes locales. Les résultats locaux les plus populaires seront donc mieux positionnés pour les recherches ciblées géographiquement !",
    },
    3: {
        question : "C'est un lien hypertexte à l’intérieur d’un contenu, pointant vers un autre site :",
        dificulté: 2,
        réponse: "Backlink",
        explication: "Le backlink sert à Indiquer à l’internaute l’emplacement externe d’une information / d’un produit et à transmettre de la popularité depuis un site web vers un autre.",
    },
    4: {
        question : "Quel est le temps de chargement d'une page recommandé par Google ?",
        dificulté: 3,
        réponse: "2 secondes",
        explication: "Google recommande un temps de chargement de maximum 2 secondes pour offrir une UX optimisée. Cela influe sur le référencement.",
    },
    5: {
        question : "C'est un lien « acheté » auprès d'un moteur de recherche tel que Google :",
        dificulté: 1,
        réponse: "Lien Sponsorisé",
        explication: "Les liens sponsorisés sont des liens achetés auprès des moteurs de recherche avec par exemple Google Ads. Ce sont les liens sous lesquels on peut voir la mention \"ad\" dans les premiers résultats de recherche.",
    },
    6: {
        question : "En SEO, quelle type de texte est-il recommandé de souligner dans une page web ?",
        dificulté: 1,
        réponse: "Un lien",
        explication: "Dans un contenu web, notamment un article, il est recommandé de souligner le texte que vous voulez rendre cliquable. Cela indique que ce dernier contient un lien hypertexte.",
    },
    7: {
        question : "Que signifie l'acronyme \"SEO\" ?",
        dificulté: 1,
        réponse: "Search Engine Optimization",
        explication: "Search Engine Optimization signifie \"référencement naturel\" : L'ensemble des techniques mises en oeuvre pour améliorer son positionnement dans les résultats de recherche.",
    },
    8: {
        question : "Que signifie l'acronyme \"SEA\" ?",
        dificulté: 1,
        réponse: "Search Engine Advertising",
        explication: "Search Engine Advertizing signifie \"référencement payant\" : L'utilisation de services payants comme les liens sponsorisés par exemple, afin d'améliorer son positionnement dans les résultats de recherche.",
    },
    9: {
        question : "Que signifie l'acronyme \"SMO\" ?",
        dificulté: 1,
        réponse: "Social Media Optimization",
        explication: "Social Media Optimisation signifie \"optimisation des réseaux sociaux\" : L'optimisation de son référencement via les réseaux sociaux. Notamment grâce au netlinking et à la génération de trafic depuis les réseaux. ",
    },
    10: {
        question : "Quel est le nom du robot Google ?",
        dificulté: 1,
        réponse: "Googlebot",
        explication: "Googlebot est le robot qui analyse votre site afin de l'indexer sur le moteur de recherche Google. Il y a deux types de Googlebots : un qui simule un internaute sur ordinateur. Et un qui simule un internaute sur Smartphone.",
    },
    11: {
        question : "Que signifie l'acronyme \"SERP\" ?",
        dificulté: 2,
        réponse: "Search Engine Result Page",
        explication: "La SERP est la page sur laquelle vous êtes renvoyé après avoir effectué une recherche. C'est la page contenant les résultats de recherche.",
    },
    12: {
        question : "C'est la balise HTML correspondant au titre de votre page web :",
        dificulté: 1,
        réponse: "TITLE",
        explication: "La balise Meta Title correspond au texte cliquable que vous voyez en bleu dans les résultat de recherche. C'est le titre de la page.",
    },
    13: {
        question : "C'est la balise HTML dans laquelle on rédige ses paragraphes :",
        dificulté: 1,
        réponse: "balise p",
        explication: "La balise <p> est une balise HTML dans laquelle rédiger la grande partie de vos contenus.",
    },
    14: {
        question : "C'est la balise HTML dans laquelle on écrit le titre secondaire ou le chapo :",
        dificulté: 1,
        réponse: "H2",
        explication: "La balise <H2> est une balise HTML dans laquelle rédiger vos sous-titres.",
    },
    15: {
        question : "Algorithme utilisé par Google, permettant de mesurer la popularité d'un site ou d'une page web :",
        dificulté: 3,
        réponse: "PageRank",
        explication: "Le PageRank est l'algorithme d'analyse des liens concourant au système de classement des pages Web utilisé par le moteur de recherche Google. Il mesure quantitativement la popularité d'une page web.",
    },
    16: {
        question : "Lien hypertexte qui permet de naviguer d'une page web à une autre, et ce sur un seul et même site internet :",
        dificulté: 2,
        réponse: "Lien interne",
        explication: "Les liens internes permettent de rediriger vos lecteurs d'un contenu à l'autre de votre site. Créant une expérience utilisateur plus fluide et pouvant être ajoutés à votre SiteMap, facilitant le travail d'analyse des robots.",
    },
    17: {
        question : "Balise contenant le texte alternatif d'une image ou d'un visuel sur une page Internet :",
        dificulté: 2,
        réponse: "Balise alt",
        explication: "La balise alt contient le texte alternatif.",
    },
    18: {
        question : "Texte qui décrit une image, servant au référencement et aidant les personnes malvoyantes :",
        dificulté: 2,
        réponse: "Texte alternatif",
        explication: "Le texte alternatif est un texte qui permet de décrire vos images et autres visuels, afin de mieux les référencer et d'aider les personnes malentendantes.",
    },
    19: {
        question : "Le placement de mots clés dans les URLs d'un site est une technique d'optimisation dite :",
        dificulté: 2,
        réponse: "On-site",
        explication: "L’optimisation on-site (aussi appelée on-page) correspond aux améliorations techniques et éditoriales d’un site. Elles peuvent porter sur l’architecture du site (maillage interne) et son contenu, ainsi que la structure des différents types de page.",
    },
    20: {
        question : "C'est un fichier stockant nos informations de navigation : ",
        dificulté: 2,
        réponse: "Cookie",
        explication: "Le cookie est un petit fichier texte utilisé pour cibler le comportement des internautes et améliorer leur expérience en ligne. Par exemple en sauvegardant leurs informations de connexion pour ne pas avoir à les retaper à chaque fois.",
    },
    21: {
        question : "Quelles sont les balises structurantes d'une page HTML ? ",
        difficulté: 1,
        réponse: "Head et Body",
        explication: "Les balises head et body permettent d'indiquer au navigateur quel contenu correspond aux titres et quel contenu correspond au texte.",
    },
    22: {
        question : "L’indexation des sites Web sur Internet est effectuée par ?",
        dificulté: 2,
        réponse: "Les crawlers",
        explication: "Les crawlers analysent votre site plusieurs fois par jour afin d'indexer les diverses pages qui le composent sur les moteurs de recherche. Ils vont régulièrement vérifier les mises à jour de contenu afin d'adapter le PageRank du site en conséquence.",
    },
    23: {
        question : "Carte de votre site Web qui permet aux moteurs de recherche de mieux comprendre sa structure et son contenu :",
        dificulté: 2,
        réponse: "Sitemap",
        explication: "C'est une carte qui indique aux robots ou aux utilisateurs la structure du site afin de faciliter la navigation entre les pages sur ce dernier. ",
    },
    24: {
        question : "Quelle stratégie de référencement est basée sur les requêtes contenant de nombreux mots-clés ? ",
        dificulté: 2,
        réponse: "Longue traine",
        explication: "La longue traine repose sur le principe que plus une requête est précise, plus l'internaute à de chance de trouver ce qui l'intéresse et donc d'être converti.  La stratégie est donc de se positionner sur une requête très précise afin de convertir un maximum d'internautes.",
    },
    25: {
        question : "Quels caractères faut-il privilégier pour séparer les mots d’une URL ?",
        dificulté: 1,
        réponse: "Les traits d'union",
        explication: "Il faut priviligier les traits d'union. (- 6)",
    },
    26: {
        question : "C'est un texte lisible au sein d'un contenu, cliquable et pointant vers une autre page ou à un autre endroit d'une page :",
        dificulté: 3,
        réponse: "Texte d'ancrage",
        explication: "Le texte d'ancrage est le texte visible utilisé pour créer des liens vers des pages internes à votre site ou externes. En d'autres termes, c'est le texte cliquable qui envoie les utilisateurs vers une autre page (sur le même site Web ou sur un autre).",
    },
    27: {
        question : "Ne transmet pas le jus de référencement, mais compte comme un vote d’approbation : ",
        dificulté: 3,
        réponse: "L’attribut No-follow",
        explication: "Le No follow est un lien pour lequel on indique au moteur de recherche de ne pas suivre son contenu et de ne pas le prendre en compte pour le référencement naturel.",
    },
    28: {
        question : "Comment appelle t-on un site optimisé pour tous les écrans ? (Ordinateur, tablette, telephone…) ",
        dificulté: 1,
        réponse: "Responsive",
        explication: "Responsive désigne le fait d'être adapté à tous les supports.",
    },
    29: {
        question : "Que signifie \"URL\" ?",
        dificulté: 1,
        réponse: "Uniform Ressource Locator",
        explication: "Une URL est simplement l'adresse d'une ressource donnée, unique sur le Web. En théorie, chaque URL valide pointe vers une ressource unique. D'où le nom \"ressource locator\".",
    },
    30: {
        question : "Comment appelle-t-on l'utilisation à outrance d'un certain mot sur son site pour améliorer son SEO ?",
        dificulté: 2,
        réponse: "Bourrage de mot clé",
        explication: "Le bourrage de mots clés est une pratique frauduleuse pour se positionner sur un mot-clé et apparaitre dans les premiers résultats de recherche. Cette technique est détectée par Google et pénalisée.",
    },
    31: {
        question : "Quel protocole d'exclusion interdit les crawlers d'accéder à une certaine partie d'un site pour ne pas l'indexer ?",
        dificulté: 3,
        réponse: "Robot.txt",
        explication: "Le fichier robot.txt permet d'indiquer aux robots de ne pas parcourir certaines parties du site afin de ne pas l'indexer.",
    },
    32: {
        question : "Quelle est le nombre de caractères recommandé pour une balise titre sur Google ?",
        dificulté: 3,
        réponse: "65",
        explication: "Google recommande de ne pas dépasser 65 caractères pour une balise titre. ",
    },
    33: {
        question : "Comment appelle-t-on  un texte ou un bouton invitant l'internaute à effectuer une action ? ",
        dificulté: 1,
        réponse: "CTA",
        explication: "Le CTA pousse l'utilisateur à agir. Un CTA peut par exemple être \"acheter maintenant\" ,\"découvrir\", \"en savoir plus\" etc.",
    },
    34: {
        question : "Que signifie l'acronyme CTA ?",
        dificulté: 1,
        réponse: "Call to action",
        explication: "CTA signifie \"call to action\" ou \"appel à l'action\" en français.",
    },
    35: {
        question : "Pourcentage d'utilisateurs qui quittent une page web très rapidement après s'y être rendu :",
        dificulté: 1,
        réponse: "Taux de rebond",
        explication: "Le taux de rebond indique la part d'internautes ayant quitté une page peu après être arrivé dessus. Plus le taux de rebond est élevé, plus c'est mauvais signe et souvent signe d'un temps de chargement trop long ou d'un contenu peu qualitatif. ",
    },
    36: {
        question : "Comment appelle-t-on l'utilisation pénalisée par Google, de contenus trop similaires au sein d'un site ?",
        dificulté: 1,
        réponse: "Contenu dupliqué",
        explication: "Le contenu dupliqué est la réutilisation d'un contenu déjà présent sur le site voire même le plagiat du contenu provenant d'un site extérieur. Google détecte et pénalise cette pratique.",
    },
    37: {
        question : "Balise contenant le résumé du contenu de la page :",
        dificulté: 1,
        réponse: "Meta description",
        explication: "L'objectif de la meta description est de décrire le contenu de la page aux internautes, mais aussi de les inciter à cliquer pour aller sur votre site web.",
    },
    38: {
        question : "Balise qui fourni les mots-clés d'une page aux moteurs de recherche",
        dificulté: 1,
        réponse: "Meta keywords",
        explication: "La balise meta Keywords est une balise HTML qui servait à renseigner les moteurs de recherche sur les mots-clés principaux du contenu d'une page web. Elle n'a plus aucune utilité dans le référencement inpage.",
    },
    39: {
        question : "Balise permettant d'insérer des liens :",
        dificulté: 1,
        réponse: "Balise a",
        explication: "La balise <a> indique un texte d'ancrage. Cette balise HTML définit le point de départ et le point d'arrivée du lien hypertexte.",
    },
    40: {
        question : "Balise permettant d'insérer des images :",
        dificulté: 1,
        réponse: "Balise img",
        explication: "La balise HTML <img> permet d'insérer des images et des graphiques dans les sites Web.",
    },
    41: {
        question : "Balise permettant d'insérer des vidéos :",
        dificulté: 1,
        réponse: "Balise video",
        explication: "La balise <video> du HTML permet de visionner un film (une vidéo) dans les pages de votre site Web. La balise video est une des nouveautés majeures et remarquable de HTML5.",
    },
    42: {
        question : "Quelle langage permet de structuer une page internet ?",
        dificulté: 1,
        réponse: "HTML",
        explication: "Le langage HTML est à la base de tous les sites web, il permet de décrire au navigateur ce qu’il doit afficher à l’utilisateur. Il utilise un système de balise, Celles-ci sont des indicateurs que le navigateur lit afin d’afficher le texte d’une certaine manière.",
    },
    43: {
        question : "Quel outil Google permet de savoir la fréquence à laquelle un terme est recherché ?",
        dificulté: 1,
        réponse: "Google trends",
        explication: "Google Trends est un outil puissant pour dénicher les tendances et savoir si les mots-clés sur lesquels vous vous positionnez sont recherchés.",
    },
    44: {
        question : "Comment appelle t-on le fait de voir son site être référencé sur un moteur de recherche ?",
        dificulté: 1,
        réponse: "Indexation",
        explication: "L'indexation consiste tout simplement au référencement de votre site sur un moteur de recherche.",
    },
    45: {
        question : "Comment appelle-t-on les robots des moteurs de recherche qui analysent les sites ?",
        dificulté: 2,
        réponse: "Crawlers",
        explication: "Les crawlers analysent votre site plusieurs fois par jour afin d'indexer les diverses pages qui le composent sur les moteurs de recherche. Ils vont régulièrement vérifier les mises à jour de contenu afin d'adapter le PageRank du site en conséquence.",
    },
    46: {
        question : "Quel algoithme Google vise à écarter les contenus peu qualitatifs ?",
        dificulté: 3,
        réponse: "Google Panda",
        explication: "Google Panda pénalise les contenus peu qualitatifs comme les contenus dupliqués, le plagiat, le bourrage de mot-clé etc. Les sanctions vont du simple retrait de la page en question à un blacklistage complet du site sur le moteur de recherche.",
    },
    47: {
        question : "Quel algorithme Google permet de sanctionner les sites utilisant des liens nons-naturels ?",
        dificulté: 3,
        réponse: "Google Penguin",
        explication: "Google Pingouin s’attaque aux sites ayant recours à des techniques de référencement « frauduleuses » en matière de netlinking ou d’optimisations.",
    },
    48: {
        question : "Quel intelligence artificielle Google utilise le machine learning pour proposer de meilleurs résultats aux internautes sur des requêtes complexes ?",
        dificulté: 3,
        réponse: "Google RankBrain",
        explication: "Google RankBrain lie intelligence artificielle et apprentissage automatique (machine learning) pour apprendre de nouveaux mots et de nouvelles expressions qui viendront ensuite enrichir la base de données de Google.",
    },
    49: {
        question : "Quel algorithme Google paru en 2013 vise à améliorer la vitesse et la précision des résultats Google ?",
        dificulté: 3,
        réponse: "Google Hummingbird",
        explication: "Google hummingbird, ou colibri en Français, est apparu en 2013 pour améliorer la vitesse et la précision des résultats Google. Google a bénéficié d'une grande hausse de popularité et d'un net avantage sur ses concurrents à la sortie de cette mise à jour.",
    },
    50: {
        question : "Quelle stratégie SEO est basée sur l'utilisation de liens externes renvoyant vers votre site ?",
        dificulté: 2,
        réponse: "Netlinking",
        explication: "Le Netlinking est une stratégie qui consiste à obtenir des liens hypertextes en provenance de sites externes, ou « backlinks », pointant vers votre site web. L'objectif à long terme est d'améliorer le  référencement et donc, la visibilité.",
    },
    51: {
        question : "Comment appelle-t-on le PageRank transmis par une page à une autre page vers qui elle fait un lien ? ",
        dificulté: 3,
        réponse: "Jus de lien",
        explication: "Plus la page source va avoir un bon PageRank, plus elle va fournir de jus de lien à la page destinataire, améliorant le classement de cette dernière.",
    },
    52: {
        question : "Que signifie HTML ?",
        dificulté: 1,
        réponse: "Hypertext markup language ",
        explication: "HTML signifie hypertext markup language.",
    },
    53: {
        question : "Quel type de phrase faut-il privilégier dans son redactionnel pour le SEO ?",
        dificulté: 2,
        réponse: "Les phrases courtes",
        explication: "Une étude réalisée par the American press institute a révélé que les phrases courtes étaient 711% plus faciles à comprendre.",
    },
    54: {
        question : "Pour le SEO, combien de ligne par paragraphe est-il recommandé d'écrire ?",
        dificulté: 2,
        réponse: "3",
        explication: "Il est recommandé de ne pas dépasser 3 lignes par paragagraphe pour une expérience utilisateur de qualité.",
    },
    55: {
        question : "Cite un critère d'un rédactionnel SEO de qualité : ",
        dificulté: 2,
        réponse: ["La pertinence", "La longueur", "La structure", "La présence de liens", "La description"],
        explication: ["Votre contenu doit être pertinent par rapport aux mots-clés sur lesquels vous êtes positionnés et donc par rapport à ce que votre cible recherche.","Une longueur de minimum 600 mots par article est recommandée. Le mieux est de tourner autour des 1000 mots.","Un contenu aéré, hierarchisé et structuré est indispensable. Pour cela : utilisez les balises H, les listes à puce et des phrases courtes.","N'oubliez pas d'utiliser des liens internes, des liens vers vos réseaux sociaux etc. afin de proposer une réelle expérience de navigation dans laquelle l'internaute n'a qu'à se laisser guider.", "La metadescription/le chapô doit mériter toute votre attention. C'est ce qui va accrocher l'internaute et lui donner envie de lire votre contenu/de consulter votre offre. Elle doit donc être soignée et attractive, sans être mensongère."]
    }
    }
]