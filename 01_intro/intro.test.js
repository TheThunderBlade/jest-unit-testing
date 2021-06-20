const {sum, nativeNull} = require('./intro')

describe('Sum  func', () => {
    test('should return sum of two values', () => {
        expect(sum(2, 2)).toBe(4)
        expect(sum(2, 2)).toEqual(4)
    })

    test('should return value correctly comparing to other', () => {
        expect(sum(2, 2)).toBeGreaterThan(0)
        expect(sum(2, 2)).toBeGreaterThanOrEqual(4)
        // ... Less ...OrEqual
    })

    test('should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})

describe('NativeNull func', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy()
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})
