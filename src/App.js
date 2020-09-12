import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import restaurant_jpg from "./assets/restaurant.jpg";
import background from "./assets/background.jpg";
import BookTableForm from "./components/booktableform";
import { Provider } from "react-redux";
import store from './store/formstore'

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
            <Container as="div" style={{backgroundImage:`url(${background})`,height:"100vh"}} fluid>
                <Provider store={store}>
                    <BookTableForm />
                </Provider>
            </Container>
        </>
    );
}

export default App;
