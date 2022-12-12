import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaTimes, FaBars } from "react-icons/fa";

function Header(props: any) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const router = useRouter();
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

	const [dropdownToggled, toggleDropdown] = useState(false);
	const showNavbar = () => {
		toggleDropdown(!dropdownToggled);
	};

	return (
		<header className="header" style={{ top: visible ? "0" : "-120px" }}>
			<img src={`/images/2.png`} className="logo" />
			<nav className={`${dropdownToggled ? "responsive_nav" : ""}`}>
				<ul>
					<li>
						<Link
							href={"/"}
							className={`${router.pathname === `/` ? "active" : ""}`}
						>
							The Workouts
						</Link>
					</li>
					<li>
						<Link
							href={"/about"}
							className={`${router.pathname === `/about` ? "active" : ""}`}
						>
							Why SWEAT?
						</Link>
					</li>
					<li>
						<Link
							href={"/try-sweat"}
							className={`${router.pathname === `/try-sweat` ? "active" : ""}`}
						>
							Try SWEAT
						</Link>
					</li>
					<li>
						<Link
							href={"/offers"}
							className={`${router.pathname === `/offers` ? "active" : ""}`}
						>
							Offers
						</Link>
					</li>
					<li>
						<Link
							href={"/pricing"}
							className={`${router.pathname === `/pricing` ? "active" : ""}`}
						>
							Pricing
						</Link>
					</li>
					<li>
						<Link
							href={"/contact-us"}
							className={`${router.pathname === `/contact-us` ? "active" : ""}`}
						>
							Contact Us
						</Link>
					</li>
				</ul>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes size={25} />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars size={20} />
			</button>
			<FiUser className="profile-icon" size={30} />
		</header>
	);
}

export default Header;
