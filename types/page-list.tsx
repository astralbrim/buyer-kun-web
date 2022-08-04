import {Computer, GraphicEq, Home, Settings} from "@mui/icons-material";

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
    title: "パーツ",
    path: "/parts",
    icon: <Computer />
  },
  {
    title: "パーツの種類",
    path: "/part-types",
    icon: <GraphicEq />
  }
]