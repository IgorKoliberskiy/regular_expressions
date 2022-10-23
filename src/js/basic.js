export default class Validator {
  static validateUsername(name) {
    return /^[a-z][-_\w]+[a-z]$/i.test(name) && !/\d{4,}/.test(name);
  }
}