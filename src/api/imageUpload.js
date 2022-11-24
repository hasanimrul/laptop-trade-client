export const imageUpload = async image => {
    console.log(image)
    if (image) {
        const formData = new FormData()
        formData.append('image', image)
        const url = 'https://api.imgbb.com/1/upload?key=be0b0d03b8c433d78d3a37f669938581'

        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        })
        const data = await response.json()
        return data
    }
}