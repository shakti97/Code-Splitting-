import React from 'react';
import {Link} from 'react-router-dom';

const AboutUs=(props)=>{
        return(
            <div>
            <input type="text" name='title' onChange={props.Change}/>
            <h5>Hi  {props.title} </h5>
            <p>{props.children}</p>
            
            <ul>
                <li>
                    <Link to='/Details'>Details</Link>
                </li>
                <br/>
                <li>
                    <Link to='/Information'>Information</Link>
                </li>
                <br/>
                <li>
                    <Link to='/'>Clock</Link>
                </li>
            </ul>
            
            </div>
        )
    }
export default AboutUs;