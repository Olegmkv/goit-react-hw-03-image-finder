import React from "react"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { GalleryUl } from "./ImageGallery.styled"

export const ImageGallery = ({ gallery }) => {
    return (
        <GalleryUl >
            {gallery.map(item =>
                <ImageGalleryItem key={item.id} galleryItem={item} />
            )}
        </GalleryUl>
    )
}