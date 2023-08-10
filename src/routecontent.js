import React from "react";
import {Routes,Route} from 'react-router-dom';
import Update from "./components/update";
import Delete from "./components/delete";
import Read from "./components/read";
import Create from "./components/create";
import Home from "./components/home";
export default function Reactcontent()
{
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/update" element={<Update/>}></Route>
            <Route path="/delete" element={<Delete/>}></Route>
            <Route path="/read" element={<Read/>}></Route>
        </Routes>
    )
}