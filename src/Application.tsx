import * as React from 'react';
import BeerList from './BeerList';
import AddNewBeerButtonComponent from './AddNewBeerButtonComponent';

export default class Application extends React.Component {
    render() {
        return (
          <div>
            <AddNewBeerButtonComponent />
            <BeerList />
          </div>
        );
    }
}