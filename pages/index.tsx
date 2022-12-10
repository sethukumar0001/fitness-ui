import Layout from "../components/Layout";

export default function Home() {
	return (
		<Layout>
			<div className="main">
				<div className="section1">
					<h1>The Workouts</h1>
				</div>
				<div className="section2">
					<div className="left">
						<h1 className="header1">ROW</h1>
						<p className="desc1">
							A calorie-torching total body workout that builds muscle, burns
							fat, and builds endurance all on a single machine. With 30 and 45
							minute class lengths available, you can rack up the meters and get
							your Sweat on while pushing yourself to the finish.
						</p>
					</div>
					<div className="right">
						<img src={`/images/fitness/1.jpg`} alt={"1"} />
					</div>
				</div>
				<div className="section2">
					<div className="right">
						<img src={`/images/fitness/2.png`} alt={"1"} />
					</div>
					<div className="left">
						<h1 className="header1">BARRE</h1>
						<p className="desc1">
							Barre is a ballet inspired, calorie torching, music bumping, total
							body workout for all fitness levels. We use small isolated
							movements to create long, lean muscles while incorporating cardio
							and stretching to lift and tone your entire body.
						</p>
					</div>
				</div>

				<div className="section2">
					<div className="left">
						<h1 className="header1">YOGA</h1>
						<p className="desc1">
							Combine physical postures, breathing techniques, and meditation
							into a single class to improve your body's movement, posture, and
							physical fitness. Whether taking a Power Yoga or Restorative Yoga
							class, our classes will satisfy both first times and experienced
							alike.
						</p>
					</div>
					<div className="right">
						<img src={`/images/fitness/3.jpg`} alt={"1"} />
					</div>
				</div>
				<div className="section2">
					<div className="right">
						<img src={`/images/fitness/4.jpg`} alt={"1"} />
					</div>
					<div className="left">
						<h1 className="header1">CYCLE</h1>
						<p className="desc1">
							The ultimate conditioning and endurance workout on bikes. Our
							cycle classes will constantly challenge your fitness level and
							push you to reach new heights.
						</p>
					</div>
				</div>

				<div className="section2">
					<div className="left">
						<h1 className="header1">LAB</h1>
						<p className="desc1">
							Our LAB is your space to train how you'd like outside of group
							fitness classes. We've stocked the LAB with every piece of
							functional fitness equipment we could think of, and then added
							more for good measure. From Barbells to dumbbells, Pelotons to
							Cable Machines, the LAB has everything you need.
						</p>
					</div>
					<div className="right">
						<img src={`/images/fitness/5.jpeg`} alt={"1"} />
					</div>
				</div>
				<div className="section2">
					<div className="right">
						<img src={`/images/fitness/6.jpg`} alt={"1"} />
					</div>
					<div className="left">
						<h1 className="header1">SIXTY</h1>
						<p className="desc1">
							This total body workout pairs the Concept2 rower with strength
							training in a high-intensity, high-energy environment. Our
							motivational instructors will lead you through every part of the
							workout in our experiential light and sound studio. Sixty offers a
							workout like no other with unmatchable effectiveness and
							efficiency.
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
}
