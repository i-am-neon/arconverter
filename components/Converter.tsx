import CurrencyInput from "./CurrencyInput";
import Arweave from 'arweave';
import { useState } from "react";

const arToWinstons = (arweave: Arweave, ar: number): number => {
    return +arweave.ar.arToWinston(ar.toString());
}

const winstonsToAr = (arweave: Arweave, winstons: number): number => {
    return +arweave.ar.winstonToAr(winstons.toString());
}

export default function Converter() {
    const [arweave, setArweave] = useState(Arweave.init({}));
    const [ar, setAr] = useState(1);
    const [winstons, setWinstons] = useState(arToWinstons(arweave, 1));
    

    const updateFromAr = (newArValue: number): void => {
        setAr(newArValue);
        setWinstons(arToWinstons(arweave, newArValue));
    }

    const updateFromLamports = (newLamportValue: number): void => {
        setAr(winstonsToAr(arweave, newLamportValue));
        setWinstons(newLamportValue);
    }

    return (
        <div className="flex place-content-center my-12">
            <CurrencyInput
                label='Ar'
                value={ar}
                updateFn={updateFromAr}
                isAtomicUnit={false}
            />
            <span className="mt-8">
                =
            </span>
            <CurrencyInput
                label='Winston'
                value={winstons}
                updateFn={updateFromLamports}
                isAtomicUnit={true}
            />
        </div>
    )
}