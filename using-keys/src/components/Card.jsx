import { useState } from "react";

function Card({ name }) {
    const [color, setColor] = useState("white");

    return (
        <div
            onClick={() => setColor(color === "white" ? "yellow" : "white")}
            style={{ background: color, margin: "5px", padding: "10px", border: "1px solid black" }}
        >
            {name}
        </div>
    );
}

export default Card;