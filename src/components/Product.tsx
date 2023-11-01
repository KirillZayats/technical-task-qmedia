import icon from '../../resources/images/product-1.jpeg';
import { IPropsProducts } from '../additionally/interfaces';
import {
  RealPrice, PastPrice, ContainerImage, ContainerPrices, ProductStyle, DescriptionProduct, Image, IconHeard, ContainerIcon 
} from '../styles/components/ProductStyled';

const Product: React.FC<IPropsProducts> = ({product}) => {

  const toggleClass = (id: string, className: string): void => {
    document.getElementById(id)?.querySelector('svg')?.classList.toggle(className);
}

  const setFavorite = () => {        
    toggleClass(`icon_${product.id}`, 'icon-active');
  }
  
    return (
        <ProductStyle>
            <ContainerImage>
                <Image src={product.image} />
                <ContainerIcon onClick={setFavorite} id={`icon_${product.id}`}>
                  <IconHeard  />
                </ContainerIcon>
            </ContainerImage>
            <DescriptionProduct>
              {product && product.title}
            </DescriptionProduct>
            <ContainerPrices>
              {product && product.oldPrice && (
                <PastPrice>{product.oldPrice.toFixed(2)}</PastPrice>
              )}
                <RealPrice>{product && product.price.toFixed(2)} руб.</RealPrice>
            </ContainerPrices>
        </ProductStyle>
    )
}

export default Product
