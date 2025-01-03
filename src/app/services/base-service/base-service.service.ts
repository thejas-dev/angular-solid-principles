/**
 * This abstract class defines a common structure for service classes that handle
 * fetching and managing data. By creating this base class, we ensure that derived 
 * classes like PostService and UserService can substitute the base class without 
 * altering the correctness of the program. This design adheres to the Liskov 
 * Substitution Principle (LSP) by providing a consistent interface for various 
 * services, allowing for flexibility, scalability, and maintainability in the codebase.
*/

export abstract class BaseService<T> {
  abstract fetchAll(): void;
  abstract fetchById(id: any): void;
  abstract getItems(): T[];
}
