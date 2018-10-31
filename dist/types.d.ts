export declare type CreateImage = (width: number, height: number, data?: Uint8ClampedArray) => ImageData;
export declare type SourceToDest = (source: ImageData, dest: ImageData, sx?: number, sy?: number, sw?: number, sh?: number, dx?: number, dy?: number, dw?: number, dh?: number) => void;
export declare type Mutate = (dest: ImageData, dx?: number, dy?: number, dw?: number, dh?: number) => void;
export declare type MutateColor = (dest: ImageData, color: Iterable<number>, dx?: number, dy?: number, dw?: number, dh?: number) => void;
