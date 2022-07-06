import {Container, Layout} from './ToggleSection.styled'
import {useState} from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../../GlobalContext';

const ToggleSection = () => {

  let {changeTheme} = useContext(GlobalContext);
  const [theme, setTheme] = useState(1);
  let handleClick = (num) => {
    setTheme(num);
    changeTheme(num);
  }

  return ( 
    <Container>
      <h2>THEME</h2>
      <Layout theme={theme}>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <section>
          <button onClick={() => handleClick(1)} aria-label='Click to switch to the dark theme'></button>
          <button onClick={() => handleClick(2)} aria-label='Click to switch to the light theme'></button>
          <button onClick={() => handleClick(3)} aria-label='Click to switch to the purple theme'></button>
        </section>
      </Layout>
    </Container>
  );
}
 
export default ToggleSection;