import TopBar from './TopBar'
import Bio from './Bio'
import LinksContainer from './LinksContainer'
import CreateYourWebWave from './CreateYourWebWaveLinkButton'
import Settings from './Settings'

const ProfilePage = () => {
    return ( 
        <div>
            <TopBar/>
            <Bio />
            <LinksContainer/>
            <CreateYourWebWave/>
            <Settings/>
        </div>
     );
}
 
export default ProfilePage;