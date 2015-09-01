// Packages import
import React from 'react/addons';
import { expect } from 'chai';
// Component import
import ActionButtons from '../ActionButtons.react';

describe('ActionButtons', () => {

  let { TestUtils } = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<ActionButtons addBtn={()=>{}} deleteBtn={()=>{}} />);
  let component = shallowRenderer.getRenderOutput();

  it('should have a <button>', () => {
    expect(component.props.children[0].type).to.be.equal('button');
  });

  it('<button> should have onClick prop', () => {
    expect(component.props.children[0]._store.props).to.be.property('onClick');
  });

  it('should have another <button>', () => {
    expect(component.props.children[2].type).to.be.equal('button');
  });

  it('second <button> should have onClick prop', () => {
    expect(component.props.children[2]._store.props).to.be.property('onClick');
  });

});