const { User } = require("./modules/user")
const { Admin } = require("./modules/admin")
const { Moderator } = require("./modules/moderator")

const user1 = new Admin("Abdulloh")
const user2 = new Moderator()

console.log(user1);
console.log(user2);

console.log(user1 instanceof Moderator);
