import { Component } from 'react';
import {
  NavLink, Link, useParams,
} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CATEGORIES_NAMES, GET_CURRENCIES } from 'helpers/Queries';
import { connect, useSelector } from 'react-redux';
import * as Assets from 'assets';
import * as Actions from 'redux/actions/ProductsActions';
import { overlayStatus } from 'redux/actions/CartActions';
import * as S from './Header_Style';

function withParams(ComponentToUse) {
  return function componentProps(props) {
    return (
      <ComponentToUse
        {...props}
        params={useParams()}
        selector={useSelector((state) => state)}
        CategoryQuery={useQuery(CATEGORIES_NAMES)}
        CurrencyQuery={useQuery(GET_CURRENCIES)}
      />
    );
  };
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      symbol: '$',
    };
  }

  render() {
    return (
      <S.Container>
        <S.Links>
          {this.props.CategoryQuery.loading ? <S.Loading />
            : (
              <ul>
                {
                  this.props.CategoryQuery.data.categories.map((el) => (
                    <li key={el.name} onClick={() => this.props.getCName(el.name)}>
                      <NavLink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to={`/${el.name}`}
                      >
                        {el.name}

                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            )}
        </S.Links>
        <S.Logo>
          <Link to="/">
            <img
              onClick={() => {
                if (this.props.overlyStatus) {
                  this.props.setOverlayStatus(!this.props.overlyStatus);
                }
              }}
              src={Assets.Logo}
              alt="Logo_Icon"
            />
          </Link>
        </S.Logo>
        <S.Actions>
          {this.props.CurrencyQuery.loading ? <S.Loading />
            : (
              <>
                <S.CurrencySwitcher>
                  <a
                    href="#toggleList"
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState((prev) => ({
                        ...prev,
                        show: !prev.show,
                      }));
                      return false;
                    }}
                  >
                    <span>{this.state.symbol}</span>
                    <span>{this.state.show ? '^' : <img src={Assets.DownArrow} alt="arrow" />}</span>
                  </a>
                  {this.state.show
                    ? (
                      <ul>
                        {
                          this.props.CurrencyQuery.data.currencies.map((el) => (
                            <li
                              key={el.label}
                              onClick={(e) => {
                                this.setState((prev) => ({
                                  ...prev,
                                  show: !prev.show,
                                  symbol: el.symbol,
                                }));
                                this.props.getCurrency(Array.from(e.target.closest('ul').children).indexOf(e.target));
                                return false;
                              }}
                            >
                              {el.symbol}
                              {' '}
                              {el.label}
                            </li>
                          ))
                        }
                      </ul>
                    )
                    : false}
                </S.CurrencySwitcher>
                <img
                  onClick={() => this.props.setOverlayStatus(!this.props.overlyStatus)}
                  src={Assets.Cart}
                  alt="Cart_Icon"
                />
                <S.Badge>
                  {this.props.selector.cartReducers.totalQuantity}
                </S.Badge>
              </>
            )}
        </S.Actions>
      </S.Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getCName: (name) => dispatch(Actions.getCategoryName(name)),
    getCurrency: (index) => dispatch(Actions.choosenCurrency(index)),
    setOverlayStatus: (status) => dispatch(overlayStatus(status)),
  };
}

function mapStateToProps(state) {
  return state.cartReducers;
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Header));
