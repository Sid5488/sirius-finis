import { forwardRef, InputHTMLAttributes } from "react";

import { CustomSelect } from "./style";

interface ISelect extends InputHTMLAttributes<HTMLSelectElement> {
  ref: string;
}

// const FormSelect: ForwardRefRenderFunction<HTMLSelectElement, ISelect> = ({ 
//   value, 
//   onChange,
//   required, 
//   ...rest 
// }: ISelect) => (
//   <CustomSelect
//     value={value}
//     onChange={onChange}
//     required={required}
//     {...rest}
//   />
// );

const Select = forwardRef<HTMLSelectElement, ISelect>((props, ref) =>
  <CustomSelect {...props} ref={ref} />
);

export { Select };
