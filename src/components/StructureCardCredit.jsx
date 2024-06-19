
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StructureCardCredit = () => {
    const [flipped, setFlipped] = useState({});
    const [data, setData] = useState([]);

    const handleFlip = (index) => {
        setFlipped(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    async function getData() {
        try {
            const token = localStorage.getItem('token');
            let response = await axios.get('https://homebanking-1ir2.onrender.com/api/auth/current', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setData(response.data.cards);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const getCardColor = (color) => {
        switch (color) {
            case 'SILVER':
                return 'bg-gray-300';
            case 'TITANIUM':
                return 'bg-gray-500';
            case 'GOLD':
                return 'bg-yellow-300';
            default:
                return 'bg-black';
        }
    };

    return (
        <>

            {
                data.length === 0 ? (
                    <div className='text-center text-white mt-4'>
                        <p>No cards found.</p>
                    </div>
                ) : (
                    data.map((card, index) => (
                        <div
                            key={index}
                            className="bg-transparent w-60 h-38 perspective-1000 text-white m-4"
                            onClick={() => handleFlip(index)}
                        >
                            <div className={`relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d ${flipped[index] ? 'rotate-y-180' : ''}`}>
                                {/* Front Side */}
                                <div className={`absolute flex flex-col justify-center w-full h-full shadow-lg rounded-lg backface-hidden ${getCardColor(card.color)}`}>
                                    <p className="absolute tracking-wide text-xs top-2 left-2">{card.type}</p>
                                    <p className="absolute tracking-wide text-xs top-4 right-4">MASTERCARD</p>
                                    <div className='absolute top-[37px] left-4'>
                                        <img className="w-[30px]" src="public\card-chip.png" alt="chip" />
                                    </div>
                                    <p className="absolute font-bold text-xg top-[74px] left-4">{card.number}</p>
                                    <p className="absolute font-medium text-[9px] top-[100px] left-4">VALID THRU</p>
                                    <p className="date_8264 absolute font-medium text-[9px] top-[115px] left-4">{card.thruDate}</p>
                                    <p className="absolute font-bold text-[10px] top-[132px] left-4">{card.cardholder}</p>
                                    <div className='absolute bottom-[9px] right-4'>
                                        <img className="w-[40px]" src="public\Mastercard-Logo.png" alt="logo" />
                                    </div>
                                </div>
                                {/* Back Side */}
                                <div className="absolute flex flex-col justify-center w-full h-full shadow-lg rounded-lg bg-black backface-hidden transform rotate-y-180">
                                    <div className="absolute bg-gray-900 w-full h-10 top-5"></div>
                                    <div className="absolute bg-white w-3/4 h-8 top-20 left-4 rounded-md"></div>
                                    <div className="absolute bg-white w-1/3 h-8 top-20 right-4 rounded-md">
                                        <p className="font-bold text-center m-1 text-black">{card.cvv}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                    )

                )}
        </>
    );
};

export default StructureCardCredit;