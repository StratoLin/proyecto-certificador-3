export interface IDetalleOrden {
    id: number;
    cantidad: number;
    nombre: string;
    precio: number;
    total: number;
    orden_id: number;
    producto_id: number;
}