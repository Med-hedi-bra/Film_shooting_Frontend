class Services {
  static url = process.env.REACT_APP_BACKEND_URL;
  constructor() {}

  static getAllDemands() {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/demand/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  }
  static getAllDemandsByUser(idUser) {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/demand/user/${idUser}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  }
  static getDemandById(id) {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/demand/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });
  }

  static deleteDemand(id) {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/demand/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "DELETE",
    });
  }

  static addDemand(demandBody) {
    let token = JSON.parse(localStorage.getItem("user")).token;
    const formDataObject = {};
    demandBody.forEach((value, key) => {
      formDataObject[key] = value;
    });
    const data = JSON.stringify(formDataObject);

    return fetch(this.url + "/demand/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: demandBody,
    });
  }

  static update(demandBody, id) {
    let token = JSON.parse(localStorage.getItem("user")).token;
    const data = JSON.stringify(demandBody);

    return fetch(this.url + `/demand/${id}`, {
      method: "PUT",
      body: demandBody,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static addPreDemand(demandBody) {
    let localStorageUser = JSON.parse(localStorage.getItem("user"));
    let token = localStorageUser.token;
    let idUser = localStorageUser.idUser;
    console.log(idUser);
    return fetch(this.url + `/preDemand/${idUser}`, {
      method: "POST",
      body: demandBody,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static getPreDemand(id) {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/preDemand/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static getOrCreateUserAndChat(email) {
    const data = {
      usernames: [email, "admin@admin.com"],
      is_direct_chat: true,
    };
    const data1 = { username: email, email: email, secret: email };
    const headers1 = {
      "Private-Key": process.env.REACT_APP_CHAT_PROJECT_KEY,
    };
    const headers = {
      "Project-ID": process.env.REACT_APP_CHAT_PROJECT_ID,
      "User-Name": email,
      "User-Secret": email,
    };
    

    fetch("https://api.chatengine.io/users/", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        ...headers1,
      },
      body: JSON.stringify(data1),
    });

    fetch("https://api.chatengine.io/chats/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...headers,
        ...headers1,
      },
      body: JSON.stringify(data),
    });

    // .then(r =>  true)
    // .catch(e => console.log('Get or create chat error', e))
  }

  
  static acceptDemand(id) {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/demand/accept/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  static rejectDemand(id) { 
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/demand/reject/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  static getUserById(id) {
    let token = JSON.parse(localStorage.getItem("user")).token;

    return fetch(this.url + `/auth/user/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  }

export default Services;
