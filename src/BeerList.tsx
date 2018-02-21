import * as React from 'react';
import axios from 'axios';
import { Card, CardText, Button, CardHeader, CardBody } from 'reactstrap';
import AddNewBeerButtonComponent from './AddNewBeerButtonComponent';

export default class BeerList extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            beers: [],
            isLoading: false
        };

        this.handleDelete.bind(this);
        this.getBeers.bind(this);
    }

    handleDelete(beer: any) {
        axios.post('http://localhost:8080/beers/delete', beer)
        .then(() => this.getBeers());
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.getBeers();
    }

    getBeers() {
        axios.get('http://localhost:8080/beers/fetch-all')
            .then(data => this.setState({beers: data.data, isLoading: false}));
    }

    render() {
        if (this.state.isLoading) {
            return <h2>Loading...</h2>;
        }

        const beers = this.state.beers;

        return(
            <div>
                <AddNewBeerButtonComponent onAdd={this.getBeers()}/>
                {beers.map((beer: any) =>
                    <Card key={beer.id} style={{marginBottom: 10, marginTop: 20}}>
                        <CardHeader>{beer.name}</CardHeader>
                        <CardBody>
                            <CardText>{beer.description}</CardText>
                            <Button onClick={() => this.handleDelete(beer)} outline={true} color="danger" style={{marginRight: 10}}>Delete</Button>
                            <Button outline={true} color="info">Change</Button>
                        </CardBody>
                    </Card>
                    )}
            </div>
        );
    }

}