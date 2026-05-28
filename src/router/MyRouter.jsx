import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"

import { ProductPage } from "../pages/ProductPage"

export const MyRouter = () => (

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/producto/:id" element={<ProductPage/>} />
        </Routes>
    </BrowserRouter>
)
