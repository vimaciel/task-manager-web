import axios from 'axios'
const url = 'http://localhost:3001/tasks/'

export async function getTasks(onlyCompleted) {
    const { data } = await axios.get(`${url}?completed=${onlyCompleted}`)
    return data
}
