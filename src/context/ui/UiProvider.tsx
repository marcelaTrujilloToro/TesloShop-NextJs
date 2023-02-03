import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';
import {ReactNode} from 'react';

export interface UiState {
    isMenuOpen: boolean;
}


const UiInitialState: UiState = {
    isMenuOpen: false,
}

interface Props {
    children: ReactNode
}


export const UiProvider:FC<Props> = ({ children } ) => {

    const [state, dispatch] = useReducer( uiReducer , UiInitialState );

    const toggleSideMenu = () => {
      dispatch({type: '[UI] - ToggleMenu'})
    }

    return (
        <UiContext.Provider value={{
            ...state,
            toggleSideMenu
        }}>
            { children }
        </UiContext.Provider>
    )
};