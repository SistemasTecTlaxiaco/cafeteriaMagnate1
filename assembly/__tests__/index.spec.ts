import { context, logging, storage, ContractPromiseBatch, u128 } from 'near-sdk-as';
import { Registrar_productos,Buscar_productos,Actualizar_productos,Eliminar_productos,Registrar_clientes, Buscar_cliente, Actualizar_clientes, Eliminar_cliente, Identificar_cliente, Cancelar_producto} from "..";
import { productos, allproductos, cliente, allclientes/*, Productos, allProductos, Clients, allClients*/, ONE_NEAR } from '../models'


const id_productos = '2';
const nombrep = 'pastel';
const descripcion = 'de fresas con chocolate';
const existencias = '2';
const caducidad = '30/05/2023';
const marca = 'sin marca';
const precio = '30';
const ventas='2';


let nuevoproductos = new productos(id_productos, nombrep, descripcion, existencias,caducidad, marca,precio, ventas);

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
        const productosactualizado = new productos(id_productos, nombrep, descripcion, existencias,caducidad, marca,precio, ventas);
        allproductos.push(productosactualizado);
        expect(Actualizar_productos('2','pastel', 'de fresas con chocolate','2', '30/05/2023', 'sin marca', '30','2')).toStrictEqual(productosactualizado)
    })
})

describe("eliminarproductos", () => {
    it('should be true', () => {
        expect(Eliminar_productos(id_productos)).toBeFalsy()
    })
})
/*
AREA DE CLIENTES
*/
const id_clientes = '1';
const nombre = 'magaly';
const apellidos = 'nicolas';
const direccion = 'chalcatongo';
const telefono = '9531291596';
const wallet = 'magaly21.testnet';

let nuevocliente = new cliente(id_clientes,nombre,apellidos,direccion,telefono,wallet);

describe("Registrar_clientes", () => {
    it('should return "Nuevo cliente registrado"', () => {
        expect(Registrar_clientes('1','magaly', 'nicolas','chalcatongo', '9531291596', 'magaly21.testnet')).toStrictEqual(nuevocliente);
    })
})

describe("Buscar_cliente", () => {
    it('should return "cliente"', () => {
    const clientesEncontrados = new Array<cliente>();
    expect(Buscar_cliente('magaly')).toStrictEqual(clientesEncontrados);
    })
})
describe("Actualizar_cliente", () => {
    it('cliente actualizado', () => {
        const clienteactualizado = new cliente(id_clientes,nombre,apellidos,direccion,telefono,wallet);
          allclientes.push(clienteactualizado);
        expect(Actualizar_clientes('1','magaly', 'nicolas','chalcatongo', '9531291596', 'magaly21.testnet')).toStrictEqual(clienteactualizado)
    })
})

describe("eliminarcliente", () => {
    it('should be true', () => {
        expect(Eliminar_cliente(nombre)).toBeFalsy()
    })
})
describe("Identificar cliente", () => {
    it('should be true', () => {
        expect(Identificar_cliente(nombre)).toBeFalsy()
    })
})

describe("cancelar producto", () => {
    it('should be true', () => {
        expect(Cancelar_producto(id_productos)).toBeFalsy()
    })
})