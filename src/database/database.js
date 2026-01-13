import fs from "node:fs/promises";
import { deleteTicket } from "../controllers/tickets/delete.js";
import { tickets } from "../routes/tickets.js";

const DATABASE_PATH = new URL("db.json", import.meta.url);

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data);
      })
      .catch(() => {
        this.#persist();
      });
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table, filters) {
    let data = this.#database[table] ?? [];

    if (filters) {
      data = data.filter((row) => {
        return Object.entries(filters).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }
    return data;
  }

  update(table, id, data) {
    if (!this.#database[table]) {
      return
    }
    
    const rowIndex = this.#database[table].findIndex(( row ) => row && row.id === id)

    if(rowIndex > -1) {
      this.#database[table][rowIndex] = {
        ...this.#database[table][rowIndex],
        ...data,
        updated_at: new Date()
      }

      this.#persist()
      return true
    }
    return false
  }

  deleteTicket(table, id) {
    if (!this.#database[table]) {
      return false
    }
    
    const rowIndex = this.#database[table].findIndex(( row ) => row && row.id === id)

    if(rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
      return true
    }
    
    return false
  }
}
