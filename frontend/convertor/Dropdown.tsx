import {FC} from "react";
import Select, {components} from "react-select";
import {currency} from "../config/currency";
const { Option } = components;

interface DropdownProps {
    placeholder: string;
    handleChange: (selectedOption: any) => void;
    value: any;
}

const OptionComponent: FC<any> = (props) => {
    return(
        <Option {...props}>
            <span className={`currency-flag currency-flag-${props.data.value}`}></span>
            {" "}
            {props.data.label}
        </Option>
    )
}

 export const Dropdown: FC<DropdownProps> = (props : DropdownProps) =>{

    const {handleChange, placeholder, value} = props;

    const selectValue = currency.find((option) => option.value === value || option.label === value)

     return (
         <Select
            options={currency}
            onChange={handleChange}
            placeholder={placeholder}
            //styles={""}
            value={selectValue}
            components={{Option: OptionComponent}}
         />
     )
}