import axios from 'axios'
const url = 'http://localhost:3001/tasks/'

export const getTasks = async onlyCompleted => {
    const { data } = await axios.get(`${url}?completed=${onlyCompleted}`)
    return data
}

export const createTask = async ({ description, title }) => {
    const { data } = await axios.post(url, { description, title })
    return data
}

export const updateTask = async ({ description, title, id, completed }) => {
    const { data } = await axios.put(url, { description, title, id, completed })
    return data
}

