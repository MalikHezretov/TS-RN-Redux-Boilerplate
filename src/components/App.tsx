import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import TransactionList from './transaction/TransactionList';
import AppAction from '../redux/action/AppAction';
import AppState from '../redux/state/AppState';
import { Container, UpdateButton, Title } from './styled';

interface AppProps {
  appData: AppState;
  getList: (searchStr?: string) => any;
}

class App extends Component<AppProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      refunded: false,
    };
  }

  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <SafeAreaView>
        <TransactionList
          transactions={this.props.appData.transactions}
          onItemPress={() => alert('Clicked')}
        />
        <Container>
          <UpdateButton onPress={() => {}}>
            <Title>Click me</Title>
          </UpdateButton>
        </Container>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    appData: state.appData,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getList: () => dispatch(AppAction.getTransactions()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
