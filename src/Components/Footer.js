import React from 'react';
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div style = {{height: '10%', width : '100%', backgroundColor : 'red', position : "fixed", bottom: 0, }}>
            <ul>
                <li>
                    <Link to="/map">MAP</Link>
                </li>
            </ul>
        </div>
    )
}