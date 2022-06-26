const baseUrl = 'http://localhost:3000/'

export const getProducts = () => {
    console.log(baseUrl)
    return fetch('http://localhost:3000/')
}

export const createProduct = (product) => {
    return fetch(`${baseUrl}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
        method: 'POST'
        
    })
}

export const deleteProduct = (id) => {
    return fetch(`${baseUrl}${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'DELETE'
    })
}
