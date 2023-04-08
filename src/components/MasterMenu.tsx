import { MENU } from "@/constants/menu";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MenuDropdown from "./MenuDropdown";

export function hasChildren(item) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}

const MenuItem = ({ item, drawerOpen }) => {
  // const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  // return <Component item={item} drawerOpen={drawerOpen} />;
  return <SingleLevel item={item} drawerOpen={drawerOpen} />;
};

const SingleLevel = ({ item, drawerOpen }) => {
  const navigate = useNavigate();
  const isActive = global.location.pathname === item.url;

  const onClick = React.useCallback(
    () => item.url && navigate(item.url, { replace: isActive }),
    [isActive, item.url, navigate]
  );

  return (
    <ListItem button onClick={onClick} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: drawerOpen ? "initial" : "center",
          p: 0,
          mx: 2,
          my: 1,
          bgcolor: item.isActive?.() ? "rgba(84, 83, 83, 0.3)" : "",
          backgroundClip: "content-box",
          "&:hover": {
            bgcolor: "rgba(84, 83, 83, 0.3)",
          },
        }}
      >
        <ListItemIcon
          className={`${item.isActive?.() ? "menu-icon-active" : ""}`}
          sx={{
            minWidth: 21,
            margin: drawerOpen ? 1 : "auto",
            justifyContent: "center",
            color: item.isActive?.() ? "#556EE6" : "#C8C7C7",
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: item.isActive?.() ? "#556EE6" : "#C8C7C7",
          }}
          primary={item.title}
          sx={{ opacity: drawerOpen ? 1 : 0 }}
        />
      </ListItemButton>
    </ListItem>
  )
};

// const MultiLevel = ({ item, drawerOpen }) => {
//   const { items: children } = item;
//   const [open, setOpen] = useState(false);
//   const handleClick = () => {
//     setOpen((prev) => !prev);
//   };

//   return item?.isEnable ? (
//     <div className="mb-2">
//       <ListItem
//         button
//         onClick={() => drawerOpen && handleClick()}
//         onMouseOver={() => !drawerOpen && handleClick()}
//         disablePadding
//         sx={{ display: "block" }}
//       >
//         <ListItemButton
//           sx={{
//             minHeight: 48,
//             justifyContent: drawerOpen ? "initial" : "center",
//             p: 0,
//             mx: 2,
//             my: 1,
//             bgcolor: item.isActive?.() ? "rgba(84, 83, 83, 0.3)" : "",
//             backgroundClip: "content-box",
//             "&:hover": {
//               bgcolor: "rgba(84, 83, 83, 0.3)",
//             },
//           }}
//         >
//           <ListItemIcon
//             className={`${item.isActive?.() ? "menu-icon-active" : ""}`}
//             sx={{
//               minWidth: 21,
//               margin: drawerOpen ? 1 : "auto",
//               justifyContent: "center",
//               color: "#C8C7C7",
//             }}
//           >
//             {item.icon}
//           </ListItemIcon>
//           <ListItemText
//             primaryTypographyProps={{
//               color: item.isActive?.() ? "#556EE6" : "#C8C7C7",
//             }}
//             primary={item.title}
//             sx={{ opacity: drawerOpen ? 1 : 0 }}
//           />
//           {drawerOpen ? (
//             <ListItemIcon
//               sx={{
//                 justifyContent: "end",
//                 color: item.isActive?.() ? "#556EE6" : "#C8C7C7",
//               }}
//             >
//               {open ? <ExpandLessSharpIcon /> : <ExpandMoreIcon />}
//             </ListItemIcon>
//           ) : (
//             ""
//           )}
//         </ListItemButton>
//       </ListItem>
//       {drawerOpen && (
//         <Collapse in={open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             {children.map((child, key) =>
//               hasChildren(child) || child?.isEnable ? (
//                 <MenuItem
//                   key={"MultiLevel" + key}
//                   item={child}
//                   drawerOpen={drawerOpen}
//                 />
//               ) : (
//                 <></>
//               )
//             )}
//           </List>
//         </Collapse>
//       )}
//     </div>
//   ) : (
//     <></>
//   );
// };

const StyledMasterMenu = styled.div`
  // .MuiListItemIcon-root,
  // .MuiTypography-root {
  //   color: white;
  // }
  // .MuiListItemIcon-root {
  //   min-width: 36px;
  // }
  // .MuiCollapse-root {
  //   padding-top: 5px;
  // }
  .MuiButtonBase-root {
    border-radius: 10px;

    &.child {
      width: calc(100% - 40px);
      margin-left: 40px;
    }
    &.actived {
      background: rgba(255, 255, 255, 0.2);
    }
  }
`;

interface IMasterMenuProps {
  drawerOpen: boolean;
}

export const MasterMenu = (
  props: React.PropsWithChildren<IMasterMenuProps>
) => {

  return (
    <StyledMasterMenu>
      {MENU.map((item, key) =>
        props.drawerOpen ? (
          <MenuItem key={key} item={item} drawerOpen={props.drawerOpen} />
        ) : (
          <MenuDropdown key={key} item={item} drawerOpen={props.drawerOpen} />
        )
      )}
    </StyledMasterMenu>
  );
};
