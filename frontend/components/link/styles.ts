import Link from "next/link";
import styled from "styled-components";

export const Container = styled(Link)`
    font-size: 15px;
    text-decoration: none;
    color: black;
    font-weight: bold;

    &:hover{
        cursor: pointer;
        color: gray;
    }
`;