import BankLogo from "../BankLogos/BankLogo";
import React, { useState } from "react";
import { VerticalSpacer } from "@cred/neopop-web/lib/components";

export default function BankCard (props) {
    
    const banks = ["Chase Bank","Bank of America","Wells Fargo","Citi Bank","Silican Valley Bank","Capital One"];
    const [bankSelected, setBankSelected] = useState();

    const handleBankSelection = (e) => {
        setBankSelected(e.target.alt);
        props.setBankSelected(e.target.alt);
    }

    const styleLooped = (bank) => {
        console.log(bank);
        console.log(props.unInsured);
        return bank === bankSelected ? props.unInsured ? {border:'2.5px solid #EE4D37', cursor: `pointer`} :
        {border:'2.5px solid #06C270', cursor: `pointer`}
        : {border:'2.5px solid black', cursor: `pointer`}
    }
    return (
        <>
         {banks.map((bank, i) => (
            <React.Fragment key={i}>
                <div style={styleLooped(bank)} onClick={handleBankSelection}>
                    <BankLogo bankName={bank} />
                </div>
                <VerticalSpacer n={2} />
            </React.Fragment>

        ))}
        </>
    );
}