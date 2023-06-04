import { context, logging, storage, ContractPromiseBatch, u128 } from 'near-sdk-as';
import { Registrar_productos,Buscar_productos,Actualizar_productos} from "..";
import { productos, allproductos, cliente, allclientes/*, Productos, allProductos, Clients, allClients*/, ONE_NEAR } from '../models'


const id_productos = '2';
const nombre = 'pastel';
const descripcion = 'de fresas con chocolate';
const existencias = '2';
const caducidad = '30/05/2023';
const marca = 'sin marca';
const precio = '30';
const ventas='2';


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

describe("Registrar_Podructos", () => {
    it('should return "Nuevo producto registrado"', () => {
        expect(Registrar_productos('2','pastel', 'de fresas con chocolate','2', '30/05/2023', 'sin marca', '30','2')).toStrictEqual(nuevoproductos);
    })
})

describe("Buscar_productos", () => {
    it('should return "Producto"', () => {
    const productosencontrados: productos[] = [];
    expect(Buscar_productos('pastel')).toStrictEqual(productosencontrados);
    })
})

describe("Actualizar_Productos", () => {
    it('producto actualizado', () => {
        const productosactualizado = new productos(id_productos, nombre, descripcion, existencias,caducidad, marca,precio, ventas);
        expect(Actualizar_productos('2','pastel', 'de fresas con chocolate','2', '30/05/2023', 'sin marca', '30','2')).toStrictEqual(productosactualizado)
    })
})
/*
describe("findContributor", () => {

    it('should be true', () => {
        expect(findContributor(contributorUser)).toBeFalsy()
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
*/

