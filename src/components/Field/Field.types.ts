import {BaseTextFieldProps} from "@mui/material/TextField/TextField";

export interface FieldProps extends BaseTextFieldProps {
    name: string;
    showError?: boolean;
}