import { ACCESS_TOKEN } from "@/constants";
import { getProfile, signin } from "@/services";
import { saveLocalStorage } from "@/utils";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/auth/auth.slice.ts";

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { handleSubmit, touched, errors, getFieldProps } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        onSubmit: (values) => {
            signin(values)
                .then((r) => {
                    // ** Sau khi đăng nhập thành công thì lưu vào localStorage
                    saveLocalStorage(ACCESS_TOKEN, r.data.content.accessToken);

                    // ** di chuyển về trang home
                    navigate("/");
                    // accessToken ???
                    // Duy trì trạng thái đặng nhập.
                    // Được lưu tại localStorage.
                    // accessToken: nhận dạng bản thân user đã đăng nhập
                    // Sau khi đăng nhập vào thì các bạn được cấp cho một cái thẻ (accessToken) để đi ra vào thuận tiện mà không cần phải nhập lại email + pw

                    // refreshToken

                    // 2.
                    getProfile()
                        .then((res) => {
                            // Lưu vào redux
                            dispatch(setUser(res.data.content));
                        })
                        .catch(console.log);
                })
                .catch((e) => {
                    alert(e.response.data.message);
                });

            // alert(JSON.stringify(values, null, 2));
        },

        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Nhập ít nhất là 8 ký tự")
                .required("Required"),

            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
        }),
    });

    return (
        <div className="flex justify-center my-4">
            <form onSubmit={handleSubmit}>
                <input
                    className="border border-solid border-black"
                    placeholder="Email"
                    type="email"
                    // **
                    {...getFieldProps("email")}
                />
                {touched.email && errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                )}
                <br />
                <input
                    className="border border-solid border-black my-4"
                    placeholder="Password"
                    type="password"
                    // **
                    {...getFieldProps("password")}
                />
                {touched.password && errors.password && (
                    <p className="text-red-500">{errors.password}</p>
                )}
                <br />
                <button
                    type="submit"
                    className="px-4 shadow-md shadow-slate-600 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
