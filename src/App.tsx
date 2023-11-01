import { Route, Routes } from "react-router-dom"
import { useAction } from "./store/hooks/useAction"
import { useTypeSelector } from "./store/hooks/userTypeSelector"
import { ContainerProvider, GlobalStyle } from "./styles/AppStyled"
import { Theme } from "./styles/Theme"
import {Suspense, lazy, useEffect} from 'react'

const Test = lazy(() => import("./pages/Test"));;
const Result = lazy(() => import("./pages/Result"));;


const App = () => {
  const {getData} = useAction();
  const { isLoadingQuestions } = useTypeSelector((state: any) => state.data);

  useEffect(() => {
    getData('questions');
    getData('products');
  }, [])

  return (
    <Theme>
      <GlobalStyle/>
      <Suspense
      >
              {
        isLoadingQuestions && (
          <ContainerProvider>
          <Routes>
            <Route
              path={`/`}
              element={
                  <Test />
              }
            />
            <Route
              path={`/result`}
              element={
                  <Result />
              }
            />
          </Routes>
        </ContainerProvider>
        )
      }

      </Suspense>
    </Theme>
  )
}

export default App

