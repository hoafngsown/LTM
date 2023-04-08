
const columns = ["NO", "名前", "ID", "パスワード", "ホテル", "操作"];

const DEFAULT_ITEM_PER_PAGE = 10;

export enum DialogAction {
  POST = "post",
  PUT = "put",
}

const DEFAULT_EDIT_MANAGE_FORM = {
  name: "",
  password: "",
  id: -1,
  userName: "",
  hotelId: -1,
};

const Manage = () => {
  // const [isOpenDialog, setIsOpenDialog] = useState(false);
  // const [togglePasswordIndex, setTogglePasswordIndex] = useState(-1);

  // const [manageInfoEdit, setManageInfoEdit] = useState<Partial<ManageInfoPut>>(
  //   JSON.parse(JSON.stringify(DEFAULT_EDIT_MANAGE_FORM))
  // );

  // const { mutate } = useMutation({
  //   mutationFn: (info: Partial<ManageInfoPut>) =>
  //     putApi(`${API_PATH.ADMIN}/${info.id}`, {
  //       name: info.name,
  //       userName: info.userName,
  //       password: info.password,
  //       hotelId: +info.hotelId,
  //       role: RoleAdmin.MANAGE,
  //     }),
  //   onSuccess: () => {
  //     toast.success(SUCCESS.UPDATE_SUCCESS, {
  //       position: "top-right",
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     refetch();
  //     handleCloseDialog();
  //   },
  //   onError(error: any) {
  //     console.log({ error });
  //   },
  // });

  // const handleDialog = (info: ManageInfo) => {
  //   const params: Partial<ManageInfoPut> = {
  //     name: info?.name,
  //     userName: info?.userName,
  //     password: info?.passwordDecode,
  //     id: info?.id,
  //     hotelId: info?.hotel?.id,
  //     hotelName: info?.hotel?.name,
  //   };
  //   setManageInfoEdit(params);
  //   handleOpenDialog();
  // };

  // const handleOpenDialog = () => {
  //   setIsOpenDialog(true);
  // };

  // const handleCloseDialog = () => {
  //   setIsOpenDialog(false);
  // };

  // const handleEditManageInfo = useCallback(
  //   (info: Partial<ManageInfoPut>) => {
  //     mutate(info);
  //   },
  //   [mutate]
  // );

  // const handleTogglePassword = (index: number) => {
  //   if (index === togglePasswordIndex) return setTogglePasswordIndex(-1);
  //   setTogglePasswordIndex(index);
  // };

  // const getListManage = async () => {
  //   const res = await getApi(API_PATH.ADMIN, {
  //     page: 1,
  //     itemsPerPage: DEFAULT_ITEM_PER_PAGE,
  //     role: RoleAdmin.MANAGE,
  //   });
  //   return res?.data;
  // };

  // const { isLoading, data, isFetching, refetch } = useQuery({
  //   queryKey: ["manage"],
  //   queryFn: async () => await getListManage(),
  //   keepPreviousData: true,
  // });

  return <div></div>
  // (
  //   <>
  //     <div className="flex items-center justify-between">
  //       <span className="font-medium text-base leading-5">マネージャー</span>
  //       <MyBreadcrumbs routes={manageRoutes} />
  //     </div>
  //     <div className="bg-white mt-6 p-6 rounded-[5px]">
  //       {/* TABLE CONTAINER */}
  //       <div className="tableContainer">
  //         <TableContainer component={Paper}>
  //           <Table
  //             sx={{ width: "100%", height: "100%" }}
  //             aria-label="customized table"
  //           >
  //             <TableHead className="tableHeader">
  //               <TableRow>
  //                 {columns.map((col: string, index: number) => (
  //                   <TableCell
  //                     key={index}
  //                     align={index === columns.length - 1 ? "right" : "left"}
  //                   >
  //                     {col}
  //                   </TableCell>
  //                 ))}
  //               </TableRow>
  //             </TableHead>
  //             <TableBody className="tableBody">
  //               {data &&
  //                 data?.data &&
  //                 data?.data?.length > 0 &&
  //                 (data.data as ManageInfo[])?.map(
  //                   (row: ManageInfo, index: number) => (
  //                     <TableRow key={index} sx={{ m: 0, p: 0 }}>
  //                       <TableCell
  //                         className="w-[72px]"
  //                         component="th"
  //                         scope="row"
  //                         align="left"
  //                       >
  //                         {index + 1}
  //                       </TableCell>
  //                       <TableCell align="left">{row?.name}</TableCell>

  //                       <TableCell align="left" className="w-[205px]">
  //                         {row?.userName}
  //                       </TableCell>
  //                       <TableCell align="left" className="w-[250px]">
  //                         <div className="flex items-center justify-between ">
  //                           <span>
  //                             {togglePasswordIndex === index
  //                               ? row?.passwordDecode
  //                               : hidePassword(row?.passwordDecode)}
  //                           </span>
  //                           <IconButton
  //                             aria-label="toggle password visibility"
  //                             onClick={() => handleTogglePassword(index)}
  //                           >
  //                             {togglePasswordIndex === index ? (
  //                               <Visibility fontSize="small" />
  //                             ) : (
  //                               <VisibilityOff fontSize="small" />
  //                             )}
  //                           </IconButton>
  //                         </div>
  //                       </TableCell>
  //                       <TableCell align="left" className="w-[250px]">
  //                         {row?.hotel?.name}
  //                       </TableCell>
  //                       <TableCell align="right" className="w-[80px]">
  //                         <button onClick={() => handleDialog(row)}>
  //                           <img src={IconEdit} alt="ic-edit" />
  //                         </button>
  //                       </TableCell>
  //                     </TableRow>
  //                   )
  //                 )}
  //             </TableBody>
  //           </Table>
  //         </TableContainer>
  //       </div>
  //     </div>
  //     <MyDialog
  //       open={isOpenDialog}
  //       onClose={handleCloseDialog}
  //       doAction={() => { }}
  //       title="マネージャー"
  //       isShowAction={false}
  //     >
  //       <div>
  //         <EditManageForm
  //           initialData={manageInfoEdit}
  //           onSubmit={handleEditManageInfo}
  //           onClose={handleCloseDialog}
  //         />
  //       </div>
  //     </MyDialog>
  //     {isLoading || isFetching ? <Spinner /> : ""}
  //   </>
  // );
};

export default Manage;
