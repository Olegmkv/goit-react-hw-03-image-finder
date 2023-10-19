import React from "react"
import { StyledModal, StyledOverlay } from "./Modal.stylesd"

export const ModalOpen = ({ tags, largeImageURL, closeModal }) => {
    return (
        <StyledOverlay onClick={closeModal}>
            < StyledModal>
                <img src={largeImageURL} alt={tags} />
            </StyledModal >
        </StyledOverlay >
    )
}