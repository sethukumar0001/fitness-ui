import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaTimes, FaBars, FaUserCircle, FaChevronDown } from "react-icons/fa";

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

	const handleNavigateUrl = (url: string) => {
		toggleDropdown(!dropdownToggled);
		router.push(url);
	};

	const [open, setOpen] = useState(false)
	const handleOpenDropdown = () => {
		setOpen(!open)
	}

	return (
		<header className="header" style={{ top: visible ? "0" : "-120px" }}>
			<img
				src={`/images/2.png`}
				className="logo"
				onClick={() => handleNavigateUrl(`/`)}
			/>
			<nav className={`${dropdownToggled ? "responsive_nav" : ""}`}>
				<ul>
					<div className="logo-parent">
						<img src={`/images/2.png`} className="logo-mobile" />
					</div>
					<li
						onClick={() => handleNavigateUrl(`/`)}
						className={`${router.pathname === `/` ? "active" : ""}`}
					>
						Home
					</li>
					<li
						onClick={() => handleNavigateUrl(`/about`)}
						className={`${router.pathname === `/about` ? "active" : ""} sub-header`}
					>
						Why FITNESS?
						<div className="dropdown-content">
							<a href="#">Benefits</a>
							<a href="#">Fitness Lab</a>
							<a href="#">Personal Trining</a>
						</div>
					</li>
					<li
						className={`${router.pathname === `/about` ? "active" : ""} sub-header-mobile`}
					>
						<div className="title">
							<div onClick={() => handleNavigateUrl(`/about`)}>
								Why FITNESS?
							</div>
							<FaChevronDown size={20} className={'button'} onClick={() => handleOpenDropdown()} />
						</div>
						{open && <ul className="dropdown-content-mobile">
							<li >Benefits</li>
							<li >Fitness Lab</li>
							<li >Personal Trining</li>
						</ul>}
					</li>
					<li
						onClick={() => handleNavigateUrl(`/try-sweat`)}
						className={`${router.pathname === `/try-sweat` ? "active" : ""}`}
					>
						Try FITNESS
					</li>
					<li
						onClick={() => handleNavigateUrl(`/offers`)}
						className={`${router.pathname === `/offers` ? "active" : ""}`}
					>
						Offers
					</li>
					<li
						onClick={() => handleNavigateUrl(`/pricing`)}
						className={`${router.pathname === `/pricing` ? "active" : ""}`}
					>
						Pricing
					</li>
					<li
						onClick={() => handleNavigateUrl(`/contact-us`)}
						className={`${router.pathname === `/contact-us` ? "active" : ""}`}
					>
						Contact Us
					</li>
				</ul>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes size={25} />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars size={20} />
			</button>
			<div className="user-info">
				<FaUserCircle className="profile-icon" size={25} />{" "}
				<p className="p">GET STARTED</p>
			</div>
		</header>
	);
}

export default Header;
