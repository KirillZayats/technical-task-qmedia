import styled from "styled-components";
import { device, size } from "../media/MediaQueryStyled";
import Icon from "../Icon";

const ProductStyle = styled.section`
    @media ${device.mobileS} {
    max-width: 100%;
  }

  @media ${device.mobileM} {
  }

  @media ${device.mobileL} {
    max-width: calc(${size.mobileL});
  }

  @media ${device.tablet} {
    max-width: 300px;
  }
  @media ${device.tabletS} {
    max-width: 230px;
  }

  @media ${device.laptop} {
    max-width: 271px;
  }

  @media ${device.desktop} {
    max-width: 240px;
  }
`;

const ContainerImage = styled.div`
border-radius: 6.75px;
border: 1px solid ${({ theme }) => theme.colors.BORDER_COLOR};
display: flex;
justify-content: center;
width: 100%;

position: relative;

@media ${device.mobileS} {
    max-width: calc(100% - 2px);
  }

  @media ${device.mobileM} {
    height: 300px; 
  }

  @media ${device.mobileL} {
    height: 350px;
  }

  @media ${device.tablet} {
    max-width: 300px;
    height: 300px; 

  }
  @media ${device.tabletS} {
    max-width: 228px;
    height: 228px; 
  }

  @media ${device.laptop} {
    max-width: 269px;
    height: 269px; 

  }

  @media ${device.desktop} {
    max-width: 238px;
  }
`;
const Image = styled.img`
width: 190px;
object-fit: contain;
`;
const DescriptionProduct = styled.p`
    font-size: 18px;
font-weight: 500;
line-height: 130%; 

@media ${device.mobileS} {
    margin: 15px auto 5px;
  }

  @media ${device.tablet} {
    margin: 22px auto 15px;
  }
`;
const ContainerPrices = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: end;
`;
const PastPrice = styled.span`
font-size: 20px;
font-weight: 600;
line-height: 136.9%;
color: ${({ theme }) => theme.colors.TEXT_MARK_PRICE_COLOR};
`;
const RealPrice = styled.span`
    font-size: 27px;
font-weight: 600;
line-height: 136.9%;
`;

const ContainerIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  .icon-active {
      fill: ${({ theme }) => theme.colors.FILL_ICON};
  path {
    stroke: ${({ theme }) => theme.colors.FILL_ICON};
  }
  }
`;

const Svg = styled(Icon)`
  cursor: pointer;
  transition: All .3s ease-out;
  fill: ${({ theme }) => theme.colors.BUTTON_SECOND_COLOR};

  &:hover path {
    stroke: ${({ theme }) => theme.colors.FILL_ICON};
  }
`;

const IconHeard: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
}) => (
  <Svg viewBox="0 0 32 32" fill="none" className={className}>
    <g id="Frame">
      <path id="Vector" d="M27.7867 6.14666C27.1057 5.46533 26.2971 4.92485 25.4071 4.5561C24.5172 4.18735 23.5633 3.99756 22.6 3.99756C21.6367 3.99756 20.6828 4.18735 19.7929 4.5561C18.9029 4.92485 18.0943 5.46533 17.4133 6.14666L16 7.55999L14.5867 6.14666C13.2111 4.77107 11.3454 3.99827 9.4 3.99827C7.45462 3.99827 5.58892 4.77107 4.21333 6.14666C2.83774 7.52225 2.06494 9.38795 2.06494 11.3333C2.06494 13.2787 2.83774 15.1444 4.21333 16.52L5.62666 17.9333L16 28.3067L26.3733 17.9333L27.7867 16.52C28.468 15.839 29.0085 15.0304 29.3772 14.1405C29.746 13.2505 29.9358 12.2966 29.9358 11.3333C29.9358 10.37 29.746 9.41613 29.3772 8.52618C29.0085 7.63624 28.468 6.82767 27.7867 6.14666Z" stroke="#D2D2D2" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round" />
    </g>  </Svg>
);

export {
  RealPrice, PastPrice, ContainerImage, ContainerPrices, ProductStyle, DescriptionProduct, Image, IconHeard, ContainerIcon
}