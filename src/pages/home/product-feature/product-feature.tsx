import { H2 } from "@/components/h2";
import { ListCard } from "@/components/list-card";
import { convertToCards } from "./helper";
// **
import { __mock_data__ } from "./__mock-data__";
import { useEffect, useState } from "react";
import axios from "axios";
import { TCard } from "@/components/list-card/card/card.type";
import { BASE_URL } from "@/constants";
import { axiosWithoutAuth } from "@/services/axios.config";
import { getProduct } from "@/services/product/product.service";
import { IIFE } from "@/utils";

export function ProductFeature() {
    const [cards, setCards] = useState<TCard[]>([]);
    // call api get all product

    // V.1: Tệ nhất
    // useEffect(() => {
    //     // 200
    //     axios
    //         .get(`https://shop.cyberlearn.vn/api/Product`)
    //         .then((resp) => {
    //             const data = resp.data; // undefined

    //             // Cẩn thận thêm 1 chút:
    //             // data?.message: data !== null && data !== undefined && data.message
    //             if (data?.message === "Thành công!") {
    //                 const content = data.content;

    //                 setCards(convertToCards(content));
    //             } else {
    //                 console.log("Error ::: ", data);
    //             }
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    // V.2:
    // useEffect(() => {
    //     // 200
    //     axios
    //         .get(`${BASE_URL}/api/Product`)
    //         .then((resp) => {
    //             const data = resp.data; // undefined

    //             // Cẩn thận thêm 1 chút:
    //             // data?.message: data !== null && data !== undefined && data.message
    //             if (data?.message === "Thành công!") {
    //                 const content = data.content;

    //                 setCards(convertToCards(content));
    //             } else {
    //                 console.log("Error ::: ", data);
    //             }
    //         })
    //         .catch((e) => {
    //             console.log(e);
    //         });
    // }, []);

    // V.3:
    useEffect(() => {
        // 200
        IIFE(async () => {
            try {
                const data = await getProduct();

                if (data?.message === "Thành công!") {
                    const content = data.content;

                    setCards(convertToCards(content));
                } else {
                    console.log("Error ::: ", data);
                }
            } catch (e) {
                console.log({ e });
            }
        });
    }, []);

    return (
        <>
            <H2 width={700}>Product Feature</H2>

            <ListCard cards={cards} />
        </>
    );
}
