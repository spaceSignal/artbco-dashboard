// Packages import
import React from 'react';
// Components import
import Card from '../GeneralComponents/Card.react';
import CardGrid from '../GeneralComponents/CardGrid.react';
import GridRow from '../GeneralComponents/GridComponents/GridRow.react';
// Labels import
import {
  ARTISTS,
  FIRSTNAME,
  LASTNAME,
  EMAIL_ADDRESS,
  NICKNAME
} from '../../constants/LabelsConstants';
// Actions import
import ArtistsGridActions from '../../actions/ArtistsGridActions';
// Store import
import ArtistsGridStore from '../../stores/ArtistsGridStore';

class Artists extends React.Component {

  constructor() {
    super();
    ArtistsGridActions.getArtists();
    this.state = {
      artists: [],
      rows: [],
      artistsLength: 0,
      page: 1,
      pointer: 10,
      nextPointer: 0,
      forwardDisabled: true,
      backDisabled: true
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    ArtistsGridStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    let artists = ArtistsGridStore.artists;
    let artistsLength = artists.length - 1;
    if (artists.length < this.state.pointer) {
      this.state.rows = artists;
    } else {
      for (var i = 0; i < 10; i++) {
      this.state.rows[i] = artists[i];
      }
      this.state.forwardDisabled = false;
    }
    this.setState({
      artists: artists,
      artistsLength: artistsLength
    });
  }

  render() {
    return (
      <Card icon="brush" title={ARTISTS}>
        <CardGrid
        th1={LASTNAME}
        th2={FIRSTNAME}
        th3={EMAIL_ADDRESS}
        th4={NICKNAME}
        searchBtn={this.handleSearchBtn.bind(this)}
        ref='sboxDown'
        link='newArtist'
        deleteBtn={()=>{}}
        forwardClick={this.handlerForwardClick.bind(this)}
        backClick={this.handlerBackClick.bind(this)}
        forwardDisabled={this.state.forwardDisabled}
        backDisabled={this.state.backDisabled}
        currentPage={this.state.page} >
        {this.state.rows.map(function(row) {
          return (
          <GridRow key={row.id} td1={row.lastName} td2={row.firstName} td3={row.email} td4={row.nickname} />
          );
        })}
        </CardGrid>
      </Card>
    );
  }

  handleSearchBtn() {
    let filter = this.refs.sboxDown.refs.sboxUp.refs.sbox.getDOMNode().value;
    ArtistsGridActions.findSearch(filter);
  }

  // I need fix this logic
  handlerForwardClick() {
    let artists = this.state.artists;
    let rows = [];
    var count = 0;

    if (artists.length < this.state.pointer + 10) {
      for (var i = this.state.pointer; i < artists.length; i++) {
        rows[count] = artists[i];
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
        rows[count] = artists[i];
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
    let artists = this.state.artists;
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
        rows[count] = artists[i];
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

  componentDidUpdate() {
    componentHandler.upgradeDom();
  };

  componentWillUnmount() {
    ArtistsGridStore.removeChangeListener(this.changeListener);
  }
}

export default Artists;
