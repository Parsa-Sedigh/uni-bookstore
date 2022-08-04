import {useContext} from "react";
import {DialogUpdaterContext} from "../contexts/dialog-context";

export const useDialogUpdater = () => {
    const dialogUpdater = useContext(DialogUpdaterContext);

    if (typeof dialogUpdater === 'undefined') {
        throw new Error('useDialogUpdater must be used within a DialogProvider');
    }

    return dialogUpdater;
};