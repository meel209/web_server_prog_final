

const Users = [
    { Name: 'Bracha', Password: '5780', Email: 'chabad@newpaltz.edu', userId: 1},
    { Name: 'Bernie', Password: '2020', Email: 'bernie@newpaltz.edu', userId: 2 },    
];

function getOrCreate(response){
    console.log(response.data);
    let user = Users.find(x => x.Email == response.data.email);
    if(!user){
        const picture = response.data.picture.data ? // if it is facebook than the picture data is more complex and we need to account for that
                            response.data.picture.data.url : response.data.picture;
        Users.push({ 
            Name: response.data.name, 
            Password: null, 
            Email: response.data.email,
            Picture: picture,
            userId: Users.length });
        user = Users[Users.length - 1];
    }
    console.log(user)
    // no need to check password. We got the email address directly from an oauth provider
    return user;

}

module.exports = {
    async Login(email, password) {
        let response;

        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
   },
    Get(userId) {
        return Users[userId]
    }
}