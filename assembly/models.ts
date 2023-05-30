import { context, PersistentVector, u128 } from "near-sdk-as";
@nearBindgen
export class productos {
  id_productos: string;
  nombre: string;
  descripcion: string;
  existencias: string;
  caducidad: string;
  marca: string;
  precio: string;
  ventas: string;

  constructor(id_productos: string, nombre: string, descripcion: string, existencias: string, 
    caducidad: string, marca: string,precio:string, ventas: string) {
    
    this.id_productos = id_productos;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.existencias = existencias;
    this.caducidad = caducidad;
    this.marca = marca;
    this.precio = precio;
    this.ventas=ventas;
  }
}

@nearBindgen
export class cliente {
  id_cliente:string;
  nombre:string;
  apellidos:string;
  direccion:string;
  telefono:string;
  wallet:string;

    constructor(id_clintes:string,nombre:string,apellidos:string,direccion:string,
      telefono:string,wallet:string) {
        this.id_cliente =id_clintes;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.direccion=direccion;
        this.telefono=telefono;
        this.wallet = context.sender;
    }
}

export const allproductos = new PersistentVector<productos>('productos');
export const allclientes = new PersistentVector<cliente>('cliente');
//export const allProveedors = new PersistentVector<Proveedors>("proveedores")
//export const allClients = new PersistentVector<Clients>("clientes")
export const ONE_NEAR = u128.from('10000000000000000')