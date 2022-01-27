import React from 'react';
import Header from "../src/components/Header";
import Drop from './components/Drop';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';


function App() {
    return (<div>
<Header />
<Firstpage />
<Secondpage />
        <Thirdpage />
        <Drop />        
    </div>  );
}

export default App;
