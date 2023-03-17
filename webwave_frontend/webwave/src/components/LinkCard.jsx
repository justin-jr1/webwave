const LinkCard = (props) => {
    
    let color = ''
    let textColor = '#fff'
    let icon = `fa-brands fa-${props.type.toLowerCase()}`

    switch (props.type) {
        case 'Facebook':
            color = '#4267B2';
            break;
        case 'Whatsapp':
            color = '#25D366'
            break;
        case 'Twitter':
            color = '#1DA1F2';
            break;
        case 'Instagram':
            color = '#E1306C'
            break;
        case 'Github':
            color = '#fff'
            textColor = '#121212'
            break;
        case 'Dribbble':
            color = '#C13584';
            break;
        case 'Website':
            color = '#262626'
            icon = `fa-solid fa-globe`
            break;
    
        default:
            break;
    }

    return ( 
        <div className="">
            <div className={`h-[150px] md:h-[200px] rounded-md flex justify-center items-center hover:scale-95 duration-200`} style={{backgroundColor: color, color: textColor}}>
                <i className={`${icon} text-2xl`}></i>
            </div>
            <h1 className="mt-2 text-[18px]">{props.type}</h1>
        </div>
     );
}
 
export default LinkCard;