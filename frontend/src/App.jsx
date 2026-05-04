import './App.css'

const Header = (props) => {
  return <h1>My pets pics - {props.imageLength} Posts</h1>
};

// instead of passing the props object you can also destructure it
const InstagramPost = (props) => {
  return (
    <figure>
      <img src={props.picture.src} alt={props.picture.alt} />
      <figcaption className='italic'>Check out my kittie!</figcaption>
    </figure>
  )
};

/*
you can use js code within {...} 
you also need a key prop to not get an error on the browser
  key={index} or key={id}

have variables within the app to prevent global variables
*/
const App = () => {
  // <> </> fragment
  // react has to return only element
  const pictures = [
  { id: 1, user: "ada123", alt: "Reggie the cat", src: "images/cat.jpg", caption: "Check out my cute cat Reggie!" },
  { id: 2, user: "ada123", alt: "Robert the dog", src: "images/dog.png", caption: "Check out my cute dog Robert!" },
  { id: 3, user: "ada123", alt: "Daffy the Duck", src: "images/duck.png", caption: "Check out my cute duck Daffy!" },
];

  return (
    <main>
      <Header imageLength={pictures.length}/>
      {
        pictures.map((picture, index) => {
          return <InstagramPost picture={picture} key={index}/>
        })
      }
    </main>
  )
};

export default App
