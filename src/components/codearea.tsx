import { useState } from "react"
import './codearea.css'

import "prismjs/themes/prism-tomorrow.css"
import Syntaxhighlighter from "./syntaxhighlighter"

const Codearea = () => {

    //Important states
    const[code, setCode] = useState<string>("");
    const[language, setLanguage] = useState<string>("");
    
  return (
    <>
      <div className="form-container">
        <label htmlFor="languages">Choose a language:</label>
        <select 
          id="languages" 
          name="languages" 
          onChange={e=>setLanguage(e.target.value)} 
          value={language}
          className="languages"
        >
          <option>--Select--</option>
          <option value="javascript">JavaScript</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="cpp">C++</option>
        </select>
      </div>

      <div className="code-container">

        {/* Display only if language selected */}
        {language!=""?
          <>
            <textarea 
              className="code-area"
              value={code}
              onChange={(e)=>setCode(e.target.value)}
              placeholder="Enter code here..."
            />
            <Syntaxhighlighter language={language} code={code}/>
          </>  
          : <></>
        }
      </div>  
    </>
  );
}

export default Codearea;