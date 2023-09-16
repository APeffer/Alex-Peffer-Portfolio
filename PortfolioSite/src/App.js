import Navbar from './navbar';
import { Outlet } from 'react-router-dom';



export default function App({page}) {

  console.log(page);
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>

        </main>
      </div>
    );
}