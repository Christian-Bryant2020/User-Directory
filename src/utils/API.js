import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    fetchUsers: function() {
      return axios
        .get("https://randomuser.me/api/?inc=name,email,phone,id,picture&nat=us&results=50")
      
    }
  };