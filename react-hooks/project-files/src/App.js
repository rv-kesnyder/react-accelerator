import React from 'react';
import Main from './Main';
import Header from './Header';
import Filter from './Filter';
import Aside from './Aside';
import './App.css';


class App extends React.Component {

  constructor(props) {
    console.log(process.env);
    super(props);
    // 
    this.state = {
      "query": "",
      "queryError": "",
      "executedQuery": "",
      "images": [],
      "api": {
        "key": process.env.REACT_APP_API_KEY,
        "baseUrl": "https://api.giphy.com/v1/gifs/search",
        "limit": 5,
        "rating": "G",
        "lang": "en"
      },
      usernameQuery: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
    this.handleUsernameResetClick = this.handleUsernameResetClick.bind(this);
  }

  handleUsernameClick(e) {
    e.preventDefault();
    this.setState({ "usernameQuery": e.target.dataset.username });
  }

  handleUsernameResetClick(e) {
    e.preventDefault();
    console.log('clicked');
    this.setState({ "usernameQuery": '' });
  }

  handleLimitChange(e) {
    let api = Object.assign({}, this.state.api);
    api.limit = e.target.value;
    this.setState({"api": api});
  }

  handleLangChange(e) {
    let api = Object.assign({}, this.state.api);
    api.lang = e.target.value;
    this.setState({"api": api});
  }

  handleRatingChange(e) {
    let api = Object.assign({}, this.state.api);
    api.rating = e.target.value;
    this.setState({"api": api});  
  }

  handleInput(e) {
    const query = e.target.value;
    this.setState({ query });
  }

  handleSubmit(e) {

    // stop form from submitting, which would reload page
    e.preventDefault();
    
    // ignore empty submissions
    if (this.state.query.length === 0) {
      return;
    }
    // reset images
    this.setState({ "images": [] });

    // set query parameters and reset error message
    let queryError = '';
    const { key, baseUrl, limit, rating, lang } = this.state.api;
    const query = this.state.query;
    const url = `${baseUrl}?api_key=${key}&q=${query}&limit=${limit}&offset=0&rating=${rating}&lang=${lang}`

    // request the giphies
    fetch(url)
    .then(response => {

      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }

    }).then(jsonResults => {

      // get image id to build image tags later
      const images = jsonResults.data.map( (item) => {
        return { "id": item.id, "username": item.username };
      });

      this.setState({ 
        images, 
        "executedQuery": query,
        "query": '',
        queryError 
      });

    }).catch( (error) => {

      // log your error. Don't do console.log, of course.
      console.log(error);

      // tell the user
      queryError = "There was a problem with your query. Please try again.";
      
      this.setState({ 
        "executedQuery": query,
        "query": '',
        queryError 
      });
    });
  }
  
  render() {
    
    return (
      <div className="App">
        <Header 
          handleInput={this.handleInput} 
          handleSubmit={this.handleSubmit}
          inputValue={this.state.query}
        />
        <Filter 
          handleLimitChange={this.handleLimitChange}
          handleLangChange={this.handleLangChange}
          handleRatingChange={this.handleRatingChange}
        />
        <section>
          <Main 
            images={this.state.images} 
            executedQuery={this.state.executedQuery}
            error={this.state.queryError}
            usernameQuery={this.state.usernameQuery}
            handleUsernameClick={this.handleUsernameClick}
          />
          <Aside 
            api={this.state.api}
            usernameQuery={this.state.usernameQuery} 
            handleUsernameResetClick={this.handleUsernameResetClick}
          />
        </section>

      </div>
    );
  }

}

export default App;
