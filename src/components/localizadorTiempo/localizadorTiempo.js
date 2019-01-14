import React, { Component} from 'react';
import Localizador from './localizador/localizador';

const location ="Valencia";
class LocalizadorTiempo extends Component{


    render() {

        return (
            <div><p>Componente localizador Tiempo</p>
            <Localizador ciudad={location} />
            </div>

        )
    }
}

export default LocalizadorTiempo;
