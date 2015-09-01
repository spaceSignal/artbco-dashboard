// Packages import
import React from 'react';

class Grid extends React.Component {

  render() {
    let tableKey = Math.random();
    return (
      <table key={tableKey} id={this.props.divid} className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2pd grid">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric col">{this.props.th1}</th>
            <th className="mdl-data-table__cell--non-numeric col">{this.props.th2}</th>
            <th className="mdl-data-table__cell--non-numeric col">{this.props.th3}</th>
            <th className="mdl-data-table__cell--non-numeric col">{this.props.th4}</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default Grid;
