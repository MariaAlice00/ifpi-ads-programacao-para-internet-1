/*Crie uma interface chamada Iteravel<T>, ou seja, usando generics com os seguintes métodos com as respectivas semânticas: 
i) proximo(): retorna o próximo elemento da coleção do tipo <T>;
ii) atual(): retorna o elemento atual do tipo <T>;
iii) isPrimeiro() e isUltimo(): retornam true se o Iteravel está no primeiro ou
úlltimo elemento . Retornam false caso contrário;
iv) irParaPrimeiro(): retorna o Iteravel para primeira posição
*/

interface Iteravel<T> {
    proximo(): T
    atual(): T
    isPrimeiro(): boolean
    isUltimo(): boolean
    isParaPrimeiro(): void
}

class ColecaoArray<T> implements Iteravel<T> {
    public proximo(): T {
        
    }
    public atual(): T {
        
    }
    public isPrimeiro(): T {
        
    }
    public isUltimo(): T {
        
    }
    public isParaPrimeiro(): T {
        
    }
}