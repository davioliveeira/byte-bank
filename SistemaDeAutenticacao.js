export class SistemaAutenticacao{
    static login(auth, senha){
        if (SistemaAutenticacao.ehPossivelAutenticar(auth)) return auth.autenticar(senha);
        
        return false;
    }

    static ehPossivelAutenticar(auth){
        return "autenticar" in auth && auth.autenticar instanceof Function
    }
} 