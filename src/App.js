import React from "react";

const text =
  "Virat Kohli was born on 5 November 1988 in Delhi into a Punjabi Hindu family.14 His father, Prem Kohli, worked as a criminal lawyer and his mother, Saroj Kohli, is a housewife.15 He has an older brother, Vikas, and an older sister, Bhavna.16 According to his family, when he was three-years old, Kohli would pick up a cricket bat, start swinging it and ask his father to bowl at him.Kohli was raised in Uttam Nagar18 and started his schooling at Vishal Bharti Public School. In 1998, the West Delhi Cricket Academy was created and a nine-year-old Kohli was part of its first intake.18 Kohlis father took him to the academy after their neighbours suggested that Virat shouldnt waste his time in gully cricket and instead join a professional club. Kohli trained at the academy under Rajkumar Sharma and also played matches at the Sumeet Dogra Academy at Vasundhara Enclave at the same time.18 Sharma recounts Kohlis early days at his academy, He oozed talent. It was so difficult to keep him quiet. He was a natural in whatever he did and I was most impressed with his attitude. He was ready to bat at any spot, and I had to literally push him home after the training sessions. He just wouldn’t leave.19 In ninth grade, he shifted to Saviour Convent in Paschim Vihar to help his cricket practice.15 Apart from sports, Kohli was good at academics as well, and his teachers remember him as a bright and alert child.20 Kohlis family lived in Meera Bagh until 2015 when they moved to Gurgaon.21Kohlis father died on 18 December 2006 due to a stroke after being bed-ridden for a month.15 Regarding his early life, Kohli has said in an interview, Ive seen a lot in life. Losing my father at a young age, the family business not doing too well, staying in a rented place. There were tough times for the family... Its all embedded in my memory.22 According to Kohli, his father supported his cricket training during his childhood,My father was my biggest support. He was the one who drove me to practice every day. I miss his presence sometimes.";

function App() {
  const [searchText, setSearchText] = React.useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchText !== "") {
      let newText = text
        .toLowerCase()
        .replaceAll(searchText, `<mark style="color:white;background-color:#17a2b8">${searchText}</mark>`);
      document.getElementById("text").innerHTML = newText;
    } else {
      document.getElementById("text").innerHTML = text.toLowerCase();
    }
  };
  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center", margin: "2rem" }}>Search Text</h3>
      <div style={{ border: "1px solid #000000", margin: "2rem 15rem" }}>
        <div className="input-group" style={{ width: "50rem", margin: "3rem 5rem" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            name="searchText"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-info" onClick={onSubmit}>
              Search
            </button>
          </div>
        </div>
        <div id="text" style={{ textAlign: "justify", margin: "0 5rem 3rem" }}>
          {text.toLowerCase()}
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
