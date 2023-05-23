


export default function BankLogo (props) {
    const othersProps = {
        width : 120,
        height : 40,
        alt : props.bankName
    };
    console.log(props.bankName);
    return(
        <>
        { props.bankName === "Chase Bank" &&
            <img src={require('../BankLogos/chasebanklogooo.svg').default} {...othersProps} />
        }
        { props.bankName === "Bank of America" &&
            <img src={require('../BankLogos/bankofamericalogooo.svg').default} {...othersProps} />
        }
        { props.bankName === "Wells Fargo" &&
            <img src={require('../BankLogos/wellsfargologooo.svg').default} {...othersProps}  />
        }
        { props.bankName === "Citi Bank" &&
            <img src={require('../BankLogos/citilogooo.svg').default} {...othersProps}  />
        }
        { props.bankName === "Silican Valley Bank" &&
            <img src={require('../BankLogos/svblogooo.svg').default} {...othersProps}  />
        }
        { props.bankName === "Capital One" &&
            <img src={require('../BankLogos/capitalonelogooo.svg').default} {...othersProps}  />
        }
        </>
    );
}