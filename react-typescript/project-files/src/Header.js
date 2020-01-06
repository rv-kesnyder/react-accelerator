import React from 'react';
import './header.css';

function Header(props) {

    return (

        <header className="App-header">
            <h1>Giphy Madness!</h1>
            <form onClick={props.handleSubmit}>

                <label htmlFor="queryInput">
                    Search: 
                </label>

                <input 
                type="text" 
                id="queryInput"
                value={props.inputValue}
                onChange={props.handleInput} 
                /> 

                <input
                type="submit"
                value="Submit"
                className="submit_btn"
                />          
                
            </form>
        </header>
    );

}

export default Header;