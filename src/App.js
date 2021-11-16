import React, { useEffect, useState } from 'react'
import './styles/global.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import FlyingText from './components/FlyingText'
import MainPage from './components/MainPage'
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom'
import Connect from './pages/Connect';
import Portfolio from './pages/Portfolio';
import Design from './pages/Design';
import Development from './pages/Development';

const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

const App = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
        });
        AOS.refresh();
    }, []);

    return (
        <Router>
            {/* <FlyingText/> */}
            <Switch>
                {/* <ScrollToTop> */}
                    <Route exact path="/" component={FlyingText} />
                    <Route exact path="/connect" component={Connect} />
                    <Route exact path="/home">
                        <MainPage setIndex={setIndex} index={index} />
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio index={index} />
                    </Route>
                    <Route exact path="/design" component={Design} />
                    <Route exact path="/development" component={Development} />
                {/* </ScrollToTop> */}
            </Switch>
        </Router>
    )
}

export default App
