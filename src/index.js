import AccountSetup from './components/accountSetup';
import SocialProfiles from './components/socialProfiles';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

ReactDom.render((
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/" exact component={AccountSetup}/>
                <Route path="/socialProfiles" exact component={SocialProfiles}/>
            </div>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));
