// Ajustar os titulos do documento
interface HeadProps{
    title:string
    // ? parametro opcional 
    description?:string
}
export  function Head({title,description=''}:HeadProps) {
document.title=`Food | ${title}`
document.querySelector("[name=description]")?.setAttribute('content',description)

return null
}
