import LinkCard from "./LinkCard";

const LinksContainer = () => {
    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 py-8">
            <LinkCard type='Facebook'/>
            <LinkCard type='Instagram'/>
            <LinkCard type='Twitter'/>
            <LinkCard type='Whatsapp'/>
            <LinkCard type='Website'/>
            <LinkCard type='Github'/>
            <LinkCard type='Dribbble'/>
            
        </div>
    );
}
 
export default LinksContainer;