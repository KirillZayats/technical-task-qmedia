import { useState } from "react";
import { BackButton, NextButton } from "../styles/AppStyled";
import {
  TextQuestion,
  CheckBox,
  FormStyle,
  OptionQuestion,
  ListOptionQuestions,
  ListQuestions,
  ContainerButtons,
  PositionQuestion,
  ElementQuestion,
  NavQuestion,
  Question,
  ContainerQuestions,
  Content,
} from "../styles/components/FormStyled";
import { useForm } from "react-hook-form";
import { useTypeSelector } from "../store/hooks/userTypeSelector";
import { useEffect } from "react";
import { ETypeClick, IQuestion } from "../additionally/interfaces";
import Modal from "./modal/Modal";
import { useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const Form = () => {
  const navigation = useNavigate();
  const { questions } = useTypeSelector((state: any) => state.data);
  const [listQuestions, setListQuestions] = useState<IQuestion[]>();
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [typeClick, setTypeClick] = useState<string>('');
  const [valuesAnswer, setValuesAnswer] = useState<string[]>(['']);
  const [error, setError] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  

  useEffect(() => {
    questions && setListQuestions(questions);    
  }, [questions]);

  useEffect(() => {
      let inputs: any = document.getElementsByName('answer');      
      for (let index = 0; index < inputs.length; index++) {        
        if(`${index + 1}` === valuesAnswer[numberQuestion]) {
          inputs[index].checked = true;
        }       
      }
  }, [numberQuestion])

  const nextQuestion = () => {    
    if(valuesAnswer[numberQuestion] === '') {
      setError('Ошибка, необходимо выбрать один из предложенных вариантов!');
      setActive(true);
    } else {
      setTypeClick(ETypeClick.NEXT)
    }   
  };

  const toggleClass = (id: string, className: string): void => {
    document.getElementById(id)?.classList.toggle(className);
  };

  const getResult = () => {
    if(valuesAnswer[numberQuestion] === '') {
      setError('Ошибка, необходимо выбрать один из предложенных вариантов!');
      setActive(true);
    } else {
      setTypeClick(ETypeClick.RESULT)
    }  
  };

  const pastQuestion = () => {
    setTypeClick(ETypeClick.PAST);     
  };

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let values: string[] = [...valuesAnswer];
    values[numberQuestion] = event.target.value;
    numberQuestion + 1 === values.length && listQuestions?.length !== numberQuestion + 1 ? setValuesAnswer([...values, '']) : setValuesAnswer([...values])    
    setError('');
  }

  const onSubmit = (data: any) => {    
    switch (typeClick) {
      case ETypeClick.NEXT:
        toggleClass(`page_${numberQuestion + 1}`, "active");
        toggleClass(`page_${numberQuestion + 2}`, "active");
        setNumberQuestion(numberQuestion + 1);      
        break;
      case ETypeClick.PAST:
        toggleClass(`page_${numberQuestion + 1}`, "active");
        toggleClass(`page_${numberQuestion}`, "active");
        setNumberQuestion(numberQuestion - 1);
        break;
      case ETypeClick.RESULT:
        // console.log(valuesAnswer);
        navigation('/result');
        break;
    }
    reset();
    setTypeClick('');
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <Content>
        <NavQuestion>
          <ListQuestions>
            {listQuestions &&
              listQuestions.map((item: IQuestion) => (
                <ElementQuestion
                  key={item.id}
                  id={`page_${item.id}`}
                  className={item.id === 1 ? "active" : ""}
                />
              ))}
          </ListQuestions>
          <PositionQuestion>
            {listQuestions && listQuestions.length > 0
              ? `Вопрос ${numberQuestion + 1} из ${listQuestions.length}`
              : "Вопросов нет"}
          </PositionQuestion>
        </NavQuestion>
        <ContainerQuestions>
          <CSSTransition
              in={numberQuestion ? true : false}
              timeout={3000}              
              classNames="item"
            >
          <Question>
            {listQuestions && listQuestions[numberQuestion].question}
          </Question>
            </CSSTransition>

          <ListOptionQuestions>
            {listQuestions &&
              listQuestions[numberQuestion].answers.length > 0 &&
              listQuestions[numberQuestion].answers.map(
                (item: string, index: number) => (
                  <OptionQuestion key={index} htmlFor={`answer_${index + 1}`}>
                    <CheckBox
                      {...register("answer")}
                      type="radio"
                      value={index + 1}
                      id={`answer_${index + 1}`}
                      onChange={radioHandler}
                    />
                    <TextQuestion>{item}</TextQuestion>
                  </OptionQuestion>
                )
              )}
            {/* {error !== '' && ()} */}
          </ListOptionQuestions>
          <ContainerButtons>
            {numberQuestion > 0 && (
              <BackButton onClick={pastQuestion}>Назад</BackButton>
            )}
            {(listQuestions && numberQuestion + 1 !== listQuestions.length) ? (
              <NextButton onClick={nextQuestion}>Дальше</NextButton>
            ) : (
                <NextButton onClick={getResult}>Получить результат</NextButton>
            )}
          </ContainerButtons>
        </ContainerQuestions>
        <Modal active={active} setActive={setActive} error={error} setError={setError}/>
      </Content>
    </FormStyle>
  );
};

export default Form;
