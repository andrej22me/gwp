'use strict';

import React from 'react';

interface ImageSectionProps {
    imageUrl: string;
    altText: string;
    border?: {
        topLeft: boolean;
        topRight: boolean;
        bottomLeft: boolean;
        bottomRight: boolean;
        width: string;
        radius: string;
    }
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, altText, border= {} }) => {

    const {
        topLeft = false,
        topRight = false,
        bottomRight = false,
        radius = '',
        width = '40',
    } = border;

    const styles = {
        imageSection: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
        } as React.CSSProperties,
        imageWrapper: {
            borderWidth: width,
            borderStyle: 'solid',
            borderColor: '#c2a75d',
            borderRadius: '10px',
            borderTopLeftRadius: topLeft ? radius: '0',
            borderBottomRightRadius: bottomRight ? radius: '0',
            borderTopRightRadius: topRight ? radius: '0',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
            maxHeight: '100%',
            aspectRatio: '3 / 3',
            backgroundColor: '#fff',
        } as React.CSSProperties,
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
        } as React.CSSProperties,
    };

    return (
        <div style={styles.imageSection}>
            <div className="flex">
                <div style={styles.imageWrapper}>
                    {/*<Image*/}
                    {/*    src={'/image-1.jpg'}*/}
                    {/*    alt={altText}*/}
                    {/*    style={styles.image}*/}
                    {/*    layout="fill" // Automatically fills the parent container*/}
                    {/*    objectFit="cover" // Ensures the image covers the wrapper*/}
                    {/*    priority // Ensures the image is loaded immediately (optional)*/}
                    {/*/>*/}
                    <img style={styles.image} src={imageUrl} alt={altText}/>
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
