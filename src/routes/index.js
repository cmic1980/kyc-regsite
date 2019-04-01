import Home from '@/views/Home'
import E404 from '@/views/404'

// 根目录
const rootPath = '';

// 页面路由
const routes = [
    {path: '', redirect: {name: 'home'}},
    {path: '/home', component: Home, name: 'home'}
].map(route => {
    route.path = rootPath + route.path;
    return route;
});

// 404 页
routes.push({path: '*', component: E404, name: '404'});

export default routes;
