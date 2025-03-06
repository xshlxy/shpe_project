import React from "react";
import kidsLearning from "../assets/kids-learning.png";
import "./Home.css";

const Home = () => {

    return (
        <>
            <div className="container">
                <div className="box left">
                    <div classname="centerContainer">
                        <h1>Welcome to Your Learning Adventure!</h1>
                        <p>Helping Latin-American kids adapt to American culture and language through fun learning tools.</p>
                        <button>Start Learning</button>
                    </div>
                </div>
                <div className="box right">
                </div>
            </div>
        </>
    );
}

export default Home;