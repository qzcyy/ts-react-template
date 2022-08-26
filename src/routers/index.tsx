import Login from '../views/login'
import Home from '../views/home'
import {Navigate} from 'react-router-dom'

export const createRouter = (premission?: string) => {
    return [
        {
            path: 'home',
            element: <Home/>
        },
        {
            path: '*',
            element: <Navigate to={'home'}/>
        }
    ]
}


export default {}