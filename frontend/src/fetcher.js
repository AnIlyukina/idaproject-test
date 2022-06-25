const baseUrl = 'http://localhost:3000/'

export const getProducts = () => {
    return fetch(`${baseUrl}`)
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
    return fetch(`${baseUrl}?id=${id}`)
}
