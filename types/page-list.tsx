import {Computer, Home, Search, Settings} from "@mui/icons-material";

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
  },
  {
    title: "相場調査",
    path: "/market-researcher",
    icon: <Search />
  },
  {
    title: "パーツ",
    path: "/market-researcher/part",
    icon: <Computer />
  }
]