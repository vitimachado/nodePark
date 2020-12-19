
import axios from 'axios'

class Client {

  constructor() {
  }    

  get = (url: string): any => axios.get(url)
    
  getData = async (url: string) => {

    return await axios.get(url).then(({data}) => {
        if (data) {
          return data
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
  }
}

export default Client

