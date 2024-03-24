import { getProfile, signup } from "@/services";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
export function Register() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     // 2.
    //     getProfile()
    //         .then(() => {
    //             // Lưu vào redux
    //         })
    //         .catch(console.log)
    // }, [])

    return (
        <div className="flex justify-center my-4">
            <Formik
                initialValues={{
                    name: "",
                    phone: "",
                    email: "",
                    password: "",
                    gender: "",
                }}
                onSubmit={(values) => {
                    // alert(JSON.stringify(values, null, 2));

                    const payload = {
                        ...values,
                        gender: values.gender === 'nam' ? true : false
                    }

                    signup(payload)
                        .then(() => {
                            // Sau khi đăng ký thành công -> chuyển người dùng về trang login
                            navigate("/login")
                        }).catch(e => {
                            alert(e.response.data.message)
                        });

                    // call api
                }}

                validationSchema={
                    Yup.object({
                        name: Yup.string().min(2, "Không được ít hơn 2 ký tự.").required(),
                        phone: Yup.string().min(10, "Không đúng định dạng số điện thoại").max(12, "Không đúng định dạng số điện thoại").required(),
                        email: Yup.string().email("Không đúng định dạng").required(),
                        password: Yup.string().min(8, "Không được phép nhỏ hơn 8 ký tự").required(),
                        gender: Yup.string().required()
                    })
                }
            >
                <Form>
                    <Field
                        className="border border-solid border-black"
                        name="name"
                        placeholder="name"
                    />
                    <ErrorMessage name="name" />
                    <br />

                    <Field
                        className="border border-solid border-black"
                        name="phone"
                        placeholder="+84212121"
                    />
                    <ErrorMessage name="phone" />
                    <br />

                    <Field
                        className="border border-solid border-black"
                        name="email"
                        placeholder="abc@gmail.com"
                    />
                    <ErrorMessage name="email" />
                    <br />

                    <Field
                        className="border border-solid border-black"
                        name="password"
                        placeholder="123456"
                    />
                    <ErrorMessage name="password" />
                    <br />

                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field
                                className="border border-solid border-black"
                                type="radio"
                                name="gender"
                                value="nam"
                            />
                            Nam
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="nu" />
                            Nữ
                        </label>
                    </div>
                    <ErrorMessage name="gender" />

                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}
