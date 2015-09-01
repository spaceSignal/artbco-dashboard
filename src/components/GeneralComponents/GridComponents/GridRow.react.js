// Packages import
import React from 'react';

class GridRow extends React.Component {

  render() {
    return (
      <tr>
        <td className="mdl-data-table__cell--non-numeric col">{this.props.td1}</td>
        <td className="mdl-data-table__cell--non-numeric col">{this.props.td2}</td>
        <td className="mdl-data-table__cell--non-numeric col">{this.props.td3}</td>
        <td className="mdl-data-table__cell--non-numeric col">{this.props.td4}</td>
      </tr>
    );
  }
}

export default GridRow;
