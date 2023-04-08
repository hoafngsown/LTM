import * as yup from "yup"

export const validationSchema = yup.object({
  userName: yup.string().required("IDを入力してください"),
  password: yup
    .string()
    .min(8, "8文字以上で入力してください")
    .max(16, "16文字以内で入力してください")
    .required("パスワードを入力してください"),
})
