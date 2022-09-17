import styled from 'styled-components';

export const Title = styled.h1`
    text-transform: capitalize;
    font-size: 33px;
    margin-bottom: 0;
    margin-left: 15px;
`;

export const Container = styled.section`
    padding: 25px 0;
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    gap: 20px;

    @media screen and (max-width: 992px) {
        grid-template-columns: repeat(2, minmax(250px, 1fr));
    }

    @media screen and (max-width: 576px) {
        grid-template-columns: repeat(1, minmax(150px, 1fr));
    }
`;

export const Loading = styled.div`
    padding: 200px 35px;
    height: 90vh;
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
