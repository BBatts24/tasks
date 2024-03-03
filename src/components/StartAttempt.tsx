import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempting, setAttempting] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);
    function startQuiz(): void {
        setAttempting(true);
        setAttempts(attempts - 1);
    }
    return (
        <span>
            <Button onClick={startQuiz}>Start Quiz</Button>
            {attempts && attempting}
            <Button onClick={() => setAttempting(false)}>Stop Quiz</Button>{" "}
            {attempting}
            {attempting && <div>42</div>}
            <Button onClick={() => setAttempts(attempts + 1)}>
                Mulligan
            </Button>{" "}
            to {attempts}
            {attempting && <div>42</div>}
        </span>
    );
}
