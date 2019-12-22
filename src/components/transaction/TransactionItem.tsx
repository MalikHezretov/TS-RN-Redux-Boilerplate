import React, { useState } from 'react';
import Transaction from '../../model/transaction/Transaction';
import {
  TransactionStyle,
  ImageContainer,
  ContentStyle,
  TitleStyle,
  Footer,
  Cause,
  Price,
} from './styled';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: () => void;
}

export default function TransactionItem({
  transaction,
  onPress,
}: TransactionItemProps) {
  const [isRefunded, setIsRefunded] = useState(
    transaction.canRefundIfConfirmed,
  );

  const handlePress: any = () => {
    setIsRefunded(!transaction.canRefundIfConfirmed);
  };

  return (
    <TransactionStyle onPress={handlePress}>
      <ImageContainer source={{ uri: transaction.image }} />
      <ContentStyle>
        <TitleStyle>{transaction.title}</TitleStyle>
        <Footer>
          {isRefunded && <Cause>REFUNDED</Cause>}
          <Price>{transaction.amount} S$</Price>
        </Footer>
      </ContentStyle>
    </TransactionStyle>
  );
}
