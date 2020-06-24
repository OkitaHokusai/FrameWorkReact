
class Usuario {
    create(dados){
        const usuarios = this.read();
        usuarios.push(dados);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
    read(){
        const localData = JSON.parse(localStorage.getItem('usuarios'));
        if(localData === null){
            localStorage.setItem('usuarios', JSON.stringify([]));
        }
        return JSON.parse(localStorage.getItem('usuarios'));
    }
    update(){

    }
    delete(){

    }
}
export default Usuario; 