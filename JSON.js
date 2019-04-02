const user = {name:"test",email:"test1@test.com", password:"password1"};
const user1 = {name:"test1",email:"test2@test.com", password:"password2"};
const user2 = {name:"test2",email:"test3@test.com", password:"password3"};
const user3 = {name:"test3",email:"test4@test.com", password:"password4"};
const user4 = {name:"test4",email:"test5@test.com", password:"password5"};
users = [user, user2, user3, user4, user1];

function usersCreate()
{
    const user = {name:"test",email:"test1@test.com", password:"password1"};
    const user1 = {name:"test1",email:"test2@test.com", password:"password2"};
    const user2 = {name:"test2",email:"test3@test.com", password:"password3"};
    const user3 = {name:"test3",email:"test4@test.com", password:"password4"};
    const user4 = {name:"test4",email:"test5@test.com", password:"password5"};
    var users2 = [user, user2, user3, user4, user1];
    return users2;
}
function RegisterJSON(user)
{
    users.push(user);
    window.open("login.html", "_self");
}

