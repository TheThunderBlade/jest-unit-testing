const axios = require("axios");

class Ajax {
    echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('error'))
                }
            }, 20)
        })
    }

    async get() {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
            return res.data
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new Ajax()