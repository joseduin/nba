export class Usuario {

  public id       : string;
  public nombres  : string;
  public email    : string;
  public imagenUrl: string;
  public tipo     : string;

  constructor(id: string, nombres: string, email: string, imagenUrl: string, tipo: string) {
    this.id       = id;
    this.nombres  = nombres;
    this.email    = email;
    this.imagenUrl= imagenUrl;
    this.tipo     = tipo;
  }

}
