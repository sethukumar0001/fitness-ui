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
							Sweat offers the ultimate cardio and strength conditioning
							workouts in a single studio location. Maximize your movements with
							instructor-led cardio and weight training sessions. Get lost in
							immersive workouts built for your body. The combination of
							strength and cardio training will burn more calories while toning
							your arms, back, abs, glutes, and legs.
						</p>
					</div>
					<div className="right">
						<img src={`/images/whysweat/1.jpg`} alt={"1"} />
					</div>
				</div>
				<div className="section2">
					<div className="right">
						<img src={`/images/whysweat/2.jpg`} alt={"1"} />
					</div>
					<div className="left">
						<h1 className="header1">THE EXPERIENCE</h1>
						<p className="desc1">
							From custom artwork to high-end lighting, sound, and equipment,
							Sweat is a studio like no other. We are passionate team of fitness
							professionals inspired to help you achieve the best version of
							yourself in an inclusive and judgement-free environment. Sweat is
							locally owned and operated and is not a franchise.
						</p>
					</div>
				</div>

				<div className="section2">
					<div className="left">
						<h1 className="header1">THE STUDIO</h1>
						<p className="desc1">
							Combine physical postures, breathing techniques, and meditation
							into a single class to improve your body's movement, posture, and
							physical fitness. Whether taking a Power Yoga or Restorative Yoga
							class, our classes will satisfy both first times and experienced
							alike.
						</p>
					</div>
					<div className="right">
						<img src={`/images/whysweat/3.jpg`} alt={"1"} />
					</div>
				</div>
			
			</div>
		</Layout>
	);
}
