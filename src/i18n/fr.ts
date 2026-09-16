export const fr = {
	meta: {
		siteName: 'Pulsar Stack',
		defaultTitle: 'Pulsar Stack — Kit de démarrage Astro moderne',
		defaultDescription:
			'Un kit de démarrage Astro rapide et entièrement personnalisable, avec CSS natif, mode sombre, i18n et un moteur de blog prêt à l’emploi.',
	},
	navbar: {
		links: [
			{ label: 'Accueil', href: '/' },
			{ label: 'À propos', href: '/about' },
			{ label: 'Blog', href: '/blog' },
		],
		buyLabel: 'Acheter — 19€',
		buyHref: 'https://naorocketfactory.dev/kits/pulsar-stack',
	},
	footer: {
		tagline: 'Un kit de démarrage moderne conçu pour la rapidité, la clarté et une personnalisation facile.',
		columns: {
			navigate: 'Navigation',
			legal: 'Légal',
		},
		links: [
			{ label: 'Accueil', href: '/' },
			{ label: 'À propos', href: '/about' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Contact', href: 'mailto:starterrocket.dev@gmail.com' },
		],
		contact: {
			title: 'Contact',
			email: 'starterrocket.dev@gmail.com',
		},
		rights: 'Tous droits réservés.',
	},
	hero: {
		eyebrow: 'Starter Kit Astro 7',
		title: 'Lancez votre prochain site avec Astro 7.',
		subtitle:
			'Pulsar Stack est un starter Astro production-ready avec design system CSS natif, dark mode, i18n EN/FR et un blog — opérationnel en 5 minutes.',
		ctaSecondary: 'En savoir plus',
	},
	features: {
		eyebrow: 'Pourquoi Pulsar Stack',
		title: 'Tout ce qu’il faut, rien de superflu',
		items: [
			{
				title: 'Design system CSS natif',
				description:
					'Aucune dépendance à un framework. Un ensemble cohérent de tokens de couleur, typographie, espacement et transitions, personnalisable en quelques minutes.',
			},
			{
				title: 'Mode sombre bien fait',
				description:
					'Respecte la préférence système, mémorise le choix de l’utilisateur et n’affiche jamais le mauvais thème au chargement.',
			},
			{
				title: 'i18n intégré',
				description:
					'Anglais et français prêts à l’emploi, avec une structure de traduction qui s’étend facilement à d’autres langues.',
			},
			{
				title: 'Blog piloté par le contenu',
				description:
					'Content collections Markdown typées, avec brouillons, tags et un routage dynamique propre.',
			},
			{
				title: 'SEO par défaut',
				description:
					'Open Graph, cartes Twitter, URLs canoniques, hreflang et JSON-LD intégrés dès le départ.',
			},
			{
				title: 'Accessible et responsive',
				description:
					'HTML sémantique, navigation au clavier et mise en page mobile-first partout.',
			},
		],
	},
	cta: {
		title: 'Prêt à livrer plus vite ?',
		subtitle: 'Achetez Pulsar Stack et lancez votre prochain projet aujourd’hui.',
		button: 'Acheter Pulsar Stack — 19€',
		buttonHref: 'https://naorocketfactory.dev/kits/pulsar-stack',
	},
	about: {
		eyebrow: 'À propos',
		title: 'Conçu pour les créateurs',
		intro:
			'Pulsar Stack existe pour éliminer les tâches répétitives du démarrage d’un site : tokens de design, mode sombre, i18n, SEO et moteur de blog sont déjà interconnectés pour que vous puissiez vous concentrer sur votre contenu et votre marque.',
		body: [
			'Chaque composant est livré avec des valeurs par défaut sensées et des props claires, pour que personnaliser les couleurs, les textes ou la mise en page prenne des minutes plutôt que des jours.',
			'Le code est volontairement compact : CSS natif, content collections en TypeScript strict, et aucun JavaScript client superflu.',
		],
	},
	blog: {
		eyebrow: 'Blog',
		title: 'Derniers articles',
		subtitle: 'Notes, mises à jour et guides.',
		readMore: 'Lire la suite',
		backToBlog: 'Retour au blog',
		empty: 'Aucun article publié pour le moment.',
	},
} as const;
