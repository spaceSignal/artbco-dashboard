 // Packages import
import React from 'react';
// Components import
import Card from '../GeneralComponents/Card.react';
import CardGrid from '../GeneralComponents/CardGrid.react';
import GridRow from '../GeneralComponents/GridComponents/GridRow.react';
// Stores import
import RoleStore from '../../stores/RoleStore';
import DealersGridStore from '../../stores/DealersGridStore';
// Actions import
import DealersGridActions from '../../actions/DealersGridActions';
// Labels import
import {
  DEALERS,
  DEALER_NAME,
  ADDRESS,
  EMAIL_ADDRESS,
  CITY
} from '../../constants/LabelsConstants';

class Dealers extends React.Component {

  constructor() {
    super();
    DealersGridActions.getDealers();
    this.state = {
      userType: RoleStore.userType,
      dealers: [],
      rows: [],
      page: 1,
      pointer: 10,
      nextPointer: 0,
      forwardDisabled: true,
      backDisabled: true
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    DealersGridStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    let dealers = DealersGridStore.dealers;
    let dealersLength = dealers.length;
    if (dealers.length < this.state.pointer) {
      this.state.rows = dealers;
    } else {
      for (var i = 0; i < 10; i++) {
      this.state.rows[i] = dealers[i];
      }
      this.state.forwardDisabled = false;
    }
    this.setState({
      dealers: dealers,
      dealersLength: dealersLength
    });
  }

  render() {
    if (this.state.userType === 'Dealer') {
      return true;
    } else {
      return (
        <Card icon="store_mall_directory" title={DEALERS}>
          <CardGrid
          th1={DEALER_NAME}
          th2={ADDRESS}
          th3={CITY}
          th4={EMAIL_ADDRESS}
          ref='sboxDown'
          searchBtn={this.handleSearchBtn.bind(this)}
          link='newDealer'
          deleteBtn={()=>{}}
          forwardClick={this.handlerForwardClick.bind(this)}
          backClick={this.handlerBackClick.bind(this)}
          backDisabled={this.state.backDisabled}
          forwardDisabled={this.state.forwardDisabled}
          currentPage={this.state.page} >
          {this.state.rows.map(function(row) {
            return (
              <GridRow key={row.id} td1={row.name} td2={row.address} td3={row.city} td4={row.email}/>
            );
          })}
          </CardGrid>
        </Card>
      );
    }
  }

  handleSearchBtn() {
    let filter = this.refs.sboxDown.refs.sboxUp.refs.sbox.getDOMNode().value;
    DealersGridActions.findSearch(filter);
  }

  // I need fix this logic
  handlerForwardClick() {
    let dealers = this.state.delers;
    let rows = [];
    var count = 0;

    if (dealers.length < this.state.pointer + 10) {
      for (var i = this.state.pointer; i < dealers.length; i++) {
        rows[count] = dealers[i];
        count++;
      }
      this.state.page += 1;
      this.setState({
      rows: rows,
      forwardDisabled: true,
      backDisabled: false
    });
    } else {
      this.state.nextPointer = this.state.pointer + 10;
      for (var i = this.state.pointer; i < this.state.nextPointer; i++) {
        rows[count] = dealers[i];
        count++;
      }
      let pointer = this.state.pointer + 10;
      this.state.page += 1;
      this.setState({
      rows: rows,
      backDisabled: false,
      pointer: pointer
    });
    }
  }

  // I need fix this logic
  handlerBackClick() {
    let dealers = this.state.dealers;
    let rows = [];
    var count = 0;

    if (this.state.pointer <= 10) {
      this._onChange();
      this.state.page -= 1;
      this.setState({
        backDisabled: true,
        forwardDisabled: false
      });
    } else{
      let pointer = this.state.pointer - 10;
      this.state.nextPointer = this.state.pointer;
      for (var i = pointer; i < this.state.nextPointer; i++) {
        rows[count] = dealers[i];
        count++;
      }
      this.state.pointer = this.state.pointer - 10;
      this.state.page -= 1;
      this.setState({
        rows: rows,
        forwardDisabled: false
      });
    }
  }

  componentWillUnmount() {
    DealersGridStore.removeChangeListener(this.changeListener);
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  };
}

export default Dealers;
