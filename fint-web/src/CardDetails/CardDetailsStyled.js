import styled from 'styled-components';
import { Row } from '@cred/neopop-web/lib/components/Helpers';

export const CardDetailsStyled = styled(Row)`
    display: flex;
    align-items: left;
    text-align: center;
    .heading {
        font-size: 70px;
        line-height: 48px;
    }
    .details {
        max-width: 300px;
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 130px;
        .heading {
            font-size: 46px;
            line-height: 0;
        }
        .details {
            font-size: 15px;
        }
    }
`;

export const RootPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: #0d0d0d;
    padding: 30px 160px;
    .sans-serif {
        font-family: 'Gilroy', 'Trebuchet MS', Helvetica, sans-serif;
    }
    .serif {
        font-family: 'Cirka', 'Times New Roman', Times, serif;
    }
    @media screen and (max-width: 768px) {
        padding: 50px;
    }
`;