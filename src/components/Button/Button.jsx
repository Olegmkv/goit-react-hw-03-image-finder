import React from "react"
import { StyledButton } from "./Button.styled"


export const Button = ({ nextPage }) => {
    return (
        <StyledButton onClick={nextPage} type="button">Load more</StyledButton>
    )
}