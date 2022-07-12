import { Resolver, Query, Mutation, Args, Info } from '@nestjs/graphql';
import { EmployeeCreateDTO } from './dto/create-employee.input';
import { EmployeeService } from './employee.service';
import { Employee } from './entity/employee.entity';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInput') employee: EmployeeCreateDTO) {
    return this.employeeService.create(employee);
  }
  @Query(() => Employee, { name: 'findEmployee' })
  findOne(@Args('id') id: string, @Info() info) {
    //if you want to fetch (from db) ONLY the query fields what use asked use @info
    const keys = info.fieldNodes[0].selectionSet.selections
      .filter((selection) => !selection.selectionSet)
      .map((item) => item.name.value);

    console.log('Query fields are =====>', keys);
    //todo: now you can pass keys to typeORM

    return this.employeeService.findOne(id);
  }
}
