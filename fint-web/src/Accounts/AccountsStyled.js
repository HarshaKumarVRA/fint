import styled from 'styled-components';
import { Row } from '@cred/neopop-web/lib/components/Helpers';

export const AccountsStyled = styled(Row)`
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