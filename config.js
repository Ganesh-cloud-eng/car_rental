import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: '82.112.238.22',
  user: 'kilvish',
  password: 'Kilvish@123456',
  port: '3306',
  database: 'z_r',
  waitForConnections: true, // Enable queueing
  connectionLimit: 100, // Set an appropriate limit
});

const connection = () => {
  return pool.getConnection();
};

export default connection;


