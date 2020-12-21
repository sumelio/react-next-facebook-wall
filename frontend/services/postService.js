
const URL = 'http://18.228.137.80:8200/v1/facebook-wall-backend/api/post'

export const createPost = async ({data}) => {
  try {
    const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
    const body = await response.json()
    return body
  } catch (error) {
    if (error.name !== 'AbortError') {
        throw error
      }
  }
  return null
}

export const updatePost = async ({_id, data}) => {
  try {
    const response = await fetch(`${URL}/${_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({_id, ...data}),
      })
    const body = await response.json()
    return body
  } catch (error) {
    if (error.name !== 'AbortError') {
        throw error
      }
  }
  return null
}

export const deletePost = async ({_id}) => {
  try {
    const response = await fetch(`${URL}/${_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    const body = await response.json()
    return body
  } catch (error) {
    if (error.name !== 'AbortError') {
        throw error
      }
  }
  return null
}

export const getAllPost = async ({userId}) => {
  try {
    console.log('`${URL}/user/${userId}`', `${URL}/user/${userId}`)
    const response = await fetch(`${URL}/user/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      })
    const body = await response.json()
    return body
  } catch (error) {
    if (error.name !== 'AbortError') {
        throw error
      }
  }
  return null
}