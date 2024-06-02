// postgresService.js

const { Pool } = require('pg');

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: 'your_username',
    host: 'your_host',
    database: 'your_database',
    password: 'your_password',
    port: 5432, // Default PostgreSQL port
});

const createMaterial = async ({ material_name, material_type, material_description, material_amount, material_order_date, Supplier_id }) => {
    const query = `
        INSERT INTO materials (material_name, material_type, material_description, material_amount, material_order_date, Supplier_id)
        VALUES ($1, $2, $3, $4, $5, $6)
    `;
    const values = [material_name, material_type, material_description, material_amount, material_order_date, Supplier_id];
    await pool.query(query, values);
};

const listMaterial = async () => {
    const query = `
        SELECT * FROM materials
    `;
    const { rows } = await pool.query(query);
    return rows;
};

module.exports = { createMaterial, listMaterial };
