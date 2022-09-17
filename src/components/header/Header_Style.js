import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding-right: 30px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background: #fff;
`;

export const Links = styled.nav`
    list-style: none;
    ul {
        width: 100%;
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 0;
        li {
            display: inline-block;
            text-transform: capitalize;
            cursor: pointer;
            padding: 0 10px;
            a {
                text-decoration: none;
                color: #000;
                padding-bottom: 5px;
                margin-right: 10px;
            }
            .active {
                color: #54dd7e;
                border-bottom: 3px solid #54dd7e;
            }
        }
    }
`;

export const Logo = styled.div`
    bordre-radius: 50%;
`;

export const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        cursor: pointer
    }
`;

export const CurrencySwitcher = styled.div`    
    position: relative;
    margin-right: 25px;

    a {
        display: flex;
        span {
            margin-right: 10px;
            font-size: 12px;
            font-weight: bold;
        }
    }

    ul {
        width: 100px;
        margin: 0;
        padding: 0;
        list-style: none;
        box-shadow: 0 0 8px rgb(0 0 0 / 20%);
        position: absolute;
        text-align: center;
        left: -31px;
        top: 25px;
        z-index: 300;
        background-color: #fff;
        transition: .3s ease;

        li {
            margin-bottom: 10px;
            cursor: pointer;
            transition: .3s ease;
            padding: 10px 0;
            
            &:hover {
                background-color: #eee;
            }
        }
    }
`;

export const Badge = styled.div`
    position: absolute;
    right: 14px;
    top: 3px;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    font-weight: bold;
`;

export const Loading = styled.div`
    width: 100%;
    padding: 2px 35px;
    height: 20px;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    border-radius: 5px;
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
    margin-left: 25px;
    @keyframes shine {
        to {
            background-position-x: -200%;
        }
    }
`;
