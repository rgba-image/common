"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBigEndian = () => {
    const array = new Uint8Array(4);
    const view = new Uint32Array(array.buffer);
    return !((view[0] = 1) & array[0]);
};
exports.isBigEndian = getBigEndian();
//# sourceMappingURL=is-big-endian.js.map