import styled from "styled-components";
import { TitleVector } from "../../assets";


export const StyledTitleVector = styled(TitleVector)`
    fill: #ffffff;
`

export const TitleHint = styled.span`
    font-family: RobotoMono;
    font-size: .4em;
    color: #fff;
`

export const TitleContainer = styled.div<{ clickable: boolean }>`
    display: flex;

    flex-direction: column;
    align-items: center;

    gap: 6px;

    position: absolute;
    transform: ${props => props.clickable ? 'scale(3)' : 'scale(1.5)'};
    top: ${props => props.clickable ? '45%' : '40px;'};
    transition: all ease-in-out .5s;

    ${StyledTitleVector} {
        cursor: ${props => props.clickable ? 'pointer' : 'default'};
    }

    ${TitleHint} {
        visibility: ${props => props.clickable ? 'visible' : 'hidden'};
    }
`

