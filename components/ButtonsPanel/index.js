import { Container } from "./ButtonsPanel.styled";
import CalcButton from "./CalcButton";

const ButtonsPanel = () => {
  return ( 
    <Container>
      <CalcButton>7</CalcButton>
      <CalcButton>8</CalcButton>
      <CalcButton>9</CalcButton>
      <CalcButton col='#fff' bCol='var(--delButBackground)' fSize='1rem' bShad='var(--delButShadow)'>DEL</CalcButton>
      <CalcButton>4</CalcButton>
      <CalcButton>5</CalcButton>
      <CalcButton>6</CalcButton>
      <CalcButton>+</CalcButton>
      <CalcButton>1</CalcButton>
      <CalcButton>2</CalcButton>
      <CalcButton>3</CalcButton>
      <CalcButton>-</CalcButton>
      <CalcButton>.</CalcButton>
      <CalcButton>0</CalcButton>
      <CalcButton>/</CalcButton>
      <CalcButton>×</CalcButton>
      <CalcButton col='#fff' large='1 / 3' bCol='var(--delButBackground)' fSize='1rem' bShad='var(--delButShadow)'>RESET</CalcButton>
      <CalcButton col='var(--equalsText)' large='3 / 5' bCol='var(--equalsBackground)' fSize='1.2rem' bShad='var(--equalShadow)'>=</CalcButton>
    </Container>
  );
}
 
export default ButtonsPanel;