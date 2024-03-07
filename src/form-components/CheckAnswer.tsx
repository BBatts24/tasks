import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [given, setGiven] = useState<string>("");
    function updateGiven(event: React.ChangeEvent<HTMLInputElement>) {
        setGiven(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formGivenValue">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={given} onChange={updateGiven} />
            </Form.Group>
            <div>The given answer is: {given}</div>
            {given === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
