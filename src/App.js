import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import * as PageElements from './components/PageElements.js';

export function App() {
    let navbarLayout=
        [
            {
                type: "link",
                link: {name: "Home page", url: "#1"}
            },
            {
                type: "link",
                link: {name: "Sign in", url: "#2"}
            },
            {
                type: "dropdown",
                dropdown: {
                    title: "what what",
                    links: 
                    [
                        {name: "Home boy", url: "#3"},
                        {name: "Bruh", url: "#4"}
                    ]
                }
            }];
    return (
        <div className="App">
            <PageElements.Navbar layout={navbarLayout} />
            <PageElements.Banner/>
            <div class="position-absolute w-100" style={{top: "75%"}}>
            <div class="position-absolute w-100" style={{top: "-30px"}}>
                <div class="container">
                    <div class="row">
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
