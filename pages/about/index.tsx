import Layout from "../../components/Layout";

export default function Home() {
	return (
		<Layout>
			<div className="main">
				<div className="section1">
					<h1>WHY SWEAT?</h1>
				</div>
				<div className="section2">
					<div className="left">
						<h1 className="header1">THE METHOD</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam"
							}
						</p>
					</div>
					<div className="right">
						{/* <img src={`/images/whysweat/1.jpg`} alt={"1"} /> */}
					</div>
				</div>
				<div className="section2">
					<div className="right">
						{/* <img src={`/images/whysweat/2.jpg`} alt={"1"} /> */}
					</div>
					<div className="left">
						<h1 className="header1">THE EXPERIENCE</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam"
							}{" "}
						</p>
					</div>
				</div>

				<div className="section2">
					<div className="left">
						<h1 className="header1">THE STUDIO</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam"
							}{" "}
						</p>
					</div>
					<div className="right">
						{/* <img src={`/images/whysweat/3.jpg`} alt={"1"} /> */}
					</div>
				</div>
			</div>
		</Layout>
	);
}
