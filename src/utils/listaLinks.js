import icons_account from '../assets/icons_account.png';
import icon_card from '../assets/icon_card.png';
import icon_loans from '../assets/icon_loans.png';
import icon_transfer from '../assets/icon_transfer.png';
import icons_logout from '../assets/icons-logout.png';

export const links = [
    
        {name: 'Accounts' , route: "/", icon: icons_account},
        {name: 'Cards', route: "/cards", icon: icon_card},
        {name: 'Loans', route: "/loans", icon: icon_loans},
        {name: 'Transactions', route: "/transactions", icon: icon_transfer},
        {name: 'Close Session', route: " ", icon: icons_logout, colour:'text-red-600'},
]