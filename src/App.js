import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	// this is the lsiterner which will lsitern for the login state!
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//Logged In
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				// Logged Out
				dispatch(logout());
			}
		});
		return unsubscribe; // use effect cleanup
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route exact path="/">
							<HomeScreen />
						</Route>
						{/*  */}
						<Route path="/profile">
							<ProfileScreen />
						</Route>
						{/* Home Screen */}
						<Route path="/test">
							<h1>Heyyy Brooooooooooooooo</h1>
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}
export default App;
