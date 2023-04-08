import FormPasswordField from "@/components/form/FormPasswordField";
import FormTextField from "@/components/form/FormTextField";
import { COLORS } from "@/constants";
// import { editInformationSchema } from "@/libs/validations/admin";
import { AdminInfo } from "@/types/admin";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import React from "react";

interface IEditInformationForm {
  initialData: Partial<AdminInfo>;
  onSubmit: (info: Partial<AdminInfo>) => any;
  onClose: () => void;
}

function EditInformationForm(props: IEditInformationForm) {
  // const isSubmitted = React.useRef(false);

  // const formik = useFormik<any>({
  //   initialValues: {
  //     userName: props.initialData.userName,
  //     password: props.initialData.password,
  //     name: props.initialData.name,
  //   },
  //   validationSchema: editInformationSchema,
  //   onSubmit: (values) => {
  //     const adminInfo = {
  //       ...props.initialData,
  //       name: values?.name,
  //       userName: values?.userName,
  //       password: values?.password,
  //     } as Partial<AdminInfo>;
  //     props.onSubmit(adminInfo);
  //   },
  // });

  return (
    <></>
    // <form
    //   onSubmit={(e) => {
    //     isSubmitted.current = true;
    //     formik.handleSubmit(e);
    //   }}
    //   noValidate
    // >
    //   <div className="flex flex-col gap-y-5">
    //     <div className="custom-input min-w-[550px]">
    //       <FormTextField
    //         key="name"
    //         label="名前"
    //         formik={formik}
    //         type="text"
    //         name="name"
    //         required
    //         isSubmitted={isSubmitted.current}
    //       />
    //     </div>
    //     <div className="custom-input">
    //       <FormTextField
    //         key="userName"
    //         label="ID"
    //         formik={formik}
    //         type="userName"
    //         name="userName"
    //         // required
    //         isDisabled
    //         isSubmitted={isSubmitted.current}
    //       />
    //     </div>
    //     <div>
    //       <FormPasswordField
    //         key="password"
    //         label="パスワード"
    //         formik={formik}
    //         name="password"
    //         required
    //         isSubmitted={isSubmitted.current}
    //         className="custom-input"
    //       />
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-end gap-x-4 mt-9">
    //     <Button
    //       sx={{
    //         padding: "10px 16px 10px 16px",
    //         backgroundColor: COLORS.secondaryButton,
    //         color: COLORS.primary,
    //       }}
    //       onClick={props.onClose}
    //     >
    //       キャンセル
    //     </Button>
    //     <Button
    //       sx={{
    //         padding: "10px 16px 10px 16px",
    //         backgroundColor: COLORS.primary,
    //         color: COLORS.white,
    //         "&:hover": {
    //           backgroundColor: COLORS.primary,
    //           opacity: 0.7,
    //         },
    //       }}
    //       autoFocus
    //       type="submit"
    //     >
    //       保存
    //     </Button>
    //   </div>
    // </form>
  );
}

export default EditInformationForm;
