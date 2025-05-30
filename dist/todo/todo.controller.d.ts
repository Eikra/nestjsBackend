import { ToDoService } from './todo.service';
import { CreateToDoDto } from './dto/create-todo.dto';
import { EditToDoDto } from './dto/edit-todo.dto';
export declare class ToDoController {
    private ToDoService;
    constructor(ToDoService: ToDoService);
    getToDos(userId: number): Promise<{}>;
    getToDoById(userId: number, ToDoId: number): import(".prisma/client").Prisma.Prisma__ToDoClient<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        title: string;
        description: string;
        userId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    createToDo(userId: number, dto: CreateToDoDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        title: string;
        description: string;
        userId: number;
    }>;
    editToDoById(userId: number, ToDoId: number, dto: EditToDoDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        completed: boolean;
        title: string;
        description: string;
        userId: number;
    }>;
    deleteToDoById(userId: number, ToDoId: number): Promise<void>;
}
