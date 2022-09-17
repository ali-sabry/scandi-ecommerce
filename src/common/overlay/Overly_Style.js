import styled from 'styled-components';

export const BlackOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.3);
    z-index: 100;
    cursor: pointer
`;

export const CartBody = styled.div`
    position: fixed;
    right: 25px;
    top: 50px;
    width: 325px;
    height: 50vh;
    padding: 14px;
    z-index: 200;
    background: #fff;
    text-transform: capitalize;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background-color: #f9f9f9;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #53d87c;
        border-radius: 20px;
        height: 25px;
    }
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
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const ProductInfo = styled.div`
    width: 80%;
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;

    h4 {
        margin: 0 0 5px;
        width: 100%;
    }
`;

export const Quantity = styled.div`
    height: 190px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: bold;
    }

    img {
        cursor: pointer
    }
`;

export const ProductName = styled.h3`
    text-transform: capitalize;
    width: 99%;
    span {
        font-weight: 400;
        display: block;
        width: 100%;
        margin-top: 7px;
        opacity: .6
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
        padding: 2px 2px;
        border: 2px solid #000;
        display: inline-block;
        margin: 2px;
        cursor: pointer;
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
    font-size: 18px;
    span {
        font-weight: normal
    }
`;

export const ProductImg = styled.div`
    width: 121px;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    
    img {
       width: 100%;
       height: 100%;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
    }
`;

export const Button = styled.button`
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${(props) => props.background};
    padding: ${(props) => props.padding};
    border: ${(props) => props.border};
    color: ${(props) => props.color};   
`;
