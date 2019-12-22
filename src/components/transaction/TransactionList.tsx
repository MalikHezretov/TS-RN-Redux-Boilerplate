import React, { Component } from 'react';
import { FlatList } from 'react-native';
import TransactionItem from './TransactionItem';
import { Transactions } from '../../model/transaction/Transaction';
import { ListContainer } from './styled';

interface TransactionListProps {
  transactions: Transactions;
  onItemPress: any;
}

export default class TransactionList extends Component<TransactionListProps> {
  constructor(props: TransactionListProps) {
    super(props);
  }

  render() {
    return (
      <ListContainer>
        <FlatList
          keyExtractor={(item: any) => item.id.toString()}
          data={this.props.transactions}
          renderItem={({ item }) => (
            <TransactionItem
              transaction={item}
              onPress={this.props.onItemPress}
            />
          )}
        />
      </ListContainer>
    );
  }
}
