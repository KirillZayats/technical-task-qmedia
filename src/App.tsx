import Result from "./pages/Result"
import Test from "./pages/Test"
import { GlobalStyle } from "./styles/AppStyled"
import { Theme } from "./styles/Theme"

const App = () => {
  return (
    <Theme>
      <GlobalStyle/>
      {/* <Test/> */}
      <Result/>
    </Theme>
  )
}

export default App

