import axios from "axios";

export const Client = axios.create({
  baseURL: 'https://proxyapp.correios.com.br/v1/sro-rastro',
  headers:{
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:36.0) Gecko/20100101 Firefox/36.0'
  }
});

export type AddressData = {
  cidade: string,
  uf: string
}

export type UnitData ={
  endereco: AddressData,
  tipo: string
} 

export type EventData = {
  codigo: string,
  descricao: string,
  dtHrCriado: Date,
  tipo: string,
  unidade: UnitData,
  unidadeDestino: UnitData,
  urlIcone: string
}

export type PostalData = {
  categoria: string,
  descricao: string,
  sigla: string
}

export type ObjectData = {
  codObjeto: string,
  eventos: EventData,
  modalidade: string,
  tipoPostal: PostalData,
  habilitaAutoDeclaracao: boolean,
  permiteEncargoImportacao: boolean,
  habilitaPercorridaCarteiro: boolean,
  bloqueioObjeto: boolean,
  possuiLocker: boolean,
  habilitaLocker: boolean,
  habilitaCrowdshipping: boolean
}

export type TrackData = {
  objetos: ObjectData[],
  quantidade: number,
  resultado: string,
  versao: string
}

export async function getTrackInfo(trackCode: string){
  const response = await Client.get<TrackData>('/' + trackCode);
  if (!!response && !!response.data){
    return response.data;
  }
  return false;
}