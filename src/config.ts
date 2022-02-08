export const SITE = {
	title: 'Sarah\'s Docs for Developers Note site',
	description: 'A collection of notes from Dev Ed Book Club.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'sarah11918',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
	French: 'fr',
	Swedish: 'se',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Introduction', link: 'en/introduction' },

		{ text: 'Chapters', header: true },
		{ text: '1. Understanding your Audience', link: 'en/chapter1' },
		{ text: '2. Planning your Documentation', link: 'en/chapter2' },
		{ text: '3. Drafting Documentation', link: 'en/chapter3' },
		{ text: '4. Editing Documentation', link: 'en/chapter4' },
		{ text: '5. Integrating Code Samples', link: 'en/chapter5' },
		{ text: '6. Adding Visual Content', link: 'en/chapter6' },
		{ text: '7. Publishing Documentation', link: 'en/chapter7' },
		{ text: '8. Gathering and Integrating Feedback', link: 'en/chapter8' },
		{ text: '9. Measuring Documentation Quality', link: 'en/chapter9' },
		{ text: '10. Organizing Documentation', link: 'en/chapter10' },
		{ text: '11. Maintaining and Deprecating Documentation', link: 'en/chapter11' },


		{ text: 'Related Links', header: true },
		{ text: 'references', link: 'en/references' },
	],

	fr: [
		{ text: 'Section', header: true },
		{ text: 'Introduction', link: 'fr/introduction' },
		{text: 'Bonjour', link:'fr/bonjour' }
	],

	se:[
		{ text: 'Sektion', header: true },
		{ text: 'Introduction', link: 'se/introduction' },
		{text: 'Hej Hej', link:'se/hej' },
	],
};
