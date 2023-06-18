export default class UserService {
  BASE_URL = "http://localhost:8880";

  //Get all movies
  getAllMovies = async () => {
    try {
      const response = await fetch(this.BASE_URL + "/movie/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getMoviebyId = async (id) => {
    try {
      const response = await fetch(this.BASE_URL + "/movie/search/id/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getAllShowsByMovieId = async (id) => {
    try {
      const response = await fetch(this.BASE_URL + "/show/search/movie/id/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getTimeTableByShowId = async (id) => {
    try {
      const response = await fetch(this.BASE_URL + "/timeTable/search/show/id/" + id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }
    } catch (error) {
      console.log(error);
    }
  }
}
