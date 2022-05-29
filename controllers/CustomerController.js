const db = require("../db/database");

class Customer {
  async create(req, res) {
    const { name_customer, id_order } = req.body;

    if (!name_customer && !id_order) {
      res.status(404).send("Data not received");
    } else {
      const newCustomer = await db.query(
        `INSERT INTO customers (name, id_order) VALUES ($1, $2)`,
        [name_customer, id_order]
      );
      res.json(newCustomer);
    }
  }
  async showAll(req, res) {
    try {
      const customers = await db.query("select * from customers");
      const { rows } = customers;
      res.json(rows);
    } catch {
      res.send("Table doesn't exist");
    }
  }
  async showOne(req, res) {
    const id = req.params.id;
    if (!id) {
      res.send("Such id doesn't exist");
    } else {
      const found = await db.query(
        "select * from customers where id_customer = $1",
        [id]
      );
      res.json(found.rows[0]);
    }
  }
  async update(req, res) {
    const { name_for_upd, id_order, id_for_upd } = req.body;
    if (!name_for_upd && !id_order && !id_for_upd) {
      res.send("Data not received");
    } else {
      const updCustomer = await db.query(
        "UPDATE customers SET name = $1, id_order = $2 where id_customer = $3",
        [name_for_upd, id_order, id_for_upd]
      );
      res.json(updCustomer);
    }
  }
  async delete(req, res) {
    const id = req.params.id;
    if (!id) {
      res.send("Data not received");
    } else {
      const delCustomer = await db.query(
        "DELETE FROM customers WHERE id_customer = $1",
        [id]
      );
      res.json(delCustomer);
    }
  }
}

module.exports = new Customer();
