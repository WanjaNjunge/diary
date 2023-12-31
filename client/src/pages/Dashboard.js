import React from "react";
import { useAppState } from "../AppState";
import { Redirect, Route, Link } from "react-router-dom";
import Form from "../components/Form"
import Search from "../components/Search";

const Dashboard = (props) => {
  const { state, dispatch } = useAppState();
  const { token, url, notes, username } = state;

  const getNotes = async () => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth || !auth.token) {
      // Redirect or handle unauthorized access here
      // For example, you can redirect the user to the login page:
      return <Redirect to="/auth/login" />;
    }

    const response = await fetch(url + "/notes/", {
      method: "get",
      headers: {
        Authorization: "Bearer " + auth.token,
      },
    });

    if (response.status === 401) {
      // Handle unauthorized access here
      // For example, you can display an error message:
      console.log("Unauthorized access");
      return;
    }

    const fetchedNotes = await response.json();
    dispatch({ type: "getNotes", payload: fetchedNotes });
  };

  React.useEffect(() => {
    getNotes();
  }, []);

  const [searchQuery, setSearchQuery] = React.useState("");

  const loaded = () => {
    const filteredNotes = state.notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="dashboard">
        <h1>{username}'s Notes</h1>
        <Link to="/dashboard/new" className="new-note-link">
          <button className="btn btn-secondary">New Note</button>
        </Link>
        <Route
          path="/dashboard/:action"
          render={(rp) => <Form {...rp} getNotes={getNotes} />}
        />
        <Search className="search-bar" // Render the Search component
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ul>
        {filteredNotes.map((note) => (
            <div className="note" key={note.id}>
              <h2>{note.title}</h2>
              <h4>{note.body}</h4>
              <button className="btn btn-secondary edit-button"
                onClick={() => {
                  dispatch({ type: "select", payload: note });
                  props.history.push("/dashboard/edit");
                }}
              >
                Edit
              </button>
              <button className="btn btn-secondary delete-button"
                onClick={() => {
                  fetch(url + "/notes/" + note.id, {
                    method: "delete",
                    headers: {
                      Authorization: "bearer " + token,
                    },
                  }).then(() => getNotes());
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  };

  return notes ? loaded() : <h1>Loading...</h1>;
};

export default Dashboard;
