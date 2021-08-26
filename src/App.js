import React ,{useEffect}from 'react'
import './styles/global.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import FlyingText from './components/FlyingText'
import MainPage from './components/MainPage'
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import Connect from './pages/Connect';
import Portfolio from './pages/Portfolio';
import Design from './pages/Design';
import Development from './pages/Development';
const App = () => {
    useEffect(() => {
        AOS.init({
            offset:300,
           duration:1000,
        });
        AOS.refresh();
      }, []);

    return (
        <Router>
            {/* <FlyingText/> */}
            <Switch>
            <Route exact path="/" component={FlyingText}/>
            <Route exact path="/home" component={MainPage}/>
            <Route exact path="/connect" component={Connect}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/design" component={Design}/>
            <Route exact path="/development" component={Development}/>
            </Switch>
        </Router>
    )
}

export default App
