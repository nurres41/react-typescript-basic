import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    // "never" tipi, bir ifadenin hiçbir zaman gerçekleşmeyeceğini ifade eder. 
    // Yani, belirli bir durumda fonksiyonun hiçbir zaman bir değer döndürmeyeceği 
    // veya bir değişkenin hiçbir zaman belirli bir türe sahip olmayacağı durumları ifade etmek için kullanılır.
    href?: never
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string
};

// props is AnchorProps typescript ozelligidir.
// boolean olarak return edilen degerin anchor propu olup olmadigini belirtir.
const isAnchorProps = (props: ButtonProps | AnchorProps) : props is AnchorProps => {
    return 'href' in props
}

const Button = (props: AnchorProps | ButtonProps) => {
    if(isAnchorProps(props)){
        return (
            <a {...props} className="button">
              
            </a>
          ) 
    }
  
  return (
    <button {...props} className="button">

    </button>
  )
}

export default Button
