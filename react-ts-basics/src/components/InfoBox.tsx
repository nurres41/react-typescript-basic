import { ReactNode } from "react";

type HintPropsType = {
    mode: 'hint';
    children: ReactNode;
};

type WarningPropsType = {
    mode: 'warning';
    severity: 'low' | 'medium' | 'high';
    children: ReactNode;
};

type InfoBoxPropsType = HintPropsType | WarningPropsType;

// Farkli type turleri oldugu icin props kullanilmali
const InfoBox = (props: InfoBoxPropsType) => {
    
    const {children, mode} = props;

    if(mode === 'hint' ){
        return(
           <aside className="infobox infobox-hint">
                <p>
                    {children}
                </p>
          </aside>
        )
    }
    
    //If I define top of the component I will get an error. Because of maybe not exist. But here have to exist.     
    const {severity} = props;

  return (
      <aside className={`infobox infobox-warning warning--${severity}`}>
          <h2>Warning</h2>
          <p>
              {children}
          </p>
        </aside>
  )
}

export default InfoBox
