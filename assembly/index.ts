import { context, logging, ContractPromiseBatch, u128 } from 'near-sdk-as';
import { productos, allproductos, cliente, allclientes, ONE_NEAR } from './models'

const contractOwner = context.sender;
const allproductosIndex = allproductos.length;
const allclientesIndex = allclientes.length;

// Creates a new instance of a book and stores it on a PersistentVector
export function Registrar_Event(id_productos: string, nombre: string, descripcion: string, 
    existencias: string, caducidad: string,marca: string, precio: string, ventas:string): productos {
    const nuevoproductos = new productos(id_productos, nombre, descripcion, existencias,caducidad, marca, precio );
    allproductos.push(nuevoproductos);
    logging.log('Nuevo producto publicado: ' + newproductosUpload.nombre)
    addclient();
    return newproductosUpload;
}

// Returns all books on the PersistentVector
export function getproducts(): productos[] {
    const data = new Array<productos>(allproductsIndex);
    for(let i = 0; i < allproductsIndex; i++) {
        data[i] = allproducts[i]
    }
    return data;
}

// Returns a single book (if exists)
export function getproductos(productosIndex: i32): productos {
    if(allproducts.length < productosIndex) {
        logging.log('El producto no esxiste')
    }
    return allproducts[productosIndex]
}

// Used to validate testing for deleteBooks function
export function productsLen(): number {
    return allproducts.length;
}

// Empties the PersistentVector in charge of storing all books
export function deleteproducts(): void {
    while(allproducts.length > 0) {
        allproducts.pop();
    }
}

// Deletes a book (if exists) based on its position on the Book PersistentVector
export function deleteproductos(productosIndex: i32): bool {
    if(allproducts.length < productosIndex) {
        logging.log('El producto no existe')
        return false
    }
    allproducts.swap_remove(productosIndex);
    logging.log('El producto ha sido eliminado!');
    return true
}

// Lets a user change the ownership of a book in case its required
export function changeproductosOwner(productosIndex: i32): bool {
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
}
