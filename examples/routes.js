export default [
    {
        path: '/icon',
        component: (resolve) => require(['./routers/icon'], resolve)
    },
    {
        path: '/spin',
        component: (resolve) => require(['./routers/spin'], resolve)
    },
    {
        path: '/button',
        component: (resolve) => require(['./routers/button'], resolve)
    },
    {
        path: '/gird',
        component: (resolve) => require(['./routers/gird'], resolve)
    },
    {
        path: '/layout',
        component: (resolve) => require(['./routers/layout'], resolve)
    },
    {
        path: '/tooltip',
        component: (resolve) => require(['./routers/tooltip'], resolve)
    },
    {
        path: '/switch',
        component: (resolve) => require(['./routers/switch'], resolve)
    },
    {
        path: '/popover',
        component: (resolve) => require(['./routers/popover'], resolve)
    },
    {
        path: '/modal',
        component: (resolve) => require(['./routers/modal'], resolve)
    },
    {
        path: '/form',
        component: (resolve) => require(['./routers/form'], resolve)
    },
    {
        path: '/input',
        component: (resolve) => require(['./routers/input'], resolve)
    }
];
