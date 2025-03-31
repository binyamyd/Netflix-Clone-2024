import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchromanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
