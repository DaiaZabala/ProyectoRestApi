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
        const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?) , categoria=(?), aNopublicacion=(?), ISBN=(?) WHERE id=(?)` , [libro.nombre, libro.autor, libro.categoria, libro.aNopublicacion, libro.ISBN, libro.id] );
        res.json({"Libros actualizados": result.changedRows});
    }

    async delete(req, res){
        try{
            const libro = req.body;
        const [result] = await pool.query(`DELETE FROM Libros WHERE ISBN=(?)`, [libro.ISBN]);
        res.json({"Libro eliminado": result.affectedRows});
        } catch(error){ 
            console.log(error);

            res.status(404).json({ error: 'Error al eliminar el libro'});
            }      
    }

    async 
}

export const libro = new LibroController();