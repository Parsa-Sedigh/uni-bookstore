import {useContext} from "react";
import {DialogStateContext} from "../contexts/dialog-context";

export const useDialogState = () => {
    const dialogState = useContext(DialogStateContext);

    if (typeof dialogState === 'undefined') {
        throw new Error('useDialogState must be used within a DialogProvider');
    }

    return dialogState;
};