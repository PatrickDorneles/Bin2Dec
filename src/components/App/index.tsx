import { useState } from "react";
import Converter from "../Converter";
import Title from "../Title";
import { AppContainer } from "./styles";

export default function App() {

    const [open, setOpen] = useState(false)

    return (
        <AppContainer>
            <Title clickable={!open} onClick={() => setOpen(true)} />
            <Converter open={open} />
        </AppContainer>
    );
}

  