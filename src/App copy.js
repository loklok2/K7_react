// import logo from './logo.svg'
import './App.css';
import MyClock from './02/MyClock';
import { FaHome } from "react-icons/fa";
import MyDiv from './03/MyDiv';
import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import Foodmain from './07/FoodMain';
import TrafficMain from './08/TrafficMain';
import TrafficNav from './08_1/TrafficNav';
import Traffic from './08_1/Traffic';
import MyRef from './09/MyRef';
import Gallary from './10/Gallary';
import Festival from './11/Festival';
// import RouteMain from './12/RouteMain';


function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex justify-between items-center text-xl font-bold h-20 p-10 bg-red-500">
        <p>리액트 실습</p>
        <p>K-digital</p>
        <p><FaHome className="text-3xl text-zinc-200"/></p>
      </header>
      <main className='grow flex justify-center items-center'>
        <MyClock/>
        <MyDiv/>
        <MyList/>
        <Lotto />
        <BoxOffice/>
        <Foodmain />
        <TrafficMain />
        <TrafficNav/>
        <Traffic/>
        <MyRef />
        <Gallary/>
        <Festival/>
        {/* <RouteMain/> */}
      </main>
      <footer className='flex justify-center items-center text-white bg-slate-800 h-20'>
        ⓒ 2024 loklok2. All rights reserved.
      </footer>
    </div>
  );
}

export default App;  //임포트 하면 무조건 익스포트 해야한다