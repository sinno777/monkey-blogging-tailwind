import Overlay from 'components/layout/Overlay';
import React from 'react';

const PostImage = ({ classContainer = '', classImg = '', srcSet = '/laptop-img.jpg 2x', typeDirection, imageFull }) => {
    return (
        <div className={` relative ${classContainer}`}>
            <Overlay></Overlay>
            <img
                srcSet={srcSet} alt=""
                className={`w-full object-cover 
                ${typeDirection === 'col' ? `${imageFull ? 'h-full' : 'h-[200px]'}` : 'h-full'} rounded-xl ${classImg}`} />
        </div>
    );
};

export default PostImage;