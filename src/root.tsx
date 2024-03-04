import React from "react";
import ReactDOM from "react-dom/client";
import { BunsList } from "./BunsListCSR.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BunsList />
    </React.StrictMode>,
);