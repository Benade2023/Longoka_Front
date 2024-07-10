import { IClasse } from "../interfaces/classe.interface";

export class Matiere {
    matiereId!: string;
    niveau!: string;
    matiereName!: string;
    classe!: IClasse[];
    ecoleId!: string;
}