import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    min-width: 230px;
    padding: 15px;
    border-radius: 7px;
    transition: all .3s ease;
    margin-bottom: 20px;
    cursor: pointer;
    opacity: ${(props) => props.opacity};
    
    &:hover {
        box-shadow: 0 0 20px 0 rgb(0 0 0 / 20%);

        .Cart {
            display: flex;
        }
    }

    a {
        text-decoration: none;
        color: #000;
    }
`;

export const OutOfStock = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 24px;
    color: #8D8F9A;
    text-transform: uppercase;
    margin: 0;
    width: 100%;
    text-align: center;
`;

export const ImageWrapper = styled.div`
    width: 100%;
    height: 300px;
    margin-bottom: 15px;
    img {
        width: 100%;
        height: 100%;
    }
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const Title = styled.h3`
   text-align: left;
   margin: 0;
   flex-grow: 1;
   margin: 0 0 3px;
   width: 100%;
   font-size: 18px;
   font-weight: 300;
   color: #1D1F22;
`;

export const Price = styled.h2`
    font-size: 18px;
    margin: 5px 0 0;
`;

export const Icon = styled.div`
    position: absolute;
    bottom: 90px;
    right: 15px;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #54dd7e;
    display: none;
    cursor: pointer;
    img {
        filter: brightness(10.5);
    }
`;
