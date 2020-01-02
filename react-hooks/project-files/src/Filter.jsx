import React from 'react';
import './filter.css';

function Filter(props) {

    return (
        <section className="filterContainer">
            <div className="filter">
                <div>
                    <label htmlFor="limit">Limit:</label> 
                    <select value={props.limit} onChange={props.handleLimitChange} id="limit">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>  
                <div>
                    <label htmlFor="rating">Rating:</label> 
                    <select value={props.rating} onChange={props.handleRatingChange} id="rating">
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                    </select>
                </div>            
                <div>
                    <label htmlFor="language">Language:</label> 
                    <select value={props.language} onChange={props.handleLangChange} id="language">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="Russian">Russian</option>
                    </select>
                </div>
            </div>
        </section>
    );
}

export default Filter;