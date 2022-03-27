import $api from "../http";

export default class UserService{
    static fetchUsers(){
        return $api.get('/users')
    }

    static fetchPosts(){
        return $api.get('/getAllPosts')
    }

    static async getUserPosts(id){
        console.log(id)
        return $api.get('/getUserPosts/' + id, {id})
    }

    static async updateUser(name, surname, id, img){
        return $api.put('/updateUser/' + id, {name, surname, id, img})
    }
}
