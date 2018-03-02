import * as React from 'react';
import { Card, CardText, Button, CardHeader, CardBody } from 'reactstrap';
import axios from 'axios';
import AddNewBeerButtonComponent from './AddNewBeerButtonComponent';
import AlertComponent from './AlertComponent';
import ChangeButtonComponent from './ChangeButtonComponent';

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
        const { beers, isLoading } = this.state;

        if (isLoading) {
            return (
                <div>
                    <img src="https://media.giphy.com/media/rcwkj93o4L9As/giphy.gif" />
                </div>);
        }

        return(
            <div>
                <AddNewBeerButtonComponent onAdd={() => this.getBeers()} />

                {beers.length < 1 && <AlertComponent />}
                
                {beers.length > 0 && beers.map((beer: any) => 
                    <Card key={beer.id} style={{marginBottom: 10, marginTop: 20}}>
                        <CardHeader>{beer.name}</CardHeader>
                        <CardBody>
                            <CardText>{beer.description}</CardText>
                            <Button onClick={() => this.handleDelete(beer)} color="danger" style={{marginRight: 10, marginBottom: 10}}>Delete</Button>
                            <ChangeButtonComponent onChangeF={() => this.getBeers()} />
                        </CardBody>
                    </Card>
                    )}
            </div>
        );
    }

}