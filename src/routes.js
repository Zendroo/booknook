import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './home.js';
import Cadastro from './cadastro';
import Main from './main';


function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<Cadastro />} path="/cadastro"/>
                <Route element={<Main />} path="/recomendados"/>
            </Routes>
        </BrowserRouter>
    )
}

export default routes;