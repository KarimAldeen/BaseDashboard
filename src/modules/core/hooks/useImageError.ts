import React from 'react'

const useImageError = ({currentTarget}:any) => {
    const ErrorImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png"
    currentTarget.onerror = null;
    currentTarget.src=`${ErrorImage}`;
}

export default useImageError