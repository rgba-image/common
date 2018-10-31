export const isImageData = ( imageData: any ): imageData is ImageData => {
  if ( !imageData ) return false
  if ( typeof imageData.width !== 'number' ) return false
  if ( typeof imageData.height !== 'number' ) return false
  if ( imageData.width < 1 ) return false
  if ( imageData.height < 1 ) return false
  if ( !Number.isInteger( imageData.width ) ) return false
  if ( !Number.isInteger( imageData.height ) ) return false
  if ( !( imageData.data instanceof Uint8ClampedArray ) ) return false
  if ( imageData.data.length !== imageData.width * imageData.height * 4 ) return false

  return true
}
