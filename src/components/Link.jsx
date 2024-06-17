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

            {props.name}
          
        </LinkR>
    );
};

export default Link;