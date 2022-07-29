import {FormProps} from "./Form.types";
import {Children, createElement, forwardRef, useImperativeHandle} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

// const recursiveInjectProps: any = (children: any, ...props) => {
//     return Children.map(children, (child) => {
//         if (child.props.children) {
//             recursiveInjectProps(child.props.children);
//             return child;
//         } else {
//             if (child.props.name) {
//                 return createElement(child.type, {
//                     ...{
//                         ...child.props,
//                         key: child.props.name,
//                         ...props
//                     },
//                 });
//             } else {
//                 return child;
//             }
//         }
//     });
// };

function Form <TSubmitHandler, TDefaultValues>(props: FormProps<TSubmitHandler, TDefaultValues>, ref) {
    const {defaultValues, onValidSubmit, children, classes, schema} = props;
    const methods = useForm({
        defaultValues,
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode: 'onChange',
    });
    console.log(' FORM')

    useImperativeHandle(ref, () => ({
        reset() {
            methods.reset();
        }
    }));

    return (
        <FormProvider {...methods}>
            <form className={classes?.root} onSubmit={methods.handleSubmit(onValidSubmit)}>
                {children}
            </form>
        </FormProvider>

    );
}

const FormWithRef = forwardRef(Form);

export {FormWithRef as Form};

