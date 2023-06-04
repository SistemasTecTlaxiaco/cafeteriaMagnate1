import { context, logging, ContractPromiseBatch, u128 } from 'near-sdk-as';
import { productos, allproductos, cliente, allclientes, ONE_NEAR } from './models'

const contractOwner = context.sender;
const allproductosIndex = allproductos.length;
const allclientesIndex = allclientes.length;

// Creates a new instance of a book and stores it on a PersistentVector
export function Registrar_productos(id_productos: string, nombre: string, descripcion: string, 
    existencias: string, caducidad: string,marca: string, precio: string, ventas:string): productos {
    const nuevoproductos =new productos(id_productos, nombre, descripcion, existencias,caducidad, marca,precio, ventas);
    allproductos.push(nuevoproductos);
    logging.log('Nuevo producto regsitrado: ' + nuevoproductos.nombre)
   // addclient();
    return nuevoproductos;
}

// Returns all books on the PersistentVector
export function Buscar_productos(nombre: string): productos[] {
    const productosencontrados: productos[] = [];
  
    for (let i = 0; i < allproductos.length; i++) {
      if (allproductos[i].nombre === nombre) {
        productosencontrados.push(allproductos[i]);
      }
    }
     
  return productosencontrados;
  }


// Returns a single book (if exists)
export function Actualizar_productos(id_productos: string, nombre: string, descripcion: string, existencias: string, 
    caducidad: string, marca: string, precio: string, ventas:string): productos | null  {
    for (let i = 0; i < allproductos.length; i++) {
    if(allproductos[i].id_productos ==id_productos) {
        allproductos.swap_remove(i);
        const productosactualizado = new productos(id_productos, nombre, descripcion, existencias,caducidad, marca,precio, ventas);
        allproductos.push(productosactualizado);
        logging.log('producto actualizado: ' + allproductos[i].nombre);
        return allproductos[i];
       }
    }
    logging.log('producto no encontrado');
    return null;
}
export function Eliminar_productos(id_productos: string): boolean {
    for (let i = 0; i < allproductos.length; i++) {
      if (allproductos[i].id_productos == id_productos) {
        allproductos.swap_remove(i);
        logging.log('producto eliminado');
        return true;
      }
    }
    logging.log('El producto no existe');
    return false;
}

// Used to validate testing for deleteBooks function
//export function productsLen(): number {
    //return allproducts.length;
//}

// Empties the PersistentVector in charge of storing all books
/*export function deleteproducts(): void {
    while(allproducts.length > 0) {
        allproducts.pop();
    }
}
*/
// Deletes a book (if exists) based on its position on the Book PersistentVector
/*export function deleteproductos(productosIndex: i32): bool {
    if(allproducts.length < productosIndex) {
        logging.log('El producto no existe')
        return false
    }
    allproducts.swap_remove(productosIndex);
    logging.log('El producto ha sido eliminado!');
    return true
}*/
export function Registrar_clientes(id_clientes:string,nombre:string,apellidos:string,
    direccion:string,telefono:string,wallet:string): cliente {
    const nuevocliente = new cliente(id_clientes,nombre,apellidos,direccion,
    telefono,wallet);
    allclientes.push(nuevocliente);
    logging.log('Nuevo cliente registrado: ' + nuevocliente.nombre +' '+ nuevocliente.apellidos);
    /*if (Proveedor == true){
        addProveedors();
    }
    if (Cliente == true){
        addClients();
    }*/
    
    return nuevocliente;
}
export function Buscar_cliente(nombre: string): cliente[] {
    const clientesEncontrados = new Array<cliente>();
    for (let i = 0; i < allclientes.length; i++) {
        if (allclientes[i].nombre == nombre) {
            clientesEncontrados.push(allclientes[i]);
        }
    }
    return clientesEncontrados;
}

export function Actualizar_clientes(id_clientes:string,nombre:string,apellidos:string,
    direccion:string,telefono:string,wallet:string): cliente | null{
    for (let i = 0; i < allclientes.length; i++) {
        if (allclientes[i].nombre == nombre) {
            allclientes.swap_remove(i);
          const nuevocliente = new cliente(id_clientes,nombre,apellidos,direccion,telefono,wallet);
          allclientes.push(nuevocliente);
          logging.log('cliente actualizado: ' + allclientes[i].nombre);
          return allclientes[i];
        }
      }
      logging.log('cliente no encontrado');
      return null;
}

