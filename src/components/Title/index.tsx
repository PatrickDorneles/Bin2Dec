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
            <TitleHint
                onClick={clickable ? onClick : undefined}>
                    Click or tap here!
            </TitleHint>
        </TitleContainer>
    )
}