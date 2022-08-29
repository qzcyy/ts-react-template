declare namespace APP{
    interface AppState{
        currentRouterConfig:RouterConfig
    }
    type RouterConfig={
        path:string,
        element?:ReactElement,
        name?:string,
        showMenu?:boolean,
        showBreadcrumb?:boolean
    }
}
