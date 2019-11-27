module.exports = {
	siteMetadata: {
		title: 'Remzi Cavdar',
		author: 'Remzi Cavdar',
		imageUrl: 'https://i.imgur.com/Vz81GEl.png',
		description: 'My website',
		keywords: 'Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo',
		twitter: 'https://twitter.com/remzicavdar',
		github: 'https://github.com/Remzi1993',
		siteUrl: 'https://remzi.info'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: '${__dirname}/src/images'
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Makefolio',
				short_name: 'Makefolio',
				start_url: '/',
				background_color: '#2980b9',
				theme_color: '#2980b9',
				display: 'standalone',
				icon: 'src/images/gatsby-icon.png',
				orientation: 'portrait'
			}
		},
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		'gatsby-plugin-offline',
		'gatsby-plugin-netlify'
	]
};
