import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { dhValue, setDhValue } from "./DoubleHalfState"; 'said not to use global state'

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    function Doubler(): JSX.Element {
        return <Button onClick={() => setDhValue(2 * dhValue)}>Double</Button>;
    }

    function Halver(): JSX.Element {
        return <Button onClick={() => setDhValue(0.5 * dhValue)}>Halve</Button>;
    }
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
