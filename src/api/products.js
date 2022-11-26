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

// get filtered products for buyer

export const getProducts = async email => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/products/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }
    )
    const data = await response.json()
    return data
}