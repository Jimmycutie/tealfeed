import './codearea.css'
import Prism from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import { useEffect } from 'react';

export interface Props {
    language: string,
    code: string
};
const Syntaxhighlighter = (props: Props) => {
    
    // Effect hook to change highlights 
    // according to language selected
    useEffect(()=>{
        Prism.highlightAll();
        }, [props.language, props.code]);

    return (
        <pre>
            <code className={`language-${props.language}`}>{props.code}</code>
        </pre>
    )
}

export default Syntaxhighlighter;