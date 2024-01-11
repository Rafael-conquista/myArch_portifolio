import curriculo from '../images/curriculo.pdf';

function DownloadCurriculo(){
    const link = document.createElement('a');
    link.href = curriculo;
    link.setAttribute('download', ''); // Isso força o download ao invés de abrir o arquivo no navegador
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default DownloadCurriculo;