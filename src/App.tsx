import React, {FC, useEffect} from 'react';
import {HashRouter, useLocation, useRoutes} from "react-router-dom";
import {Button} from 'antd';
import './styles/App.css';
import 'antd/dist/antd.less'
import {createRouter, routerConfig} from './routers'
import {setCurrentRouterConfig} from './store/features/app'
import Menu from './components/Menu/index'
import {useSelector, useDispatch} from "react-redux";
import {RootState} from "./store";

const RouteElement = () => {
    const element = useRoutes(createRouter())
    const location = useLocation()
    const dispatch = useDispatch();
    const {currentRouterConfig} = useSelector((state:RootState) => state.app)
    useEffect(()=>{
        const currentLocationConfig = routerConfig.find((item) => {
            return location.pathname === '/' + item.path
        })
        if (currentLocationConfig && currentLocationConfig.path !== currentRouterConfig.path) {
            dispatch(setCurrentRouterConfig({
                path: currentLocationConfig.path,
                name: currentLocationConfig.name,
                showMenu: currentLocationConfig.showMenu,
                showBreadcrumb: currentLocationConfig.showBreadcrumb
            }))
        }
    })
    return element
}
const App: FC = () => {
    const {currentRouterConfig} = useSelector((state: any) => state.app)
    const showBreadcrumb=currentRouterConfig?.showBreadcrumb
    return (
        <div className='mainContainer'>
            <HashRouter>
                <div className='menuContainer'>
                    <Menu></Menu>
                </div>
                <div className='contentContainer'>
                    <div className="contentHeader"></div>
                    {showBreadcrumb&&<div className="breadcrumb"></div>}
                    <RouteElement/>
                </div>
            </HashRouter>
        </div>
    );
}

export default App;
