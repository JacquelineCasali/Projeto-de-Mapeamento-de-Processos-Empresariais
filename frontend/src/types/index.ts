export interface Area {
    id: number;
    nome: string;
  }
  
  export interface Processo {
    id: number;
    nome: string;
    descricao: string;
    areaId: number;
  }
  
  export interface Subprocesso {
    id: number;
    nome: string;
    descricao: string;
    processoId: number;
    subprocessoId?: number | null;
  }