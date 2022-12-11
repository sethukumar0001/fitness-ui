import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
function Header(props: any) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const router = useRouter()
	// new function:
	const handleScroll = () => {
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
				<Link href={`/`}>
					<img src={`/images/2.png`} className="image" />
				</Link>
			</div>
			<nav className="nav">
				<ul className="d-flex">
					<li>
						<Link
							href={"/"}
							className={`${
								router.pathname === `/`
									? "active"
									: ""
							}`}
						>
							The Workouts
						</Link>
					</li>
					<li>
						<Link
							href={"/about"}
							className={`${
								router.pathname === `/about`
									? "active"
									: ""
							}`}
						>
							Why SWEAT?
						</Link>
					</li>
					<li>
						<Link
							href={"/try-sweat"}
							className={`${
								router.pathname === `/try-sweat`
									? "active"
									: ""
							}`}
						>
							Try SWEAT
						</Link>
					</li>
					<li>
						<Link
							href={"/offers"}
							className={`${
								router.pathname === `/offers`
									? "active"
									: ""
							}`}
						>
							Offers
						</Link>
					</li>
					<li>
						<Link
							href={"/pricing"}
							className={`${
								router.pathname === `/pricing`
									? "active"
									: ""
							}`}
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							href={"/contact-us"}
							className={`${
								router.pathname === `/contact-us`
									? "active"
									: ""
							}`}
						>
							Contact Us
						</Link>
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
