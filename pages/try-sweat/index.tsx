import Image from "next/image";
import { useState } from "react";
import Layout from "../../components/Layout";
import { getValue } from "../../utils/lodash";
import {
	MdOutlineAppRegistration,
	MdOutlineSportsHandball,
	MdShoppingCart,
	MdEditCalendar,
	MdAccessTime,
	MdOutlineWaterDrop,
} from "react-icons/md";

export default function Home() {
	const [list, setList] = useState([
		{
			title: "Register",
			image: <MdOutlineAppRegistration size={100} />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi.",
		},
		{
			title: "Grab your plan",
			image: <MdShoppingCart size={100} />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi.",
		},
		{
			title: "Reserve your spot",
			image: <MdEditCalendar size={100} />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi.",
		},
		{
			title: "Arrive Early",
			image: <MdAccessTime size={100} />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi.",
		},
		{
			title: "Get in Gear",
			image: <MdOutlineSportsHandball size={100} />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi.",
		},
		{
			title: "Hydrate",
			image: <MdOutlineWaterDrop size={100} />,
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a malesuada nibh, eu hendrerit sem. Nulla facilisi.",
		},
	]);
	return (
		<Layout>
			<div className="try-sweat-main">
				<div className="section1">
					<h1>{"TRY SWEAT"}</h1>
				</div>
				<div className="section2">
					{list.map((item: object, key: number) => {
						return (
							<div className="section-item" key={key}>
								<div className="item">
									<h3>{getValue(item, `title`, "")}</h3>
									<div className="logo">{getValue(item, `image`, "")}</div>
									<p className="desc">{getValue(item, `desc`, "")}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}
