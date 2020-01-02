import React from 'react';
import './main.css';

function Main(props) {

    const errorMsg = props.error;
    const imageCount = props.images.length;
    const sidebarClass = props.usernameQuery.length ? 'hasSidebar' : '';

    // error message found
    if ( errorMsg !== '') {
        return (
            <main>
                <p>Error: { props.error }</p>
            </main>
        )
    }

    // no images found
    if ( imageCount === 0) {
        return (
            <main>
                <p>No giphies yet! Search for something interesting above.</p>
            </main>
        )
    }

    // we have images and no errors. Wahoo!
    const imageList = props.images.map( (image, key) => {

        const imageUrl = `https://i.giphy.com/media/${image.id}/100.gif`;
        const alt = `giphy from search phase: ${props.executedQuery}`;
        return (
            <div key={"div"+key} className="imageBox">
                <img key={key} src={imageUrl} alt={alt} />
                { image.username.length ? 
                    (<p key={"a"+key}><a 
                        href="/" 
                        title="See more by this creator"
                        data-username={ image.username }
                        onClick={ (e)=>props.handleUsernameClick(e) }
                        >
                        { image.username }</a></p>)  : 
                    (<p className="anonymous" key={"b"+key}>No attribution</p>) }
            </div>
        );
    });

    return (
        <main className={sidebarClass}>
            <p>Your Giphy search for "{props.executedQuery}" returned {imageCount} results.</p>
            {imageList}
        </main>
    );

}

export default Main;