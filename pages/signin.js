export default function Signin() {
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    const data = {
      first: event.target.first.value,
      last: event.target.last.value,
    };

    const JSONdata = JSON.stringify(data);

    // routes from folder api
    const endpoint = "/api/signin";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
    console.log(`Response from backend : `, result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">First name:</label>
          <input type="text" id="first" name="first" />
        </div>
        <div>
          <label htmlFor="last">Last name:</label>
          <input type="text" id="last" name="last" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
