import Form from '../components/Form';
import {
  DescriptionText, TitlePage, TestStyle
} from '../styles/pages/TestStyled';

const Test = () => {
  return (
    <TestStyle>
      <TitlePage>Онлайн-подбор средств для лица</TitlePage>
      <DescriptionText>Пройдите короткий тест и получите список наиболее подходящих для вас косметических продуктов</DescriptionText>
      <Form />
    </TestStyle>
  )
}

export default Test
