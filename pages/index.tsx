import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<div className="main">
				<div className="section1">
					<h1>{"HOME"}</h1>
				</div>
				<div className="section2">
					<div className="left">
						<h1 className="header1">{"ROW"}</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam"
							}
						</p>
					</div>
					<div className="right">
						{/* <img src={`/images/fitness/1.jpg`} alt={"1"} /> */}
					</div>
				</div>
				<div className="section2">
					<div className="right">
						{/* <img src={`/images/fitness/2.png`} alt={"1"} /> */}
					</div>
					<div className="left">
						<h1 className="header1">{"BARRE"}</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam"
							}
						</p>
					</div>
				</div>

				<div className="section2">
					<div className="left">
						<h1 className="header1">{"YOGA"}</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam"
							}
						</p>
					</div>
					<div className="right">
						{/* <img src={`/images/fitness/3.jpg`} alt={"1"} /> */}
					</div>
				</div>
				<div className="section2">
					<div className="right">
						{/* <img src={`/images/fitness/4.jpg`} alt={"1"} /> */}
					</div>
					<div className="left">
						<h1 className="header1">{"CYCLE"}</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam."
							}
						</p>
					</div>
				</div>

				<div className="section2">
					<div className="left">
						<h1 className="header1">{"LAB"}</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam."
							}
						</p>
					</div>
					<div className="right">
						{/* <img src={`/images/fitness/5.jpeg`} alt={"1"} /> */}
					</div>
				</div>
				<div className="section2">
					<div className="right">
						{/* <img src={`/images/fitness/6.jpg`} alt={"1"} /> */}
					</div>
					<div className="left">
						<h1 className="header1">{"SIXTY"}</h1>
						<p className="desc1">
							{
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi. Nunc nunc nulla, consequat id tempus id, eleifend nec massa. Nam sed suscipit arcu, vitae tincidunt quam."
							}
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
