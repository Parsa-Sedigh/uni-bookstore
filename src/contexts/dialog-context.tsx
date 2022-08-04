import {createContext, ReactNode, useReducer} from "react";


interface ActionValue {
    data: any;
    modalName: string;
}

type ModalNames = 'createBook' | 'editBook' | 'removeBook';
type Action<TData extends ActionValue> = { type: 'open', value: TData } | { type: 'close' };
type State<TData> = { isOpen: boolean; modalName: ModalNames; data: TData; };
type Dispatch<TData extends ActionValue> = (action: Action<TData>) => void;
type DialogProviderProps = { children: ReactNode }

export const DialogStateContext = createContext<{ state: State } | undefined>(undefined);
export const DialogUpdaterContext = createContext<Dispatch | undefined>(undefined);

const dialogReducer = <TData, >(state: State<TData>, action: Action<TData>) => {
    console.log('dialogReducer: ', action);
    switch (action.type) {
        case 'open': {
            return {isOpen: true, modalName: action.value.modalName, data: action.value.data};
        }

        case 'close': {
            return {isOpen: false, data: null};
        }

        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
};

export const DialogProvider = ({children}: DialogProviderProps) => {
    const [state, dispatch] = useReducer(dialogReducer, {isOpen: false});

    return (
        <DialogStateContext.Provider value={state}>
            <DialogUpdaterContext.Provider value={dispatch}>
                {children}
            </DialogUpdaterContext.Provider>
        </DialogStateContext.Provider>
    );
};