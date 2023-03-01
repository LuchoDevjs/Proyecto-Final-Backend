export default class UserDto {
      constructor(user) {
            this.id = user.id;
            this.password = user.password;
            this.nombre = user.nombre;
            this.email = user.email;
            this.direccion = user.direccion;
            this.telefono = user.telefono;
            this.type = user.type;
            this.timestamps = user.timestamps;
      }
}
