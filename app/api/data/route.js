import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// Membuat koneksi ke MySQL (menggunakan pool untuk koneksi yang lebih efisien)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Fungsi untuk mengambil data dari database
const queryDatabase = async (query) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      resolve(results);
    });
  });
};

// Handler untuk GET request
export async function GET() {
  try {
    const results = await queryDatabase(
      "SELECT deskripsi, image_data FROM hero"
    );

    const dataWithBase64Images = results.map((item) => {
      const base64Image = item.image_data
        ? item.image_data.toString("base64")
        : null;
      return { ...item, image_data: base64Image };
    });

    return new Response(JSON.stringify(dataWithBase64Images), { status: 200 });
  } catch (error) {
    const errorMessage =
      process.env.NODE_ENV === "development"
        ? error.message
        : "Error fetching data from database";
    return new Response(errorMessage, { status: 500 });
  }
}
