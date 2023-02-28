import './App.css';

const content = "Cybersquare professional";
const obj ={"title":"Cybersquare", "name":"baabtra"};
const courses = {"course1":"python", "course2":"angular", "course3":"react"}

function App(){
 return(
   <div>
     <h1>{content}</h1>
     <p>{obj.title} courses provided by {obj.name}</p>
     <h3>{courses.course1}</h3>
     <h3>{courses.course2}</h3>
     <h3>{courses.course3}</h3>
   </div>
 );
}


export default App;
