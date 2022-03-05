
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

    async getFollowers(name){
        try{
            const req = await this.instance.get(`/users/${name}/followers`)
            const datas = req.data
            return datas
        }
        catch(error){
            console.log(error)
        }
    }

    async getRepos(name){
        try{
            const req = await this.instance.get(`/users/${name}/repos`)
            return req.data
        }
        catch(error){
            console.log(error)
        }
    }




}





export default SDK;





