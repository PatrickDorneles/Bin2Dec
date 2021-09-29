import { ChangeEvent, useState } from "react"
import { ConverterContainer, Input, Label } from "./styles";

interface Props {
    open: boolean
}

export default function Converter({ open }: Props) {

    const [binary, setBinary] = useState('');

    function transformFromBinaryToDecimal() {
        return parseInt(binary, 2)
    }

    function handleBinaryInputChange(e: ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        const lastKey = value[value.length-1]

        if(lastKey !== '0' && lastKey !== '1' && value.length !== 0) {
            return
        }

        setBinary(value)
    }

    if(!open)
        return <></>
    
    return (
        <ConverterContainer>
            <Label>
                Binary
                <Input 
                    value={binary} 
                    onChange={handleBinaryInputChange}
                    placeholder="Binary input"/>
            </Label>
            <Label>
                Decimal
                <Input 
                    value={transformFromBinaryToDecimal() || ''} 
                    placeholder="Decimal output"
                    disabled/>
            </Label>
        </ConverterContainer>
    )
}