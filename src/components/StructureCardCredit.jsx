import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StructureCardCredit = () => {
    const cardsInfo = [
        { color: 'bg-black', title: 'Silver' },
        { color: 'bg-gray-500', title: 'Titanium' },
        { color: 'bg-yellow-300', title: 'Gold' }
    ];

    const [flipped, setFlipped] = useState(false);
    const [data, setData] = useState({});

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    async function getData() {
        try {
            let response = await axios.get('http://localhost:8080/api/clients/1')
            setData(response.data.cards[0]);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {cardsInfo.map((card, index) => (
                <div
                    key={index}
                    className="bg-transparent w-60 h-38 perspective-1000 text-white"
                    onClick={handleFlip}
                >
                    <div className={`relative w-full h-full text-center transition-transform duration-700 transform-style-preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
                        {/* Front Side */}
                        <div className={`absolute flex flex-col justify-center w-full h-full shadow-lg rounded-lg backface-hidden ${card.color}`}>
                            <p className="absolute tracking-wide text-xs top-4 right-4">MASTERCARD</p>
                            <div className='absolute top-[37px] left-4'>
                                <img className="w-[30px]" src="src\assets\card-chip.png" alt="" />
                            </div>
                            <p className="absolute font-bold text-xg top-[74px] left-4">{data.number}</p>
                            <p className="absolute font-medium text-[9px] top-[100px] left-4">VALID THRU</p>
                            <p className="date_8264 absolute font-medium text-[9px] top-[115px] left-4">{data.fromDate}</p>
                            <p className="absolute font-bold text-[10px] top-[132px] left-4">{data.cardholder}</p>
                            <div className='absolute bottom-[9px] right-4'>
                                <img className="w-[40px]" src="src\assets\Mastercard-Logo.png" alt="" />
                            </div>
                        </div>
                        {/* Back Side */}
                        <div className="absolute flex flex-col justify-center w-full h-full shadow-lg rounded-lg bg-black backface-hidden transform rotate-y-180">
                            <div className="absolute bg-gray-900 w-full h-10 top-5"></div>
                            <div className="absolute bg-white w-3/4 h-8 top-20 left-4 rounded-md"></div>
                            <div className="absolute bg-white w-1/3 h-8 top-20 right-4 rounded-md">
                                <p className="font-bold text-center m-1 text-black">{data.cvv}</p>
                            </div>
                        </div>
                    </div>
                    {
                        console.log(data)
                    }
                </div>
            ))}
        </>
    );
};

export default StructureCardCredit;