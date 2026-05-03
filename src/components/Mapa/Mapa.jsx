
import React from 'react';
import useCont from '../../hooks/useCont';

// Función para eliminar el atributo sandbox de cualquier iframe
function cleanIframeSandbox(html) {
    if (!html) return '';
    // Elimina cualquier atributo sandbox del iframe
    return html.replace(/\s?sandbox(=["'][^"']*["'])?/gi, '');
}

const Mapa = () => {
    const { contact } = useCont();
    const cleanedIframe = cleanIframeSandbox(contact.map_iframe);

    // Si el usuario pegó un iframe, renderizarlo limpiamente
    if (cleanedIframe && cleanedIframe.includes('<iframe')) {
        return (
            <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: cleanedIframe }} />
        );
    }

    // Si no hay iframe, mostrar un fallback
    return (
        <div className="w-full h-full flex items-center justify-center text-slate-400">
            No se ha configurado el mapa.
        </div>
    );
};

export default Mapa;
