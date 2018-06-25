import base64Img from 'base64-img';

export const imgToBase64 = async (imagePath) => {

    var result = "hello";

    await base64Img.base64(imagePath, async function(err, data) {
        resutl = await data;
    });

    return result;

};
