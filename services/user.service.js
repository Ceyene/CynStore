const boom = require('@hapi/boom');
const pool = require('../libs/postgres.pool');

const getConnection = require('../libs/postgres');

class UserService {
  constructor() {
    this.pool = pool; //creating our pool
    this.pool.on('error', (err) => console.log(err)); //listening an event error in our pool
  }

  async create(data) {
    return data;
  }

  //creating our sql query
  async find() {
    const query = 'SELECT * FROM tasks'; //creating our query from our db table
    const res = await this.pool.query(query); //executing our query
    return res.rows; //returning our query result
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
