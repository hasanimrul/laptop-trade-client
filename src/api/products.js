// Add a product
export const addProduct = async productData => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/products`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(productData),
    })

    const data = await response.json()
    return data
}