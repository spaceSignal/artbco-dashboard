// Packages import
import React from 'react';
import {expect} from 'chai';
// Component import
import GridHeader from '../Grid.react.js';

describe('GridHeader', () => {
  let {TestUtils} = React.addons;
  let shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<GridHeader />);
  let component = shallowRenderer.getRenderOutput();

  it('should be <table> type', () => {
    expect(component.type).to.be.equal('table');
  });
});