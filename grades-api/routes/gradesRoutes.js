import express from 'express';

import { getGrades,
         getGradesByName,
         getGradesById,
         getGradesBySubject,
         getGradesByType,
         postGrade,
         patchGradeById,
         putGradeById,
         deleteGrade
} from '../controllers/gradeController.js'

const routes = express();

routes.use(express.json());

routes.get('/', getGrades);
routes.get('/name/:name', getGradesByName);
routes.get('/id/:id', getGradesById);
routes.get('/subject/:subject', getGradesBySubject);
routes.get('/type/:type', getGradesByType);

routes.post('/', postGrade);

routes.patch('/', patchGradeById);

routes.put('/', putGradeById);

routes.delete('/:id', deleteGrade);

export default routes;



