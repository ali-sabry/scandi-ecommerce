import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding: 50px 0;
    flex-wrap: wrap;
`;

export const ProductGallery = styled.div`
    width: 16%;
    height: 75vh;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 20px 0;

    @media screen and (max-width: 776px) {
        width: 33%;
        height: 60vh;
    }

    div {
        width: 70%;
        height: 100px;
        margin: 10px auto;
        object-fit: cover;
        background-color: #f9f9f9;
        display: flex;
        align-items: center;
        justify-content: center;
        
        img {
            transition: all .3s ease;
            width: 100%;
            height: 100%;
            display: block;
            margin: 14px 0;
            cursor: pointer;
        }
    }

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

export const ImageWrapper = styled.div`
    width: 43%;
    height: fit-content;
    border-radius: 7px;
    overflow: hidden;
    background: #f9f9f9;

    @media screen and (max-width: 776px) {
        width: 50%;
        height: 60vh;
    }

    img {
        width: 100%;
        height: 100%
    }
`;

export const OptionsWrapper = styled.div`
    width: 30%;
    height: 90vh;
    padding: 20px;

    @media screen and (max-width: 776px) {
        width: 100%;
    }
`;

export const ProductHead = styled.h1`
    font-size: 35px;
    text-transform: capitalize;
    span {
        font-weight: 400;
        display: block;
        width: 100%;
        margin-top: 7px;
    }
`;

export const ProductBody = styled.div`
    margin: 10px 0;
    
    h1 {
        margin: 0;
    }
`;

export const Attributes = styled.ul`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0;

    li {
        padding: 10px;
        border: 2px solid #000;
        display: inline-block;
        margin: 5px;
        cursor: pointer;
    }

    .active {
        border: 4px solid #53d87c;
        background-color: #000;
        color: #fff
    }
`;

export const Price = styled.h1`
    width: 100%;
    text-transform: uppercase;
    span {
        dispaly: block;
        width: 100%;
        margin-top: 15px;
    }
`;

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 2px;
    background-color: #53d87c;
    color: #fff;
    text-transform: uppercase;
    padding: 15px 20px;
    cursor: pointer;
    pointer-events: ${(props) => props.pointer};
    opacity: ${(props) => props.opacity}
`;

export const Description = styled.div`
    line-heigh: 2;
    text-align: left;
    text-transform: capitalize;
    line-height: 1.7;
    font-family: 'Roboto', sans-serif;
    ul {
        padding: 0;
        line-height: 1.5;
        li {
            margin-bottom: 8px;
        }
    }
`;

export const Loading = styled.div`
    height: 90vh;
    width: 90vw;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
`;
