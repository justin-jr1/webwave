import Bio from './components/Bio';
import CreateYourWebWave from './components/CreateYourWebWaveLinkButton';
import Forms from './components/Forms';
import LinksContainer from './components/LinksContainer';
import Logo from './components/Logo';
import TopBar from './components/TopBar';
import './index.css'

const App = () => {
    return ( 
        <div className="bg-black w-screen h-screen fixed overflow-y-scroll pb-10 text-white md:px-16 px-8 font-Poppins">
            <Logo/>
            {/* <TopBar/>
            <Bio />
            <LinksContainer/>
            <CreateYourWebWave/> */}
            <Forms/>
        </div>
     );
}
 
export default App;