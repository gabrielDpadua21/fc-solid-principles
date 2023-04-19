class ProductService {
    constructor() {}
  
    public getProducts() {
      const database = new Database();
      return database.query('SELECT * FROM products');
    }
  }
  
  class Database {
    constructor() {}
  
    public query(sql: string) {
      // código para executar a consulta no banco de dados
    }
  }
  