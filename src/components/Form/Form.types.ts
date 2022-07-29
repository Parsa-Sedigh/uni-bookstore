import {DeepPartial, SubmitHandler, UnpackNestedValue} from "react-hook-form";
import {ReactNode} from "react";

export interface FormProps<TSubmitHandler, TDefaultValues> {
    onValidSubmit: SubmitHandler<TSubmitHandler>;
    children: ReactNode;
    defaultValues: UnpackNestedValue<DeepPartial<TDefaultValues>> | undefined;
    classes?: {root: string;};
    schema: unknown;
}