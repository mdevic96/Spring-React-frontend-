import * as React from 'react';
import BeerList from './BeerList';

export default class Application extends React.Component {
    render() {
        return (
          <div>
            <BeerList />
          </div>
        );
    }
}