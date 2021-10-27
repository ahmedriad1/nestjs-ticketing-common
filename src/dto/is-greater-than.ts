import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator';

export function IsGreaterThan(minValue: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [minValue],
      options: validationOptions,
      validator: {
        defaultMessage: (args: ValidationArguments) =>
          `${args.property} must be greater than ${args.constraints[0]}`,
        validate(value: any, args: ValidationArguments) {
          const [min] = args.constraints;
          return typeof value === 'number' && value > min;
        },
      },
    });
  };
}
