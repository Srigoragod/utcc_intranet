export default class Util {
  static generateUuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  static checkDuplicateUuid(array, newObj) {
    const newUuid = newObj.uuid;
    const isDuplicate = array.some((obj) => obj.uuid === newUuid);
    return isDuplicate;
  }

  static checkDuplicateName(array, newObj) {
      const newName = newObj.name;
      const isDuplicate = array.some((obj) => obj.name === newName);
      return isDuplicate;
  }
}
