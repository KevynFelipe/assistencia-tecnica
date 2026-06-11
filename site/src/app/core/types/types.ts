/** Funcionário da assistência técnica */
export interface Funcionario {
  id?: number | string;
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
  salario?: number;
  senha?: string;
}

/** Cliente pessoa física ou jurídica */
export interface Cliente {
  id?: number | string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  cpfCnpj?: string;
  tipo?: 'PF' | 'PJ';
  senha?: string;
  ativo: boolean;
}

/** Equipamento vinculado a um cliente */
export interface Equipamento {
  id?: number;
  clienteId: number;
  clienteNome: string;
  marca: string;
  modelo: string;
  serial?: string;
  imei?: string;
  observacoes?: string;
}

/** Registro de mudança de status na OS */
export interface HistoricoOS {
  status: string;
  data: string;
  responsavel: string;
}

/** Ordem de Serviço — núcleo do sistema */
export interface OrdemServico {
  id?: number;
  tecnicoId: number;
  tecnicoNome: string;
  clienteId: number;
  clienteNome: string;
  equipamentoId?: number;
  equipamentoNome?: string;
  aparelho: string;
  tipoAparelho: string;
  defeito: string;
  status: 'Na Fila' | 'Em Análise' | 'Orçamento Aprovado' | 'Pronto' | 'Entregue';
  prioridade: 'Baixa' | 'Normal' | 'Alta' | 'Urgente';
  dataEntrada: string;
  dataSaida?: string;
  tempoEstimado?: number;
  valorServico?: number;
  valorPecas?: number;
  valorTotal?: number;
  diagnosticos?: string;
  observacoes?: string;
  historico?: HistoricoOS[];
  garantiaDias?: number;
  garantiaFim?: string;
}

export interface EstoqueItem {
  id?: number;
  nome: string;
  quantidade: number;
  estoqueMinimo: number;
  valorCusto: number;
  valorVenda: number;
  categoria: string;
}

export interface Mensagem {
  id?: number;
  ordemId: number;
  remetente: 'cliente' | 'tecnico';
  remetenteNome: string;
  texto: string;
  data: string;
}

export interface Chamado {
  id?: number;
  clienteId: number;
  clienteNome: string;
  equipamentoId?: number;
  equipamentoNome?: string;
  descricao: string;
  status: 'Aberto' | 'Em Andamento' | 'Resolvido' | 'Fechado';
  data: string;
  observacoes?: string;
}

export interface ChamadoMensagem {
  id?: number;
  chamadoId: number;
  remetente: 'cliente' | 'tecnico' | 'gerente';
  remetenteNome: string;
  texto: string;
  data: string;
}

