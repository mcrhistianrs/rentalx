import { ICreateCategoryDTO } from "../../cars/repositories/ICategoriesRepository";

interface ICreateDTO {
    id: string;
    name: string;
    username: string;
    password:string;
    email: string;
    driver_license: string;
}

interface IUsersRepository {
    create(data: ICreateCategoryDTO): Promise<void>
}

export { IUsersRepository }