import React, { Component} from 'react';
import Localizador from './localizador/localizador';
import serviceApi from '../../services/serviceApi';

const location ="Valencia, es";

class LocalizadorTiempo extends Component
{
        componentDidMount() {
            let data= serviceApi.getData()
        }

    render() {

        return (
            <div><p>Componente localizador Tiempo</p>
            <Localizador ciudad={location} />
            </div>

        )
    }
}

export default LocalizadorTiempo;
