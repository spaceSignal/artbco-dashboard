// Packages import
import React from 'react';
import {expect} from 'chai';
// Component import
import Pagination from '../Pagination.react';

describe('Pagination', () => {

  let {TestUtils} = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Pagination />);
  let component = shallowRenderer.getRenderOutput();

  it('should have a first <button>', () => {
    expect(component.props.children[0].type).to.be.equal('button');
  });

  it('first <button> should have a icon "arrow_back"', () => {
    expect(component.props.children[0].props.children._store.props.children).to.be.equal('arrow_back');
  });

  it('should have a second <button>', () => {
    expect(component.props.children[1].type).to.be.equal('button');
  });

  it('second <button> should be disabled', () => {
    expect(component.props.children[1]._store.props.disabled).to.be.equal(true);
  });

  it('should have a third <button>', () => {
    expect(component.props.children[2].type).to.be.equal('button');
  });

  it('third <button> should have a icon "arrow_forward"', () => {
    expect(component.props.children[2].props.children._store.props.children).to.be.equal('arrow_forward');
  });


});