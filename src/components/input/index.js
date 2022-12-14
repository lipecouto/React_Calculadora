import { InputContainer } from "./styles";

const Input = ({value}) => {
    return (
      <InputContainer>
        <input  value={ value } disabled></input>
      </InputContainer>
    
    
    );
  }
  
  export default Input;
  