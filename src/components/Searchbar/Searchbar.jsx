import React from "react"
import { StyledButton, StyledForm, StyledHeader, StyledInput, StyledSpan } from "./Searchbar.styled"
import { HiSearch } from "react-icons/hi";

export const Searchbar = ({ onSelect }) => {
    return (
        <StyledHeader>
            <StyledForm onSubmit={onSelect} type="submit">
                <StyledButton>
                    <HiSearch style={{ width: "37px", height: "37px" }} />
                    <StyledSpan >Search</StyledSpan>
                </StyledButton>

                <StyledInput
                    name="find"
                    type="text"
                    placeholder="Search images and photos"
                />
            </StyledForm>
        </StyledHeader>
    )
}