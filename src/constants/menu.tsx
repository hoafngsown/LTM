import {
  DASHBOARD_PATH, MANAGE_REQUEST, SETTINGS
} from "@/constants";

// export const renderMenu = (role: number, hotelId: number) => {
//   return [
//     {
//       title: "Manage User",
//       icon: <img src="/images/icons/menu/dashboard.svg" alt="dashboards" />,
//       url: `${DASHBOARD_PATH}`,
//       isActive: () => window.location.pathname === "/",
//       // isEnable: [RoleAdmin.ADMIN, RoleAdmin.MANAGE].includes(role),
//       isShowDrawerTitle: false,
//     },
//     // {
//     //   title: "アカウント管理",
//     //   icon: <img src="/images/icons/menu/account.svg" alt="dashboards" />,
//     //   isActive: () =>
//     //     [`${ADMIN}`, `${MANAGE}`, `${RECEPTIONIST}`].includes(
//     //       window.location.pathname
//     //     ),
//     //   isEnable: [RoleAdmin.ADMIN].includes(role),
//     //   isShowDrawerTitle: false,
//     //   items: [
//     //     {
//     //       title: "管理者（アドミン）",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Admin" />,
//     //       url: `${ADMIN}`,
//     //       isActive: () => window.location.pathname.startsWith(`${ADMIN}`),
//     //       isEnable: [RoleAdmin.ADMIN].includes(role),
//     //       isShowDrawerTitle: true,
//     //     },
//     //     {
//     //       title: "マネージャー",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Manage" />,
//     //       url: `${MANAGE}`,
//     //       isActive: () => window.location.pathname.startsWith(`${MANAGE}`),
//     //       isEnable: [RoleAdmin.ADMIN].includes(role),
//     //       isShowDrawerTitle: true,
//     //     },
//     //     {
//     //       title: "フロントスタッフ",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Receptionist" />,
//     //       url: `${RECEPTIONIST}`,
//     //       isActive: () =>
//     //         window.location.pathname.startsWith(`${RECEPTIONIST}`),
//     //       isEnable: [RoleAdmin.ADMIN].includes(role),
//     //       isShowDrawerTitle: true,
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "ホテル管理",
//     //   icon: <img src="/images/icons/menu/hotel.svg" alt="dashboards" />,
//     //   isActive: () => checkIsMenuHotel(),
//     //   isEnable: true,
//     //   isShowDrawerTitle: false,
//     //   items: [
//     //     {
//     //       title: "ホテル一覧",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Hotel list" />,
//     //       url: `${HOTEL_PATH.LIST}`,
//     //       isActive: () => window.location.pathname === HOTEL_PATH.LIST,
//     //       isEnable: [RoleAdmin.ADMIN, RoleAdmin.MANAGE].includes(role),
//     //       isShowDrawerTitle: true,
//     //     },
//     //     {
//     //       title: "Coco Hotel Tiara",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Coco Hotel Tiara" />,
//     //       url: "",
//     //       isActive: () =>
//     //         window.location.pathname.startsWith("/co-co-hotel-tiara"),
//     //       isEnable: isEnableHotelRole(role, hotelId, 1),
//     //       isShowDrawerTitle: true,

//     //       items: [
//     //         {
//     //           title: "スタッフ管理",
//     //           url: `${HOTEL_PATH.CO_CO_HOTEL_TIARA.STAFF}?page=1`,
//     //           isActive: () =>
//     //             window.location.pathname.startsWith(
//     //               `${HOTEL_PATH.CO_CO_HOTEL_TIARA.STAFF}`
//     //             ),
//     //           isEnable: isEnableStaffRole(role, hotelId, 1),
//     //           isShowDrawerTitle: true,
//     //         },
//     //         {
//     //           title: "作業",
//     //           url: "",
//     //           isActive: () => window.location.pathname.includes("/task/"),
//     //           isShowDrawerTitle: true,

//     //           isEnable: isEnableHotelRole(role, hotelId, 1),
//     //           items: [
//     //             {
//     //               title: "作業状況",
//     //               url: `${HOTEL_PATH.CO_CO_HOTEL_TIARA.OVERVIEW}`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.CO_CO_HOTEL_TIARA.OVERVIEW}`
//     //                 ),
//     //               isEnable: isEnableHotelRole(role, hotelId, 1, true),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業一覧・編集・追加",
//     //               url: `${HOTEL_PATH.CO_CO_HOTEL_TIARA.TASK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.CO_CO_HOTEL_TIARA.TASK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 1),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業内容登録",
//     //               url: `${HOTEL_PATH.CO_CO_HOTEL_TIARA.WORK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.CO_CO_HOTEL_TIARA.WORK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 1),
//     //               isShowDrawerTitle: true,
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       title: "Hotel Mikazato",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Coco Hotel Tiara" />,
//     //       url: "",
//     //       isActive: () =>
//     //         window.location.pathname.startsWith("/hotel-mikazato"),
//     //       isEnable: isEnableHotelRole(role, hotelId, 2),
//     //       isShowDrawerTitle: true,

//     //       items: [
//     //         {
//     //           title: "スタッフ管理",
//     //           url: `${HOTEL_PATH.HOTEL_MIKAZATO.STAFF}`,
//     //           isActive: () =>
//     //             window.location.pathname.startsWith(
//     //               `${HOTEL_PATH.HOTEL_MIKAZATO.STAFF}`
//     //             ),
//     //           isEnable: isEnableStaffRole(role, hotelId, 2),
//     //           isShowDrawerTitle: true,
//     //         },
//     //         {
//     //           title: "作業",
//     //           url: "",
//     //           isActive: () => window.location.pathname.includes("/task/"),
//     //           isEnable: isEnableHotelRole(role, hotelId, 2),
//     //           isShowDrawerTitle: true,

