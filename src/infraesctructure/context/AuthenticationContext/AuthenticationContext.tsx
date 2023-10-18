import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { IAuthenticationContext, IContext } from './types';
import { AuthDTO } from '../../../domain/entities/AuthDto';

export const AuthenticationContext = createContext<IContext>({
    userLogged: null,
    removeUserLogged: () => {},
    loginUser: () => {},
    loading: true
});

const AuthenticationState = ({ children }: IAuthenticationContext) => {
    const [user, setUser] = useState<AuthDTO | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    const loginUser = (user: AuthDTO) => {
        Cookies.set("userLogged", JSON.stringify(user))
        setUser(user)
    }

    const removeUserLogged = () => {
        Cookies.remove("userLogged", { path: '' })
        setUser(null)
    }

    useEffect(() => {
        if (Cookies.get("userLogged")) {
            setUser(JSON.parse(Cookies.get("userLogged") || ''))
        }
        setLoading(false)
    }, [])

    return (
        <AuthenticationContext.Provider
            value={{
                userLogged: user,
                removeUserLogged,
                loginUser,
                loading
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationState