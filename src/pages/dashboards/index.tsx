import MyBreadcrumbs from '@/components/common/Breadcrumbs';
import { manageUserRoutes } from '@/constants/routes';

import IconEdit from "@/assets/images/ic-edit.svg";
import { AdminInfo } from "@/types/admin";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { hidePassword } from "@/utils/common";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import MyDialog from '@/components/common/Dialog';
import EditInformationForm from '../admin/components/EditInformationForm';
import { useState } from 'react';

const columns = ['ID', 'Name', 'Date Of Birth', 'Location', 'Sex', 'Action'];

const data = [
  {
    id: 1,
    name: 'Ac Wy',
    birthday: "12/03/2002",
    location: "Da Nang",
    sex: "Male",
    // action: ""
  }
]

const Dashboards = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [currentUser] = useRecoilState(currentUserState);

  // const [listFilterHotel, setListFilterHotel] = useState([]);
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  // const role = currentUser.role;
  // const hotelId = currentUser.hotelId;

  // const [hotelSelectValue, setHotelSelectValue] = useState(-1);
  // const [dateRangeValue, setDateRangeValue] = useState<any>([
  //   {
  //     startDate: searchParams.get("dayStart")
  //       ? new Date(searchParams.get("dayStart"))
  //       : new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  //     endDate: searchParams.get("dayEnd")
  //       ? moment(new Date(searchParams.get("dayEnd"))).isAfter(new Date())
  //         ? new Date()
  //         : new Date(searchParams.get("dayEnd"))
  //       : new Date(),
  //     key: "selection",
  //   },
  // ]);

  // const handleChangeDatePicker = useCallback(
  //   (startDate: Date, endDate: Date) => {
  //     setDateRangeValue([
  //       {
  //         startDate,
  //         endDate,
  //         key: "selection",
  //       },
  //     ]);

  //     searchParams.set("dayStart", moment(startDate).format("YYYY-MM-DD"));
  //     searchParams.set("dayEnd", moment(endDate).format("YYYY-MM-DD"));
  //     setSearchParams(searchParams);
  //   },
  //   [searchParams, setSearchParams]
  // );

  // const handleChangeFilterHotel = useCallback(
  //   (value: number, id: number) => {
  //     searchParams.set(`date${id}`, value.toString());
  //     setSearchParams(searchParams);
  //   },
  //   [searchParams, setSearchParams]
  // );

  // const handleSelectHotel = useCallback(
  //   (id: number) => {
  //     setHotelSelectValue(id);
  //     searchParams.set(`hotelEmployeeId`, id.toString());
  //     setSearchParams(searchParams);
  //   },
  //   [searchParams, setSearchParams]
  // );

  // const getEmployee = async () => {
  //   if (!hotelSelectValue || hotelSelectValue === -1) return;
  //   try {
  //     const { data } = await getApi(
  //       `${API_PATH.HOTEL}/${hotelSelectValue}/dashboard/employee`,
  //       {
  //         dayStart:
  //           searchParams.get("dayStart") ||
  //           moment(dateRangeValue[0]?.startDate).format("YYYY-MM-DD"),
  //         dayEnd:
  //           searchParams.get("dayEnd") ||
  //           moment(dateRangeValue[0]?.endDate).format("YYYY-MM-DD"),
  //         timezone: new Date().getTimezoneOffset() / 60,
  //       }
  //     );
  //     return data;
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // const getHotelDashboard = async (id: number) => {
  //   if (!id) return;
  //   try {
  //     const res = await getApi(`${API_PATH.HOTEL}/${id}/dashboard/hotel`, {
  //       typeDate: searchParams.get(`date${id}`) || ETypeDate.WEEK,
  //       today: moment(new Date()).format("YYYY-MM-DD"),
  //       id: id,
  //       timezone: new Date().getTimezoneOffset() / 60,
  //     });
  //     return res;
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  // const results = useQueries(
  //   listFilterHotel && listFilterHotel?.length > 0
  //     ? listFilterHotel?.map((item) => ({
  //       queryKey: [
  //         `dashboard_hotel_${item?.id}`,
  //         searchParams.get(`date${item?.id}`),
  //       ],
  //       queryFn: () => getHotelDashboard(item?.id),
  //     }))
  //     : []
  // );

  // const employeeResponse = useQuery({
  //   queryKey: ["employee", dateRangeValue, hotelSelectValue],
  //   queryFn: async () => await getEmployee(),
  //   keepPreviousData: true,
  //   onError(error: any) {
  //     console.log({ error });
  //   },
  // });

  // useEffect(() => {
  //   const startDay =
  //     searchParams.get("startDay") ||
  //     moment(dateRangeValue[0]?.startDate).format("YYYY-MM-DD");
  //   let endDay =
  //     searchParams.get("endDay") ||
  //     moment(dateRangeValue[0]?.endDate).format("YYYY-MM-DD");
  //   const today =
  //     searchParams.get("today") || moment(new Date()).format("YYYY-MM-DD");
  //   const hotelId =
  //     searchParams.get("hotelEmployeeId") || listFilterHotel[0]?.id || 0;
  //   listFilterHotel &&
  //     listFilterHotel?.length > 0 &&
  //     listFilterHotel?.forEach((item) => {
  //       let params = ETypeDate.WEEK.toString();
  //       if (!!searchParams.get(`date${item?.id}`)) {
  //         params = searchParams.get(`date${item?.id}`);
  //       }
  //       searchParams.set(`date${item?.id}`, params);
  //     });

  //   if (moment(endDay).isAfter(today)) {
  //     endDay = JSON.parse(JSON.stringify(today));
  //   }

  //   searchParams.set("hotelEmployeeId", hotelId.toString());
  //   searchParams.set("startDay", startDay);
  //   searchParams.set("endDay", endDay);
  //   searchParams.set("today", today);
  //   setSearchParams(searchParams);
  // }, []);

  // useEffect(() => {
  //   if (role !== RoleAdmin.ADMIN && hotelId) {
  //     const currentHotel = LIST_HOTEL?.find((hotel) => hotel?.id === hotelId);
  //     setListFilterHotel([{ ...currentHotel }]);
  //     setHotelSelectValue(currentHotel?.id);
  //   } else {
  //     setHotelSelectValue(LIST_HOTEL[0]?.id);
  //     setListFilterHotel(LIST_HOTEL);
  //   }
  // }, [hotelId, role]);

  return (
    // <div className="w-full">
    //   <div>
    //     <h2 className="text-[1rem] font-medium mb-2">ダッシュボード</h2>
    //   </div>
    //   <div className="grid grid-cols-2 gap-4 mt-[30px]">
    //     {results &&
    //       results?.length > 0 &&
    //       results?.map((item: any, index: number) =>
    //         item?.isLoading ? (
    //           <Skeleton
    //             sx={{ opacity: 0.5 }}
    //             variant="rectangular"
    //             width="100%"
    //             height={300}
    //             key={"ChartsPie" + index}
    //           />
    //         ) : item?.status === "success" ? (
    //           <ChartsPie
    //             initFilter={
    //               searchParams.get(`date${item?.data?.config?.params?.id}`) ||
    //               ETypeDate.WEEK.toString()
    //             }
    //             key={"ChartsPie" + index}
    //             onChangeFilter={handleChangeFilterHotel}
    //             data={item?.data?.data}
    //             id={item?.data?.config?.params?.id}
    //           />
    //         ) : (
    //           <></>
    //         )
    //       )}
    //   </div>
    //   <div className="w-full">
    //     {employeeResponse?.isLoading ? (
    //       <Skeleton variant="rectangular" width="100%" height="100%" />
    //     ) : (
    //       <ChartsColumn
    //         isAdmin={role === RoleAdmin.ADMIN && hotelId === null}
    //         initDate={dateRangeValue}
    //         onChange={handleChangeDatePicker}
    //         initSelectValue={hotelSelectValue}
    //         onChangeSelect={handleSelectHotel}
    //         data={employeeResponse?.data}
    //       />
    //     )}
    //   </div>
    // </div>

    <>
      <div className="flex items-center justify-between">
        <span className="font-medium text-base leading-5">Manage User</span>
        {/* <MyBreadcrumbs routes={manageUserRoutes} /> */}
      </div>
      {/* TABLE CONTAINER */}
      <div className="bg-white mt-6 p-6 rounded-[5px]">
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
                  {/* {data &&
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
                    )} */}
                  {data &&
                    data.length > 0 &&
                    data.map(
                      (row: any, index: number) => (
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
                            {row?.birthday}
                          </TableCell>
                          <TableCell className="w-[205px]" align="left">
                            <div className="flex items-center justify-between ">
                              <span>
                                {row.location}
                              </span>
                              {/* <IconButton
                                aria-label="toggle password visibility"
                                // onClick={() => handleTogglePassword(index)}
                              >
                                {togglePasswordIndex === index ? (
                                  <Visibility fontSize="small" />
                                ) : (
                                  <VisibilityOff fontSize="small" />
                                )}
                              </IconButton> */}
                            </div>
                          </TableCell>
                          <TableCell className="w-[205px]" align="left">
                            <div className="flex items-center justify-between ">
                              <span>
                                {row.sex}
                              </span>

                            </div>
                          </TableCell>
                          <TableCell align="right" className="w-[80px]">
                            <button
                              onClick={() => setIsOpenDialog(true)}
                            >
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
      </div>
      <MyDialog
        open={isOpenDialog}
        onClose={() => setIsOpenDialog(false)}
        doAction={() => { }}
        title="Fukuda"
        isShowAction={false}
      >
        <div>
          {/* <EditInformationForm
            initialData={adminInfoEdit}
            onSubmit={handleEditAdminInfo}
            onClose={handleCloseDialog}
          /> */}
        </div>
      </MyDialog>
      {/* {isLoading || isFetching ? <Spinner /> : ""} */}
    </>
  );
};

export default Dashboards;
