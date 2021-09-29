import { StyledTitleVector, TitleContainer, TitleHint } from "./styles";

interface Props {
    clickable: boolean
    onClick(): void
}

export default function Title({ clickable, onClick }: Props) {
    return (
        <TitleContainer clickable={clickable}>
            <StyledTitleVector
                fill='#fff'
                onClick={clickable ? onClick : undefined} />
            <TitleHint>Click here!</TitleHint>
        </TitleContainer>
    )
}