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
import {Home, Menu, Settings} from "@mui/icons-material";
import {FC} from "react";
import Link from "next/link";

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
            <Link href="/">
              <Tooltip title="top">
                <ListItem>
                  <ListItemIcon><Home /></ListItemIcon>
                  <ListItemText>トップ</ListItemText>
                </ListItem>
              </Tooltip>
            </Link>
            <Link href="/setting">
              <Tooltip title="setting">
                <ListItem>
                  <ListItemIcon><Settings /></ListItemIcon>
                  <ListItemText>設定</ListItemText>
                </ListItem>
              </Tooltip>
            </Link>
          </List>
        </Drawer>
      </AppBar>
  )
}

export default Header;