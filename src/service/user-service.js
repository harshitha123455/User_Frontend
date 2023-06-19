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
      const response = await fetch(
        this.BASE_URL + "/show/search/movie/id/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
      const response = await fetch(
        this.BASE_URL + "/timeTable/search/show/id/" + id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getHighlight = async () => {
    try {
      const response = await fetch(this.BASE_URL + "/movie/highlight/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        const responseBody = await response.json();
        return responseBody;
      }
    } catch (error) {
      console.log(error);
    }
  };

  bookTickets = async (formData) => {
    try {
      console.log(formData);
      const response = await fetch(this.BASE_URL + "/booking/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: formData.totalAmount,
          shows: formData.show,
          pos: formData.selectedSeats,
          user: {
            name: formData.name,
            email: formData.email,
            contactNumber: formData.phone,
          },
        }),
      });
      console.log(response);
      if (response.ok) {
        return [true, await response.json()];
      } else {
        console.log(response);
        return [false, "Booking failed"];
      }
    } catch (error) {
      console.log(error);
      return [false, error];
    }
  };

   getReservedSeats = async (showId) => {
    try {
      const response = await fetch(
        `http://localhost:8880/show/reserved/id/${showId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const responseBody = await response.json();
        const pos = responseBody.pos; // Extracting pos from the response
        return pos;
      } else {
        console.log("Error in getting reserved seats");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
}
