import infoObject from '../info-object';
import notEmpty from './not-empty';

/**
 * Marks that the value is required, that is that it's not undefined.
 *
 * @param {function} validator - Validator to validate against.
 * @return {function} - A function that takes a value and that returns true or false if valid or not.
 */
export default function required(validator, canBeEmpty = false) {
    if (!canBeEmpty) {
        validator = notEmpty(validator);
    }

    return (input, info) => {
        if (info) {
            return infoObject({ validator, required: true });
        }

        if (input === undefined) {
            return 'A value was required but none was given!';
        }

        if (!validator) {
            return true;
        }

        return validator(input);
    };
}