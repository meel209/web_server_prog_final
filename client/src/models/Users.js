
/* R"J
*/
const Users = [
    { Name: 'Rumeel', Password: 'red', Email: 'j@new.edu', Type: 'Admin' },
    { Name: 'Jack', Password: 'black', Email: 'blackj@newpaltz.edu', Type: 'User'},
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}