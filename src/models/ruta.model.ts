import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Estacion} from './estacion.model';

@model()
export class Ruta extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;



  @belongsTo(() => Estacion, {name: 'origenFk'})
  origen: string;


  @belongsTo(() => Estacion, {name: 'destinoFk'})
  destino: string;


  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // origen: string;

  // @property({
  //   type: 'string',
  //   required: true,
  // })
  // destino: string;

  @property({
    type: 'number',
    required: true,
  })
  tiempo_estimado: number;


  constructor(data?: Partial<Ruta>) {
    super(data);
  }
}

export interface RutaRelations {
  // describe navigational properties here
}

export type RutaWithRelations = Ruta & RutaRelations;