//     //           items: [
//     //             {
//     //               title: "作業状況",
//     //               url: `${HOTEL_PATH.HOTEL_MIKAZATO.OVERVIEW}`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.HOTEL_MIKAZATO.OVERVIEW}`
//     //                 ),
//     //               isEnable: isEnableHotelRole(role, hotelId, 2, true),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業一覧・編集・追加",
//     //               url: `${HOTEL_PATH.HOTEL_MIKAZATO.TASK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.HOTEL_MIKAZATO.TASK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 2),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業内容登録",
//     //               url: `${HOTEL_PATH.HOTEL_MIKAZATO.WORK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.HOTEL_MIKAZATO.WORK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 2),
//     //               isShowDrawerTitle: true,
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       title: "Hotel Baron",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Hotel Baron" />,
//     //       url: "",
//     //       isActive: () => window.location.pathname.startsWith("/hotel-baron"),
//     //       isEnable: isEnableHotelRole(role, hotelId, 3),
//     //       isShowDrawerTitle: true,

//     //       items: [
//     //         {
//     //           title: "スタッフ管理",
//     //           url: `${HOTEL_PATH.HOTEL_BARON.STAFF}`,
//     //           isActive: () =>
//     //             window.location.pathname.startsWith(
//     //               `${HOTEL_PATH.HOTEL_BARON.STAFF}`
//     //             ),
//     //           isEnable: isEnableStaffRole(role, hotelId, 3),
//     //           isShowDrawerTitle: true,
//     //         },
//     //         {
//     //           title: "作業",
//     //           url: "",
//     //           isActive: () => window.location.pathname.includes("/task/"),
//     //           isEnable: isEnableHotelRole(role, hotelId, 3),
//     //           isShowDrawerTitle: true,

//     //           items: [
//     //             {
//     //               title: "作業状況",
//     //               url: `${HOTEL_PATH.HOTEL_BARON.OVERVIEW}`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.HOTEL_BARON.OVERVIEW}`
//     //                 ),
//     //               isEnable: isEnableHotelRole(role, hotelId, 3, true),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業一覧・編集・追加",
//     //               url: `${HOTEL_PATH.HOTEL_BARON.TASK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.HOTEL_BARON.TASK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 3),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業内容登録",
//     //               url: `${HOTEL_PATH.HOTEL_BARON.WORK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.HOTEL_BARON.WORK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 3),
//     //               isShowDrawerTitle: true,
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //     },
//     //     {
//     //       title: "Coco Hotel Owl",
//     //       icon: <img src="/images/icons/menu/dot.svg" alt="Coco Hotel Owl" />,
//     //       url: "",
//     //       isActive: () =>
//     //         window.location.pathname.startsWith("/co-co-hotel-owl"),
//     //       isEnable: isEnableHotelRole(role, hotelId, 4),
//     //       isShowDrawerTitle: true,

//     //       items: [
//     //         {
//     //           title: "スタッフ管理",
//     //           url: `${HOTEL_PATH.CO_CO_HOTEL_OWL.STAFF}`,
//     //           isActive: () =>
//     //             window.location.pathname.startsWith(
//     //               `${HOTEL_PATH.CO_CO_HOTEL_OWL.STAFF}`
//     //             ),
//     //           isEnable: isEnableStaffRole(role, hotelId, 4),
//     //           isShowDrawerTitle: true,
//     //         },
//     //         {
//     //           title: "作業",
//     //           url: "",
//     //           isActive: () => window.location.pathname.includes("/task/"),
//     //           isEnable: isEnableHotelRole(role, hotelId, 4),
//     //           isShowDrawerTitle: true,

//     //           items: [
//     //             {
//     //               title: "作業状況",
//     //               url: `${HOTEL_PATH.CO_CO_HOTEL_OWL.OVERVIEW}`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.CO_CO_HOTEL_OWL.OVERVIEW}`
//     //                 ),
//     //               isEnable: isEnableHotelRole(role, hotelId, 4, true),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業一覧・編集・追加",
//     //               url: `${HOTEL_PATH.CO_CO_HOTEL_OWL.TASK_LIST}`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.CO_CO_HOTEL_OWL.TASK_LIST}?page=1`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 4),
//     //               isShowDrawerTitle: true,
//     //             },
//     //             {
//     //               title: "作業内容登録",
//     //               url: `${HOTEL_PATH.CO_CO_HOTEL_OWL.WORK_LIST}?page=1`,
//     //               isActive: () =>
//     //                 window.location.pathname.startsWith(
//     //                   `${HOTEL_PATH.CO_CO_HOTEL_OWL.WORK_LIST}`
//     //                 ),
//     //               isEnable: isEnableStaffRole(role, hotelId, 4),
//     //               isShowDrawerTitle: true,
//     //             },
//     //           ],
//     //         },
//     //       ],
//     //     },
//     //   ],
//     // },
//   ];
// };


export const MENU =
  [
    {
      title: "Manage User",
      icon: <img src="/images/icons/menu/dashboard.svg" alt="dashboards" />,
      url: DASHBOARD_PATH,
      isActive: () => window.location.pathname === DASHBOARD_PATH,
    },
    {
      title: "Manage Request",
      icon: <img src="/images/icons/menu/dashboard.svg" alt="dashboards" />,
      url: MANAGE_REQUEST,
      isActive: () => window.location.pathname === MANAGE_REQUEST,
    },
    {
      title: "Settings",
      icon: <img src="/images/icons/menu/dashboard.svg" alt="dashboards" />,
      url: SETTINGS,
      isActive: () => window.location.pathname === SETTINGS,
    },
  ];

