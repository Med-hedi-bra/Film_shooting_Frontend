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
    console.log(idUser)
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
}

export default Services;
