import { ButtonComp } from './styles'


const Button = ({label, onClick}) => {

    return (
            <ButtonComp onClick={onClick} type="button" value={ label }>{ label }</ButtonComp>
    );
  }
  
  export default Button;
  