import { ICreateCategoryDTO } from "../../../cars/repositories/ICategoriesRepository";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository{
    create(data: ICreateCategoryDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export {UsersRepository} 