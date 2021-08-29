import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../Requests";
import Footer from "./../Footer";

function HomeScreen() {
	return (
		<div className="homeScreen">
			{/* nav Components  */}
			<Nav />
			{/* Banner Components */}
			<Banner />
			{/* Row Components with props inserted */}
			<Row
				title="NETFLIX ORIGINALS"
				isLargeRow
				fetchUrl={requests.fetchNetflixOriginals}
			/>
			<Row title="Trending" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			<Footer />
		</div>
	);
}

export default HomeScreen;
