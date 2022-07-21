import {FC, ReactNode, useState} from "react";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import Header from "../organisms/header";
export interface BasePageTemplate {
  children: ReactNode;
  pageName: string;
}
export const basePageTemplateTheme = createTheme({

})
const useLogic = (): [boolean, () => void] => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const onClickMenuIcon = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }
  return [isSideBarOpen, onClickMenuIcon]
}
const BasePageTemplate: FC<BasePageTemplate> = ({children, pageName}) => {
  const [isSideBarOpen, onClickMenuIcon] = useLogic();
  return (
    <ThemeProvider theme={basePageTemplateTheme}>
      <Header isSideBarOpen={isSideBarOpen} onClickMenuIcon={onClickMenuIcon} pageName={pageName}/>
      <main className="">
        <Container>
          {children}
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default BasePageTemplate;