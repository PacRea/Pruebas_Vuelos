import { useEffect, useState } from "react";
import "../componentsStyles.css";

function InsertVuelos(){
    const API_URL = "http://mibackend.local/vuelos/";
    


    const addVuelo = async () =>{
        const res = await fetch(API_URL + "insertar_vuelos.php",{
            method: "POST",
            header: {"Content-Type" : "application/json"},
            body: JSON.stringify({}),
        });
    };
}
export default InsertVuelos;