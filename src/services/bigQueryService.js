const { BigQuery } = require('@google-cloud/bigquery');

// Initialize BigQuery client
const bigquery = new BigQuery();

// Function to fetch necessary data for the dashboard
async function fetchDataForDashboard(date) {
  try {
    // Construct SQL query to fetch necessary data
    const query = `
      SELECT
        p.product_id,
        p.product_name,
        m.material_id,
        m.material_name,
        p.product_amount,
        m.material_amount
      FROM
        YourDataset.Products p
      JOIN
        YourDataset.Materials m
      ON
        p.material_id = m.material_id
      WHERE
        DATE(p.date_created) = DATE('${date}')
    `;

    // Run the query
    const [rows] = await bigquery.query(query);

    // Return the query result
    return rows;
  } catch (error) {
    console.error('Error fetching data from BigQuery:', error);
    throw error;
  }
}

module.exports = {
  fetchDataForDashboard,
};
