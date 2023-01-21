import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

import '../styles/App.scss';

export default function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
}