const pictures = [
  { id: 1, user: "ada123", alt: "Reggie the cat", src: "images/cat.jpeg", caption: "Check out my cute cat Reggie!" },
  { id: 2, user: "ada123", alt: "Robert the dog", src: "images/dog.jpeg", caption: "Check out my cute dog Robert!" },
  { id: 3, user: "ada123", alt: "Daffy the Duck", src: "images/duck.jpeg", caption: "Check out my cute duck Daffy!" },
];

const Header = () => <h1>My Pet Pics — {pictures.length} Posts</h1>;
// Produces the HTML: <h1>My Pet Pics — 3 Posts</h1>

const InstagramPost = ({ picture }) => {
  return (
    <figure>
      <img
        src={picture.src}
        alt={`${picture.alt} by ${picture.user}`}
      />
      <figcaption className="italic">{picture.caption} by {picture.user}</figcaption>
    </figure>
  );
};

const App = () => {
  // We can take the pictures variable out of the global scope and use props to share its data
  const pictures = [
    { id: 1, user: "ada123", alt: "Reggie the cat", src: "images/cat.jpg", caption: "Check out my cute cat Reggie!" },
    { id: 2, user: "ada123", alt: "Robert the dog", src: "images/dog.png", caption: "Check out my cute dog Robert!" },
    { id: 3, user: "ada123", alt: "Daffy the Duck", src: "images/duck.png", caption: "Check out my cute duck Daffy!" },
  ];

  return (
    <main>
      <Header />
      <ul>
        {pictures.map((picture) => <InstagramPost picture={picture} key={picture.id} />)}
      </ul>
    </main>
  );
};

export default App