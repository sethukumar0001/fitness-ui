/** @type {import('next').NextConfig} */

const path = require("path");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
module.exports = withCSS(
	withSass({
		/* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass*/
		cssModules: true,
		reactStrictMode: true,
		swcMinify: true,
	})
);
module.exports = {
	/* Add Your Scss File Folder Path Here */
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
};
