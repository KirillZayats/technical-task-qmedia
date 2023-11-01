import { useEffect, useState } from 'react';
import Product from '../components/Product';
import { useTypeSelector } from '../store/hooks/userTypeSelector';
import {
  LinkPage, NavProducts, ElementListProduct, ListProducts, TitlePage, DescriptionText, ResultStyle
} from '../styles/pages/ResultStyled';
import { IProduct } from '../additionally/interfaces';

const Result = () => {
  const {products} = useTypeSelector((state) => state.data)
  const [listProducts, setListProducts] = useState<IProduct[]>();

  useEffect(() => {
    products && setListProducts(products);    
  }, [products]);

  return (
    <ResultStyle>
      <TitlePage>Результат</TitlePage>
      <DescriptionText>Мы подобрали для вас наиболее подходящие средства</DescriptionText>
      <ListProducts>
        {listProducts && listProducts.map((item) => 
        (
          <ElementListProduct key={item.id}>
          <Product product={item}/>
        </ElementListProduct>
          )
          ) }
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
