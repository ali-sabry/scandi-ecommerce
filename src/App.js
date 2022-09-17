import { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Category, Details, Cart, Overlay,
} from 'common';
import { Header } from 'components';
import GlobalStyle from 'style/Global_Style';
import { connect } from 'react-redux';
import * as Actions from 'redux/actions/CartActions';

class App extends Component {
  render() {
    return (
      <section>
        <GlobalStyle />
        <Header />
        {this.props.overlyStatus && <Overlay />}
        <section className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/all" />} />
            <Route path="/:name" element={<Category />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </section>
      </section>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOverlayStatus: (status) => dispatch(Actions.overlayStatus(status)),
  };
}

function mapStateToProps(state) {
  return state.cartReducers;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
