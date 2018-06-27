import base64Img from 'base64-img';

export const imgToBase64 = (imagePath) => {
    
    const result = base64Img.base64Sync(imagePath);

    return result;

};
