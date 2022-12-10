import Link from "next/link";
import React, { useEffect, useState } from "react";
function Header(props: any) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	// new function:
	const handleScroll = () => {
		console.log(window.pageYOffset)
		// find current scroll position
		const currentScrollPos = window.pageYOffset;
		// set state based on location info (explained in more detail below)
		setVisible(
			(prevScrollPos > currentScrollPos &&
				prevScrollPos - currentScrollPos > 200) ||
				currentScrollPos < 200
		);
		// set state to new scroll position 70 10
		setPrevScrollPos(currentScrollPos);
	};

	// useEffect:
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, visible, handleScroll]);
	
	return (
		<div
			className={"header d-flex justify-content-between"}
			style={{ top: visible ? "0" : "-120px" }}
		>
			<div className="image-div">
				<img src={`/images/2.png`} className="image" />
			</div>
			<nav className="nav">
				<ul className="d-flex">
					<li>
						<Link href={"#"}>Home</Link>
					</li>
					<li>
						<Link href={"#"}>Why SWEAT?</Link>
					</li>
					<li>
						<Link href={"#"}>Try SWEAT</Link>
					</li>
					<li>
						<Link href={"#"}>Offers</Link>
					</li>
					<li>
						<Link href={"#"}>Pricing</Link>
					</li>
					<li>
						<Link href={"#"}>Contact Us</Link>
					</li>
				</ul>
			</nav>
			<div className="profile-right">
				<img src={`/images/profile.png`} className="image" />
			</div>
		</div>
	);
}

export default Header;
