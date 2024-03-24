import { axiosWithoutAuth } from "../axios.config";
import { IProductApi } from "./product.type";

// // 1. Callback function
// export const getProduct = (cb: any) => {
//     // Khi nào api gọi thành công thì mình sẽ gọi lại call back function truyền vào

//     axiosWithoutAuth
//         .get(`/Product`)
//         .then(cb)
//         .catch((e) => {
//             console.log(e);
//         });
// };

// // 2. Promise
// export const getProduct = () => {
//     return axiosWithoutAuth.get(`/Product`).then((resp) => resp.data); // trả về 1 promise

//     // Bốc tách thẳng giá trị và trả về cho chúng ta
//     // Không cần phải để mỗi nơi sử dụng tự bốc tách riêng
// };

// 3. Async Await
export const getProduct = async () => {
    try {
        const resp = await axiosWithoutAuth.get(`/Product`);

        const data = resp.data;

        return data;
    } catch (e) {
        // Trả về lỗi
        // throw quang loi ra.
        throw new Error(e);
    }
};

/**
 * async await: luôn trả về một promise
 *
 * nếu function có async nhưng không sử dụng await thì nó cũng là 1 function bình thường
 * - khi nào có sử dụng await thì mới nhận diện đó là function bất đồng bộ.
 *
 *
 * return luôn trả về kết quả thành công
 *
 * trả về kết quả thất bại throw new Error(__)
 *
 */

export const getProductById = (id: number | string): Promise<IProductApi> => {
    return axiosWithoutAuth
        .get(`Product/getbyid?id=${id}`)
        .then((resp) => resp.data)
        .then((resp) => resp.content);
};
