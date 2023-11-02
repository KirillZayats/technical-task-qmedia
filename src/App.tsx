import { Route, Routes, useLocation } from "react-router-dom";
import { useAction } from "./store/hooks/useAction";
import { useTypeSelector } from "./store/hooks/userTypeSelector";
import { ContainerProvider, GlobalStyle } from "./styles/AppStyled";
import { Theme } from "./styles/Theme";
import { Suspense, lazy, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { PATH_QUESTIONS } from "./additionally/constants";
import { RootState } from "./store/reducers";

const Test = lazy(() => import("./pages/Quiz"));
const Result = lazy(() => import("./pages/Result"));

const App = () => {
  const { getData } = useAction();
  const { isLoadingQuestions } = useTypeSelector((state: RootState) => state.data);
  const location = useLocation();
  useEffect(() => {
    getData(PATH_QUESTIONS);
  }, []);

  return (
    <Theme>
      <GlobalStyle />
      <Suspense>
        {isLoadingQuestions && (
          <ContainerProvider>
            <SwitchTransition>
              <CSSTransition key={location.pathname} classNames="transition-page" timeout={400}>
                <Routes location={location}>
                  <Route path={`/`} element={<Test />} />
                  <Route path={`/result`} element={<Result />} />
                </Routes>
              </CSSTransition>
            </SwitchTransition>
          </ContainerProvider>
        )}
      </Suspense>
    </Theme>
  );
};

export default App;
