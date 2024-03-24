import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
    border: 1px solid black;
    border-radius: 0.8rem;
`;

export const CardBody = styled.div`
    padding: 1rem 2rem;
`;

// -- Button --
type TVariant = "success" | "dark" | "primary" | "default";

type TButton = {
    variant: TVariant;
};
// -- Record --: giúp định nghĩa object có thuộc tính và giá trị

// Record<TType, TValue>: giúp định nghĩa object: thuộc tính có kiểu dữ liệu là TType và giá trị có kiểu dữ liệu là TValue
type TVariantButton = Record<TVariant, any>;
// {
//     success: any;
//     dark: any;
//     primary: any;
//     default: any;
// };

const VariantButton: TVariantButton = {
    success: css`
        color: white;
        background-color: green;
    `,
    dark: css`
        color: white;
        background-color: black;
    `,
    primary: css`
        color: white;
        background-color: blue;
    `,
    default: css``,
};

export const Button = styled.button<TButton>`
    /* color
    background-color
    */

    /* color: ${() => ""};
    background-color: ${() => ""}; */

    ${(props) => {
        return VariantButton[props.variant];

        switch (props.variant) {
            case "success": {
                // style - css
                return css`
                    color: white;
                    background-color: green;
                `;
                // style - JSX
                // return {
                //     color: "white",
                //     backgroundColor: "green",
                // };
            }
            case "dark": {
                return {
                    color: "white",
                    backgroundColor: "black",
                };
            }
            default: {
                return {
                    color: "",
                    backgroundColor: "",
                };
            }
        }
    }}
`;
