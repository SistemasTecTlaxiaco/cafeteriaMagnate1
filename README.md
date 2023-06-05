# Bienvenido a Cafeteria MAGANATE
---
CAFETERIA MAGANATE es un smart contract que parte de la idea de que todo el conocimiento y la información debe ser libre para todos. Este proyecto permite registrar clientes, buscar,actualizar,eliminar, asi como con los productos, etc. en un ambiente completamente descentralizado y así permitir a otros usuarios obtener los recursos facilmente sin tener que visitar cientos de páginas diferentes hasta conseguir el recurso que buscaban.
Las funcionalidades principales del contrato son las siguientes:
* Registar cliente (además, guarda el usuario de la persona que lo sube como "Cliente").
* regsitrar cliente.
* Buscar algun cliente en especifico .
* Eliminar un cliente.
* Eliminar un producto.
* cancelar producto final.
* Buscara un producto en especifico.

## Cómo utilizar este contrato ❔
---
### Pré-requisitos ❕
1. Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12.0 o mayor.
2. Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando ```yarn --version ```. En caso de no tenerlo, puede instalarlo ejecutando el comando ```sudo npm install -g yarn```
3. Instale las dependencias de yarn ejecutando ```yarn install```
4. Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/)
5. Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute ```near --version```. En caso de no tenerlo, instálelo ejecutando el comando ```sudo npm install -g near-cli``` 

Ya tenemos todo lo que necesitamos para probar nuestro contrato inteligente. Ahora vamos a ejecutarlo.

## Instalación CAFETERIA
---
1. Clone el repositorio ```git clone git@github.com:SistemasTecTlaxiaco/cafeteriaMagnate1.git && cd CafeteriaMaganate1```
3. Vamos a iniciar sesión en nuestra wallet que creamos anteriormente: ```near login```
4. Dentro del repositorio, instalemos las dependencias del proyecto ejecutando ```npm install```, tranquilo, esto puede tomar unos segundos.
5. Si quieres desplegar el contrato y probar sus funciones, puedes hacerlo con ```yarn deploy:dev``` esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red. Guárdelo, lo necesitará si quiere probar los métodos del contrato inteligente.
6. Por último, si queremos ejecutar los tests desarrollados, podemos hacerlo ejecutando ```yarn test```
   
## Llamadas al Contrato 
---
Algunos de los metodos que podemos ejecutar son los siguientes
- REGISTAR PRODUCTO
  ```bash
  near call dev-<tu numero de contrato> Registrar_producto '{"id_producto": "id ","nombre": "nombre del producto" "descripcion": "Description del prodcuto", "existencias": "numero de existencias del producto", "caducidad": "fecha de caduccidad", "marca": "nombre de la marac del producto", "precio": "precio del producto", "ventas": "numero de ventas del producto"}' --accountId <tu_user.testnet>
  ```
- BUSCAR PRODUCTOS
  ```bash
  near call dev-<tu numero de contrato> Buscar_productos --accountId <tu_user.testnet>
  ```
- ACTUALIZAR PRODUCTOS
```bash
  near call dev-<tu numero de contrato> Actualiza_productos '{"id_producto": "id ","nombre": "nombre del producto" "descripcion": "Description del prodcuto", "existencias": "numero de existencias del producto", "caducidad": "fecha de caduccidad", "marca": "nombre de la marac del producto", "precio": "precio del producto", "ventas": "numero de ventas del producto"}' --accountId <tu_user.testnet>
  ```
- ELIMINAR PRODUCTOS
```bash
  near call dev-<tu numero de contrato> Eliminar-productos '{"id_productos": "id"}' --accountId <tu_user.testnet>
  ```
- REGISTRAR CLIENTES
```bash
  near call dev<tu numero de contrato>  Registrar_cliente '{"id_clientes": " ID","nombre": "nombre del cliente", "apellidos": "apellidos del cliente","direccion":"direccion del cliente", "telefono": "numero de telefono", "wallet": "nombre.testnet"}' --accountId <tu_user.testnet>
  ```
  - BUSCAR CLIENTES
  ```bash
near call dev-<tu numero de contrato> Buscar_cliente --accountId <tu_user.testnet>
    ```
 - ACTUALIZAR CLIENTE
```bash
  near call dev-<tu numero de contrato> Actualiza_cliente '{"id_clientes": " ID","nombre": "nombre del cliente", "apellidos": "apellidos del cliente","direccion":"direccion del cliente", "telefono": "numero de telefono", "wallet": "nombre.testnet"}' --accountId <tu_user.testnet>
  ```
- ELIMINAR CLIENTE
```bash
  near call dev-<tu numero de contrato> Eliminar_cliente '{"id_cliente": "id"}' --accountId <tu_user.testnet>
  ```
- IDENTIFICAR CLIENTE
```bash
  near call dev-<tu numero de contrato> Identificar_cliente '{"id_productos": "id"}' --accountId <tu_user.testnet>
  ```
  - CANCELAR PRODUCTO
```bash
  near call dev-<tu numero de contrato> Cancelar_producto '{"id_productos": "id"}' --accountId <tu_user.testnet>
  ```
## Mockup de Figma CAFETERIA
Abre este [enlace](https://www.figma.com/file/PI0jAosv38tTvCDIvH7GYK/CAFETERIA-MAGNATE?type=design&node-id=0%3A1&t=Odslw1iufsTykLUq-1) para abrir la propuesta de diseño de la Dapp.

## Authors
- [Magaly Nicolas Sanchez](https://github.com/magaly1311)
- [Abigail Coronel Santiago](https://github.com/abicornel)
- [Judith Reyna Cruz Santiago](https://github.com/judithrcs)
- [Maria Jose Lopez Leyva](https://github.com/mariajose-1007)
