addEventListener('DOMContentLoaded', ()=>{
    const boton_ir_arriba = document.querySelector('#Ir_arriba_boton')
    const barra_indicador = document.querySelector('.Indicador_scroll')

    const Pixeles = ()=> document.documentElement.scrollTop || document.body.scrollTop
    
    const irArriba = () => {
        if ( Pixeles() > 0){
            requestAnimationFrame(irArriba)
            scrollTo(0, Pixeles() - (Pixeles() / 20))
        }
    }

    const indicarScroll = () => {
        if (Pixeles() > 1000){
            boton_ir_arriba.className = 'Mostrar'
        }else{
            boton_ir_arriba.className = 'Ocultar'
        }
        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let avance_scroll = (Pixeles() / alto) * 100
        barra_indicador.style.width = `${avance_scroll}%`
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicarScroll)



    const dialog = document.querySelector('dialog')
    const cancel = document.querySelector('#cancel')
    const show = document.querySelector('#show')

    show.addEventListener('click', () => dialog.showModal())
    cancel.addEventListener('click', () => dialog.close())
});