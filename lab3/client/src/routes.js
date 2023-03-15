import { ADMIN_ROUTE, BASKET_ROUTE, DISH_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MENU_ROUTE, ORDERS_ROUTE } from "./utils/consts"
import DishPage from './pages/DishPage';
import Auth from "./pages/Auth";
import Menu from './pages/Menu';
import Admin from "./pages/AdminPanel";
import Basket from "./pages/Basket";
import Orders from "./pages/Orders";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }, 
    {
        path: BASKET_ROUTE,
        Component: Basket 
    }, 
    {
        path: ORDERS_ROUTE,
        Component: Orders
    }
]

export const publicRoutes = [
    {
        path: MENU_ROUTE,
        Component: Menu 
    }, 
    {
        path: LOGIN_ROUTE,
        Component: Auth 
    }, 
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }, 
    {
        path: DISH_ROUTE + '/:id',
        Component: DishPage
    }, 
]