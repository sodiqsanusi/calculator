import ToggleSection from "./ToggleSection";
import { Header } from "./CalcHeader.styled";

const CalcHeader = () => {
  return ( 
    <Header>
      <h1>calc</h1>
      <ToggleSection />
    </Header>
  );
}
 
export default CalcHeader;