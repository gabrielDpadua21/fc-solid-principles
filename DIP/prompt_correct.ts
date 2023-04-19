interface IDatabase {
    query(sql: string): any;
  }
  
  class ProductServices {
    constructor(private database: IDatabase) {}
  
    public getProducts() {
      return this.database.query('SELECT * FROM products');
    }
  }
  
  class Databases implements IDatabase {
    constructor() {}
  
    public query(sql: string) {
      // código para executar a consulta no banco de dados
    }
  }
  