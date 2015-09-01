// Packages import
import React from 'react';
import {expect} from 'chai';
// Component import
import GridCell from '../GridRow.react.js';

describe('GridCell', ()=>{

  let {TestUtils} = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<GridCell />);
  let component = shallowRenderer.getRenderOutput();

  it('should be <tr> type', () => {
    expect(component.type).to.be.equal('tr');
  });
  it('<tr> should have <td>', () => {
    expect(component.props.children[0].type).to.be.equal('td');
  });
});
