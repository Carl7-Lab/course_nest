const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon {
    constructor(
        public readonly id: number,
        public name: string,
        public age?: number,

        // private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    @Deprecated('This method will be removed in the next version must use speak2')
    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    speak2() {
        console.log(`${this.name}, ${this.name}!`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.speak();
charmander.speak2();