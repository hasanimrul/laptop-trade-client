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

// delete a product

export const deleteProduct = async id => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/product/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
        },
    })
    const result = await response.json()
    return result
}

// store booked products
export const productBooking = async productData => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/booking`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(productData),
    })

    const data = await response.json()
    return data
}

// get booked products by email
export const getBookedProducts = async email => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
    const data = await response.json()
    return data
}

// get single product 

export const getSingleBookings = async id => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/bookings/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
    const data = await response.json()
    return data
}