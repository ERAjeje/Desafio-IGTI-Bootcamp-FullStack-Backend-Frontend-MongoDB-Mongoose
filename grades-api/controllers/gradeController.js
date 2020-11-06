import {db} from '../models/index.js';

const Grade = db.grades;

export async function getGrades(req, res) {
    try{
        const data = await Grade.find();
        res.send(data);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function getGradesByName(req, res) {
    const param = req.params.name;
    try{
        const data = await Grade.find({name: param})
        res.send(data);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function getGradesById(req, res) {
    const param = req.params.id;
    try{
        const data = await Grade.find({_id: param})
        res.send(data);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function getGradesBySubject(req, res) {
    const param = req.params.subject;
    try{
        const data = await Grade.find({subject: param})
        res.send(data);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function getGradesByType(req, res) {
    const param = req.params.type;
    try{
        const data = await Grade.find({type: param})
        res.send(data);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function postGrade(req, res) {
    try{
        const grade = new Grade(req.body);
        grade.save();
        res.send(grade);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function patchGradeById(req, res) {
    const param = req.body;
    try{
        const data = await Grade.findByIdAndUpdate(param)
        res.send(data);
    } catch (err){
        res.status(500).send({error: err})
    }
}

export async function patchGradeByName(req, res) {

}

export async function putGradeById(req, res) {

}

export async function putGradeByName(req, res) {

}

export async function deleteGrade(req, res) {

}
