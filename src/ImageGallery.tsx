import { useState, type MouseEventHandler } from 'react';
import './ImageGallery.css';

type Props = {
    image: string,
    title?: string,
    onClose: MouseEventHandler,
    onPrevious: MouseEventHandler,
    onNext: MouseEventHandler
};

const ImageModal = ({ image, onClose, onPrevious, onNext, title }: Props) => {
    const [showModal, setShowModal] = useState(true);
    const handleClose: MouseEventHandler = (e) => {
        setShowModal(false);
        setTimeout(() => {
            onClose(e);
        }, 500); // 等待淡出動畫完成後再觸發關閉
    };
    return (
        <div className={`modal ${showModal ? 'modal-visible' : 'modal-hidden'}`}>
            <div className="modal-content">
                <span>{title}</span>
                <button className="close-button" onClick={handleClose} title='關閉'>&times;</button>
                <div className="image-container">
                    <button className="prev-button" onClick={onPrevious} title='前一張' />
                    <img className="image-fullscreen fadeIn" src={image} alt="Enlarged" />
                    <button className="next-button" onClick={onNext} title='後一張' />
                </div>
            </div>
        </div>
    );
};

type Selected = { url: string, index: number } | null;

const ImageGallery = ({ images }: { images: string[] }) => {
    const [selectedImage, setSelectedImage] = useState<Selected>(null);

    const index2normal = (index: number) => {
        if (index < 0)
            return images.length - 1;
        if (index >= images.length)
            return 0;
        return index;
    }

    const handleModalClose = () => {
        setSelectedImage(null);
    };

    const handleNext = () => {
        setSelectedImage(p => {
            if (!p) return p;
            const index = index2normal(p.index + 1);
            return { url: images[index], index };
        })
    };

    const handlePrev = () => {
        setSelectedImage(p => {
            if (!p) return p;
            const index = index2normal(p.index - 1);
            return { url: images[index], index };
        })
    };

    return (
        <div>
            <div className="image-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`mine ${index}`}
                        onClick={() => setSelectedImage({ url: images[index], index })}
                    />
                ))}
            </div>
            {selectedImage && (
                <ImageModal
                    title={`${selectedImage.index + 1} / ${images.length}`}
                    image={selectedImage.url}
                    onClose={handleModalClose}
                    onPrevious={handlePrev}
                    onNext={handleNext}
                />
            )}
        </div>
    );
};

export default ImageGallery;