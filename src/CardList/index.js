import React from 'react';
import { Card } from '../Card';
import '../App.css';


export class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'name',
    };
  }
  render () {
    const { orderBy } = this.state;
    const { citiesList } = this.props;
    return (
      <>
        <select className="Select" value={orderBy}>
          <option value="name"> By name </option>
          <option value="temp"> By temperature </option>
        </select>

        <div className="CardList">
        {
          citiesList.map(city => {
            return (
              <Card key={city} city={city} />
)})
        }
      </div>
      </>
    )
  }
}



