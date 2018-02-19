import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import Home from './Home';
import { HashRouter, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import Application from './Application';

export default class Main extends React.Component {
    render() {
        return(
            <HashRouter>
                <Container fluid={false}>
                <Navbar color="faded" light={true}>
                    <NavbarBrand href="/">Beer App</NavbarBrand>
                        <Nav className="ml-auto">
                            <NavItem>
                                <NavLink to="/application"><Button>Aplikacija</Button></NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
                    <div className="content">
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/application" component={Application} />
                    </div>
            </Container>
            </HashRouter>
        );
    }
}