
import {ADMIN_ROUTE, CAR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LIST_ROUTE,RUNS_ROUTE} from "./utils/consts";
// import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import CarPage from "./pages/CarPage";
import Admin from "./pages/Admin";
import MyRuns from "./pages/MyRuns";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: RUNS_ROUTE,
        Component: MyRuns
    }
]

export const publicRoutes = [
    {
        path: LIST_ROUTE,
        Component: Shop
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
        path: CAR_ROUTE + '/:id',
        Component: CarPage
    },
]
