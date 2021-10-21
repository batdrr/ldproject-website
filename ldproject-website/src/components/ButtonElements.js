import styled from 'styled-components'
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? 'transparent' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-ease-in-out;

    &:hover {
        transition: all 0.2ms ease-in-out;
        background: ${({primary}) => (primary ? '#1D777C' : '#010606')};
        color: #fff;
    }
`;