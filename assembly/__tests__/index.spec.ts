import {cliente, allclientes, allproductos, productos} from "../models"
import { Registrar_productos,Buscar_productos, Actualizar_productos, Eliminar_productos,Registrar_cliente,
Buscar_cliente, Actualizar_clientes, Eliminar_cliente, Identificar_cliente,Cancelar_producto } from "..";
import { context, Context, logging } from "near-sdk-as";

const id_productos='producto'
const nombre = 'Rust Learning Book'
const descripcion = 'Book written for all those people interested in learning the powerfull and reliable Rust Programming Language.'
const existencias ='https://ipfs.io/ipfs/bafybeiet7srgvvxkzwrcaayorzmecmirkizmbinwwcn2k7wxpaszvfmzdi'
const caducidad = 'https://ipfs.io/ipfs/bafybeia5khhhukn672acm6sfredqdereor7n7zsoobvrwcqk7rmn6ihffi'
const marca = 'Book Author'
const precio = 'Book Publisher'
const ventas = 'English'

const nuevocliente = 'Bob'


let nuevoproductos = new productos(id_productos, nombre, descripcion, existencias,caducidad, marca,precio, ventas);

const allproductosIndex = allproductos.length;
const allclienteIndex = allclientes.length;

const contsData = new Array<cliente>(allclienteIndex);
for(let x = 0; x < allclienteIndex; x++) {
    contsData[x] = allclientes[x]
}

const data = new Array<productos>(allproductosIndex);
for(let i=0; i < allproductosIndex; i++) {
    data[i] = allproductos[i]
}

describe("uploadBook", () => {
    it('should return "newBookUpload"', () => {
        expect(Registrar_productos('id_productos: string, nombre: string, descripcion: string, existencias: string, caducidad: string, marca: string, precio: string, ventas: string')).toStrictEqual(nuevoproductos);
    })
})

describe("getBooks", () => {
    it('should return all books', () => {
        expect(Buscar_productos()).toStrictEqual(data)
    })
})

describe("getContributors", () => {
    it('should return all contributors', () => {
        expect(Actualizar_productos()).toStrictEqual(nuevoproductos)
    })
})

describe("findContributor", () => {

    it('should be true', () => {
        expect(findContributo(contributorUser)).toBeFalsy()
    })
})
describe("findContributor", () => {

    it('should be true', () => {
        expect(findContributo(contributorUser)).toBeFalsy()
    })
})
describe("deleteContributors", () => {
    it("should delete all the contributors", () => {
        deleteContributors()
        expect(getContributorsLength()).toBe(0, "Contributors list should be empty.")
    })
})

describe("deleteBooks", () => {
    it('should delete books', () => {
        deleteBooks()
        expect(booksLen()).toBe(0, 'books should be deleted!')
    })
})

