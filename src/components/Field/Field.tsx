import {Controller, useFormContext} from "react-hook-form";
import {FieldProps} from "./Field.types";
import {TextField} from "@mui/material";
import styles from './Field.module.scss';
import clsx from "clsx";

const Field = (props: FieldProps) => {
    const {name, showError = true, ...otherProps} = props;
    const {control, formState: {errors}} = useFormContext();
    const showFieldError = showError && !!errors[name];

    return (
        <Controller name={name} control={control} render={({field}) => {
            // console.log('field obj: ', otherProps,errors, field)
            return <TextField error={showFieldError}
                              helperText={showFieldError && errors[name].message}
                              FormHelperTextProps={{classes: {root: styles['helper-text']}}}
                              InputProps={{
                                  classes: {root: styles['text-field']}
                              }}
                              InputLabelProps={{
                                  classes: {root: styles.label}
                              }}
                              {...otherProps}
                              {...field}
                              classes={{root: clsx(otherProps.classes?.root)}}/>;
        }}/>
    );
};

export {Field};