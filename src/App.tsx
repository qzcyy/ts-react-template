import React, {FC} from 'react';
import {HashRouter, useRoutes} from "react-router-dom";
import {Button} from 'antd';
import './styles/App.css';
import 'antd/dist/antd.less'
import {createRouter} from './routers'
import Menu from './components/Menu/index'

const RouteElement = () => {
    const element = useRoutes(createRouter())
    return element
}
const App: FC = () => (
    <div>
        <div>
            <Menu></Menu>
        </div>
        <div>
            <HashRouter>
                <RouteElement/>
            </HashRouter>
        </div>
    </div>


);

export default App;
