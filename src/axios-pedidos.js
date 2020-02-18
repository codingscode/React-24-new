import axios from 'axios'

const instancia = axios.create({
    baseURL: 'https://react-meu-burger.firebaseio.com/'
})

export default instancia