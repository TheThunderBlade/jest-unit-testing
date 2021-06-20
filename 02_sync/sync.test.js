const Lodash = require('./sync')

let _ = new Lodash()

describe('Lodash - compact', () => {
    let array

    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'Hello']
    })

    afterAll(() => {
        _ = new Lodash()
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined()
        expect(_.compact).not.toBeUndefined()
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, 'Hello']
        // expect(_.compact(array)).toBe(result) не сработает. Только для примитивов
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(null)
    })
})

describe('Lodash - groupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 0.3, 3.1, 5.0002]
        const result = {
            0: [0.3],
            2: [2.2,2.4],
            3: [3.1],
            4: [4.2],
            5: [5.0002]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})