import { useEffect } from "react";
import Layout from "../components/Layout";
// import Home from '../pages/home'

export default function Home() {
	useEffect(() => {
		console.log("jj");
	}, []);
	return (
		<Layout>
			<div className="main">
				<div className="section1">Section 1</div>
				<div className="section2">Section 2</div>
				<div className="section3">Section 3</div>
			</div>
		</Layout>
	);
}
