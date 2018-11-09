"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const __1 = require("../");
const predicates_1 = require("../predicates");
describe('common', () => {
    it('gets index', () => {
        const index = __1.getIndex(3, 5, 7);
        assert.strictEqual(index, 152);
    });
    it('isImageData', () => {
        const width = 5;
        const height = 7;
        const data = new Uint8ClampedArray(width * height * 4);
        const empty = new Uint8ClampedArray();
        const pass = { width, height, data };
        assert(__1.isImageData(pass));
        assert(!__1.isImageData(null));
        assert(!__1.isImageData({ width: '0', height, data }));
        assert(!__1.isImageData({ width, height: '0', data }));
        assert(!__1.isImageData({ width: 0, height, data }));
        assert(!__1.isImageData({ width, height: 0, data }));
        assert(!__1.isImageData({ width: 1.1, height, data }));
        assert(!__1.isImageData({ width, height: 1.1, data }));
        assert(!__1.isImageData({ width, height, data: null }));
        assert(!__1.isImageData({ width, height, data: empty }));
    });
    it('isGrayData', () => {
        const width = 5;
        const height = 7;
        const data = new Uint8ClampedArray(width * height);
        const empty = new Uint8ClampedArray();
        const pass = { width, height, data };
        assert(predicates_1.isGrayData(pass));
        assert(!predicates_1.isGrayData(null));
        assert(!predicates_1.isGrayData({ width: '0', height, data }));
        assert(!predicates_1.isGrayData({ width, height: '0', data }));
        assert(!predicates_1.isGrayData({ width: 0, height, data }));
        assert(!predicates_1.isGrayData({ width, height: 0, data }));
        assert(!predicates_1.isGrayData({ width: 1.1, height, data }));
        assert(!predicates_1.isGrayData({ width, height: 1.1, data }));
        assert(!predicates_1.isGrayData({ width, height, data: null }));
        assert(!predicates_1.isGrayData({ width, height, data: empty }));
    });
    it('rgbaToUint32', () => {
        const r = 51;
        const g = 153;
        const b = 255;
        const a = 127;
        const rgba = new Uint8ClampedArray([r, g, b, a]);
        const view = new DataView(rgba.buffer);
        const little = view.getUint32(0, true);
        const big = view.getUint32(0);
        assert.strictEqual(__1.rgbaToUint32(r, g, b, a, true), little);
        assert.strictEqual(__1.rgbaToUint32(r, g, b, a), big);
    });
    it('rgbaToUint32', () => {
        const r = 51;
        const g = 153;
        const b = 255;
        const a = 127;
        const rgba = [r, g, b, a];
        const uint32Little = __1.rgbaToUint32(r, g, b, a, true);
        const uint32Big = __1.rgbaToUint32(r, g, b, a, false);
        const little = __1.uint32ToRgba(uint32Little, true);
        const big = __1.uint32ToRgba(uint32Big);
        assert.deepEqual(little, rgba);
        assert.deepEqual(big, rgba);
    });
});
//# sourceMappingURL=index.js.map