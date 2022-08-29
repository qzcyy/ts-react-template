import Login from '../views/login'
import Home from '../views/home'
import Home1 from '../views/home1'
import {Navigate} from 'react-router-dom'

export const routerConfig:APP.RouterConfig[] = [
    {
        path: 'home',
        element: <Home/>,
        name:'主页',
        showMenu:true,
        showBreadcrumb:true
    },
    {
        path: 'my1',
        element: <Home1/>,
        name:'我的空间',
        showMenu:true
    },
    {
        path: 'my12',
        element: <Home/>,
        name:'我的空间2',
        showMenu:true
    },
    {
        path: 'my13',
        element: <Home/>,
        name:'我的空间3',
        showMenu:true
    },
    {
        path: '*',
        element: <Navigate to={'home'}/>
    }
]
export const createRouter = (premission?: string) => {
    return routerConfig
}


export default {}