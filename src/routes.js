import { Router } from 'express';
import { libro } from './controller.js';

export const router = Router()

//Se linkean las rutas
router.get('/libros',  libro.getAll);
router.get('/libro', libro.getOne);
router.post('/libro', libro.add);
router.delete('/libro', libro.delete);
router.put('/libro', libro.update);