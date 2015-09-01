// Packages import
import React, {PropTypes} from 'react';
// Components import
import onError from './AlertsComponents/onError.react';
import isSuccess from './AlertsComponents/inSuccess.react';
// Stores import
import AlertsStore from '../../stores/AlertsStore';

class Card extends React.Component {

  constructor() {
    super();
    this.state = {
      alertMessage: ''
    };
  }

  componentDidMount() {
    this.alertListener = this._onAlert.bind(this);
    AlertsStore.addChangeListener(this.alertListener);
  }


  render() {
    return (
    <main id="Card" className="mdl-layout__content">
    {this.showAlert()}
      <div id="Card-Container" className="mdl-grid dash-content">
        <div id="Card-Title" className="dash-title">
          <h4><i className="material-icons">{this.props.icon}</i>{this.props.title}</h4>
        </div>
        <div id="Card-Main" className="card grid-wrapper">
          {this.props.children}
        </div>
      </div>
    </main>
  );
  }

  showAlert() {
    if (AlertsStore.hasError) {
      return (
        <onError text={this.state.message} />
      );
    } else if(AlertsStore.isSuccess) {
      return (
        <isSuccess text={this.state.message} />
      );
    }
  }

  _onAlert() {
    this.setState({
      message: AlertsStore.message
    });
  }

  componentWillUnmount() {
    AlertsStore.removeChangeListener(this.alertListener);
  }
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;
