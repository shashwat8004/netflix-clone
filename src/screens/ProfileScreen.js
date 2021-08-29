import React from "react";
import "./ProfileScreen.css";
import Nav from "./../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "./../features/userSlice";
import { auth } from "../firebase";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
	// this allow us to acces the user info that is inside the redux page
	const user = useSelector(selectUser);
	return (
		<div className="profileScreen">
			<Nav />
			<div className="profileScreen__body">
				<h1>Edit Profile</h1>
				<div className="profileScreen__info">
					<img
						src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
						alt=""
					/>
					<div className="profileScreen__details">
						{/* this will give us the email address of the user that is registered and that is in the redux file*/}
						<h2>{user.email}</h2>
						<div className="profileScreen__plans">
							<h3>Plans</h3>
							<PlansScreen />

							<button
								onClick={() => auth.signOut()}
								className="profileScreen__signOut"
							>
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
