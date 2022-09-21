import styled from 'styled-components';

export const Container = styled.section`
    padding: 50px 0;
`;

export const EmptyCart = styled.div`
    img {
        max-width: 100%;
        margin-bottom: 50px
    }
`;

export const CartHead = styled.h2`
    margin: 0;
    width: 100%;
    text-align: left;
    text-transform: capitalize;
    margin: 20px 0;
    font-size: 32px;
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: now-wrap;
    justify-content: space-between;
    padding: 25px 0;
    margin-bottom: 20px;
    border-top: 2px solid #e1e1e1;
    margin: 10px 0;
`;

export const ProductInfo = styled.div`
    width: calc(65% - 20px);
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;

    div:first-child {
         h4 {
             margin-bottom: 8px;
         }
         h3, h4, div {
            width: 100%;
         }
    }
`;

export const ProductName = styled.h3`
    text-transform: capitalize;
    font-size: 30px;
    span {
        font-size: 30px;
        font-weight: 400;
        display: block;
        width: 100%;
        margin-top: 7px;
    }
`;

export const Attributes = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;
    margin: 0;

    li {
        padding: 4px 8px;
        border: 2px solid #000;
        display: inline-block;
        margin: 2px;
        width: 63px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .active {
        border: 3px solid #53d87c;
        background-color: #000;
        color: #fff
    }
`;

export const Price = styled.h4`
    width: 100%;
    text-transform: uppercase;
    span {
        dispaly: block;
        width: 100%;
        margin-top: 15px;
    }
`;

export const PriceSymbol = styled.span`
    font-weight: bold;
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

export const Quantity = styled.div`
    display: flex;
    flex-direction: column;
    height: 288px;
    align-items: center;
    justify-content: space-between;
    margin-right: 16px;

    @media screen and (max-width: 992px) {
        margin-right: 20px;
    }

    span {
        font-weight: bold;
    }

    img {
        cursor: pointer
    }
`;

export const ProductImg = styled.div`
    width: 200px;
    height: 288px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const Controlls = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-bottom: 9px;
    padding-right: 5px;

    img {
        cursor: pointer;
        margin: 0 3px;
        width: 24px;
        height: 24px;
    }
`;

export const Footer = styled.div`
    border-top: 2px solid #e1e1e1;

    div {
        width: 25%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-transform: capitalize;
        font-size: 24px;
        
        span {
            margin: 5px 0;
        }
        
        span:first-of-type {
            font-weight: 400;
            opacity: .8;
            text-transform: capitalize;
        }
    }

    div:last-child {
        span:first-of-type {
            font-weight: 500;
        }

        span:last-of-type {
            font-weight: 700;
        }
    }
`;

export const Button = styled.button`
    text-transform: uppercase;
    background-color: ${(props) => props.background};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    color: ${(props) => props.color};   
    margin-top: 15px;
    width: 279px;
    height: 43px;

    @media screen and (min-width: 1440px) {
        padding: 16px, 32px, 16px, 32px;
    }
`;

export const Line = styled.div`
    position: relative;
    width: 100%;
    &:before {
        content: "";
        position: absolute;
        top: 10px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e3e3e3;
    }
`;
