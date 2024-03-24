import { TCard } from "@/components/list-card/card/card.type";
import { TCardApi } from "../__mock-data__";

export const convertToCards = (list: TCardApi[]): TCard[] => {
    return list.map((i) => {
        return {
            id: String(i.id),
            img: i.image,
            name: i.name,
            shortDesc: i.shortDescription,
            price: String(i.price),
        };
    });
};
