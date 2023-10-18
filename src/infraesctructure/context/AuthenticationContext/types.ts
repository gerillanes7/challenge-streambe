import { AuthDTO } from "../../../domain/entities/AuthDto";

export interface IAuthenticationContext {
    children: React.ReactNode;
}

export interface IContext {
    userLogged: AuthDTO | null;
    removeUserLogged: () => void;
    loginUser: (user: AuthDTO) => void;
    loading: boolean;
}