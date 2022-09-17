import { Component } from 'react';
import { Card } from 'components';
import { connect } from 'react-redux';
import * as Assets from 'assets';
import * as Queries from 'helpers/Queries';
import { useQuery } from '@apollo/react-components';
import { useParams } from 'react-router-dom';
import * as S from './Category_Style';

function withParams(ComponentToUse) {
  return function componentProps(props) {
    const { name } = useParams();
    return <ComponentToUse {...props} query={useQuery(Queries.GET_PRODUCTS(name))} />;
  };
}

class Category extends Component {
  render() {
    return (
      <section>
        {this.props.query.loading ? <S.Loading />
          : (
            <>
              <S.Title>{this.props.query.data.category.name}</S.Title>
              <S.Container>
                {this.props.query.data.category.products.map((product) => (
                  <Card
                    key={product.id}
                    productInfo={product}
                    id={product.id}
                    src={product.gallery[0]}
                    title={`${product.brand} ${product.name}`}
                    price={
                      `${(Math.round(product.prices[this.props.currencyIndex].amount * 100) / 100).toFixed(2)} 
                      ${product.prices[this.props.currencyIndex].currency.symbol}`
                    }
                    icon={Assets.Cart}
                    inStock={product.inStock}
                  />
                ))}
              </S.Container>
            </>
          )}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state.productsReducers;
}

export default connect(mapStateToProps)(withParams(Category));
