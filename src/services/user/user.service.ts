import { axiosWithAuth, axiosWithoutAuth } from './../axios.config';

type TPayloadSignup = {
    email: string,
    phone: string,
    name: string,
    gender: boolean,
    password: string;
}

export const signup = (payload: TPayloadSignup) => {
    // Không sử dụng .post
    return axiosWithoutAuth("/Users/signup", {
        method: 'post',
        data: payload,
    })
}

type TPayloadSignin = Pick<TPayloadSignup, "email" | "password">

export const signin = (payload: TPayloadSignin) => {
    return axiosWithoutAuth("/Users/signin", {
        method: "post",
        data: payload
    })

}

export const getProfile = () => {
    return axiosWithAuth("/Users/getProfile", {
        method: 'post'
    })
}
