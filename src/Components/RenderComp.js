import React from 'react';
import { Route,Switch} from "react-router-dom";
import Clock from './Clock';
import Information from './Information';
import Details from './Details';





const RenderComp =()=>{
    console.log('hey i m in Render Component');
    return (
        <div className='Component'>            
            <Switch >
                <Route exact path='/' component={Clock}/>
                <Route path='/Information'  component={Information}/>
                <Route path='/Details' component={Details}/>
            </Switch>
        </div>

    )
}
export default RenderComp; 