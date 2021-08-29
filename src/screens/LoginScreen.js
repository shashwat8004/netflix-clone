import React from "react";
import { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
	const [signIn, setSignIn] = useState(false);
	return (
		<div className="LoginScreen">
			<div className="LoginScreen__background">
				<img
					className="LoginScreen__logo"
					src="https://th.bing.com/th/id/R.2ea85d7448475a744c1485c2eac3d3d1?rik=LOSTtarBPEnY%2fw&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fnetflix-logo-0.png&ehk=PaZLUHaWmwAMEzdIDx7zGpBu053ZpXipTljxBidJnfU%3d&risl=&pid=ImgRaw&r=0"
					alt=""
				/>
				<button onClick={() => setSignIn(true)} className="LoginScreen__button">
					Sign in
				</button>
				<div className="LoginScreen__gradient" />
				<div className="LoginScreen__body">
					{/* ye mtlb ki agar signin hai tho SignInScreen pagee pe leke jaooo nhi thooo show the rest inside : () */}
					{signIn ? (
						<SignupScreen />
					) : (
						<>
							{/* <TypeWriter typing={0.5}> */}
							<h1>Unlimited flims,TV programmes and more.</h1>
							<h2>Watch anywhere. Cancel at any time.</h2>
							<h3>
								Ready to watch? Enter your email to create or restart your
								membership.
							</h3>
							{/* </TypeWriter> */}
							<div className="LoginScreen__input">
								<form action="">
									<input type="email" placeholder="Email Address" />
									<button
										onclick={() => setSignIn(true)}
										className="LoginScreen__getStarted"
									>
										GET STARTED
									</button>
								</form>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
