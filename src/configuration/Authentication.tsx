import { ReactElement } from "react";
import { AuthenticationProps } from "../types/props-types";

const Authentication = ({ children }: AuthenticationProps): ReactElement => {
    return (
        <>
            {children}
        </>
    )
};

export default Authentication;