import { v4 as uuidv4 } from 'uuid';
import Usuario from '../model/Usuario';


const usuarios: Usuario[] = [
    { id: uuidv4(), nome: "Felipe Alves", email: "felipe.alves@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Ana Silva", email: "ana.silva@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Carlos Pereira", email: "carlos.pereira@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Mariana Souza", email: "mariana.souza@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Lucas Rocha", email: "lucas.rocha@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Beatriz Lima", email: "beatriz.lima@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Rafael Gomes", email: "rafael.gomes@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Juliana Costa", email: "juliana.costa@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Matheus Ribeiro", email: "matheus.ribeiro@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Camila Fernandes", email: "camila.fernandes@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Bruno Martins", email: "bruno.martins@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Larissa Araujo", email: "larissa.araujo@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Diego Nogueira", email: "diego.nogueira@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Paula Freitas", email: "paula.freitas@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Thiago Barros", email: "thiago.barros@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Renata Pacheco", email: "renata.pacheco@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Eduardo Teixeira", email: "eduardo.teixeira@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Natalia Farias", email: "natalia.farias@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Victor Moreira", email: "victor.moreira@email.com", senha: "senha123" },
    { id: uuidv4(), nome: "Patricia Cunha", email: "patricia.cunha@email.com", senha: "senha123" }
];

export default usuarios;