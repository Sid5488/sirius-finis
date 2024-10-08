import { 
  forwardRef,
  InputHTMLAttributes,
} from "react";

import { CustomInput } from "./style";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
}

const Input = forwardRef<HTMLInputElement, IInput>((props, ref) => 
  <CustomInput {...props} ref={ref} />
);

export { Input };
