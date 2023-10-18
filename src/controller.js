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
}

export const libro = new LibroController();