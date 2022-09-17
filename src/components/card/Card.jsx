// import { useQuery } from '@apollo/client';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Actions from 'redux/actions/CartActions';
import * as S from './Card_Style';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { attr: {} };
  }

  componentDidMount() {
    this.props.productInfo.attributes.map((el) => {
      this.setState((prev) => ({
        ...prev,
        attr: { ...prev.attr, [el.name]: el.items[0].value },
      }));
      return false;
    });
  }

  render() {
    return (
      <S.Container opacity={this.props.inStock ? 1 : 0.5}>
        <Link to={`/details/${this.props.id}`}>
          {!this.props.inStock && <S.OutOfStock>out of stock</S.OutOfStock>}
          <S.ImageWrapper>
            <img src={this.props.src} alt="product" />
          </S.ImageWrapper>
          <S.Footer>
            <S.Title>
              {this.props.title}
            </S.Title>
            <S.Price>
              {this.props.price}
            </S.Price>
          </S.Footer>
        </Link>
        {this.props.inStock
          && (
            <S.Icon
              className="Cart"
              onClick={() => {
                this.props.setProductsOnCart(
                  {
                    ...this.props.productInfo,
                    attr: { ...this.state.attr },
                  },
                );
              }}
            >
              <img src={this.props.icon} alt="Cart_Icon" />
            </S.Icon>
          )}
      </S.Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setProductsOnCart: (product) => dispatch(Actions.addToCart(product)),
  };
}

function mapStateToProps(state) {
  return state.cartReducers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
