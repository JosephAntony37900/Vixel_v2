import React from 'react';
import ButtonWhitFunction from "@/components/Atoms/ButtonWhitFunction/ButtonWhitFunction";
import ImageUpload from '@/components/Atoms/ImageUpload/ImageUplodad';
import './AddStreamForm.css';
import { useNavigate } from "react-router-dom";
import { useSailsCalls } from '@/app/hooks';
import { useAccount, useAlert } from '@gear-js/react-hooks';
import { Codec, CodecClass, Signer } from '@polkadot/types/types';
import { HexString } from '@gear-js/api';
import { web3FromSource } from '@polkadot/extension-dapp';
import { Button } from '@gear-js/vara-ui';

export default function AddStreamForm (){
    const { account } = useAccount();
    const sails = useSailsCalls();
    const alert = useAlert();
    const navigate = useNavigate();

    const getUserSigner = (): Promise<[HexString, Signer]> => {
        return new Promise(async (resolve, reject) => {
            if (!account) {
                alert.error("Accounts not ready!");
                reject('Account not ready!');
                return;
            }

            const { signer } = await web3FromSource(account.meta.source);
            const temp = (signer as string | CodecClass<Codec, any[]>) as Signer;
            resolve([account.decodedAddress, temp]);
        });
    };

    return(
        <main className="add-streams-form-body">
            <div className="add-streams-from-camps">
                <h1>Titulo</h1>
                <input type="text" id="get-name-stream" placeholder="Titulo de tu stream"/>
            </div>
            <div className="add-streams-from-camps">
                <h1>Descripción</h1>
                <textarea id="get-participants-stream" placeholder="Descripción de lo que trata el stream"/>
            </div>
            <div className="add-streams-from-camps">
                <h1>Juego</h1>
                <select id="get-game-stream">
                    <option>Juego 1</option>
                    <option>Juego 2</option>
                    <option>Juego 3</option>
                </select>
            </div>
            <div className="add-streams-from-camps">
                <h1>Fecha de fin</h1>
                <input type="date" id="get-date-stream"/>
            </div>
            <div className="add-streams-from-camps">
                <h1>Imagen de portada para el Stream</h1>
                <ImageUpload /> {/* Incluimos el componente de subida de imagen */}
            </div>
            
            <Button onClick={async () => {
                navigate("/streams");
            }}>
                Crear
            </Button>
        </main>
    )
}
