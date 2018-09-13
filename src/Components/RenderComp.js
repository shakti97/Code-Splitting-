import React from 'react';
import { Route,Switch} from "react-router-dom";



import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Clock1 = Loadable({
  loader: () => import('./Clock'),
  loading: Loading,
});

const Details1 = Loadable({
  loader: () => import('./Details'),
  loading: Loading,
});

const Information1= Loadable({
    loader : () => import('./Information'),
    loading : Loading,
});


const RenderComp =()=>{
    console.log('hey i m in Render Component');
    return (
        <div className='Component'>            
            <Switch >
                <Route exact path='/' component={Clock1}/>
                <Route path='/Information'  component={Information1}/>
                <Route path='/Details' component={Details1}/>
            </Switch>
        </div>

    )
}
export default RenderComp; 