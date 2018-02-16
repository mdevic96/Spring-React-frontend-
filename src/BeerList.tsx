import * as React from 'react';
import './App.css';
import { Card, CardText, Button, CardHeader, CardBody } from 'reactstrap';

export default class BeerList extends React.Component<{}, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            beers: [],
            isLoading: false
        };

        this.handleDelete.bind(this);
    }

    handleDelete(id: any) {
        fetch('http://localhost:8080/beers/' + id, {
            method: 'delete'
        })
        .then(response => response.json());
    }

    componentDidMount() {
        this.setState({isLoading: this.state.isLoading});

        fetch('http://localhost:8080/beers')
            .then(response => response.json())
            .then(data => this.setState({beers: data, isLoading: false}));
    }

    render() {
        const beers = this.state.beers;
        const isLoading = this.state.isLoading;

        if (isLoading) {
            return <h2>Loading...</h2>;
        }

        return(
            <div>
                {beers.map((beer: any) => 
                    <Card key={beer.id} style={{marginBottom: 10, marginTop: 20}}>
                        <CardHeader>{beer.name}</CardHeader>
                        <CardBody>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button onClick={() => this.handleDelete(beer.id)} outline={true} color="danger" style={{marginRight: 10}}>Delete</Button>
                            <Button outline={true} color="info">Change</Button>
                        </CardBody>
                    </Card>
                    )}
            </div>
        );
    }

}