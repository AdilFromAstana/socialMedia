import $api from "../http";

export default class UserService{
    static fetchUsers(){
        return $api.get('/users')
    }

    static fetchPosts(){
        return $api.get('/getAllPosts')
    }

    static getUserPosts(_id){
        return $api.get('/getUserPosts/' + _id, {_id})
    }

    static async updateUser(name, surname, id, img){
        console.log(img)
        return $api.put('/updateUser/' + id, {name, surname, id, img})
    }
}
