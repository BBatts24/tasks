import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function changeQues() {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <span>
            <Button onClick={changeQues}>Change Type</Button>
            to {type}.
        </span>
    );
    return <div>Chnange</div>;
}
