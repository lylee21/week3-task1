import React, { Component } from "react";
import axios from "axios";

class MovieApi extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount = () => {
    console.log("did mount true");
	console.log("observation: somehow strict mode renders twice in console?")
    let key = "15e383204c1b8a09dbfaaa4c01ed7e17";
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie/?api_key=${key}&with_genres=12`
      )
      .then((res) => {
        console.log(res.data.results.slice(0,5));

        this.setState({
          list: res.data.results.slice(0,5)
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
	const movieList = this.state.list.map(e => {
	return (
		<React.Fragment key = {e.id}>
			<div style = {{display:"inline-block", margin: "10px", textAlign: "center"}}>
			<p><b>{e.title}</b></p>
			<img src = {'https://www.themoviedb.org/t/p/w220_and_h330_face'+e.backdrop_path}/>
			</div>
		</React.Fragment>
		)})
    return <>{movieList}</>;
  }
}

export default MovieApi;
