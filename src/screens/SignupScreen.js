import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import { register } from "./../serviceWorker";

function SignupScreen() {
	// capture the information from the input forms
	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	// add the register functionality
	const register = (e) => {
		e.preventDefault(); // ye kaya karega ? --> whenever the buttons inside the form are clicked it will refresh the screen this fuction will prevent happening the refresh
		// authentication functionality using for the Register or Login Page
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value, // get the raw value that the user register
				passwordRef.current.value
			)
			.then((authUser) => {
				// if sign in do this
				console.log(authUser);
			})
			.catch((error) => {
				// if not show error
				alert(error.message);
			});
	};

	// Add the SignIn Functionality
	const signIn = (e) => {
		e.preventDefault();
		//authentication functionality for the signIn page
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="signupScreen">
			<form action="">
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Password" />
				{/* this onclick function have a signIn function inside it wihich will prevent refesh */}
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					<span className="signupScreen__gray">New to Netflix?</span>
					<span className="signupScreen__link" onClick={register}>
						Sign Up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignupScreen;
