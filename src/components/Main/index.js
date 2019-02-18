import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Series from '../../containers/series';
import SingleSeries from '../../containers/SingleSeries';
import PersonDetails from '../../containers/PersonDetails';

const Main = props => (
    <Switch>
        <Route exact path = '/' component = {Series} />
        <Route path = '/series/:id' component = {SingleSeries} />
        <Route path = '/personDetails' component = {PersonDetails} />
    </Switch>
);

export default Main;