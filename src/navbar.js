import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar()
{
    return<nav>
        <ul>
            <li>
            <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/create"}>Create Form</Link>
            </li>
            <li>
                <Link to={"/read"}>Read</Link>
            </li>
            <li>
            <Link to={"/update"}>Update</Link>
            </li>
            <li>
            <Link to={"/delete"}>Delete</Link>
            </li>
        </ul>
    </nav>
}