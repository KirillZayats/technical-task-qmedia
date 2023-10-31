import { useState } from 'react';
import { BackButton, NextButton } from '../styles/AppStyled';
import {
    TextQuestion, CheckBox, FormStyle, OptionQuestion, ListOptionQuestions, ListQuestions,
    ContainerButtons, PositionQuestion, ElementQuestion, NavQuestion, Question, ContainerQuestions, Content
} from '../styles/components/FormStyled';
import { useForm } from 'react-hook-form';

const Form = () => {
    const [numberQuestion, setNumberQuestion] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const question = [
        {
            "id": 1,
            "question": "Сколько вам лет?",
            "answers": ["Нужны средства для ребёнка младше 10 лет", "Мне меньше 25 лет", "От 25 до 35 лет", "От 35 до 45 лет", "Мне больше 45 лет"],
            "id_correct-answer": null
        },
        {
            "id": 2,
            "question": "Какой у вас тип кожи?",
            "answers": ["Сухая", "Нормальная", "Комбинированная", "Жирная"],
            "id_correct-answer": null
        },
        {
            "id": 3,
            "question": "Беспокоят ли воспаления на лице?",
            "answers": ["Да", "Нет", "Иногда"],
            "id_correct-answer": null
        },
        {
            "id": 4,
            "question": "Крем дневной д/лица Legere, 50мл",
            "answers": ["Да", "Нет", "Иногда"],
            "id_correct-answer": null
        }
    ]

    const nextQuestion = () => {
        toggleClass(`page_${numberQuestion + 1}`, 'active');
        toggleClass(`page_${numberQuestion + 2}`, 'active');
        setNumberQuestion(numberQuestion + 1);
    }

    const toggleClass = (id: string, className: string): void => {
        document.getElementById(id)?.classList.toggle(className);
    }

    const getResult = () => {

    }

    const pastQuestion = () => {
        toggleClass(`page_${numberQuestion + 1}`, 'active');
        toggleClass(`page_${numberQuestion}`, 'active');
        setNumberQuestion(numberQuestion - 1);
    }

    const onSubmit = (data: any) => {
        reset();
    };


    return (
        <FormStyle onSubmit={handleSubmit(onSubmit)}>
            <Content>
                <NavQuestion>
                    <ListQuestions>
                        {
                            question && question.map((item) => (
                                <ElementQuestion key={item.id} id={`page_${item.id}`} className={item.id === 1 ? 'active' : ''}/>
                            ))
                        }
                    </ListQuestions>
                    <PositionQuestion>
                        {question && question.length > 0 ? `Вопрос ${numberQuestion + 1} из ${question.length}` : 'Вопросов нет'}
                    </PositionQuestion>
                </NavQuestion>
                <ContainerQuestions>
                    <Question>{question && question[numberQuestion].question}</Question>
                    <ListOptionQuestions>
                        {
                            question && question[numberQuestion].answers.length > 0 && question[numberQuestion].answers.map((item, index) => (
                                <OptionQuestion key={index} htmlFor={`answer_${index + 1}`}>
                                    <CheckBox
                                        {...register("answer")}
                                        type="radio"
                                        value={index + 1}
                                        id={`answer_${index + 1}`}
                                    />
                                    <TextQuestion
                                    >
                                        {item}
                                    </TextQuestion>
                                </OptionQuestion>
                            ))
                        }
                    </ListOptionQuestions>
                    <ContainerButtons>
                        {
                            numberQuestion > 0 && (<BackButton onClick={pastQuestion}>Назад</BackButton>)
                        }
                        {
                            numberQuestion + 1 !== question.length ? (
                                <NextButton onClick={nextQuestion}>Дальше</NextButton>
                            ) : (
                                <NextButton onClick={getResult}>Получить результат</NextButton>
                            )
                        }
                    </ContainerButtons>
                </ContainerQuestions>
            </Content>
        </FormStyle>
    )
}

export default Form
