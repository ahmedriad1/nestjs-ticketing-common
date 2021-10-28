import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';
import { ObjectId } from 'bson';

export function IsObjectId(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'IsObjectId',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        defaultMessage: ({ property }: ValidationArguments) =>
          `${property} must be a valid ObjectId`,
        validate: (value: any) => ObjectId.isValid(value),
      },
    });
  };
}
