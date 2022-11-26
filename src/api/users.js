// post user
export const saveUser = async (name, email, role) => {
    const user = { name, email, role }
    await fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            console.log('save user', data)
        })
}
//  get all users

export const getAllUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/users`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        })
    const users = await response.json()
    return users
}

// get single user role
export const getRole = async email => {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/${email}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
    const user = await response.json()
    return user?.role
}


