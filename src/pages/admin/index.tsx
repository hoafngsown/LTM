import { getApi, putApi } from "@/api/api";
import { API_PATH } from "@/api/path";
import IconEdit from "@/assets/images/ic-edit.svg";
import MyBreadcrumbs from "@/components/common/Breadcrumbs";
import MyDialog from "@/components/common/Dialog";
import { AdminInfo, User } from "@/types/admin";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { toast } from "react-toastify";

import Spinner from "@/components/common/Spinner";
import { SUCCESS } from "@/constants/messages";
import { useCallback, useState } from "react";
import { useMutation, useQuery } from "react-query";
import EditInformationForm from "./components/EditInformationForm";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { hidePassword } from "@/utils/common";

const columns = ["NO", "名前", "ID", "パスワード", "操作"];

const DEFAULT_ITEM_PER_PAGE = 10;

const Admin = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  const [adminInfoEdit, setAdminInfoEdit] = useState<Partial<AdminInfo>>({
    name: "",
    password: "",
    id: -1,
  });

  const [togglePasswordIndex, setTogglePasswordIndex] = useState(-1);

  // const getListAdmin = async () => {
  //   const res = await getApi(API_PATH.ADMIN, {
  //     role: RoleAdmin.ADMIN,
  //     page: 1,
  //     itemsPerPage: DEFAULT_ITEM_PER_PAGE,
  //   });
  //   return res.data;
  // };

  // const { mutate } = useMutation({
  //   mutationFn: (params: Partial<AdminInfo>) =>
  //     putApi(`${API_PATH.ADMIN}/${params.id}`, {
  //       name: params.name,
  //       password: params.password,
  //       userName: params.userName,
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

  const handleOpenDialog = (adminInfo: User) => {
    // const adminInforEdit = {
    //   name: adminInfo.name,
    //   password: adminInfo.passwordDecode,
    //   userName: adminInfo.userName,
    //   id: adminInfo.id,
    // };
    // setAdminInfoEdit(adminInforEdit);
    setIsOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  // const handleEditAdminInfo = useCallback(
  //   (info: Partial<AdminInfo>) => {
  //     mutate(info);
  //   },
  //   [mutate]
  // );

  // const { isLoading, data, isFetching, refetch } = useQuery({
  //   queryKey: ["admin"],
  //   queryFn: async () => await getListAdmin(),
  //   keepPreviousData: true,
  //   onError(error: any) {
  //     console.log({ error });
  //   },
  // });

  const handleTogglePassword = (index: number) => {
    if (index === togglePasswordIndex) return setTogglePasswordIndex(-1);
    setTogglePasswordIndex(index);
  };

  return (
    <>
      {/* <div className="flex items-center justify-between">
        <span className="font-medium text-base leading-5">管理者</span>
        <MyBreadcrumbs routes={adminRoutes} />
      </div> */}
      {/* TABLE CONTAINER */}
      {/* <div className="bg-white mt-6 p-6 rounded-[5px]">
        <div className="mt-6">
          <div className="tableContainer">
            <TableContainer component={Paper}>
              <Table
                sx={{ width: "100%", height: "100%" }}
                aria-label="customized table"
              >
                <TableHead className="tableHeader">
                  <TableRow>
                    {columns.map((col: string, index: number) => (
                      <TableCell
                        key={index}
                        align={index === columns.length - 1 ? "right" : "left"}
                      >
                        {col}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody className="tableBody">
                  {data &&
                    data?.data &&
                    data?.data.length > 0 &&
                    (data.data as AdminInfo[]).map(
                      (row: AdminInfo, index: number) => (
                        <TableRow key={index} sx={{ m: 0, p: 0 }}>
                          <TableCell
                            className="w-[72px]"
                            component="th"
                            scope="row"
                            align="left"
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell align="left">{row?.name}</TableCell>
                          <TableCell align="left" className="w-[205px]">
                            {row?.userName}
                          </TableCell>
                          <TableCell className="w-[205px]" align="left">
                            <div className="flex items-center justify-between ">
                              <span>
                                {togglePasswordIndex === index
                                  ? row?.passwordDecode
                                  : hidePassword(row?.passwordDecode)}
                              </span>
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => handleTogglePassword(index)}
                              >
                                {togglePasswordIndex === index ? (
                                  <Visibility fontSize="small" />
                                ) : (
                                  <VisibilityOff fontSize="small" />
                                )}
                              </IconButton>
                            </div>
                          </TableCell>
                          <TableCell align="right" className="w-[80px]">
                            <button onClick={() => handleOpenDialog(row)}>
                              <img src={IconEdit} alt="ic-edit" />
                            </button>
                          </TableCell>
                        </TableRow>
                      )
                    )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div> */}
      {/* <MyDialog
        open={isOpenDialog}
        onClose={handleCloseDialog}
        doAction={() => { }}
        title="管理者"
        isShowAction={false}
      >
        <div>
          <EditInformationForm
            initialData={adminInfoEdit}
            onSubmit={handleEditAdminInfo}
            onClose={handleCloseDialog}
          />
        </div>
      </MyDialog> */}
      {/* {isLoading || isFetching ? <Spinner /> : ""} */}
    </>
  );
};

export default Admin;
