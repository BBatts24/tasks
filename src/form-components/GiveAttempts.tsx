import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [requested, setRequested] = useState<string>("0");
    return (
        <div>
            <h3>Give Attempts</h3>
            <h4>Number of attempts left: {attemptsLeft}</h4>
            <h4>Number of attempts requested: {requested}</h4>
            <Form.Group controlId="formRequestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequested(event.target.value)
                    }
                />
            </Form.Group>
            <Button onClick={() => setAttemptsLeft(attemptsLeft - 1)}>
                use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(attemptsLeft + (parseInt(requested) || 0))
                }
                disabled={attemptsLeft === 0}
            >
                gain
            </Button>
        </div>
    );
}
