const signin = (email, password) => {
    return fetch('http://127.0.0.1:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email, password
        })
    })
}

const getUserProfile = (token) => {
    return fetch('http://127.0.0.1:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
}

const setUserProfile = (firstName, lastName, token) => {
    return fetch('http://127.0.0.1:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            firstName, lastName
        })
    })
}

export {
    signin,
    getUserProfile,
    setUserProfile,
}