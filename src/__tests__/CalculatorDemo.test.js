import React from 'react';
import Calculator from '../CalculatorDemo.jsx';
import renderer from 'react-test-renderer';

//dummy test to verify the jest setup
/*describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});*/


describe('<Calculator/>', () => {

  it('should render calculator', () => {
    const rendered = renderer.create(
      <Calculator roundOff="1" />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('should render calculator', () => {
    const rendered = renderer.create(
      <Calculator roundOff="none" />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});


