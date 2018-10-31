import * as assert from 'assert'
import { getIndex, isImageData, rgbaToUint32 } from '../'

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
})
