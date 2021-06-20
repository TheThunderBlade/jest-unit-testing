function expect(value){
    return{
        toBe: exp => {
            if(value === exp){
                console.log('Success')
            }else {
                console.error(`Value if ${value}, but exp is ${exp}`)
            }
        }
    }
}

const sum = (a,b) => a + b

const nativeNull = () => null

module.exports = {sum, nativeNull}

// expect(sum(1,1)).toBe(12)