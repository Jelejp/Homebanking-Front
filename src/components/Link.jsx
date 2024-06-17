import { NavLink as LinkR } from "react-router-dom";

const Link = (props) => {
    return (
        //CREO ENLACES CON LA URL QUE SE LE PASA COMO PROPS
        <LinkR to = {props.route} 
        className={({ isActive, isPending, isTransitioning }) => {
            return `
            block pt-1  hover:text-[#8EFBEB]
            ${isActive ? 'underline text-[#8EFBEB]' : 'text-white'}
            ${isPending ? 'text-red-500' : ''}
            ${isTransitioning ? 'view-transition-slide' : ''}
            ${props.colour ? props.colour : ''} `;
        }}

        >
            {/* <span className="flex items-center"> */}
           {/* <img src={props.icon} alt={`${props.name} icon `} className="h-5 w-5 mr-2"/> */}
            {props.name}
            {/* </span> */}
        </LinkR>
    );
};

export default Link;