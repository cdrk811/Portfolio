import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;

    @media (max-width: 960px) {
        padding: 0px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1350px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center
    width: 100%;
    padding: 80px 0;
    gap: 12px;
`;

export const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary };

    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.text_primary };
    max-width: 800px;

    @media (max-width: 768px) {
        max-width: 600px;
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;