import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import data from './data.js'
function App(){
  const entryElements = data.map((entry) => {
        return  (
         <Entry 
          img={entry.img}
          title={entry.title}
          country={entry.country}
          googleMapsLink = {entry.googleMapsLink}
          text = {entry.text}
         />  
        );
    })
  return(
    <>
    <Header />
    <main className = "container">
       {entryElements}
    </main>
    </>
  );
}
export default App