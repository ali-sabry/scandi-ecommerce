import { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Assets from 'assets';
import { connect } from 'react-redux';
import * as CartActions from 'redux/actions/CartActions';
import * as S from './Overly_Style';

class Overlay extends Component {
  componentDidMount() {
    if (this.props.cartData.totalQuantity !== 0) {
      this.props.getTotalPrice(
        this.props.productsReducer.currencyIndex,
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cartData.totalQuantity !== this.props.cartData.totalQuantity
      && this.props.cartData.totalQuantity !== 0) {
      this.props.getTotalPrice(
        this.props.productsReducer.currencyIndex,
      );
    } else if (prevProps.productsReducer.currencyIndex
      !== this.props.productsReducer.currencyIndex && this.props.cartData.totalQuantity !== 0) {
      this.props.getTotalPrice(
        this.props.productsReducer.currencyIndex,
      );
    }
  }

  render() {
    return (
      <>
        <S.BlackOverlay onClick={() => {
          this.props.setOverlayStatus(!this.props.cartData.overlyStatus);
        }}
        />
        <S.CartBody>
          {this.props.cartData.cartProducts.length === 0 ? (
            <S.EmptyCart>
              <img src={Assets.EmptyCart} alt="EmotyCart" />
              <h3>Add Something To The Cart</h3>
            </S.EmptyCart>
          ) : (
            <>
              <S.CartHead>
                my bag
                {' '}
                {this.props.cartData.cartProducts.length}
                {' '}
                items
              </S.CartHead>
              {this.props.cartData.cartProducts.map((product) => (
                <div key={`${product.id}`}>
                  <S.ProductContainer>
                    <S.ProductInfo>
                      <div>
                        <S.ProductName>
                          {product.name}
                          <span>{product.brand}</span>
                        </S.ProductName>
                        <S.Price>
                          price:
                          {' '}
                          <S.PriceSymbol>
                            {product.prices[
                              this.props.productsReducer.currencyIndex].currency.symbol}
                            <span>
                              {(Math.round(product.prices[this.props.productsReducer.currencyIndex]
                                .amount * 100) / 100).toFixed(2)}
                            </span>
                          </S.PriceSymbol>
                        </S.Price>
                        {
                          product.attributes.map((attr) => (
                            <div key={attr.name}>
                              <h4>
                                {attr.name}
                                :
                              </h4>
                              <S.Attributes>
                                {attr.items.map((item, index) => (
                                  <li
                                    key={`${item.value}_${index}`}
                                    className={product.attr && product.attr[attr.name]
                                      === item.value ? 'active' : ''}
                                    style={{
                                      backgroundColor: `${attr.name === 'Color' && item.value}`,
                                      padding: `${attr.name === 'Color' && '10px'}`,
                                      borderColor: `${attr.name !== 'Color' && '#000'}`,
                                    }}
                                  >
                                    {attr.name !== 'Color' && item.value}
                                  </li>
                                ))}
                              </S.Attributes>
                            </div>
                          ))
                        }
                      </div>
                      <S.Quantity>
                        <img
                          onClick={() => this.props.increaseQuantity(product.id)}
                          src={Assets.Plus}
                          alt="Plus"
                        />
                        <span>{product.quantity}</span>
                        <img
                          onClick={() => this.props.decreaseQuantity(product.id)}
                          src={Assets.Minus}
                          alt="Minus"
                        />
                      </S.Quantity>
                    </S.ProductInfo>
                    <S.ProductImg>
                      <img src={product.gallery[0]} alt="productImage" />
                    </S.ProductImg>
                  </S.ProductContainer>
                </div>
              ))}
              <S.Footer>
                <div>
                  <span>total:</span>
                  <S.PriceSymbol>
                    {this.props.cartData.cartProducts[0].prices[this.props
                      .productsReducer.currencyIndex].currency.symbol}
                    <span>{this.props.cartData.totalPrice}</span>
                  </S.PriceSymbol>
                </div>
                <Link to="/cart">
                  <S.Button
                    onClick={() => {
                      this.props.setOverlayStatus(!this.props.cartData.overlyStatus);
                    }}
                    padding="6px 8px"
                    border="2px solid #000"
                    type="button"
                  >
                    view bag
                  </S.Button>
                </Link>
                <S.Button
                  padding="8px"
                  border="none"
                  color="#fff"
                  background="#53d87c"
                  type="button"
                >
                  checkout

                </S.Button>
              </S.Footer>
            </>
          )}
        </S.CartBody>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setOverlayStatus: (status) => dispatch(CartActions.overlayStatus(status)),
    increaseQuantity: (id) => dispatch(CartActions.increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(CartActions.decreaseQuantity(id)),
    getTotalPrice: (index) => dispatch(CartActions.getTotalPrice(index)),
    setProductsOnCart: (product) => dispatch(CartActions.addToCart(product)),
    updateAttributes: (id, attr) => dispatch(CartActions.updateAttributes(id, attr)),
  };
}

function mapStateToProps(state) {
  return {
    productsReducer: state.productsReducers,
    cartData: state.cartReducers,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay);
