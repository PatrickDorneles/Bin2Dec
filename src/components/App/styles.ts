import styled from "styled-components";

export const AppContainer = styled.main`
    display: flex;
    height: 100%;
    width: 100%;
    background: #616161;
    
    align-items: center;
    justify-content: center;
`

export const MainApplication = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    
    align-items: center;
    justify-content: center;
`;

export const AuthorSection = styled.section`
    position: absolute;
    bottom: 5px;
`;

export const AuthorText = styled.span`
    font-family: RobotoMono;
    color: white;
`;