import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempting, setAttempting] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    return (
        <span>
            <Button onClick={setAttempting(true) && setAttempts(attempts - 1)}>
                Start Quiz
            </Button>{" "}
            to {attempts}
            <Button onClick={setAttempting(false)}>Stop Quiz</Button>
            {attempting && <div>42</div>}
            <Button onClick={setAttempting(false)}>Mulligan</Button>
            {attempting && <div>42</div>}
        </span>
    );
}
