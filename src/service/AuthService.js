import $api from "../http";

export default class AuthService{
    static async login(email, password){
        return $api.post('/login', {email, password})
    }

    static async registration(email, password, name, surname){
        return $api.post('/registration', {email, password, name, surname})
    }

    static async logout(){
        return $api.post('/logout')
    }

    static async posts(anyPost, author, authorId){
        return $api.post('/posts', {anyPost, author, authorId})
    }

    static async postComment(postId, commentValue, commentAuthor, commentAuthorId){
        return $api.post('/posts/' + postId + '/comments', {postId, commentValue, commentAuthor, commentAuthorId})
    }

    static async deletePost(_id){
        return $api.delete('/deletePost/' + _id, {_id})
    }
}
