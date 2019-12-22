import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import TransactionItem from '../transaction/TransactionItem';
import TransactionList from '../transaction/TransactionList';
import { item, items } from './mockData';

describe('#Transaction', () => {
  it('should render App file', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Transaction Item component', () => {
    const wrapper = mount(
      <TransactionItem transaction={item} onPress={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Transaction List component', () => {
    const wrapper = mount(
      <TransactionList transactions={items} onItemPress={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
