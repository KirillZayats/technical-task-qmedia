import Product from '../components/Product';
import {
  LinkPage, NavProducts, ElementListProduct, ListProducts, TitlePage, DescriptionText, ResultStyle
} from '../styles/pages/ResultStyled';

const Result = () => {

  const products = [
    {
      "id": 1,
      "title": "Бальзам от пигм.пятен для чув. кожи ISISPHARMA NEOTONE Sensitive 30мл",
      "image": "./images/product-1.jpeg",
      "price": 98.13,
      "oldPrice": 115.45
    },
    {
      "id": 2,
      "title": "Пилинг энзиматический Dermedic HYDRAIN3 HIALURO 50г",
      "image": "./images/product-2.jpeg",
      "price": 46.55,
      "oldPrice": null
    },
    {
      "id": 3,
      "title": "Крем дневной д/лица Legere, 50мл",
      "image": "./images/product-3.jpeg",
      "price": 55.75,
      "oldPrice": null
    },
    {
      "id": 4,
      "title": "Крем увл. укрепл.д/чувств.нормал.и обезвож. кожи ISISPHARMA SENSYLIA 24h 40мл",
      "image": "./images/product-4.jpeg",
      "price": 44.55,
      "oldPrice": null
    },
    {
      "id": 5,
      "title": "Флюид с оч.выс.степ.заот солн.излуч.«Сухое прикосновение» SPF 50+ 40мл",
      "image": "./images/product-5.jpeg",
      "price": 59.02,
      "oldPrice": 72
    },
    {
      "id": 6,
      "title": "Концентрат д/проблемной кожи склонной к акне AVENE CLEANANCE Comedomed 30 мл",
      "image": "./images/product-6.jpeg",
      "price": 63,
      "oldPrice": null
    },
    {
      "id": 7,
      "title": "Крем очищ. успокаив.д/проблемной кожи AVENE 200 мл",
      "image": "./images/product-7.jpeg",
      "price": 43.25,
      "oldPrice": null
    },
    {
      "id": 8,
      "title": "Маска La Miso моделирующая (альгинатная) с коэнзимом Q10 1000г",
      "image": "./images/product-8.jpeg",
      "price": 63.5,
      "oldPrice": 76.25
    },
    {
      "id": 9,
      "title": "Сыворотка д/лица с комплексом pretino Ahava SAFE RETINOL 30 мл",
      "image": "./images/product-9.jpeg",
      "price": 242,
      "oldPrice": null
    },
    {
      "id": 10,
      "title": "Эссенция активирующая смягчающая кожу Ahava Apple of Sodom 100 мл",
      "image": "./images/product-10.jpeg",
      "price": 185,
      "oldPrice": 240
    }
  ]
  

  return (
    <ResultStyle>
      <TitlePage>Результат</TitlePage>
      <DescriptionText>Мы подобрали для вас наиболее подходящие средства</DescriptionText>
      <ListProducts>
        {products && products.map((item) => 
        (
          <ElementListProduct key={item.id}>
          <Product product={item}/>
        </ElementListProduct>
          )
          ) }
        {/* <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct>
        <ElementListProduct>
          <Product/>
        </ElementListProduct> */}
      </ListProducts>
      <NavProducts>
        <LinkPage className='active'>1</LinkPage>
        <LinkPage>2</LinkPage>
        <LinkPage>3</LinkPage>
        <LinkPage>...</LinkPage>
        <LinkPage>13</LinkPage>

      </NavProducts>
    </ResultStyle>
  )
}

export default Result
