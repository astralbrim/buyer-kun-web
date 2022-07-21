import {Home, Settings} from "@mui/icons-material";

export interface Page {
  title: string;
  path: string;
  icon: JSX.Element;
}

export const pageList: Page[] = [
  {
    title: "トップ",
    path: "/",
    icon: <Home />
  },
  {
    title: "設定",
    path: "/setting",
    icon: <Settings />
  }
]