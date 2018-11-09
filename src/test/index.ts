import * as assert from 'assert'
import { getIndex, isImageData, rgbaToUint32, uint32ToRgba } from '../'
import { isGrayData } from '../predicates';

describe( 'common', () => {
  it( 'gets index', () => {
    const index = getIndex( 3, 5, 7 )

    assert.strictEqual( index, 152 )
  } )

  it( 'isImageData', () => {
    const width = 5
    const height = 7
    const data = new Uint8ClampedArray( width * height * 4 )
    const empty = new Uint8ClampedArray()

    const pass = { width, height, data }

    assert( isImageData( pass ) )

    assert( !isImageData( null ) )
    assert( !isImageData( { width: '0', height, data } ) )
    assert( !isImageData( { width, height: '0', data } ) )
    assert( !isImageData( { width: 0, height, data } ) )
    assert( !isImageData( { width, height: 0, data } ) )
    assert( !isImageData( { width: 1.1, height, data } ) )
    assert( !isImageData( { width, height: 1.1, data } ) )
    assert( !isImageData( { width, height, data: null } ) )
    assert( !isImageData( { width, height, data: empty } ) )
  })

  it( 'isGrayData', () => {
    const width = 5
    const height = 7
    const data = new Uint8ClampedArray( width * height )
    const empty = new Uint8ClampedArray()

    const pass = { width, height, data }

    assert( isGrayData( pass ) )

    assert( !isGrayData( null ) )
    assert( !isGrayData( { width: '0', height, data } ) )
    assert( !isGrayData( { width, height: '0', data } ) )
    assert( !isGrayData( { width: 0, height, data } ) )
    assert( !isGrayData( { width, height: 0, data } ) )
    assert( !isGrayData( { width: 1.1, height, data } ) )
    assert( !isGrayData( { width, height: 1.1, data } ) )
    assert( !isGrayData( { width, height, data: null } ) )
    assert( !isGrayData( { width, height, data: empty } ) )
  } )

  it( 'rgbaToUint32', () => {
    const r = 51
    const g = 153
    const b = 255
    const a = 127

    const rgba = new Uint8ClampedArray([ r, g, b, a ])
    const view = new DataView( rgba.buffer )
    const little = view.getUint32( 0, true )
    const big = view.getUint32( 0 )

    assert.strictEqual( rgbaToUint32( r, g, b, a, true ), little )
    assert.strictEqual( rgbaToUint32( r, g, b, a ), big )
  })

  it( 'rgbaToUint32', () => {
    const r = 51
    const g = 153
    const b = 255
    const a = 127
    const rgba = [ r, g, b, a ]

    const uint32Little = rgbaToUint32( r, g, b, a, true )
    const uint32Big = rgbaToUint32( r, g, b, a, false )

    const little = uint32ToRgba( uint32Little, true )
    const big = uint32ToRgba( uint32Big )

    assert.deepEqual( little, rgba )
    assert.deepEqual( big, rgba )
  } )
})
