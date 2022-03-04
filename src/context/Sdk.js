
import axios from "axios";

class SDK{
    constructor(){
        this.instance=axios.create({
            baseURL:"https://api.github.com",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            }
        })
    }


    async getUser(name){
        try{
            const req = await this.instance.get(`/users/${name}`)
            return req.data
        }
        catch(error){
            console.log(error)
        }
    }

    async getFollowers(){
        try{
            const req = await this.instance.get(`/users/aydansamedova/followers`)
            return req.data
        }
        catch(error){
            console.log(error)
        }
    }

    async getRepos(){
        try{
            const req = await this.instance.get(`/users/aydansamedova/repos`)
            return req.data
        }
        catch(error){
            console.log(error)
        }
    }




}





export default SDK;





