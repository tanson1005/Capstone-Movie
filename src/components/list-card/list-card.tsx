import styled from "styled-components";
import { Card } from "./card";
import { TCard } from "./card/card.type";

// Quy ước để Component hoạt động đúng chức năng.

type Props = {
    // -- Or -- cards: Array<Card>;
    cards: TCard[];
};

const ListCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`;

export function ListCard(props: Props) {
    return (
        <ListCardWrapper>
            {props.cards.map((i) => {
                return (
                    <Card
                        id={i.id}
                        name={i.name}
                        img={i.img}
                        shortDesc={i.shortDesc}
                        price={i.price}
                        // -- id
                        key={i.id}
                    />
                );
            })}
        </ListCardWrapper>
    );
}
