import React from 'react';
import './aside.css';

class Aside extends React.Component {

    constructor(props) {
        super(props);

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
            }
        };
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.usernameQuery !== prevProps.usernameQuery && this.props.usernameQuery !== '') {

                // set query parameters and reset error message
            let queryError = '';
            const { key, baseUrl, rating, lang } = this.props.api;
            const limit = 5;
            const query = `@${this.props.usernameQuery}`;
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
      }


    render() {
        this.sidebarClass = this.props.usernameQuery.length ? 'hasSidebar' : '';

        const imageList = this.state.images.map( (image, key) => {

            const imageUrl = `https://i.giphy.com/media/${image.id}/100.gif`;

            return (
                <img key={key} src={imageUrl} alt="giphy" />
            );
        });

        return (
            <aside className={this.sidebarClass}>
                <a href="/" className="closeBox" onClick={(e)=>this.props.handleUsernameResetClick(e)}>X</a>
                <h2>Giphies by {this.props.usernameQuery}</h2>
                {imageList}
            </aside>
        );
    }
}

export default Aside;