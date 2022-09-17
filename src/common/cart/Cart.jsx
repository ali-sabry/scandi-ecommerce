// import { Overlay } from 'common';

import { Component } from 'react';
import { connect } from 'react-redux';

import * as CartActions from 'redux/actions/CartActions';
import * as ProductsActions from 'redux/actions/ProductsActions';

import * as Assets from 'assets';
import * as S from './Cart_Style';

class Cart extends Component {
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
      <S.Container>
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
            <div>
              {this.props.cartData.cartProducts.map((product) => (
                <S.ProductContainer key={`${product.id}`}>
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
                          {product.prices[this.props.productsReducer.currencyIndex].currency.symbol}
                          <span>
                            {(Math.round(product.prices[this.props.productsReducer.currencyIndex]
                              .amount * 100) / 100).toFixed(2)}
                          </span>
                        </S.PriceSymbol>
                      </S.Price>
                      {
                        product.attributes.map((productAttr) => (
                          <div key={productAttr.name}>
                            <h4>
                              {productAttr.name}
                              :
                            </h4>
                            <S.Attributes>
                              {productAttr.items.map((item, index) => (
                                <li
                                  key={`${item.value}_${index}`}
                                  className={product.attr && product.attr[productAttr.name]
                                    === item.value ? 'active' : ''}
                                  style={{
                                    backgroundColor: `${productAttr.name === 'Color' && item.value}`,
                                    padding: `${productAttr.name === 'Color' && '10px'}`,
                                    borderColor: `${productAttr.name !== 'Color' && '#000'}`,
                                  }}
                                >
                                  {productAttr.name !== 'Color' && item.value}
                                </li>
                              ))}
                            </S.Attributes>
                          </div>
                        ))
                      }
                    </div>
                  </S.ProductInfo>
                  <S.Quantity>
                    <img
                      onClick={() => this.props.increaseQuantity(product.id)}
                      src={Assets.Plus}
                      alt="Plus"
                    />
                    <span>{product.quantity}</span>
                    <img
                      onClick={() => this.props.decreaseQuantity(product.id)}
                      src={product.quantity === 1 ? Assets.Delete : Assets.Minus}
                      alt="Minus"
                      style={{
                        border: `${product.quantity === 1 ? '2px solid #000' : 'none'}`,
                        padding: `${product.quantity === 1 ? '2px' : 0}`,
                      }}
                    />
                  </S.Quantity>
                  <S.ProductImg>
                    <img src={product.gallery[product.galleryIndex]} alt="productImage" />
                    {
                      product.gallery.length > 1
                        ? (
                          <S.Controlls>
                            <img
                              style={{
                                pointerEvents: `${product.galleryIndex === 0 ? 'none' : ''}`,
                                opacity: `${product.galleryIndex === 0 ? 0.3 : 1}`,
                              }}
                              onClick={() => this.props.decreaseGalleryIndex(product.id)}
                              src={Assets.Prev}
                              alt="PrevImage"
                            />
                            <img
                              style={{
                                pointerEvents: `${product.galleryIndex === product.gallery.length - 1 ? 'none' : ''}`,
                                opacity: `${product.galleryIndex === product.gallery.length - 1 ? 0.3 : 1}`,
                              }}
                              onClick={() => this.props.increaseGalleryIndex(product.id)}
                              src={Assets.Next}
                              alt="NextImage"
                            />
                          </S.Controlls>
                        ) : false
                    }
                  </S.ProductImg>
                </S.ProductContainer>
              ))}
              <S.Footer>
                <div>
                  <span>tax 21%:</span>
                  <span>$40</span>
                </div>
                <div>
                  <span>quantity:</span>
                  <span>
                    {this.props.cartData.totalQuantity}
                  </span>
                </div>
                <div>
                  <span>total:</span>
                  <S.PriceSymbol>
                    {this.props.cartData.cartProducts[0].prices[this.props
                      .productsReducer.currencyIndex].currency.symbol}
                    <span>{this.props.cartData.totalPrice}</span>
                  </S.PriceSymbol>
                </div>
              </S.Footer>
            </div>
            <S.Button padding="8px" border="none" color="#fff" background="#53d87c" type="button">order</S.Button>
          </>
        )}
      </S.Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseQuantity: (id) => dispatch(CartActions.increaseQuantity(id)),
    decreaseQuantity: (id) => dispatch(CartActions.decreaseQuantity(id)),
    setImgIndex: (imgIndex) => dispatch(ProductsActions.choosenImage(imgIndex)),
    increaseGalleryIndex: (id) => dispatch(CartActions.increaseGalleryIndex(id)),
    decreaseGalleryIndex: (id) => dispatch(CartActions.decreaseGalleryIndex(id)),
    getTotalPrice: (index) => dispatch(CartActions.getTotalPrice(index)),
    updateAttributes: (id, attr) => dispatch(CartActions.updateAttributes(id, attr)),
  };
}

function mapStateToProps(state) {
  return {
    productsReducer: state.productsReducers,
    cartData: state.cartReducers,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
