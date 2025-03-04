const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',          
  user: 'root',               
  password: 'Sarazua_2024.:)', // Contraseña de la base de datos
  database: 'todo_list'       
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos. ID de conexión:', connection.threadId);

  const query = 'SELECT * FROM tareas'; 
  connection.query(query, (err, results, fields) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.stack);
      connection.end(); 
      return;
    }

    // Mostrar los resultados
    console.log('Resultados de la consulta:');
    console.log(results); // Muestra los resultados en la consola

    // Cerrar la conexión
    connection.end((err) => {
      if (err) {
        console.error('Error al cerrar la conexión:', err.stack);
        return;
      }
      console.log('Conexión cerrada correctamente.');
    });
  });
});