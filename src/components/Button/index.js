import { ButtonCompMath ,ButtonComp } from './styles'

const Button = ({label, onClick, btnType = true}) => {


    
    const bttype = btnType;
    return (
        
            bttype ? 
                <ButtonComp onClick={onClick}  type="button">{ label }</ButtonComp>
                    : 
                <ButtonCompMath onClick={onClick} type="button">{ label }</ButtonCompMath>
        
    );
  }
  
  export default Button;
  