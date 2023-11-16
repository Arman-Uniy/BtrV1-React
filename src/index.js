import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import VolleyRandom from './views/volley-random'
import SuperStreetFighterIITurboRevival from './views/super-street-fighter-ii-turbo-revival'
import BasketballRandom from './views/basketball-random'
import Page from './views/page'
import Sm64 from './views/sm64'
import Fnaf1 from './views/fnaf1'
import GettingOverIt from './views/getting-over-it'
import SoccerRandom from './views/soccer-random'
import Emujsv3 from './views/emujsv3'
import RiseUp from './views/rise-up'
import Fnaf4 from './views/fnaf4'
import Kahoot from './views/kahoot'
import BasketballStarts from './views/basketball-starts'
import Fnaf2 from './views/fnaf2'
import FnafCustom from './views/fnaf-custom'
import RetroBowl from './views/retro-bowl'
import MonkeyMart from './views/monkey-mart'
import MadnessHydraulic from './views/madness-hydraulic'
import StickmanHook from './views/stickman-hook'
import Home from './views/home'
import Test from './views/test'
import PaperAirplane from './views/paper-airplane'
import BoxinRandom from './views/boxin-random'
import Fnaf3 from './views/fnaf3'
import Page2 from './views/page-2'
import DriveMad from './views/drive-mad'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={VolleyRandom} exact path="/volley-random" />
        <Route
          component={SuperStreetFighterIITurboRevival}
          exact
          path="/getting-over-it14"
        />
        <Route component={BasketballRandom} exact path="/basketball-random" />
        <Route component={Page} path="**" />
        <Route component={Sm64} exact path="/sm64" />
        <Route component={Fnaf1} exact path="/fnaf1" />
        <Route component={GettingOverIt} exact path="/getting-over-it1" />
        <Route component={SoccerRandom} exact path="/soccer-random" />
        <Route component={Emujsv3} exact path="/getting-over-it11" />
        <Route component={RiseUp} exact path="/rise-up" />
        <Route component={Fnaf4} exact path="/fnaf4" />
        <Route component={Kahoot} exact path="/k" />
        <Route component={BasketballStarts} exact path="/basketball-starts" />
        <Route component={Fnaf2} exact path="/fnaf2" />
        <Route component={FnafCustom} exact path="/fnaf-custom" />
        <Route component={RetroBowl} exact path="/getting-over-it12" />
        <Route component={MonkeyMart} exact path="/monkey-mart1" />
        <Route component={MadnessHydraulic} exact path="/madness-hydraulic" />
        <Route component={StickmanHook} exact path="/stickman-hook" />
        <Route component={Home} exact path="/" />
        <Route component={Test} exact path="/test" />
        <Route component={PaperAirplane} exact path="/getting-over-it13" />
        <Route component={BoxinRandom} exact path="/boxin-random" />
        <Route component={Fnaf3} exact path="/fnaf3" />
        <Route component={Page2} exact path="/page-2" />
        <Route component={DriveMad} exact path="/drive-mad" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
