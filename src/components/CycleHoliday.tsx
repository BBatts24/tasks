import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Christmas = "🎄",
    Diwali = "🪔",
    DragonBoatFestival = "🎏",
    Halloween = "🎃",
    Thanksgiving = "🦃"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.DragonBoatFestival
    );
    const advanceByAlphabet = () => {
        const holidaysArray = Object.values(Holiday);
        const currentIndex = holidaysArray.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % holidaysArray.length;
        setCurrentHoliday(holidaysArray[nextIndex] as Holiday);
    };
    const advanceByYear = () => {
        if (currentHoliday === Holiday.DragonBoatFestival) {
            setCurrentHoliday(Holiday.Diwali);
        } else if (currentHoliday === Holiday.Diwali) {
            setCurrentHoliday(Holiday.Halloween);
        } else if (currentHoliday === Holiday.Halloween) {
            setCurrentHoliday(Holiday.Thanksgiving);
        } else if (currentHoliday === Holiday.Thanksgiving) {
            setCurrentHoliday(Holiday.Christmas);
        } else {
            setCurrentHoliday(Holiday.DragonBoatFestival);
        }
    };

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
