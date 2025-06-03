import {type Context, createContext} from "react";

export type ShowPhoneMenuProps = {
    show: boolean,
    setShow: (v: boolean) => void;
};



export const ContextPhoneMenu: Context<ShowPhoneMenuProps | undefined> = createContext<ShowPhoneMenuProps | undefined>(undefined);
