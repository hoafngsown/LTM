interface IEditManageFormProps {
  // initialData: Partial<ManageInfoPut>;
  // onSubmit: (info: Partial<ManageInfoPut>) => any;
  // onClose: () => void;
}

export const EditManageForm = (props: IEditManageFormProps) => {
  // const isSubmitted = React.useRef(false);
  // const formik = useFormik<any>({
  //   initialValues: {
  //     name: props.initialData?.name,
  //     id: props.initialData?.userName,
  //     password: props.initialData?.password,
  //     hotel: props.initialData?.hotelId
  //       ? {
  //           hotelId: props.initialData?.hotelId,
  //           name: props.initialData?.hotelName,
  //         }
  //       : null,
  //     userName: props.initialData?.userName,
  //   },
  //   validationSchema: editInformationSchema,
  //   onSubmit: (values) => {
  //     const params = {
  //       name: values?.name,
  //       password: values?.password,
  //       hotelId: props.initialData?.hotelId,
  //       userName: values.userName,
  //       id: props.initialData.id as number,
  //     } as Partial<ManageInfoPut>;
  //     props.onSubmit(params);
  //   },
  // });

  return (
    <>
    </>
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
    //         type="text"
    //         name="userName"
    //         // required
    //         isSubmitted={isSubmitted.current}
    //         isDisabled
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

    //     <div className="custom-input">
    //       <FormSelect
    //         isDisabled
    //         label="ホテル"
    //         formik={formik}
    //         name="hotel"
    //         required
    //         isSubmitted={isSubmitted.current}
    //         listOption={[]}
    //         valueOption="hotelId"
    //         textOption="name"
    //         height={48}
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
};
