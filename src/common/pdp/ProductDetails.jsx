import { Component } from 'react';
import { useQuery } from '@apollo/client';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import * as ProductsActions from 'redux/actions/ProductsActions';
import * as CartActions from 'redux/actions/CartActions';

import { SELECTED_PRODUCT } from 'helpers/Queries';
import * as S from './ProductDetails_Style';

function withParams(ComponentToUse) {
  return function componentProps(props) {
    const { id } = useParams();
    return <ComponentToUse {...props} query={useQuery(SELECTED_PRODUCT(id))} />;
  };
}

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedAttr: {} };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query.loading !== this.props.query.loading) {
      this.props.query.data.product.attributes.map((el) => {
        this.setState((prev) => ({
          ...prev,
          selectedAttr: { ...prev.selectedAttr, [el.name]: el.items[0].value },
        }));
        return false;
      });
    }
  }

  render() {
    return (
      <S.Container>
        {this.props.query.loading ? <S.Loading />
          : (
            <>
              <S.ProductGallery>
                {this.props.query.data.product.gallery.map((url, index) => (
                  <div key={url}>
                    <img onClick={() => this.props.getImgIndex(index)} src={`${url}`} alt="productImages" />
                  </div>
                ))}
              </S.ProductGallery>
              <S.ImageWrapper>
                <img src={this.props.query.data.product.gallery[this.props.productReducers.imgIndex]} alt="productImage" />
              </S.ImageWrapper>
              <S.OptionsWrapper>
                <S.ProductHead>
                  {this.props.query.data.product.brand}
                  <span>
                    {this.props.query.data.product.name}
                  </span>
                </S.ProductHead>
                <S.ProductBody>
                  {
                    this.props.query.data.product.attributes.map((productAttr) => (
                      <div key={productAttr.name}>
                        <h1>
                          {productAttr.name}
                          :
                        </h1>
                        <S.Attributes>
                          {productAttr.items.map((item) => (
                            <li
                              className={this.state.selectedAttr
                                && this.state.selectedAttr[productAttr.name]
                                === item.value ? 'active' : ''}
                              onClick={(e) => {
                                this.setState((prev) => ({
                                  ...prev,
                                  selectedAttr: {
                                    ...this.props.query.data.product.attr,
                                    ...prev.selectedAttr,
                                    [productAttr.name]: item.value,
                                  },
                                }));
                                Array.from(e.target.parentElement.children).forEach((el) => el.classList.remove('active'));
                                e.target.classList.add('active');
                                productAttr.name !== 'Color' ? e.target.style.cssText = 'border-color: #000' : false;
                              }}
                              style={{
                                backgroundColor: `${productAttr.name === 'Color' && (item.displayValue || item.value)}`,
                                padding: `${productAttr.name === 'Color' && '10px'}`,
                                borderColor: `${productAttr.name !== 'Color' && '#000'}`,
                              }}
                              key={item.value}
                            >
                              {productAttr.name !== 'Color' && item.value}
                            </li>
                          ))}
                        </S.Attributes>
                      </div>
                    ))
                  }
                  <S.Price>

                    {`${this.props.query.data.product.prices[this.props.productReducers.currencyIndex].currency.symbol} ${(Math.round(this.props.query.data.product.prices[this.props.productReducers.currencyIndex].amount * 100).toFixed(2) / 100).toFixed(2)}`}
                  </S.Price>
                </S.ProductBody>
                <S.Button
                  type="button"
                  opacity={this.props.query.data.product.inStock ? 1 : 0.5}
                  pointer={this.props.query.data.product.inStock ? 'all' : 'none'}
                  onClick={() => {
                    this.props.setProductsOnCart(
                      {
                        ...this.props.query.data.product,
                        attr: { ...this.state.selectedAttr },
                      },
                    );
                  }}
                >
                  add to cart
                </S.Button>
                {this.props.query.data.product.inStock ? true : (
                  <p style={{
                    color: 'red',
                    textTransform: 'capitalize',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    lineHeight: 1.8,
                  }}
                  >
                    this product is out of stock, you cannot add to the cart
                  </p>
                )}
                <S.Description>
                  {
                    parse(this.props.query.data.product.description)
                  }
                </S.Description>
              </S.OptionsWrapper>
            </>
          )}
      </S.Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    productReducers: state.productsReducers,
    cartReducers: state.cartReducers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getImgIndex: (imgIndex) => dispatch(ProductsActions.choosenImage(imgIndex)),
    setProductsOnCart: (product) => dispatch(CartActions.addToCart(product)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withParams(Details));
