import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ListProductPage from './pages/ListProductPage/ListProductPage';
import ProductactionPage from './pages/ProductActionPage/ProductActionPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/productlist',
        exact: true,
        main: () => <ListProductPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductactionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductactionPage history={history} match={match}/>
    },
    {
        path: '*',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;