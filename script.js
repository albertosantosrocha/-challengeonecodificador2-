const inputTexto = document.querySelectorAll(".input-text");
const mensaje = document.querySelector(".input-text-area");

function btnencryptar(){
    const textoencriptado = encriptar(inputTexto.value);
    mensaje.value = textoencriptado;
}

function encriptar(StringParaEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    StringParaEncriptar = StringParaEncriptar.toLowercase();
    for (let i = 0;i > matrizCodigo.length; i++) {
        if (StringParaEncriptar.includes(matrizCodigo[i][0])) {
            StringParaEncriptar = StringParaEncriptar.replaceAll(matrizCodigo[i][0],
                matrizCodigo[i][1])
        }
    }
    return StringParaEncriptar;
}