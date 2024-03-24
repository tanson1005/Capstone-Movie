/**
 * S = {
 *  CardWrapper,
 *  CardBody,
 * }
 */
import * as S from "./card.style";

import { TCard } from "./card.type";
import { Link, useNavigate } from "react-router-dom";

/**
 * Omit<TCard, "id">: loại bỏ thuộc tính id trong TCard
 *
 * {
 *  img: string;
 *  name: string;
 *  shortDesc: string;
 *  price: string;
 * }
 */
export function Card(props: TCard) {
    const navigate = useNavigate();

    return (
        <S.CardWrapper>
            <img
                style={{
                    width: 200,
                }}
                src={props.img}
            />

            <S.CardBody>
                <h3>{props.name}</h3>

                <p>{props.shortDesc}</p>

                <div>
                    <S.Button
                        // onClick={() => {
                        //     // ** js
                        //     // location.href = "/detail";
                        //     // ** react
                        //     navigate("/detail");
                        // }}
                        variant="success"
                    >
                        {/* Cách 1: Link */}
                        <Link to={`/detail/${props.id}`}>Buy now</Link>
                        {/* Cách 2: useNavigate - sử lý logic rồi mới duy chuyển */}
                        {/* Buy now */}
                    </S.Button>
                    <S.Button variant="dark">{props.price}$</S.Button>
                </div>
            </S.CardBody>
        </S.CardWrapper>
    );
}

//
// path-id:
