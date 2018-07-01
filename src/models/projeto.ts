export interface Projeto {
    id: number;
    nome: string;
    descricao: string;
    data_inicio: Date;
    data_fim: Date;
    status: number;
    cliente_id: number;
    faturamento_id: number;
}