import React from 'react';
import {FlatList} from 'react-native';
import TransactionItem from './TransactionItem';
import {Transactions} from '../../model/transaction/Transaction';
import {ListContainer} from './styled';

interface TransactionListProps {
  transactions: Transactions;
  onItemPress: any;
}

export default function TransactionList({
  transactions,
  onItemPress,
}: TransactionListProps) {
  return (
    <ListContainer>
      <FlatList
        keyExtractor={(item: any) => item.id.toString()}
        data={transactions}
        renderItem={({item}) => (
          <TransactionItem transaction={item} onPress={onItemPress} />
        )}
      />
    </ListContainer>
  );
}
