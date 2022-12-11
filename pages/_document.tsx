import Document, { Html, Head, Main, NextScript } from "next/document";
import Meta from "./seo-meta";

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const links = [
			{ rel: "shortcut icon", href: "/favicon.png" },
		];
		return (
			<Html lang="en">
				<Head>
					<Meta
						// title={"Dreams Realty"}
						// description={"Find your perfect Home here"}
						// image={
						// 	"backend.dreamsrealty.co.in/uploads/futuro_hprop1_2x_da9345c38e.png"
						// }
					/>
					{links.map((link, index) => (
						<link key={index} {...link} />
					))}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
