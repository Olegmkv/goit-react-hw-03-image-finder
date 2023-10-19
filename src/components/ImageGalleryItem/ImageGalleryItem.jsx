import React, { Component } from "react";
import { GalleryImage, GalleryLi } from "./ImageGalleryItem.styled";
import Modal from 'react-modal';
import { ModalOpen } from "components/Modal/Modal";

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { webformatURL, tags, largeImageURL } = this.props.galleryItem;
        return (
            <GalleryLi>
                <GalleryImage onClick={this.openModal} src={webformatURL} alt={tags} />
                <Modal
                    isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >
                    <ModalOpen tags={tags} largeImageURL={largeImageURL} closeModal={this.closeModal} />
                </Modal>
            </GalleryLi >
        )
    }
}