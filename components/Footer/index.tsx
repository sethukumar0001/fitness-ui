import Link from "next/link";
import React from "react";
function Footer(props: any) {
	return (
		<div className="footer">
			<div className="faq">
				<Link href={"#"} className='bold'>FAQ</Link>
				<Link href={"#"}>Gift Cards</Link>
				<Link href={"#"}>Privacy Policy</Link>
				<Link href={"#"}>Terms And Conditions</Link>
				<Link href={"#"}>Store</Link>
			</div>
			<div className="about">
				<Link href={"#"} className='bold'>Studio Location and Hours</Link>
				<Link href={"#"}>Tiruchanoor, Tirupati</Link>
			</div>
			<div className="social">
				<Link href={"#"}>
					<img src="/images/social/insta.png" alt="social" />
				</Link>
				<Link href={"#"}>
					<img src="/images/social/fb.png" alt="social" />
				</Link>
				<Link href={"#"}>
					<img src="/images/social/youtube.png" alt="social" />
				</Link>
				<Link href={"#"}>
					<img src="/images/social/tiktok.png" alt="social" />
				</Link>
			</div>
			<div className="cc">@2023 by SK</div>
		</div>
	);
}

export default Footer;
