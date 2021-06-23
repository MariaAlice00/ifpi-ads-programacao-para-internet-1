interface Iteravel<T> {
    proximo(): T
    atual(): T
    isPrimeiro(v: number): boolean
    isUltimo(v: number): boolean
    isParaPrimeiro(): T
}

class ColecaoArray<T> implements Iteravel<T> {
    array: T[] = []
    cont: number = 0  

    adiciona(v: T) {
        this.array.push(v)
        this.cont++
    }

    proximo(): T {
        return this.array[this.array.length - 1]
    }

    atual(): T {
        return this.array[this.cont]
    }

    isPrimeiro(v: number): boolean {
        if (this.array[this.cont] == this.array[0]) {
          return true
        }
        return false
    }

    isUltimo(v: number): boolean {
        if (this.array[this.cont] == this.array[this.array.length - 1]) {
            return true
        }
        return false  
    }

    isParaPrimeiro(): T {
        return this.array[0]
    }
}

var modulo = new ColecaoArray<number>()

modulo.adiciona(2)
modulo.adiciona(3)
console.log(modulo)
console.log(modulo.atual())
console.log(modulo.isPrimeiro(2))
console.log(modulo.isUltimo(3))
console.log(modulo.isParaPrimeiro())