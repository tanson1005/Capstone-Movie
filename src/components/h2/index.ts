import { styled } from "styled-components";

type TH2 = {
    width: number;
};
export const H2 = styled.h2<TH2>`
    padding: 1rem 2rem;

    font-size: 4rem;
    color: white;

    background: linear-gradient(180deg, #f21299 0%, #1b02b5 100%);

    width: ${(props) => {
        if (props.width) {
            return props.width + "px";
        } else {
            return "100%";
        }
    }};
`;
