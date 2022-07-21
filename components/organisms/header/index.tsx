import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {FC} from "react";
import Link from "next/link";
import {pageList} from "../../../types/page-list";

export interface HeaderProps {
  isSideBarOpen: boolean;
  onClickMenuIcon: () => void;
  pageName: string;
}
const Header: FC<HeaderProps> = (props) => {
  const {isSideBarOpen, onClickMenuIcon, pageName} = props;
  return (
      <AppBar
        position="relative"
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClickMenuIcon}
          ><Menu /></IconButton>
          <Typography className="pl-5 pr-5">バイヤー君</Typography>
          <Typography className="">{pageName}</Typography>

        </Toolbar>
        <Drawer
          open={isSideBarOpen}
          onClose={onClickMenuIcon}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <List className="p-3">
            {pageList.map(({title, path, icon}) => (
              <Link href={path} key={path}>
                <Tooltip title={title}>
                  <ListItem>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{title}</ListItemText>
                  </ListItem>
                </Tooltip>
              </Link>
            ))}
          </List>
        </Drawer>
      </AppBar>
  )
}

export default Header;