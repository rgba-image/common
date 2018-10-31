export const rgbaToUint32 = ( r: number, g: number, b: number, a: number, isBigEndian = false ) =>
  isBigEndian ?
    ( r << 24 ) | ( g << 16 ) | ( b << 8 ) | a :
    ( a << 24 ) | ( b << 16 ) | ( g << 8 ) | r