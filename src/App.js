import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import restaurant_jpg from "./assets/restaurant.jpg";
import background from "./assets/background.jpg";
import BookTableForm from "./components/booktableform";

function App() {
    console.log(background);
    return (
        <>
            <div
                className="cardImage"
                style={{ backgroundImage: `url(${restaurant_jpg})` }}
            >
                <Container
                    className="customText"
                    style={{ paddingTop: "20vh" }}
                >
                    <h3 className="customText">XYZ Restaurant</h3>
                    <h5>Idhar Khaana Milta, Aur</h5>
                    <h5>Tumko Kya chahiye?</h5>
                </Container>
            </div>
            <div
                className="cardImage"
                style={{ backgroundImage: `url:(${background})` }}
            >
                <h3 style={{ textAlign: "center", paddingTop: "20vh" }}>
                    Book A Table
                </h3>
                <Container className="d-flex justify-content-center align-items-center">
                    <BookTableForm />
                </Container>
            </div>
        </>
    );
}

export default App;
