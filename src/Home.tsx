import * as React from 'react';
import {Jumbotron, Button, Container} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return(
            <Container>
                <Jumbotron fluid={false}>
                    <h1 className="display-3">Ćao!</h1>
                    <p className="lead">
                        Jednostavan sajt
                        za aplikaciju koju sam napravio
                        spojeći Javu i React.
                        <br />
                        Nadam se da ce vam se svideti &#9786;
                    </p>
                    <hr className="my-2" />
                    <p>
                        Osnovna CRUD aplikacija koja se bavi pivom!
                    </p>
                    <p className="lead">
                        <Link to="/application"><Button outline={true} color="info" size="lg">Vise</Button></Link>
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}