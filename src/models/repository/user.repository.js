import UserDto from './../dto/user.dto.js';
import User from './../User.model.js';
import UsersDaosFactory from './../dao/userDaoFactory.js';

export default class UserRepository {
      constructor() {
            this.dao = UsersDaosFactory.getUserDao();
      }
      async create(user) {
        try {
          const userDto = await this.dao.create(new UserDto(user));
          return new User(userDto);
        } catch (error) {
          throw new Error(error.message);
        }
      }

      async getAll(query) {
        try {
          const usersDto = await this.dao.getAll(query);
          return usersDto.map((userDto) => new User(userDto));
        } catch (error) {
          throw new Error(error.message);
        }
      }
      async getById(id) {
        try {
          const userDto = await this.dao.getById(id);
          return new User(userDto);
        } catch (error) {
          throw new Error(error.message);
        }
      }
      async findByEmail(email) {
        try {
          const userDto = await this.dao.findByEmail(email);
          if (!userDto) {
                return;
          }
          return new User(userDto);
        } catch (error) {
        throw new Error(error.message);  
        }
      }
      async upDate(id, dato) {
        try {
          await this.dao.updateById(id, dato);
          return;
        } catch (error) {
          throw new Error(error.message);
        }
      }
      async deleteById(id) {
        try {
          await this.dao.deleteById(id);
          return;
        } catch (error) {
          throw new Error(error.message);
        }
      }
}
