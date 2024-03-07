import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="gold"
                value="gold"
                checked={color === "gold"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="maroon"
                value="maroon"
                checked={color === "maroon"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="aquamarine"
                value="aquamarine"
                checked={color === "aquamarine"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="silver"
                value="silver"
                checked={color === "silver"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setColor(event.target.value)
                }
                id="color-check-red"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <h4 className={color} data-testid="colored-box">
                The color is {color}
            </h4>
        </div>
    );
}
