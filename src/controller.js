import {pool} from './database.js';

class LibroController{
    async getAll(req,res){
        const [result] = await pool.query(`SELECT * FROM libros`);
          res.json(result);
 
    }

 
    async getOne(req,res){
        try{
            const libro = req.body;
            const id_libro =parseInt(libro.id);
            const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`,[id_libro]);
            if(result[0]!=undefined){
                res.json(result);
                
            } else{
                res.json({"Error":"No se encontro el libro buscado"});
            }
        } catch(e){
            console.log(e);
        }
       
           }

    async add(req, res){
             const libro = req.body;
            const campos = ['nombre' , 'autor' , 'categoria' , 'aNopublicacion', 'ISBN'];
            const camposExtras = Object.keys(libro).filter(attr => !campos.includes(attr));

            if(camposExtras.length > 0){
               return res.json({error: `Campos invalidos: ${camposExtras.join(' , ')}`});
            }  
            try{
                const [result] = await pool.query(`INSERT INTO Libros (nombre, autor, categoria, aNopublicacion, ISBN) 
            VALUES    (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.aNopublicacion, libro.ISBN, libro.id]);
               res.json({"Nuevo Libro insertado": result.insertId});
            }catch(error){ 
                res.json({"Error al añadir el libro": result.Error});
                }
            }

           async update(req, res){
                const libro = req.body;
                const isbn_libro = parseInt(libro.ISBN);
            
                try {
                    const [result] = await pool.query(`SELECT * FROM Libros WHERE ISBN=(?)`, [isbn_libro]);
                    if(result.length === 0){
                        throw new Error('No se encontro ningun libro con este ISBN');
                    }
            
                    const [updateResult] = await pool.query(`UPDATE Libros SET nombre=?, autor=?, categoria=?,aNopublicacion=?, ISBN=? WHERE ISBN=?`, [libro.nombre, libro.autor, libro.categoria, libro.aNopublicacion, libro.ISBN, isbn_libro]);
                         res.json({"Libros actualizados": updateResult.changedRows});
                } catch(error) {
                    res.status(400).json({error: error.message});
                }
            }        
                        async delete(req, res) {
                try {
                    const libro = req.body;
                    const isbn_libro = parseInt(libro.ISBN);
                    
                    const [result] = await pool.query('DELETE FROM Libros WHERE ISBN = ?', [isbn_libro]);
            
                    if (result.affectedRows === 0) {
                        res.json({ "mensaje": "Ningún libro se eliminó. ISBN no encontrado." });
                    } else {
                        res.json({ "Libro eliminado": result.affectedRows });
                    }
                } catch (error) {
                    res.status(500).json({ "Error al eliminar el libro": error.message });
                }
            }


            
}

export const libro = new LibroController();