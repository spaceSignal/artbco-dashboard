// Packages import
import React from 'react/addons';
import { expect } from 'chai';
// Component import
import SBox from '../SBox.react';

describe('SBox', () => {

  let {TestUtils} = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<SBox searchBtn={()=>{}} />);
  let component = shallowRenderer.getRenderOutput();

  it('should have a <input>', () => {
    expect(component.props.children[0].type).to.be.equal('input');
  });

  it('<input> should have id "search"', () => {
    expect(component.props.children[0]._store.props.id).to.be.equal('search');
  });

  it('<input> should have ref "sbox"', () => {
    expect(component.props.children[0].ref).to.be.equal('sbox');
  });

  it('should have a <label>', () => {
    expect(component.props.children[1].type).to.be.equal('label');
  });

  it('<label> should have htmlFor "search"', () => {
    expect(component.props.children[1]._store.props.htmlFor).to.be.equal('search');
  });

  it('should have a <button>', () => {
    expect(component.props.children[2].type).to.be.equal('button');
  });

  it('<button> should have onClick prop', () => {
    expect(component.props.children[2]._store.props).to.be.property('onClick');
  });
});