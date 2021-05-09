import React from "react";
import "./YoutubeEmbed.css";
import Footer from './Footer'
import YoutubeEmbed from "./YoutubeEmbed";
import Header from './Header'


export default function App() {
  return (
    <div className="App">
      <Header />
      <h1>Monat Babe Youtube Channel</h1>
      <YoutubeEmbed embedId="nULUddTI46w" />
      <Footer />
    </div>  
  );
}