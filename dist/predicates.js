"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isImageData = (imageData) => {
    if (!imageData)
        return false;
    if (typeof imageData.width !== 'number')
        return false;
    if (typeof imageData.height !== 'number')
        return false;
    if (imageData.width < 1)
        return false;
    if (imageData.height < 1)
        return false;
    if (!Number.isInteger(imageData.width))
        return false;
    if (!Number.isInteger(imageData.height))
        return false;
    if (!(imageData.data instanceof Uint8ClampedArray))
        return false;
    if (imageData.data.length !== imageData.width * imageData.height * 4)
        return false;
    return true;
};
exports.isGrayData = (grayData) => {
    if (!grayData)
        return false;
    if (typeof grayData.width !== 'number')
        return false;
    if (typeof grayData.height !== 'number')
        return false;
    if (grayData.width < 1)
        return false;
    if (grayData.height < 1)
        return false;
    if (!Number.isInteger(grayData.width))
        return false;
    if (!Number.isInteger(grayData.height))
        return false;
    if (!(grayData.data instanceof Uint8ClampedArray))
        return false;
    if (grayData.data.length !== grayData.width * grayData.height)
        return false;
    return true;
};
//# sourceMappingURL=predicates.js.map