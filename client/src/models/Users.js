
/* R"J
*/
const Users = [
    { Name: 'Rumeel', Password: 'red', Email: 'jessamyr1@newpaltz.edu' },
    { Name: 'Jack', Password: 'black', Email: 'blackj@newpaltz.edu' },
    
];

export let CurrentUser = null;

export function Login(email, password) {

    const user = Users.find(x => x.Email == email);
    if(!user) throw Error('User not found');
    if(user.Password != password) throw Error('Wrong Password');

    return CurrentUser = user;
}