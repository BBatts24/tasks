/* eslint-disable prettier/prettier */
import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Philip Colborn UD CISC275 with t Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!.
            </p>
            <h1 className="App-header2">Interesting...</h1>
            <img
                src="https://m.media-amazon.com/images/M/MV5BNmNkNWU5NzUtNmVkNS00ZDE2LTg0NjgtNTIxNWYxOWIyM2FlXkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg"
                width="500"
                height="400"
                alt="oppenheimer"
            />
            <p> </p>
            <Container>
                <Row>
                    <Col>
                        <div className="App-rect"></div>
                        <ul>
                            <li>Monkey</li>
                            <li>Horse</li>
                            <li>Frog</li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="App-rect"></div>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World!
                        </Button>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
