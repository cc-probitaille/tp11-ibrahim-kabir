export class DynamicClassFactory {
    static createClass(className: string) {
      if (!className) {
        throw new Error("Class name must be provided.");
      }
  
      // Création d'une classe dynamique avec le nom passé en paramètre
      const dynamicClass = new Function('className', `
        return class ${className} {
          constructor() {
            console.log("Instance of " + className + " created.");
          }
        };
      `)(className);
      
      return dynamicClass;
    }
  }
  