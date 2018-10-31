"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToUint32 = (r, g, b, a, isLittleEndian = false) => isLittleEndian ?
    (a << 24) | (b << 16) | (g << 8) | r :
    (r << 24) | (g << 16) | (b << 8) | a;
//# sourceMappingURL=rgba-to-uint32.js.map