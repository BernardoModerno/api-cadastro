import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Ana',
      sobrenome: 'Sa',
      email: 'ana@gmail.com',
      idade: 20,
      peso: 50,
      altura: 1.59,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
