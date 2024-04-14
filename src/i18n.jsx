import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Login": "Đăng nhập",
      "UserName": "Tài khoản",
      "PassWord": "Mật khẩu",
      "Forgot PassWord ?": "Quên mật khẩu",
      "Don't have an account ?": "Bạn chưa có tài khoản ?",
      "Sign Up": "Đăng ký",
      "Full Name": "Họ và tên",
      "Phone Number": "Số điện thoại",
      "Group ID": "Mã nhóm",
      "Already have an account": "Bạn đã có tài khoản ?",
    },
  },
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n }; 