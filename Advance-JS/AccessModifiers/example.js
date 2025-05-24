class Data {
    constructor(public1, _private, _protected) {
        this.public1 = public1;

        this.getPrivateData = () => {
            return `private Data : ${_private}`;
        };

        this.getProtectedData = () => {
            return `protected Data : ${_protected}`;
        };
    }
}

const data1 = new Data("Public data", "Private data", "Protected data");

console.log(data1.public1);             // Public data
console.log(data1.getPrivateData());    // private Data : Private data
console.log(data1.getProtectedData());  // protected Data : Protected data
