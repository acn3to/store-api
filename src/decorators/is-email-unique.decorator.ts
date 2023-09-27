import { ValidationOptions, registerDecorator } from 'class-validator';
import { IsEmailUniqueValidator } from 'src/user/valitation/unique-email.validator';

export const IsEmailUnique = (validationOptions: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: IsEmailUniqueValidator,
    });
  };
};
