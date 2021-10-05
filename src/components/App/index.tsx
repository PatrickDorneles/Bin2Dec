import { useState } from "react";
import Converter from "../Converter";
import Title from "../Title";
import { AppContainer, AuthorSection, AuthorText, MainApplication } from "./styles";

export default function App() {

    const [open, setOpen] = useState(false)

    return (
        <AppContainer>
            <MainApplication>
                <Title clickable={!open} onClick={() => setOpen(true)} />
                <Converter open={open} />

                <AuthorSection>
                    <AuthorText>
                        Made by <a href="https://github.com/PatrickDorneles">Patrick Dorneles</a>
                    </AuthorText>
                </AuthorSection>
            </MainApplication>
        </AppContainer>
    );
}

  