export const en = {
	meta: {
		siteName: 'Pulsar Stack',
		defaultTitle: 'Pulsar Stack — Modern Astro Starter Kit',
		defaultDescription:
			'A clean, fast, fully customizable Astro starter kit with native CSS, dark mode, i18n and a blog engine ready to go.',
	},
	navbar: {
		links: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Contact', href: '/contact' },
		],
		ctaLabel: 'Get Started',
		ctaHref: '/contact',
	},
	footer: {
		tagline: 'A modern starter kit built for speed, clarity and easy customization.',
		columns: {
			navigate: 'Navigate',
			legal: 'Legal',
		},
		links: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Contact', href: '/contact' },
		],
		contact: {
			title: 'Contact',
			email: 'hello@example.com',
		},
		rights: 'All rights reserved.',
	},
	hero: {
		eyebrow: 'Astro Starter Kit',
		title: 'Ship your next site at light speed.',
		subtitle:
			'Pulsar Stack is a production-ready Astro starter with a native CSS design system, dark mode, i18n and a content-driven blog — built to be resold and rebranded in minutes.',
		ctaPrimary: 'Get Started',
		ctaSecondary: 'Learn more',
	},
	features: {
		eyebrow: 'Why Pulsar Stack',
		title: 'Everything you need, nothing you don’t',
		items: [
			{
				title: 'Native CSS design system',
				description:
					'No framework lock-in. A consistent set of design tokens for color, type, spacing and motion you can restyle in minutes.',
			},
			{
				title: 'Dark mode, done right',
				description:
					'Respects system preference, persists user choice, and never flashes the wrong theme on load.',
			},
			{
				title: 'Built-in i18n',
				description:
					'English and French out of the box, with a translation structure that scales to any locale you add.',
			},
			{
				title: 'Content-driven blog',
				description:
					'Type-safe Markdown content collections with drafts, tags and clean dynamic routing.',
			},
			{
				title: 'SEO by default',
				description:
					'Open Graph, Twitter cards, canonical URLs, hreflang and JSON-LD wired in from the start.',
			},
			{
				title: 'Accessible & responsive',
				description:
					'Semantic HTML, keyboard-friendly navigation and a mobile-first layout throughout.',
			},
		],
	},
	cta: {
		title: 'Ready to launch your next project?',
		subtitle: 'Clone the starter, swap the tokens, ship your brand.',
		button: 'Get in touch',
	},
	about: {
		eyebrow: 'About',
		title: 'Built for builders',
		intro:
			'Pulsar Stack exists to remove the busywork from starting a new site: design tokens, dark mode, i18n, SEO and a blog engine are already wired together so you can focus on your content and your brand.',
		body: [
			'Every component ships with sensible defaults and clear props, so customizing colors, copy or layout takes minutes instead of days.',
			'The codebase is intentionally small: native CSS, TypeScript-strict content collections, and zero unnecessary client-side JavaScript.',
		],
	},
	blog: {
		eyebrow: 'Blog',
		title: 'Latest articles',
		subtitle: 'Notes, updates and guides.',
		readMore: 'Read more',
		backToBlog: 'Back to blog',
		empty: 'No articles published yet.',
	},
	contact: {
		eyebrow: 'Contact',
		title: 'Let’s talk',
		subtitle: 'Have a question or a project in mind? Send a message below.',
		form: {
			name: 'Name',
			namePlaceholder: 'Your name',
			email: 'Email',
			emailPlaceholder: 'you@example.com',
			message: 'Message',
			messagePlaceholder: 'Tell us about your project...',
			submit: 'Send message',
		},
	},
} as const;
