const Template01 = () => {
    return (
        /* No declare la cantidad de filas porq no las limita */
        <div className="grid h-screen">
            {/* esta vale 1 fila */}
            <div className="row-span-2 bg-gray-300"></div>
            {/* esta vale 1 fila */}
            <div className="row-span-1 bg-gray-400"></div>
            {/* esta vale 6 filas (creo q es el maximo) */}
            <div className="row-span-6 bg-gray-600">
                {/* a su vez lo podemos dividir en mas filas o en columnas: lo dividi en 5 cols */}
                <div className="grid grid-cols-5 h-full"> {/* si ponemos contenido aca, te tira lo demas para abajo */}
                    {/* a cada uno de estos lo podemos declarar como flex para ordenarlo */}
                    <div className="col-span-1 border border-red-500 flex items-center justify-center">1</div>
                    <div className="col-span-3 border border-logo">2-3-4</div>
                    <div className="col-span-1 border border-red-700">5</div>
                </div>
            </div>
            {/* esta vale 6 filas (si se elimina este, todos los demas ajustan tamaño y se vuelven mas grandes)*/}
            <div className="row-span-6 bg-gray-500"></div>
            {/* esta vale 1 fila */}
            <div className="row-span-2 bg-gray-800"></div>
            {/* Se pueden seguir agregando la cantidad de filas que uno quiera y se van ajustando el tamaño de todas automaticamente por la propiedad h-scren en el principal*/}

        </div>
    )
}

export default Template01