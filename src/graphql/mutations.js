/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModeltaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModeltaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModeltaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