export function Eliminar_cliente(nombre: string): boolean {
    for (let i = 0; i < allclientes.length; i++) {
      if (allclientes[i].nombre == nombre) {
        allclientes.swap_remove(i);
        logging.log('cliente eliminado');
        return true;
      }
    }
    logging.log('El cliente no existe');
    return false;
  }

  export function Identificar_cliente (nombre: string): boolean {
        for (let i = 0; i < allclientes.length; i++) {
          if (allclientes[i].nombre === nombre) {
            logging.log('cliente identificado');
            return true;
          }
        }
        logging.log('El cliente no existe');
        return false;
      }

      export function Cancelar_producto(id_productos:string ): boolean {
        for (let i = 0; i < allproductos.length; i++) {
          if (allproductos[i].id_productos == id_productos) {
              allproductos.swap_remove(i)
            // Realizar la lógica de cancelación del evento aquí
            // ...
      
            logging.log('producto cancelado');
            return true;
          }
        }
        logging.log('El producto no existe');
        return false;
      }
// Lets a user change the ownership of a book in case its required
/*export function changeproductosOwner(productosIndex: i32): bool {
    if(allproducts.length < productosIndex) {
         logging.log('El servicio no existe!')
         return false;
    } else if(allproducts[productosIndex].owner == context.sender) {
            logging.log('El usuario ya tiene registrado un producto similar.')
            return false;
        }
    else {
        allproducts[productosIndex].owner = context.sender;
        logging.log('Intercambio de propiedad del producto!')
        return true;
    }
}

// Returns the owner of the contract
export function getOwner(): string {
    return contractOwner;
}

// Returns all the contributors
export function getclient(): cliente[] {
    const data = new Array<cliente>(allclientIndex);
    for(let i = 0; i < allclientIndex; i++) {
        data[i] = allclient[i]
    }
    return data;
}

// Used to test deleteContributors function
export function getclientLength(): cliente {
    return allclient.length;
}

// Adds a new contributor to the allContributors PersistentVector
export function addclient(): cliente {
    const data = new Array<cliente>(allclientIndex) 
    let exists = false;
     const client = new allclientIndex()
    for(let i = 0; i < allclientIndex; i++) {
        data[i] = allclient[i];
    }
    for(let x = 0; x < data.length; x++) {
        if(context.sender == data[x].id_cliente) {
             logging.log('El cliente ya ha comprado!')
             exists = true;
            break
        }
    }
    if(exists == false) {
        logging.log('El cliente no ha comprado, lo agrego ahora!')
        allclient.push(client)
        return client
    }
    return client
}

// Checks if a contributor exists based on its username, making it easier for the user to check
export function findclient(clientUser: String):bool {
    const data = new Array<cliente>(allclientIndex);
    if(allclientIndex <= 0) {
        logging.log("No hay clientes en este momento")
        return false;
    } else {
        for(let i = 0; i < allclientIndex; i++) {
            data[i] = allclient[i]
            if(data[i].id_cliente == clientUser) {
                logging.log('Cliente ' + clientUser + ' fue encontrado!')
                return true
            }
            break
        }
        logging.log('Este usuario no existe existe.')
        return false;
    }
}

// Empties the allContributors PersistentVector
export function deleteclient(): void {
    while(allclient.length > 0) {
        allclient.pop()
    }
    logging.log(
        'Se ha vaciado la lista de clientes'
    )
}

// Lets the user make a donation to the book owner
export function makeDonation(productosOwnerIndex: i32): bool {
    const data = new  Array<productos>(allproductsIndex);
    if(productosOwnerIndex > allproductsIndex) {
        logging.log('El producto/owner no existe.')
        return false
    } else {
         assert(context.attachedDeposit > ONE_NEAR, 'Monto a pagar'); 
        return true

    }
   }

// Lets the user make a donation to the project
export function donateToProject(): void {
    assert(context.attachedDeposit > ONE_NEAR, 'You need to deposit some NEAR.')
    logging.log('Gracias por su contribucion')
*/
