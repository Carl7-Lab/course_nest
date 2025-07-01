export let name: string = 'Carlos';
export const age = 30;
export const isValid = true;

name = 'Miguel';

export const templateString = `Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores ${name}
expresiones ${1 + 1}
números: ${1 + 1}
booleanos: ${isValid}
`;

console.log(templateString);