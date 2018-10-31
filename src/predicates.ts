export const isImageData = ( imageData: any ): imageData is ImageData =>
  imageData &&
  typeof imageData.width === 'number' &&
  typeof imageData.height === 'number' &&
  imageData.data instanceof Uint8ClampedArray &&
  imageData.data.length === imageData.width * imageData.height * 4
