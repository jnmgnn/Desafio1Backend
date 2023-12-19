//Creamos la clase Producto
class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
      this.id = Product.id(); 
    }
  
    //
    static id() { //Metodo static para poder incrementar el ID
      !this.idSuma ? (this.idSuma = 1) : this.idSuma++;
      return this.idSuma;
    }
  }


  //Creamos la class Product Manager
class ProductManager {
    constructor(){
        this.products = [];
    }
    getProducts(){
        return this.products
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if(!title || !description || !price || !thumbnail || !code || !stock){ //Si el producto no tiene uno de los campos completos, tira el console.log
            console.log("Complete todos los campos")
        }

        const product = new Product(title, description, price, thumbnail, code, stock);
        
        let findProduct = this.products.find((p) => p.code === product.code); // Encontramos un producto con CODE unico

        if (findProduct) {
            console.log(`El código ${product.code} ya está en uso. No se puede registrar el producto.`);
        } else {
          this.products.push(product);
          console.log(`El producto ${product.title} se ha agregado correctamente con el ID ${product.id}`);
        }
      }


    getProductById(id){ 
        let found = this.title.find((p) => p.id === id) 
        if (found) { 
            return found;
        } else { 
            console.log(`No existe un producto con el ID ${product.id}`) 
        } 
    } 
} 

//Creamos los productos
const product = new ProductManager()
product.addProduct("Producto Prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
product.addProduct("Producto Prueba 2", "Este es el segundo producto prueba", 140, "Sin imagen", "abc123", 14) //Este no se va a agregar porque tiene mismo code con el primero
product.addProduct("Producto Prueba 3", "Este es el tercer producto prueba", 310, "Sin imagen", "123abc", 6)



console.log("-----------------------") 
console.log(product.getProducts()); 
