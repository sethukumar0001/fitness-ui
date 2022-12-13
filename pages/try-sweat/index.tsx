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
			desc: "You'll need to create an account with Sweat before you can purchase a plan or book a class.",
		},
		{
			title: "Grab your plan",
			image: <MdShoppingCart size={100} />,
			desc: "All class reservations require a valid pricing plan prior to reservation.",
		},
		{
			title: "Reserve your spot",
			image: <MdEditCalendar size={100} />,
			desc: "All of our services require a reservation. You can reserve your spot on our website or on our mobile app. We do not accept walk-ins.",
		},
		{
			title: "Arrive Early",
			image: <MdAccessTime size={100} />,
			desc: "If it's your first time at Sweat, please arrive 10-15 minutes early so we can give you a tour of the space and answer any questions you may have.",
		},
		{
			title: "Get in Gear",
			image: <MdOutlineSportsHandball size={100} />,
			desc: "We require closed-toe athletic shoes and recommend breathable, comfortable athletic wear for your workout.",
		},
		{
			title: "Hydrate",
			image: <MdOutlineWaterDrop size={100} />,
			desc: "Remember to drink lots of water before, during, and after your Sweat class. Our high-energy sessions will get you sweating, so water will be crucial during your workout.",
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
