import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "David",
    last: "McQueen",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "sophocles99",
    notes: "Some notes",
    favourite: true,
  };

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favourite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          ></Form>
        </div>
      </div>
    </div>
  );
}

function Favourite({ contact }) {
  let favourite = contact.favourite;
  return (
    <Form method="post">
      <button
        name="favourite"
        value={favourite ? "false" : "true"}
        aria-label={favourite ? "Remove from favourites" : "Add to favourites"}
      >
        {favourite ? "★" : "☆"}
      </button>
    </Form>
  );
}
